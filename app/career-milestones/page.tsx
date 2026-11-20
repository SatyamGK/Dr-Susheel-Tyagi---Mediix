import React from 'react';
import Link from 'next/link';

const MILESTONES = [
  {
    id: 'medical-degree',
    category: 'Academic Foundation',
    title: 'Medical degree',
    description:
      "Medical education including MD from King George's Medical University (KGMU), Lucknow.",
  },
  {
    id: 'specialist-training',
    category: 'Postgraduate Training',
    title: 'Specialist training',
    description:
      'PG Diploma, Royal College of Physicians, United Kingdom.',
  },
  {
    id: 'fellowships',
    category: 'Clinical Recognition',
    title: 'National & International Fellowships',
    description:
      'Fellow of the American College of Physicians (FACP), FICP, and FIACM.',
  },
  {
    id: 'clinical-practice',
    category: 'Ghaziabad Practice',
    title: 'Dedicated adult & metabolic care',
    description:
      'Focused consultation for diabetes, hypertension, thyroid disorders, and internal medicine at Mediix Clinic, Indirapuram, Ghaziabad.',
  },
];

export default function CareerMilestonesPage() {
  return (
    <main className="home-matched-page">
      <style>{`
        .home-matched-page {
          background-color: #ffffff;
          color: #071921;
          min-height: 100vh;
        }
        .home-matched-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 24px 72px;
        }
        .home-matched-eyebrow {
          margin: 0 0 8px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f9d76;
          letter-spacing: 0.02em;
        }
        .home-matched-h1 {
          margin: 0;
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          color: #071921;
        }
        .home-matched-lead {
          margin: 12px 0 0;
          max-width: 760px;
          font-size: 1.05rem;
          line-height: 1.65;
          color: #334155;
        }
        .home-matched-list {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .home-matched-item {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px 28px;
          box-shadow: 0 4px 16px rgba(7, 25, 33, 0.04);
        }
        .home-matched-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #0f9d76;
          margin-bottom: 6px;
        }
        .home-matched-item-title {
          margin: 0;
          font-size: 1.35rem;
          font-weight: 700;
          color: #071921;
        }
        .home-matched-item-desc {
          margin: 8px 0 0;
          font-size: 1rem;
          line-height: 1.65;
          color: #334155;
        }
        .home-matched-cta-row {
          margin-top: 36px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .home-matched-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0f9d76;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px 22px;
          border-radius: 999px;
        }
        .home-matched-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #f8fafc;
          color: #071921;
          border: 1px solid #cbd5e1;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px 22px;
          border-radius: 999px;
        }
      `}</style>

      <div className="home-matched-container">
        <p className="home-matched-eyebrow">Clinical Journey</p>
        <h1 className="home-matched-h1">Education, training and practice</h1>
        <p className="home-matched-lead">
          Academic credentials, international fellowships, and dedicated clinical service in
          Ghaziabad.
        </p>

        <div className="home-matched-list">
          {MILESTONES.map((item) => (
            <article key={item.id} className="home-matched-item">
              <span className="home-matched-tag">{item.category}</span>
              <h2 className="home-matched-item-title">{item.title}</h2>
              <p className="home-matched-item-desc">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="home-matched-cta-row">
          <Link href="/about" className="home-matched-btn-primary">
            Explore Qualifications &amp; Approach
          </Link>
          <Link href="/contact" className="home-matched-btn-secondary">
            Visit Mediix Clinic
          </Link>
        </div>
      </div>
    </main>
  );
}