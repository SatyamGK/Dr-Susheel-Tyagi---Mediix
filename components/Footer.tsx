import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#071921',
        color: '#cbd5e1',
        borderTop: '1px solid #163240',
        padding: '56px 24px 32px',
      }}
    >
      <style>{`
        .mediix-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mediix-footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1.3fr;
          gap: 40px;
        }
        @media (max-width: 860px) {
          .mediix-footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        .mediix-footer-links {
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mediix-footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.94rem;
          transition: color 0.2s ease;
        }
        .mediix-footer-links a:hover {
          color: #34d399;
        }
      `}</style>

      <div className="mediix-footer-inner">
        <div className="mediix-footer-grid">
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
              Dr. Susheel Tyagi
            </h2>
            <p style={{ margin: '6px 0 0', fontSize: '0.92rem', color: '#34d399', fontWeight: 600 }}>
              Consultant Physician · Internal Medicine &amp; Diabetes Care
            </p>
            <p style={{ margin: '14px 0 0', fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65 }}>
              Evidence-based adult medical care with clarity, continuity, and preventive focus.
            </p>
          </div>

          <div>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
              Quick Links
            </h3>
            <ul className="mediix-footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/specialities">Specialities</Link></li>
              <li><Link href="/career-milestones">Clinical Journey</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div style={{ fontSize: '0.93rem', lineHeight: 1.7 }}>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
              Contact &amp; Mediix Clinic
            </h3>
            <p style={{ margin: '10px 0 4px', fontWeight: 600, color: '#34d399' }}>
              Mediix Clinic — Indirapuram, Ghaziabad
            </p>
            <p style={{ margin: '0 0 6px', color: '#e2e8f0' }}>
              Dr. Susheel Tyagi, Consultant Physician (Internal Medicine &amp; Diabetes Care)
            </p>
            <p style={{ margin: '0 0 6px' }}>
              <strong style={{ color: '#ffffff' }}>Location:</strong> Indirapuram, Ghaziabad,
              Uttar Pradesh, India
            </p>
            <p style={{ margin: '0 0 6px' }}>
              <strong style={{ color: '#ffffff' }}>Clinical Focus:</strong> Diabetes, Hypertension,
              Metabolic Health &amp; Adult Internal Medicine
            </p>    
          </div>
        </div>

        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid #163240', display: 'flex',   flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, fontSize: '0.84rem', color: '#94a3b8', }} >
          <span>© {new Date().getFullYear()} Dr. Susheel Tyagi · Mediix Clinic. All rights reserved.</span>
          <span>Internal Medicine &amp; Diabetes Care · Ghaziabad</span>
        </div>
      </div>
    </footer>
  );
}