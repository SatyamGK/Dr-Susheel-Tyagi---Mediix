
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { gsap } from "@/lib/animations";
import styles from "./SpecialityGrid.module.css";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function SpecialityGrid() {
  const root = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const grid = root.current;
        const stage = stageRef.current;
        const intro = introRef.current;

        if (!grid || !stage || !intro) return;

        const rows = Array.from(
          grid.querySelectorAll<HTMLElement>(
            "[data-speciality-row]"
          )
        );

        const cards = rows.map(
          (row) => row.firstElementChild as HTMLElement
        );

        const subtitle =
          grid.querySelector<HTMLElement>(
            "[data-speciality-subtitle]"
          );

        const top = () =>
          (document
            .querySelector(".hdr")
            ?.getBoundingClientRect().height ?? 80) +
          (stage
            .closest("section")
            ?.querySelector(".sticky-section-title")
            ?.getBoundingClientRect().height ?? 48) +
          12;

        const fit = () => {
          const available = Math.max(
            120,
            window.innerHeight - top()
          );

          stage.style.height = `${available}px`;
        };

        fit();

        /* Initial visible medical introduction */

        gsap.set(intro, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
        });

        gsap.set(cards, {
          autoAlpha: 0,
          y: 60,
        });

        if (subtitle) {
          gsap.set(subtitle, {
            autoAlpha: 0,
            y: 20,
          });
        }

        /* Scroll-controlled animation */

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: () => `top ${top()}px`,
            end: () =>
              `+=${(cards.length + 3) * 140}`,
            pin: true,
            pinSpacing: true,
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onRefreshInit: fit,
          },
        });

        /* Keep introduction visible initially */

        tl.to({}, { duration: 0.5 });

        /* Fade medical introduction out */

        tl.to(intro, {
          autoAlpha: 0,
          scale: 0.8,
          y: -35,
          duration: 1,
          ease: "power2.inOut",
        });

        /* Reveal subtitle */

        if (subtitle) {
          tl.to(subtitle, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          });
        }

        /* Cards appear one by one */

        cards.forEach((card, i) => {
          const label = `card-${i}`;

          tl.addLabel(label);

          tl.fromTo(
            card,
            {
              y: 60,
              x: i % 2 === 0 ? -30 : 30,
              autoAlpha: 0,
            },
            {
              y: 0,
              x: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
            },
            label
          );

          tl.to(
            grid,
            {
              scrollTop: () =>
                Math.max(
                  0,
                  rows[i].offsetTop +
                    rows[i].offsetHeight -
                    grid.clientHeight
                ),
              duration: 1,
              ease: "none",
            },
            label
          );
        });

        /* Hold final frame before next section */

        tl.to({}, { duration: 1 });

        return () => {
          stage.style.height = "";
          grid.scrollTop = 0;
        };
      },
      stageRef
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={stageRef} className={styles.stage}>

      {/* Animated medical introduction */}

      <div
        ref={introRef}
        className={styles.intro}
        aria-hidden="true"
      >
        <div className={styles.medicalVisual}>

          <div className={styles.outerCircle} />
          <div className={styles.innerCircle} />

          <div className={styles.orbitOne} />
          <div className={styles.orbitTwo} />
          <div className={styles.orbitThree} />

          <span className={styles.particleOne} />
          <span className={styles.particleTwo} />
          <span className={styles.particleThree} />

          <div className={styles.medicalCore}>
            <svg
              viewBox="0 0 100 100"
              fill="none"
              className={styles.heartIcon}
            >
              <path
                d="M50 85
                   C40 75 12 55 12 34
                   C12 12 38 8 50 28
                   C62 8 88 12 88 34
                   C88 55 60 75 50 85Z"
                fill="currentColor"
              />

              <path
                d="M5 48 H30 L39 32
                   L50 65 L61 43
                   L68 48 H95"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.heartbeatLine}
              />
            </svg>
          </div>

        </div>

        <div className={styles.introContent}>

          <span className={styles.introKicker}>
            PERSONALISED MEDICAL CARE
          </span>

          <h2>Focused care for better health</h2>

          <p>Explore our clinical specialities</p>

          <div className={styles.scrollIndicator}>
            <span />
            <span />
          </div>

          <small>Scroll to explore</small>

        </div>
      </div>

      {/* Existing speciality cards */}

      <div ref={root} className={styles.grid}>

        <h2
          data-speciality-subtitle
          className={styles.subtitle}
        >
          Focused care for better health
        </h2>

        {site.conditions.map((c) => (
          <div
            key={c.t}
            data-speciality-row
            className={styles.row}
          >
            <Link
              className={styles.card}
              href={`/specialities/${slugify(c.t)}`}
              aria-label={`Explore ${c.t}`}
            >
              <span className={styles.name}>
                {c.t}
              </span>

              <span
                className={styles.arrow}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}
