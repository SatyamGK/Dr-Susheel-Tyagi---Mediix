import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = Record<string, unknown>;

const clean = (value: unknown, max: number) =>
  typeof value === "string"
    ? value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max)
    : "";

const validEmail = (value: string) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function hash(value: string, salt: string) {
  return createHash("sha256").update(`${salt}:${value}`).digest("hex");
}

async function supabaseRequest(path: string, init: RequestInit = {}) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("supabase_not_configured");

  return fetch(`${url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
}

async function consumeLimit(keyHash: string, limit: number, windowSeconds: number) {
  const response = await supabaseRequest("rpc/consume_rate_limit", {
    method: "POST",
    body: JSON.stringify({
      p_key_hash: keyHash,
      p_limit: limit,
      p_window_seconds: windowSeconds,
    }),
  });

  if (!response.ok) {
    // Fail closed: do not accept new bookings if abuse protection is unavailable.
    console.error("Rate-limit service failed:", response.status);
    throw new Error("rate_limit_unavailable");
  }

  return (await response.json()) === true;
}

export async function POST(req: Request) {
  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > 10_000) {
    return NextResponse.json({ ok: false, error: "request_too_large" }, { status: 413 });
  }

  let raw: Body;
  try {
    raw = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Hidden honeypot. Quietly accept bot submissions without storing them.
  if (clean(raw.website, 100)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(raw.name, 120),
    phone: clean(raw.phone, 20),
    email: clean(raw.email, 254).toLowerCase(),
    age: clean(raw.age, 3),
    date: clean(raw.date, 10),
    time: clean(raw.time, 40),
    service: clean(raw.service, 160),
    location: clean(raw.location, 160),
    notes: clean(raw.notes, 1000),
  };

  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(data.date)
    && !Number.isNaN(Date.parse(`${data.date}T00:00:00`));

  if (
    data.name.length < 2 ||
    !/^[0-9+\s()-]{10,18}$/.test(data.phone) ||
    !validEmail(data.email) ||
    !validDate ||
    raw.consent !== "yes"
  ) {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error("Appointment storage is not configured.");
    return NextResponse.json({ ok: false, error: "storage_not_configured" }, { status: 503 });
  }

  // Vercel supplies x-vercel-forwarded-for. Never trust a client-provided body IP.
  const forwarded = req.headers.get("x-vercel-forwarded-for") || req.headers.get("x-forwarded-for") || "";
  const ip = forwarded.split(",")[0].trim() || "unknown";
  const salt = process.env.RATE_LIMIT_SALT || serviceKey;
  const ipKey = hash(`appointment:ip:${ip}`, salt);
  const phoneKey = hash(`appointment:phone:${data.phone.replace(/\D/g, "")}`, salt);

  try {
    // Per IP: max 5 requests / 10 minutes.
    if (!(await consumeLimit(ipKey, 5, 10 * 60))) {
      return NextResponse.json(
        { ok: false, error: "too_many_requests", message: "Too many booking attempts. Please try again later." },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    }

    // Per phone number: max 3 requests / 1 hour.
    if (!(await consumeLimit(phoneKey, 3, 60 * 60))) {
      return NextResponse.json(
        { ok: false, error: "too_many_requests", message: "This phone number has reached the booking request limit. Please try again later." },
        { status: 429, headers: { "Retry-After": "3600" } },
      );
    }

    const insert = await supabaseRequest("appointment_requests", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        age: data.age || null,
        preferred_date: data.date,
        preferred_time: data.time || null,
        service: data.service || null,
        preferred_location: data.location || null,
        notes: data.notes || null,
        status: "new",
      }),
    });

    if (!insert.ok) {
      const detail = await insert.text();
      console.error("Could not save appointment in Supabase:", insert.status, detail.slice(0, 500));
      return NextResponse.json({ ok: false, error: "database_error" }, { status: 502 });
    }

    // Optional notifications run only after the database has safely stored the request.
    // Notification failure must not tell the patient that their saved booking was lost.
    const summary = [
      "New appointment request",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "-"}`,
      `Preferred date: ${data.date}`,
      `Preferred time: ${data.time || "-"}`,
      `Reason: ${data.service || "-"}`,
      `Preferred location: ${data.location || "-"}`,
      `Notes: ${data.notes || "-"}`,
    ].join("\n");

    const notificationJobs: Promise<Response>[] = [];
    const resendKey = process.env.RESEND_API_KEY;
    const recipient = process.env.APPOINTMENT_TO_EMAIL;

    if (resendKey && recipient) {
      notificationJobs.push(fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.APPOINTMENT_FROM_EMAIL || "Website <onboarding@resend.dev>",
          to: recipient.split(",").map((item) => item.trim()),
          subject: `Appointment request: ${data.name}`,
          text: summary,
        }),
      }));
    }

    if (process.env.APPOINTMENT_WEBHOOK_URL) {
      notificationJobs.push(fetch(process.env.APPOINTMENT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
      }));
    }

    if (notificationJobs.length) {
      const results = await Promise.allSettled(notificationJobs);
      if (results.some((result) => result.status === "rejected" || !result.value.ok)) {
        console.error("Appointment saved, but one or more optional notifications failed.");
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "rate_limit_unavailable") {
      return NextResponse.json({ ok: false, error: "protection_unavailable" }, { status: 503 });
    }
    console.error("Appointment request failed:", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
