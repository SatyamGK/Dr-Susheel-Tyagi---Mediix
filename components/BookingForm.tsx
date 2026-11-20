"use client";
import { useState } from "react";
import { site } from "@/content/site";
import { locations } from "@/content/media";
import Icon from "./Icon";
import Image from "next/image";
type Errs = Record<string, string>;
function Field({ id, label, icon, error, children }: { id: string; label: string; icon: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="fld">
      <label htmlFor={id}>{label}</label>
      <div className={`inp ${error ? "bad" : ""}`}><Icon name={icon} size={18} />{children}</div>
      {error && <span className="err" role="alert">{error}</span>}
    </div>
  );
}
export default function BookingForm({ onClose }: { onClose?: () => void }) {
  const [errs, setErrs] = useState<Errs>({});
  const [done, setDone] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const today = new Date().toLocaleDateString("en-CA"); // local YYYY-MM-DD (not UTC)
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const er: Errs = {};
    if ((d.name || "").trim().length < 2) er.name = "Enter the patient's full name.";
    if (!/^[0-9+\s-]{10,15}$/.test(d.phone || "")) er.phone = "Enter a valid phone number.";
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) er.email = "Enter a valid email address.";
    if (!d.date) er.date = "Choose a preferred date.";
    if (!d.consent) er.consent = "Please agree so we can contact you.";
    setErrs(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    try {
      const r = await fetch("/api/appointments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) {
        const result = await r.json().catch(() => ({}));
        if (r.status === 429) setErrs({ form: "limited" });
        else if (result.error === "storage_not_configured" || result.error === "protection_unavailable") setErrs({ form: "setup" });
        else setErrs({ form: "failed" });
        return;
      }
      setDone(d.phone);
    } catch { setErrs({ form: "failed" }); }
    finally { setBusy(false); }
  }
  return (
    <div className="bk">
      <aside className="bk-side">
        <span className="bub b1" /><span className="bub b2" /><span className="bub b3" />
        <div style={{ width: 156, maxWidth: "100%", marginBottom: 16 }}>
          <Image
            src="/susheel-tyagi-logo.png"
            alt="ST Susheel Tyagi"
            width={156}
            height={104}
            style={{ display: "block", width: "100%", height: "auto", objectFit: "contain" }}
            priority
          />
        </div>
        <h2>Book your visit</h2>
        <p>Tell us a little about you and we will arrange your appointment with {site.name}.</p>
        <ul>
          <li><Icon name="clock" size={18} /> Takes about a minute</li>
          <li><Icon name="phone" size={18} /> The clinic confirms by phone</li>
          <li><Icon name="shield" size={18} /> Your details stay private</li>
        </ul>
        <svg className="trace" viewBox="0 0 300 60" aria-hidden="true"><path d="M0 35 Q20 5 40 30 T80 30 T120 12 T160 38 T200 22 T240 34 T300 18" /></svg>
        <div className="bk-contact"><small>{locations[0].name}: {locations[0].phone}</small><small>{locations[0].timing}</small>
          <div className="bk-quick-actions"><a className="btn ghost dark" href={`tel:${site.phone}`}><Icon name="phone" size={16}/> Call clinic</a><a className="btn ghost dark" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I would like to enquire about an appointment with Dr. Susheel Tyagi.")}`} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={16}/> WhatsApp</a></div>
        </div>
      </aside>
      <div className="bk-main">
        {done ? (
          <div className="done">
            <svg className="tick" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" /><path d="M14 27l8 8 16-17" /></svg>
            <h2>Your appointment request is submitted</h2>
            <p>Thank you. The clinic will contact you on <b>{done}</b> to confirm your appointment.</p>
            <div className="row" style={{ justifyContent: "center" }}>
              {onClose && <button className="btn" onClick={onClose}>Close</button>}
              <button className="btn ghost dark" onClick={() => setDone(null)}>Book for someone else</button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="bf">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
            <h1 className="bk-title"><span className="eyebrow">Patient details</span>Request an appointment</h1>
            <div className="two">
              <Field id="name" label="Full Name *" icon="user" error={errs.name}><input id="name" name="name" autoComplete="name" placeholder="Patient Name" /></Field>
              <Field id="phone" label="Phone *" icon="phone" error={errs.phone}><input id="phone" name="phone" inputMode="tel" autoComplete="tel" placeholder="Phone Number" /></Field>
            </div>
            {/* <div className="two">
              <Field id="age" label="Age" icon="user"><input id="age" name="age" inputMode="numeric" placeholder="Years" /></Field>
              <Field id="email" label="Email (optional)" icon="mail" error={errs.email}><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" /></Field>
            </div>
            <Field id="service" label="Reason for visit" icon="stethoscope">
             <select id="service" name="service">{site.conditions.map(c => <option key={c.t}>{c.t}</option>)}<option>Other / not sure</option></select>
            </Field>
            <Field id="location" label="Preferred location" icon="pin">
              <select id="location" name="location">{locations.map(l => <option key={l.id}>{l.name}</option>)}</select>
            </Field> */}
            <div className="two">
              <Field id="date" label="Preferred date *" icon="calendar" error={errs.date}><input id="date" name="date" type="date" min={today} suppressHydrationWarning /></Field>
              <div className="fld"><label>Preferred time</label>
                <div className="chips2" role="radiogroup" aria-label="Preferred time">
                  {site.slots.map((s, i) => <label key={s} className="chip2"><input type="radio" name="time" value={s} defaultChecked={i === 0} /><span>{s}</span></label>)}
                </div>
              </div>
            </div>
            <Field id="notes" label="Anything we should know? (optional)" icon="book"><textarea id="notes" name="notes" rows={2} placeholder="Symptoms, current medicines, questions..." /></Field>
            <label className="chk"><input type="checkbox" name="consent" value="yes" /> I agree to be contacted about this appointment request.
              {errs.consent && <span className="err" role="alert"> {errs.consent}</span>}</label>
            {errs.form && <p className="err" role="alert">
              {errs.form === "limited"
                ? "Too many booking attempts. Please wait before trying again."
                : errs.form === "setup"
                  ? "Online booking is temporarily unavailable. Please call the clinic."
                  : "We could not save your request right now. Please call the clinic."}
              {" "}Call <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> or message us on WhatsApp.
            </p>}
            <button className="btn submit" type="submit" disabled={busy}>{busy ? "Sending..." : <>Request appointment <Icon name="send" size={18} /></>}</button>
          </form>
        )}
      </div>
    </div>
  );
}
