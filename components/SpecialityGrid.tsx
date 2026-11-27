"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/content/site";
import { gsap } from "@/lib/animations";
import styles from "./SpecialityGrid.module.css";

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function SpecialityGrid() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stage = root.current;
    if (!stage) return;
    const section = stage.closest("section");
    const header = document.querySelector(".hdr");
    const fit = () => {
      stage.style.setProperty("--clinic-header", `${header?.getBoundingClientRect().height ?? 72}px`);
    };
    fit();
    const observer = new ResizeObserver(fit);
    if (header) observer.observe(header);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = Array.from(stage.querySelectorAll<HTMLElement>("[data-speciality-card]")).filter(card => card.getClientRects().length > 0);
      const entrance = (i: number) => ({ xPercent: i % 2 ? 105 : -105, y: 18, opacity: 0, scale: 0.94, rotation: i % 2 ? 3 : -3 });
      const settled = { xPercent: 0, y: 0, opacity: 1, scale: 1, rotation: 0, ease: "power3.out" };
      const top = () => (header?.getBoundingClientRect().height ?? 72) + (section?.querySelector(".sticky-section-title")?.getBoundingClientRect().height ?? 0);
      const internal = !!stage.closest(".internal-page-content");
      if (!internal && stage.offsetHeight + top() <= window.innerHeight + 2) {
        const tl = gsap.timeline({scrollTrigger: {trigger: stage, start: () => `top ${top()}px`, end: () => `+=${cards.length * 110}`, pin: true, pinSpacing: true, scrub: 0.45, invalidateOnRefresh: true, anticipatePin: 1}});
        cards.forEach((card, i) => tl.fromTo(card, entrance(i), {...settled, duration: 1}, i * .85));
        tl.to({}, {duration: .6});
      } else {
        cards.forEach((card, i) => gsap.fromTo(card, entrance(i), {...settled, scrollTrigger: {trigger: card.parentElement, start: "top 98%", end: "top 75%", scrub: 0.45}}));
      }
    }, stage);
    return () => { observer.disconnect(); mm.revert(); stage.style.removeProperty("--clinic-header"); };
  }, []);
  return <div ref={root} className={styles.stage}>
    <h2 className={styles.subtitle}>Focused care for better health</h2>
    <div className={styles.grid}>
      {site.conditions.map(c => <div key={c.t} className={styles.row}>
        <Link data-speciality-card className={styles.card} href={`/specialities/${slugify(c.t)}`}>
          <span className={styles.icon}><Icon name={c.icon} size={21}/></span>
          <span className={styles.name}>{c.t}</span>
          <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>
      </div>)}
      <div className={styles.extra}><Link data-speciality-card className={styles.card} href="/book"><span className={styles.icon}><Icon name="calendar" size={21}/></span><span className={styles.name}>Personalised consultation</span><span className={styles.arrow} aria-hidden="true">→</span></Link></div>
    </div>
  </div>;
}
