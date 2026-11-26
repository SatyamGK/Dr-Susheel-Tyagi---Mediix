
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
};

export default function PageHero({
  title,
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 24,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          }
        );
      },
      heroRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-labelledby="internal-page-heading"
    >
      <div
        className={styles.grid}
        aria-hidden="true"
      />

      <div
        className={styles.glow}
        aria-hidden="true"
      />

      <div
        className={styles.orbitScene}
        aria-hidden="true"
      >
        <div className={styles.orbitOne} />
        <div className={styles.orbitTwo} />
        <div className={styles.orbitThree} />
      </div>

      <h1
        id="internal-page-heading"
        ref={titleRef}
        className={styles.heading}
      >
        {title}
      </h1>
    </section>
  );
}
