'use client';

import React, { useState } from 'react';

export interface WavyGalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  badge?: string;
}

interface WavyGalleryProps {
  items?: WavyGalleryItem[];
  heading?: string;
  subheading?: string;
  className?: string;
}

const DEFAULT_ITEMS: WavyGalleryItem[] = [
  {
    id: '1',
    src: '/images/clinic-1.jpg',
    alt: 'Mediix Clinic consultation space',
    title: 'Mediix Clinic, Indirapuram',
    caption: 'Calm, focused adult consultation for diabetes, hypertension, and metabolic care.',
    badge: 'Clinic Care',
  },
  {
    id: '2',
    src: '/images/clinic-2.jpg',
    alt: 'Clinical evaluation and diagnostic review',
    title: 'Evidence-Based Evaluation',
    caption: 'Structured review of blood sugar logs, lab trends, and long-term risk factors.',
    badge: 'Internal Medicine',
  },
  {
    id: '3',
    src: '/images/clinic-3.jpg',
    alt: 'Patient counseling and follow-up care',
    title: 'Personalized Follow-Up',
    caption: 'Clear treatment explanations and steady longitudinal care.',
    badge: 'Diabetes Care',
  },
];

export default function WavyGallery({
  items = DEFAULT_ITEMS,
  heading,
  subheading,
  className = '',
}: WavyGalleryProps) {
  const [activeItem, setActiveItem] = useState<WavyGalleryItem | null>(null);
  const safeItems = items.length > 0 ? items : DEFAULT_ITEMS;

  return (
    <section className={`mediix-wavy-section ${className}`}>
      <style>{`
        .mediix-wavy-section {
          position: relative;
          overflow: hidden;
          padding: 48px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mediix-wavy-bg {
          position: absolute;
          left: 0;
          right: 0;
          top: 24px;
          pointer-events: none;
          z-index: 0;
        }
        .mediix-wavy-header {
          position: relative;
          z-index: 1;
          margin-bottom: 32px;
          max-width: 680px;
        }
        .mediix-wavy-heading {
          margin: 0;
          font-size: 1.85rem;
          font-weight: 700;
          color: #071921;
        }
        .mediix-wavy-sub {
          margin: 8px 0 0;
          font-size: 1rem;
          color: #425866;
          line-height: 1.6;
        }
        .mediix-wavy-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .mediix-wavy-grid {
            grid-template-columns: 1fr;
          }
        }
        .mediix-wavy-card {
          display: block;
          width: 100%;
          text-align: left;
          background: #ffffff;
          border: 1px solid #dbe4ea;
          border-radius: 18px;
          padding: 12px;
          box-shadow: 0 8px 24px rgba(7, 25, 33, 0.06);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .mediix-wavy-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(7, 25, 33, 0.12);
        }
        .mediix-wavy-card.offset-mid {
          margin-top: 24px;
        }
        @media (max-width: 900px) {
          .mediix-wavy-card.offset-mid {
            margin-top: 0;
          }
        }
        .mediix-wavy-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          background: #0d2633;
        }
        .mediix-wavy-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .mediix-wavy-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(7, 25, 33, 0.85);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
        }
        .mediix-wavy-body {
          padding: 14px 6px 6px;
        }
        .mediix-wavy-title {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: #071921;
        }
        .mediix-wavy-caption {
          margin: 6px 0 0;
          font-size: 0.9rem;
          color: #425866;
          line-height: 1.5;
        }
        .mediix-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(7, 25, 33, 0.82);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .mediix-modal-box {
          background: #ffffff;
          border-radius: 18px;
          max-width: 720px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <div aria-hidden="true" className="mediix-wavy-bg">
        <svg viewBox="0 0 1440 220" fill="none" style={{ width: '100%', height: 180, opacity: 0.5 }} preserveAspectRatio="none">
          <path
            d="M0 115C240 35 480 195 720 115C960 35 1200 195 1440 115"
            stroke="#0f9d76"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0 115C240 35 480 195 720 115C960 35 1200 195 1440 115;
                M0 115C240 195 480 35 720 115C960 195 1200 35 1440 115;
                M0 115C240 35 480 195 720 115C960 35 1200 195 1440 115
              "
            />
          </path>
        </svg>
      </div>

      {(heading || subheading) && (
        <div className="mediix-wavy-header">
          {heading && <h2 className="mediix-wavy-heading">{heading}</h2>}
          {subheading && <p className="mediix-wavy-sub">{subheading}</p>}
        </div>
      )}

      <div className="mediix-wavy-grid">
        {safeItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className={`mediix-wavy-card ${index % 3 === 1 ? 'offset-mid' : ''}`}
          >
            <div className="mediix-wavy-img-wrap">
              <img src={item.src} alt={item.alt} className="mediix-wavy-img" loading="lazy" />
              {item.badge && <span className="mediix-wavy-badge">{item.badge}</span>}
            </div>
            {(item.title || item.caption) && (
              <div className="mediix-wavy-body">
                {item.title && <h3 className="mediix-wavy-title">{item.title}</h3>}
                {item.caption && <p className="mediix-wavy-caption">{item.caption}</p>}
              </div>
            )}
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
          className="mediix-modal-backdrop"
        >
          <div onClick={(e) => e.stopPropagation()} className="mediix-modal-box">
            <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#071921' }}>
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Close preview"
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  width: 36,
                  height: 36,
                  borderRadius: '999px',
                  border: 'none',
                  background: 'rgba(7, 25, 33, 0.8)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                ✕
              </button>
            </div>
            {(activeItem.title || activeItem.caption) && (
              <div style={{ padding: 20 }}>
                {activeItem.title && (
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#071921' }}>
                    {activeItem.title}
                  </h3>
                )}
                {activeItem.caption && (
                  <p style={{ margin: '8px 0 0', fontSize: '0.95rem', color: '#425866' }}>
                    {activeItem.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}