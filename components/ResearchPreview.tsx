
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/animations";

export default function ResearchPreview() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const items =
          el.querySelectorAll("[data-research-anim]");

        const lines =
          el.querySelectorAll(".research-divider");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 40%",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          items,
          {
            y: 22,
            opacity: 0,
            rotateX: 8,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          }
        );

        tl.fromTo(
          lines,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.15
        );
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={root}
      className="research-open-content research-premium"
    >
      {/* The challenge */}

      <article className="research-story">

        <span
          className="research-label"
          data-research-anim
        >
          01 — THE CHALLENGE
        </span>

        <p data-research-anim>
          <strong>
            Diabetes care is a lifelong process,
          </strong>{" "}
          yet many patients experience it as a
          sequence of isolated clinic visits.
          Between consultations, monitoring,
          follow-ups, nutrition counselling,
          lifestyle changes and patient education
          can lose momentum.
        </p>

        <p data-research-anim>
          Patients may disengage because of work
          constraints, financial pressure, digital
          barriers, caregiver dependence, stigma
          or diabetes-related fatigue.
        </p>

      </article>

      <div
        className="research-divider"
        aria-hidden="true"
      />

      {/* Our vision */}

      <article className="research-story">

        <span
          className="research-label"
          data-research-anim
        >
          02 — OUR VISION
        </span>

        <h2 data-research-anim>
          What we are building
        </h2>

        <p data-research-anim>
          <strong className="research-highlight">
            Sugar Coat
          </strong>{" "}
          is a multilingual AI platform concept
          designed to make diabetes care easier
          to understand, access and sustain
          between clinic visits.
        </p>

        <p data-research-anim>
          It brings together supportive AI care,
          consent-based care connections, a secure
          care passport, a non-clinical clinic
          intelligence layer, and trusted
          community education and rewards.
        </p>

      </article>

      <Link
        data-research-anim
        href="/research-vision"
        className="btn research-view-more"
      >
        <span>View more</span>

        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>

      </Link>

    </div>
  );
}
