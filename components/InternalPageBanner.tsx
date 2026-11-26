"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./InternalPageBanner.module.css";

export default function InternalPageBanner({ title }: { title: string }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const header = document.querySelector<HTMLElement>(".hdr");
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      const top = Math.max(0, headerBottom);
      const viewport = window.innerHeight;
      const expanded = viewport * 0.25;
      const compact = Math.max(viewport * 0.10, 44);
      const range = Math.max(1, expanded - compact);
      const progress = Math.min(1, Math.max(0, window.scrollY / range));
      element.style.setProperty("--header-offset", `${top}px`);
      element.style.setProperty("--banner-expanded", `${Math.max(expanded, compact)}px`);
      element.style.setProperty("--banner-height", `${Math.max(compact, expanded - range * progress)}px`);
      element.style.setProperty("--banner-progress", String(progress));
      element.dataset.compact = progress >= 0.95 ? "true" : "false";
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    if (header) observer.observe(header);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={root} className={styles.spacer}>
      <section className={styles.banner} aria-labelledby="internal-page-heading">
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.orbits} aria-hidden="true"><i /><i /><i /></div>
        <h1 id="internal-page-heading" className={styles.heading}>{title}</h1>
      </section>
    </div>
  );
}
