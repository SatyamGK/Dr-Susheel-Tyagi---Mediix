"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { gsap } from "@/lib/animations";
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export default function SpecialityGrid() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".speciality-pill").forEach((card, index) => {
        gsap.fromTo(card, { x: index % 2 ? 110 : -110, opacity: 0, y: 28 }, {
          x: 0, opacity: 1, y: 0, ease: "power2.out", duration: 1,
          scrollTrigger: { trigger: card, start: "top 88%", end: "top 55%", scrub: .65, toggleActions: "play reverse play reverse" }
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return <div ref={root} className="speciality-cloud">
    {site.conditions.map((c, i) => <Link className="speciality-pill" key={c.t} href={`/specialities/${slugify(c.t)}`}>
      <span className="speciality-number">0{i + 1}</span><h2>{c.t}</h2><p>{c.d}</p><span className="speciality-more">Explore this speciality →</span>
    </Link>)}
  </div>;
}
