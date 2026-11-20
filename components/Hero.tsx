"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLElement>(null);
  const card2Ref = useRef<HTMLElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      gsap.set([card1Ref.current, card2Ref.current, proofRef.current], {
        opacity: 0,
        y: 36,
        scale: 0.96,
      });

      tl.to(card1Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" })
        .to(card2Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }, "+=0.25")
        .to(proofRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out" }, "-=0.3");
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="doctor-hero-scroll" aria-labelledby="doctor-name">
      <div className="doctor-hero-sticky">
        <video
          className="doctor-hero-video"
          src="/videos/mediix-banner.mp4"
          poster="/images/bg/mediix-banner-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="doctor-hero-video-overlay" />
        <div className="doctor-hero-grid">
          <div className="doctor-hero-copy">
            <h1 id="doctor-name" className="hero-name">
              <span className="eyebrow hero-kicker">
                Diabetes care · Internal medicine · Indirapuram, Ghaziabad
              </span>
              Dr. Susheel Tyagi
            </h1>

            <div className="hero-popup-stack">
              <article ref={card1Ref} className="hero-popup hero-popup-primary">
                <h2 className="hero-role">MD – Internal Medicine | Researcher</h2>
                <p className="hero-credentials">
                  MBBS · MD (KGMU) · PG Diploma, Royal College of Physicians (UK) · Fellow, ACP (USA)
                </p>
              </article>

              <article ref={card2Ref} className="hero-popup hero-popup-secondary">
                <p className="hero-intro">
                  Dr. Susheel Tyagi is an experienced Internal Medicine specialist and consultant
                  physician, with over 16 years of clinical experience and experience caring for
                  thousands of patients.
                </p>
              </article>
            </div>

            <div ref={proofRef} className="hero-proof">
              <span>16+ years of clinical experience</span>
              <span>Internal Medicine</span>
              <span>Diabetes care</span>
            </div>
          </div>

          <div className="doctor-portrait-wrap hero-portrait-integrated">
            <div className="hero-portrait-aura" aria-hidden="true" />
            <div className="portrait-orbit orbit-one" aria-hidden="true" />
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <img
              className="doctor-portrait hero-portrait-photo"
              src="/images/doctor.png"
              width={396}
              height={505}
              alt="Portrait of Dr. Susheel Tyagi, consultant physician"
              fetchPriority="high"
            />
            <span className="portrait-caption">Evidence-led care. A personal approach.</span>
          </div>
        </div>
      </div>
    </section>
  );
}