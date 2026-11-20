import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const pages = [
  "",
  "/about",
  "/specialities",
  "/career-milestones",
  "/research-vision",
  "/publications-research",
  "/testimonials",
  "/contact",
  "/book",
  ...site.conditions.map((c) => `/specialities/${c.t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!origin) return [];
  return pages.map((page) => ({
    url: `${origin}${page}`,
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}
