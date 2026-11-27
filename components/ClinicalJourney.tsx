"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import styles from "./ClinicalJourney.module.css";

const groups = [
  { title: "Medical Education", icon: "education", items: ["MBBS from KGMU, Lucknow", "MD (Medicine) from KGMU, Lucknow", "PG Diploma in Clinical Endocrinology and Diabetes, Royal College of Physicians, UK"] },
  { title: "National & International Fellowships", icon: "fellowship", items: ["FICP, FACP, FIACM, FDIAI"] },
  { title: "Awards & Recognition", icon: "award", items: ["EDPA Championship Award"] },
];

function JourneyIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "education" ? <><path d="m2 9 10-5 10 5-10 5-10-5Z"/><path d="M6 11v6q6 5 12 0v-6M22 9v7"/></> : kind === "fellowship" ? <><circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8M9 9l2 2 4-4"/></> : kind === "award" ? <><path d="M7 3h10v6a5 5 0 0 1-10 0V3ZM7 5H3v3a4 4 0 0 0 5 4M17 5h4v3a4 4 0 0 1-5 4M12 14v6M7 21h10"/></> : <><path d="M5 3v7a5 5 0 0 0 10 0V3M3 3h4M13 3h4M10 15v2a5 5 0 0 0 10 0v-3"/><circle cx="20" cy="12" r="2"/></>}
  </svg>;
}

export default function ClinicalJourney() {
  const root = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const last = el.querySelector<HTMLElement>("[data-journey-final]");
    const measure = () => { if (last) el.style.setProperty("--journey-end", `${el.getBoundingClientRect().bottom - last.getBoundingClientRect().top - last.offsetHeight / 2}px`); };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    measure();
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const line = el.querySelector<HTMLElement>("[data-journey-line]");
      if (line && last) gsap.fromTo(line, { scaleY: 0 }, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: el, start: "top 75%", endTrigger: last,
          end: "center 55%", scrub: 0.5, invalidateOnRefresh: true }
      });
      el.querySelectorAll<HTMLElement>("[data-journey-card]").forEach((card) => {
        gsap.fromTo(card, { y: 14, opacity: 0.75 }, { y: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: card.parentElement || card, start: "top 95%", end: "top 65%", scrub: 0.5, invalidateOnRefresh: true } });
      });
    });
    return () => { observer.disconnect(); mm.revert(); };
  }, []);
  return (
    <ol className={styles.path} ref={root} aria-label="Medical qualifications and achievements">
      {groups.map((group, i) => (
        <li className={styles.stop} key={group.title}>
          {i === 0 && <span className={styles.line} data-journey-line aria-hidden="true" />}
          <span className={styles.node} aria-hidden="true"><JourneyIcon kind={group.icon} /></span>
          <div className={styles.card} data-journey-card><h2 className={styles.groupTitle}>{group.title}</h2><ul className={styles.qualifications}>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>
        </li>
      ))}
      <li className={styles.stop}>
        <span className={`${styles.node} ${styles.finalNode}`} data-journey-final aria-hidden="true"><JourneyIcon kind="practice" /></span>
        <div className={`${styles.card} ${styles.practice}`} data-journey-card>
          <h2>Current Clinical Practice</h2>
          <h3>Mediix Clinic, Indirapuram</h3>
        </div>
      </li>
    </ol>
  );
}
