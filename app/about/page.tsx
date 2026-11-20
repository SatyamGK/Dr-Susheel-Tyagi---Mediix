import React from 'react';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#071921', minHeight: '100vh' }}>
      <style>{`
        .about-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 36px;
        }
        @media (max-width: 768px) {
          .about-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .about-white-card {
          background-color: #ffffff;
          color: #071921;
          border-radius: 18px;
          padding: 28px 30px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
          border: 1px solid #e2e8f0;
        }
        .about-card-title {
          margin: 0;
          font-size: 1.32rem;
          font-weight: 700;
          color: #071921;
        }
        .about-card-desc {
          margin: 10px 0 0;
          font-size: 0.96rem;
          line-height: 1.65;
          color: #334155;
        }
      `}</style>

      {/* Dark Navy Section: Medical Education & Fellowships */}
      <section style={{ backgroundColor: '#071921', color: '#ffffff', padding: '68px 0 76px' }}>
        <div className="about-container">
          <div style={{ maxWidth: 740 }}>
            <h1 style={{ margin: 0, fontSize: '2.15rem', fontWeight: 700, lineHeight: 1.25, color: '#ffffff' }}>
              A strong foundation in medical education and clinical knowledge
            </h1>
            <p style={{ margin: '14px 0 0', fontSize: '1.08rem', lineHeight: 1.6, color: '#cbd5e1' }}>
              Academic degrees and international fellowships supporting evidence-led adult care.
            </p>
          </div>

          <div className="about-cards-grid">
            <div className="about-white-card">
              <h2 className="about-card-title">MD – Internal Medicine</h2>
              <p className="about-card-desc">
                Postgraduate medical degree from King George&apos;s Medical University (KGMU),
                Lucknow.
              </p>
            </div>

            <div className="about-white-card">
              <h2 className="about-card-title">PG Diploma (UK)</h2>
              <p className="about-card-desc">
                Postgraduate Diploma from the Royal College of Physicians, United Kingdom.
              </p>
            </div>

            <div className="about-white-card">
              <h2 className="about-card-title">Fellow, ACP (USA)</h2>
              <p className="about-card-desc">
                Fellow of the American College of Physicians (FACP), recognising clinical
                excellence.
              </p>
            </div>

            <div className="about-white-card">
              <h2 className="about-card-title">FICP &amp; FIACM</h2>
              <p className="about-card-desc">
                Fellow of the Indian College of Physicians and Indian Association of Clinical
                Medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Approach Section */}
      <section style={{ backgroundColor: '#0b222d', color: '#ffffff', padding: '68px 0 76px' }}>
        <div className="about-container">
          <div style={{ maxWidth: 740 }}>
            <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#34d399' }}>
              Clinical Philosophy
            </p>
            <h2 style={{ margin: '8px 0 0', fontSize: '2rem', fontWeight: 700, color: '#ffffff' }}>
              Areas of clinical interest &amp; approach
            </h2>
          </div>

          <div className="about-cards-grid">
            <div className="about-white-card">
              <h3 className="about-card-title">Understanding the individual</h3>
              <p className="about-card-desc">
                Taking the time to understand medical history, symptoms, lifestyle, and relevant
                health factors.
              </p>
            </div>

            <div className="about-white-card">
              <h3 className="about-card-title">Evidence-based decisions</h3>
              <p className="about-card-desc">
                Using established medical knowledge, appropriate investigations, and clinical
                judgment to guide treatment decisions.
              </p>
            </div>

            <div className="about-white-card">
              <h3 className="about-card-title">Prevention and awareness</h3>
              <p className="about-card-desc">
                Encouraging individuals to understand their health, recognise risk factors, and
                take practical preventive measures.
              </p>
            </div>

            <div className="about-white-card">
              <h3 className="about-card-title">Continuity of care</h3>
              <p className="about-card-desc">
                Recognising that many health conditions require ongoing attention, follow-up, and
                adjustments to treatment over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section (Google View Map & All 3 Buttons Removed) */}
      <section style={{ backgroundColor: '#ffffff', color: '#071921', padding: '72px 0' }}>
        <div className="about-container">
          <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#0f9d76' }}>
            Consultation
          </p>
          <h2 style={{ margin: '8px 0 0', fontSize: '2.15rem', fontWeight: 700, color: '#071921' }}>
            Meet Dr. Susheel Tyagi at Mediix Clinic
          </h2>
          <p style={{ margin: '14px 0 0', maxWidth: 720, fontSize: '1.05rem', lineHeight: 1.65, color: '#334155' }}>
            Comprehensive consultation for diabetes, hypertension, metabolic health, and adult
            internal medicine in Indirapuram, Ghaziabad.
          </p>
        </div>
      </section>
    </main>
  );
}