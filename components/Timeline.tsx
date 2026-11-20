"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import Icon from "./Icon";
export default function Timeline({ items }: { items: { icon: string; y: string; t: string; d: string }[] }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".tl-line", { scaleY: 0 }, { scaleY: 1, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 60%", scrub: true } });
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((el, i) =>
        gsap.from(el, { x: i % 2 ? 70 : -70, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
    });
    return () => mm.revert();
  }, []);
  return (
    <div className="tl" ref={root}>
      <div className="tl-line" />
      {items.map((it, i) => (
        <div className="tl-item" key={i}>
          <span className="dot"><Icon name={it.icon} size={18} /></span>
          <h2 className="tl-label">{it.y}</h2><h3>{it.t}</h3><p>{it.d}</p>
        </div>
      ))}
    </div>
  );
}
