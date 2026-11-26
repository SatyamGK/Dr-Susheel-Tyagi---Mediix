"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import BgSection from "./BgSection";
import Icon from "./Icon";
import { locations, clinicMapEmbed } from "@/content/media";
import styles from "./LocationsBand.module.css";

export default function LocationsBand({ showMap = true }: { showMap?: boolean }) {
  const clinic = locations[0];
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: {
        trigger: el, start: "top 95%", end: "top 30%",
        scrub: 0.35, invalidateOnRefresh: true,
      }});
      tl.fromTo(el.querySelector("h2"), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25 });
      tl.fromTo(el.querySelector("article"), { y: 22, scale: 0.97, rotationX: 7, transformPerspective: 900, opacity: 0 }, { y: 0, scale: 1, rotationX: 0, opacity: 1, duration: 0.35 });
      tl.fromTo(el.querySelectorAll("article > *"), { y: 8, opacity: 0.35 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.18 }, "-=0.12");
    });
    return () => mm.revert();
  }, []);
  return (
    <BgSection tone="white" id="consultation" className={`consultation-section ${styles.section}`}>
      <div className="sticky-section-title">
        <h1 className="section-h1">Consultation</h1>
      </div>
      <div ref={root} className={styles.reveal}>
        <h2 className={styles.subtitle}>Meet Dr. Susheel Tyagi at Mediix Clinic</h2>
        <article className={styles.card}>
          <h3>{clinic.name}, Indirapuram</h3>
          <div className={styles.detail}>
            <Icon name="pin" size={17} />
            <p><strong>Address:</strong> {clinic.address}</p>
          </div>
          {showMap && (
            <iframe className={styles.map} title="Mediix Clinic location on Google Maps" src={clinicMapEmbed} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          )}
          <div className={styles.detail}>
            <Icon name="clock" size={17} />
            <p><strong>OPD Timings:</strong> {clinic.timing}</p>
          </div>
          <div className={styles.detail}>
            <Icon name="phone" size={17} />
            <p><strong>Appointment Desk:</strong>{" "}<a href="tel:+919625878756">+91 96258 78756</a> · <a href="tel:+917303190200">+91 73031 90200</a></p>
          </div>
          <p className={styles.note}><strong>Hospital Affiliations:</strong> Also consulting at Yashoda Super Speciality Hospital &amp; Avantika Hospital.</p>
        </article>
      </div>
    </BgSection>
  );
}
