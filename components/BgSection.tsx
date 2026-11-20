"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { media } from "@/content/media";
// Full-width section. With `bg` (a key from content/media.ts) it shows an image or looping video with a gentle parallax.
// Without `bg` it is a plain section. tone: "dark" (white text), "light" (mint) or "white".
export default function BgSection({ bg, tone = "light", narrow = false, className = "", id, children }:
  { bg?: string; tone?: "light" | "dark" | "white"; narrow?: boolean; className?: string; id?: string; children: React.ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const m = bg ? media[bg] : undefined;
  useEffect(() => {
    if (!m) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(wrap.current, { yPercent: -8 }, { yPercent: 8, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } });
    });
    return () => mm.revert();
  }, [m]);
  return (
    <section id={id} ref={root} className={`sec bgs ${m ? tone : `plain ${tone}`} ${className}`}>
      {m && (<>
        <div className="bgs-img" ref={wrap} aria-hidden="true">
          {m.type === "video"
            ? <video src={m.src} poster={m.poster} autoPlay muted loop playsInline preload="metadata" style={{ objectPosition: m.pos }} />
            : <img src={m.src} alt="" loading="lazy" style={{ objectPosition: m.pos }} />}
        </div>
        <div className="bgs-ov" aria-hidden="true" />
      </>)}
      <div className={`bgs-in ${narrow ? "narrow" : ""}`}>{children}</div>
    </section>
  );
}