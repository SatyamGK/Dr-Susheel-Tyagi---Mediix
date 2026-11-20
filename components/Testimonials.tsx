"use client";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Rajeshwar Sharma",
    location: "Indirapuram, Ghaziabad",
    concern: "Type 2 Diabetes Management",
    rating: "★★★★★",
    quote:
      "Dr. Tyagi patiently reviewed six years of my blood sugar logs and adjusted my medication without rushing. Within three months my HbA1c dropped from 8.9% to 6.8%, and I finally understand my diet plan.",
  },
  {
    name: "Meenakshi Verma",
    location: "Vaishali, Ghaziabad",
    concern: "Hypertension & Metabolic Care",
    rating: "★★★★★",
    quote:
      "What sets Mediix Clinic apart is how clearly Dr. Susheel Tyagi explains why each test or medicine is needed. My blood pressure is stable now and I never feel hurried during follow-ups.",
  },
  {
    name: "Anil Kumar Gupta",
    location: "Vasundhara, Ghaziabad",
    concern: "Adult Internal Medicine",
    rating: "★★★★★",
    quote:
      "I consulted Dr. Tyagi for persistent fatigue and fluctuating sugar levels. His structured approach, clear prescription notes, and practical lifestyle advice made a noticeable difference within weeks.",
  },
  {
    name: "Pooja Malhotra",
    location: "Niti Khand, Indirapuram",
    concern: "Preventive & Thyroid Care",
    rating: "★★★★★",
    quote:
      "A very calm, knowledgeable, and ethical physician. He listened to every symptom carefully, avoided unnecessary investigations, and gave a realistic plan that was easy to follow at home.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setFlipping(true);
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setFlipping(false);
      }, 320);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [paused]);

  const goTo = (nextIdx: number) => {
    if (nextIdx === index) return;
    setFlipping(true);
    window.setTimeout(() => {
      setIndex(nextIdx);
      setFlipping(false);
    }, 320);
  };

  const current = reviews[index];

  return (
    <div
      className="tsection-single"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="t-stage">
        <article className={`t-flip-card ${flipping ? "is-turning" : ""}`}>
          <div className="t-stars" aria-label="5 out of 5 stars">{current.rating}</div>
          <blockquote className="t-quote">“{current.quote}”</blockquote>
          <div className="t-author">
            <strong>{current.name}</strong>
            <span>{current.concern} · {current.location}</span>
          </div>
        </article>
      </div>

      <div className="t-dots" role="tablist" aria-label="Patient reviews">
        {reviews.map((r, i) => (
          <button
            key={r.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show review from ${r.name}`}
            className={`t-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}