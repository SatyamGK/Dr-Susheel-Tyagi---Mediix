"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
export type RevealType = "up" | "pop" | "left" | "right" | "zoom" | "flip" | "blur" | "drop" | "rotate";
const V: Record<RevealType, gsap.TweenVars> = {
  up: { y: 36 },
  pop: { scale: 0.4, y: 50, ease: "back.out(1.8)", duration: 0.7 },
  left: { x: -70 },
  right: { x: 70 },
  zoom: { scale: 0.8 },
  flip: { rotationX: -80, transformPerspective: 900, transformOrigin: "top center" },
  blur: { filter: "blur(14px)", y: 24 },
  drop: { y: -60, ease: "bounce.out", duration: 1 },
  rotate: { rotation: -8, y: 40, scale: 0.9 },
};
export default function Reveal({ children, className = "", type = "up", items }:
  { children: React.ReactNode; className?: string; type?: RevealType; items?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const targets = items ? ref.current!.querySelectorAll(items) : ref.current!.children;
      gsap.from(targets, {
        opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", ...V[type],
        clearProps: "transform,opacity,filter", // hand control back to CSS (hover etc.) when done
        scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
      });
    });
    return () => mm.revert();
  }, [type, items]);
  return <div ref={ref} className={className}>{children}</div>;
}
