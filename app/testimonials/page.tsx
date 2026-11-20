'use client';

import React, { useState } from 'react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  meta: string;
}

const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'I consulted Dr. Tyagi for persistent fatigue and fluctuating sugar levels. His structured approach, clear prescription notes, and practical lifestyle advice made a noticeable difference within weeks.',
    author: 'Anil Kumar Gupta',
    meta: 'Adult Internal Medicine · Vasundhara, Ghaziabad',
  },
  {
    id: '2',
    quote:
      'Dr. Tyagi patiently reviewed six years of my blood sugar logs and adjusted my medication without rushing. Within three months my HbA1c dropped from 8.9% to 6.8%, and I finally understand my daily targets.',
    author: 'Rajesh Sharma',
    meta: 'Diabetes & Blood Sugar Care · Indirapuram, Ghaziabad',
  },
  {
    id: '3',
    quote:
      'Calm, attentive, and thorough consultation at Mediix Clinic. Every test and treatment step was explained clearly with practical guidance for long-term care.',
    author: 'Sunita Verma',
    meta: 'Internal Medicine & Metabolic Care · Vaishali, Ghaziabad',
  },
];

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS_LIST[activeIndex];

  return (
    <main className="ts-home-page">
      <style>{`
        .ts-home-page {
          position: relative;
          min-height: 86vh;
          background-color: #0b1e26;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          overflow: hidden;
          font-family: inherit;
        }
        .ts-bg-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.42;
          pointer-events: none;
        }
        .ts-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 25, 33, 0.52);
          pointer-events: none;
        }
        .ts-card-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ts-card {
          width: 100%;
          background-color: rgba(7, 25, 33, 0.92);
          border: 1px solid rgba(52, 211, 153, 0.16);
          border-radius: 14px;
          padding: 34px 40px 30px;
          text-align: center;
          box-shadow: 0 20px 44px rgba(0, 0, 0, 0.35);
        }
        .ts-stars {
          color: #f59e0b;
          font-size: 0.95rem;
          letter-spacing: 3px;
          margin-bottom: 14px;
        }
        .ts-quote {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.65;
          color: #f1f5f9;
          font-weight: 400;
        }
        .ts-author {
          margin: 18px 0 0;
          font-size: 0.96rem;
          font-weight: 700;
          color: #2dd4a7;
        }
        .ts-meta {
          margin: 4px 0 0;
          font-size: 0.82rem;
          color: #94a3b8;
        }
        .ts-dots {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .ts-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: none;
          padding: 0;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.32);
          transition: all 0.2s ease;
        }
        .ts-dot.active {
          width: 20px;
          background-color: #2dd4a7;
        }
        @media (max-width: 640px) {
          .ts-card {
            padding: 26px 22px;
          }
          .ts-quote {
            font-size: 0.96rem;
          }
        }
      `}</style>

      <img
        src="/images/testimonials-hero.jpg"
        alt="Clinical stethoscope examination"
        className="ts-bg-photo"
      />
      <div aria-hidden="true" className="ts-bg-overlay" />

      <div className="ts-card-wrap">
        <article className="ts-card" aria-live="polite">
          <div className="ts-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <blockquote className="ts-quote">&ldquo;{current.quote}&rdquo;</blockquote>
          <p className="ts-author">{current.author}</p>
          <p className="ts-meta">{current.meta}</p>
        </article>

        <div className="ts-dots" role="tablist" aria-label="Select testimonial">
          {TESTIMONIALS_LIST.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`View testimonial ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`ts-dot ${idx === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}