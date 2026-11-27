"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import styles from "./Hero.module.css";

const biography =
  "Dr. Susheel Tyagi is an experienced Internal Medicine specialist and consultant physician, with over 16 years of clinical experience and experience caring for thousands of patients. Offering consultation at Indirapuram, Ghaziabad";

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const identity = useRef<HTMLDivElement>(null);
  const biographyRef = useRef<HTMLDivElement>(null);
  const photoPanel = useRef<HTMLDivElement>(null);
  const shade = useRef<HTMLDivElement>(null);
  const portrait = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = section.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
      // Initial view is fully visible. Only the scroll changes the scene.
      gsap.set(biographyRef.current, { autoAlpha: 0, y: 65, scale: 0.96 });
      gsap.set(identity.current, { autoAlpha: 1, y: 0 });
      gsap.set(portrait.current, { scale: 1, yPercent: 0, transformOrigin: "50% 100%" });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      });
      tl.to({}, { duration: 0.65 }) // Hold the landing view at the beginning.
        .to(identity.current, { autoAlpha: 0, y: -55, duration: 0.75 })
        .to(portrait.current, { scale: 1.75, yPercent: -4, duration: 1.6 }, "<")
        .to(biographyRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 1.05 }, "-=0.85")
        .to({}, { duration: 0.8 }); // Readable hold before next section.

      gsap.fromTo(progress.current, { scaleX: 0 }, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: true },
      });
    });

    mm.add("(max-width: 820px) and (prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 0.5, invalidateOnRefresh: true },
      });
      tl.to({}, { duration: 0.35 })
        .to(identity.current, { autoAlpha: 0, y: -24, duration: 0.65 })
        .fromTo(photoPanel.current, { height: "60%" }, { height: "100%", duration: 1.4, immediateRender: false }, "<")
        // .fromTo(photoPanel.current, { height: "var(--hero-photo-height)" }, { height: "100%", duration: 1.4, immediateRender: false }, "<")
        .to(shade.current, { opacity: 1, duration: 0.65 }, "-=0.65")
        .fromTo(biographyRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.65 })
        .to({}, { duration: 0.85 });
      gsap.fromTo(progress.current, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: true } });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={section} className={styles.scrollSection} aria-labelledby="doctor-name">
      <div className={styles.stickyScene}>
        <div className={styles.background} aria-hidden="true">
          <svg className={styles.medicalPattern} viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 290H190l18-24 20 44 25-82 23 62H800" />
              <path d="M65 50v55a35 35 0 0 0 70 0V50m-70 0h12m46 0h12M100 140v28a36 36 0 0 0 72 0v-15" />
              <circle cx="172" cy="145" r="8" />
              <path d="M700 65v52m-26-26h52" strokeWidth="8" />
              <path d="M650 180h65v82h-65zM667 180v-10h31v10m-32 25h33m-33 15h33m-33 15h23" />
            </g>
          </svg>
        </div>

        <div className={styles.topPanel}>
          <div ref={identity} className={styles.identity}>
            {/* <p className={styles.eyebrow}>MEDIIX CLINIC · PERSONALIZED MEDICINE</p> */}
            <h1 id="doctor-name" className={styles.name}>Dr. Susheel Tyagi</h1>
            <h2 className={styles.role}>MD – Internal Medicine | Researcher</h2>
            <h3 className={styles.credentials}>
              MBBS · MD (KGMU) · PG Diploma, Royal College of Physicians (UK) · Fellow, ACP (USA)
            </h3>
          </div>

          <div ref={biographyRef} className={styles.biography} aria-label="About Dr. Susheel Tyagi">
            {/* <span className={styles.biographyLabel}>EXPERIENCE & CARE</span> */}
            <h2>{biography}</h2>
          </div>
        </div>

        <div ref={photoPanel} className={styles.photoPanel}>
          <div ref={portrait} className={styles.portraitStage}>
            <img
              className={styles.portraitImage}
              src="/images/doctor.png"
              width={396}
              height={505}
              alt="Dr. Susheel Tyagi, consultant physician"
              fetchPriority="high"
            />
          </div>
        </div>
        {/* <div ref={shade} className={styles.mobileShade} aria-hidden="true" /> */}
        {/* <div className={styles.scrollCue} aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div> */}
        {/* <div ref={progress} className={styles.progress} aria-hidden="true" /> */}
      </div>
    </section>
  );
}
