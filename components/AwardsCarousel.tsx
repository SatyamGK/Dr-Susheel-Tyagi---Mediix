"use client";
import { useEffect, useState } from "react";
const awards = [
  { src: "/images/bg/gallery.jpg", alt: "Clinic and professional environment" },
  { src: "/images/bg/about.jpg", alt: "Dr. Susheel Tyagi in his clinical practice" },
  { src: "/images/bg/publications.jpg", alt: "Professional learning and research material" },
  { src: "/images/bg/specialities.jpg", alt: "Clinical consultation environment" },
  { src: "/images/bg/contact.jpg", alt: "Mediix Clinic location" },
  { src: "/images/doctor.png", alt: "Dr. Susheel Tyagi, consultant physician" },
];
export default function AwardsCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const timer = window.setInterval(() => setActive(v => (v + 1) % awards.length), 4200); return () => window.clearInterval(timer); }, []);
  return <div className="awards-carousel" aria-label="Awards and recognition photo carousel">
    <div className="awards-track" style={{ transform: `translateX(-${active * 100}%)` }}>
      {awards.map((a) => <div className="awards-slide" key={a.src}><img src={a.src} alt={a.alt} loading="lazy" /></div>)}
    </div>
    <div className="awards-dots">{awards.map((_, i) => <button type="button" key={i} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`} aria-current={active === i ? "true" : undefined} className={active === i ? "active" : ""}/>)}</div>
  </div>;
}
