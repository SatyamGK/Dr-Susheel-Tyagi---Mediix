"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { media } from "@/content/media";
import styles from "./ResearchPreview.module.css";

const features = [
  ["AI Care", "A voice-first, supportive guide—not a second doctor. It understands each patient’s routine, explains clinician- and dietician-approved treatment and nutrition guidance in simple language, answers plan-related questions, and provides timely, caring reminders."],
  ["Care Connections", "With patient consent, it helps complete practical next steps: booking visits, requesting lab reports, reaching pharmacies or dieticians, and involving a caregiver—so care is not delayed by friction or avoidance."],
  ["Care Passport", "A secure, patient-owned hub for health records, including reports, prescriptions, care plans, appointments, and consented electronic devices/routine updates."],
  ["Clinic/Doctor Intelligence Layer", "A clear, non-clinical view of each patient’s latest updates, pending actions, requests, and reported barriers."],
  ["Community & Rewards", "Clinic administrators curate trusted education, patient stories, local camps, and participation rewards. AI identifies shared barriers and recommends relevant content."],
];
const paths = ["M3 12h3l3-7 4 14 3-7h5", "M8 12h8 M8 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0 M24 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0", "M5 3h14v18H5z M9 9h6 M12 6v6 M9 16h6", "M3 3v18h18 M7 16l4-5 4 2 5-7", "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M2 21v-3a6 6 0 0 1 12 0v3 M17 11a3 3 0 1 0 0-6 M16 15a6 6 0 0 1 6 6"];
export default function ResearchPreview() {
  const full = usePathname() === "/research-vision";
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      el.querySelectorAll<HTMLElement>("[data-research-reveal]").forEach((item, i) => {
        gsap.fromTo(item, { x: i % 2 ? 18 : -18, y: 12 }, { x: 0, y: 0, duration: .65, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 94%", toggleActions: "play none none reverse" } });
      });
    });
    return () => mm.revert();
  }, []);
  return <div ref={root} className={`${styles.root} ${full ? styles.full : styles.preview}`}>
    <div className={styles.photo} aria-hidden="true" style={{backgroundImage: `linear-gradient(120deg, rgba(10,17,43,.91), rgba(10,17,43,.80)), url('${media.vision.src}')`, backgroundPosition: media.vision.pos || "center"}} />
    {!full ? <>
    <article className={styles.story}>
      <span className={styles.label}>01 — THE CHALLENGE</span>
      <h2>What problem are you solving?</h2>
      <p>Diabetes care is a lifelong process, yet most patients experience it as a sequence of isolated clinic visits.</p>
      <p>Between consultations, regular monitoring, scheduled follow-ups, nutrition counselling, lifestyle changes, and patient education often lose momentum.</p>
    </article>
    <article className={styles.story}>
      <span className={styles.label}>02 — OUR VISION</span>
      <h2>What we’re building</h2>
      <p>Sugar Coat is a multilingual AI platform that makes diabetes care easier to understand, access, and sustain between clinic visits.</p>
      <ul className={styles.summary}>{features.map(([name]) => <li key={name}>{name}</li>)}</ul>
    </article>
    <Link className={styles.more} href="/research-vision">Explore More <span aria-hidden="true">→</span></Link>
    </> : <>
    <article className={styles.story}>
      <span className={styles.label}>01 — THE CHALLENGE</span>
      <h2 data-research-reveal>WHAT PROBLEM ARE YOU SOLVING?</h2>
      <p data-research-reveal>Diabetes care is a lifelong process, yet most patients experience it as a sequence of isolated clinic visits. Between consultations, regular monitoring, scheduled follow-ups, nutrition counselling, lifestyle changes, and patient education often lose momentum. Patients may disengage because of work constraints, financial pressure, digital barriers, caregiver dependence, stigma, or diabetes-related fatigue. These barriers are rarely visible to the care team until a patient returns late—or not at all.</p>
      <p data-research-reveal>For diabetologists and care teams, fragmented records and manual calls/messages make it difficult to identify unmet follow-up needs, respond to patient-reported concerns, coordinate dietician support, and deliver timely, personalised encouragement at scale. Generic reminders do not restore motivation or explain why continuity has broken. We seek an assistive, privacy-respecting, multilingual solution that keeps patients engaged between visits, identifies non-clinical barriers and needed human action, and enables coordinated, compassionate care without providing diagnosis, treatment advice, or clinical decision support.</p>
    </article>
    <article className={styles.story}>
      <span className={styles.label}>02 — OUR VISION</span>
      <h2 data-research-reveal>What you're building</h2>
      <h3>WHAT ARE YOU PROPOSING TO BUILD IN THIS HACKATHON, AND WHAT IS YOUR APPROACH?</h3>
      <p data-research-reveal><strong>Sugar Coat</strong> is a multilingual AI platform that makes diabetes care easier to understand, access, and sustain between clinic visits.</p>
      <ul className={styles.features}>{features.map(([name, description], i) => <li key={name} data-research-reveal><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[i]} /></svg><div><h3>{name}</h3><p>{description}</p></div></li>)}</ul>
    </article>
    </>}
  </div>;
}
