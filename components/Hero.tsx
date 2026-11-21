"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLElement>(null);
  const card2Ref = useRef<HTMLElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    // The hero is a 3-stage scroll experience: identity, credentials, care,
    // followed by a full-frame portrait zoom into the next section.
    mm.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom bottom", scrub: 0.75, invalidateOnRefresh: true },
      });
      gsap.set([card1Ref.current, card2Ref.current, proofRef.current], { autoAlpha: 0, y: 90, rotateX: -13 });
      tl.to(card1Ref.current, { autoAlpha: 1, y: 0, rotateX: 0, duration: 1 })
        .to(card1Ref.current, { autoAlpha: 0, y: -65, duration: .65 }, "+=.65")
        .to(card2Ref.current, { autoAlpha: 1, y: 0, rotateX: 0, duration: 1 }, "<")
        .to(proofRef.current, { autoAlpha: 1, y: 0, rotateX: 0, duration: .8 }, "-=.25")
        .to(".cinema-name-line", { yPercent: -30, autoAlpha: 0, stagger: .08, duration: 1 }, "+=.5")
        .to([card2Ref.current, proofRef.current], { autoAlpha: 0, y: -55, duration: .8 }, "<")
        .to(portraitRef.current, { scale: 2.2, xPercent: -36, yPercent: 6, duration: 2.3, ease: "power2.inOut" }, "-=.25")
        .to(".doctor-hero-video-overlay", { opacity: .98, duration: 1.2 }, "<")
        .to(portraitRef.current, { autoAlpha: 0, scale: 2.55, duration: .65 }, "-=.65");
      gsap.fromTo(".cinema-progress", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom bottom", scrub: true } });
    });
    // Mobile: upper 60% is an animated editorial story; the doctor's portrait
    // remains anchored in the lower 40%, then grows as the next section arrives.
    mm.add("(max-width: 820px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.set([card1Ref.current, card2Ref.current, proofRef.current], { autoAlpha: 0, y: 38 });
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom bottom", scrub: .45, invalidateOnRefresh: true },
      });
      tl.to(card1Ref.current, { autoAlpha: 1, y: 0, duration: .85 })
        .to(card1Ref.current, { autoAlpha: 0, y: -35, duration: .65 }, "+=.6")
        .to(card2Ref.current, { autoAlpha: 1, y: 0, duration: .85 }, "<")
        .to(card2Ref.current, { autoAlpha: 0, y: -35, duration: .7 }, "+=.7")
        .to(proofRef.current, { autoAlpha: 1, y: 0, duration: .75 }, "<")
        .to(".cinema-name-line", { autoAlpha: 0, yPercent: -35, duration: .8 }, "+=.5")
        .to(proofRef.current, { autoAlpha: 0, y: -35, duration: .6 }, "<")
        .to(portraitRef.current, { scale: 1.9, xPercent: -3, yPercent: -22, duration: 1.8, ease: "power2.inOut" }, "-=.1")
        .to(portraitRef.current, { autoAlpha: 0, scale: 2.2, duration: .6 }, "-=.4");
      gsap.fromTo(".cinema-progress", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom bottom", scrub: true } });
    });
    const section = sectionRef.current;
    const portrait = portraitRef.current;
    const move = (event: PointerEvent) => {
      if (!section || !portrait || event.pointerType === "touch") return;
      const r = section.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - 0.5;
      const y = (event.clientY - r.top) / r.height - 0.5;
      section.style.setProperty("--mx", `${(x * 36).toFixed(1)}px`);
      section.style.setProperty("--my", `${(y * 26).toFixed(1)}px`);
      portrait.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
      portrait.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
    };
    const reset = () => {
      section?.style.setProperty("--mx", "0px");
      section?.style.setProperty("--my", "0px");
      portrait?.style.setProperty("--rx", "0deg");
      portrait?.style.setProperty("--ry", "0deg");
    };
    if (window.matchMedia("(pointer:fine) and (prefers-reduced-motion:no-preference)").matches) {
      section?.addEventListener("pointermove", move, { passive: true });
      section?.addEventListener("pointerleave", reset);
    }
    return () => {
      section?.removeEventListener("pointermove", move);
      section?.removeEventListener("pointerleave", reset);
      mm.revert();
    };
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
        <div className="cinema-grid" aria-hidden="true" />
        <div className="cinema-spotlight" aria-hidden="true" />
        <div className="cinema-topline" aria-hidden="true"><span>MEDIIX / PERSONALIZED CARE</span><span>EST. IN CLINICAL EXCELLENCE</span></div>
        <div className="cinema-scroll-marker" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
        <div className="cinema-progress" aria-hidden="true" />
        <div className="doctor-hero-grid">
          <div className="doctor-hero-copy">
            <p className="cinema-pretitle"><span className="cinema-pulse" /> A MORE PERSONAL KIND OF MEDICINE</p>
            <h1 id="doctor-name" className="hero-name">
              <span className="eyebrow hero-kicker">
                Diabetes care · Internal medicine · Indirapuram, Ghaziabad
              </span>
              <span className="cinema-name-line">Dr. Susheel</span><span className="cinema-name-line cinema-name-accent">Tyagi<span className="cinema-name-period">.</span></span>
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

          <div ref={portraitRef} className="doctor-portrait-wrap hero-portrait-integrated cinema-portrait-stage">
            <div className="hero-portrait-aura" aria-hidden="true" />
            <div className="cinema-portrait-halo" aria-hidden="true" />
            <span className="cinema-portrait-index" aria-hidden="true">01 / PHYSICIAN</span>
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