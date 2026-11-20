"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/animations";

export default function ResearchPreview() {
  const card = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = card.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      tl.from(el, { y: 80, scale: 0.94, opacity: 0, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity" })
        .from(el.querySelectorAll("[data-anim]"), { y: 28, opacity: 0, duration: 0.65, stagger: 0.16, ease: "power2.out", clearProps: "transform,opacity" }, "-=0.35");
    });
    return () => mm.revert();
  }, []);
  return (
    <div className="research-copy research-preview" ref={card}>
      <h1 data-anim className="section-h1 on-dark">Research &amp; Vision</h1>
      <h2 data-anim>What problem are we solving?</h2>
      <p data-anim>Diabetes care is a lifelong process, yet many patients experience it as a sequence of isolated clinic visits. Between consultations, monitoring, follow-ups, nutrition counselling, lifestyle changes and patient education can lose momentum. Patients may disengage because of work constraints, financial pressure, digital barriers, caregiver dependence, stigma or diabetes-related fatigue.</p>
      <h2 data-anim>What we are building</h2>
      <p data-anim>Sugar Coat is a multilingual AI platform concept designed to make diabetes care easier to understand, access and sustain between clinic visits. It brings together supportive AI care, consent-based care connections, a secure care passport, a non-clinical clinic intelligence layer, and trusted community education and rewards.</p>
      <Link data-anim href="/research-vision" className="btn">View more</Link>
    </div>
  );
}