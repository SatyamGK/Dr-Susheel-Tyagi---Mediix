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
  const tilt = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType === "touch") return;
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.setProperty("--tilt-x", `${(-y * 10).toFixed(1)}deg`);
    card.style.setProperty("--tilt-y", `${(x * 12).toFixed(1)}deg`);
    card.style.setProperty("--shine-x", `${((x + .5) * 100).toFixed(1)}%`);
    card.style.setProperty("--shine-y", `${((y + .5) * 100).toFixed(1)}%`);
  };
  const untilt = (e: React.PointerEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty("--tilt-x", "0deg");
    e.currentTarget.style.setProperty("--tilt-y", "0deg");
  };
  return <div ref={root} className="speciality-cloud cinema-speciality-grid">
    {site.conditions.map((c, i) => <Link className="speciality-pill cinema-speciality" onPointerMove={tilt} onPointerLeave={untilt} key={c.t} href={`/specialities/${slugify(c.t)}`}>
      <span className="cinema-card-inner"><span className="speciality-number">0{i + 1} / SPECIALITY</span><h2>{c.t}</h2><p>{c.d}</p><span className="speciality-more">Explore this speciality <span aria-hidden="true">↗</span></span></span>
    </Link>)}
  </div>;
}
