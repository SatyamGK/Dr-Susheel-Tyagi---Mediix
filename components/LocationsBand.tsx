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
      const card = el.querySelector("article");
      if (!card) return;
      gsap.fromTo(card, { y: 22, rotationX: 7, transformPerspective: 1400 }, {
        y: 0, rotationX: 0, duration: 0.65, ease: "power2.out", clearProps: "transform",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
      });
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
          <h3><span className={styles.emblem}><Icon name="pin" size={22} /></span>{clinic.name}, Indirapuram</h3>
          <div className={styles.detail}>
            <Icon name="pin" size={19} />
            <p><strong>Address</strong> {clinic.address}</p>
          </div>
          {showMap && (
            <iframe className={styles.map} title="Mediix Clinic location on Google Maps" src={clinicMapEmbed} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          )}
          <div className={styles.detail}>
            <Icon name="clock" size={19} />
            <p><strong>OPD Timings</strong> {clinic.timing}</p>
          </div>
          <div className={styles.detail}>
            <Icon name="phone" size={19} />
            <p><strong>Appointment Desk</strong>{" "}<a href="tel:+919625878756">+91 96258 78756</a> · <a href="tel:+917303190200">+91 73031 90200</a></p>
          </div>
          <p className={styles.note}><strong>Hospital Affiliations</strong> Also consulting at Yashoda Super Speciality Hospital &amp; Avantika Hospital.</p>
        </article>
      </div>
    </BgSection>
  );
}
