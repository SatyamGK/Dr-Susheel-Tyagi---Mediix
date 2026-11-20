"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    id: "medical-degree",
    category: "Academic Foundation",
    title: "Medical degree",
    description:
      "Medical education including MD from King George's Medical University (KGMU), Lucknow.",
  },
  {
    id: "specialist-training",
    category: "Postgraduate Training",
    title: "Specialist training",
    description: "PG Diploma, Royal College of Physicians, United Kingdom.",
  },
  {
    id: "fellowships",
    category: "Clinical Recognition",
    title: "National & International Fellowships",
    description: "Fellow of the American College of Physicians (FACP), FICP, and FIACM.",
  },
  {
    id: "clinical-practice",
    category: "Ghaziabad Practice",
    title: "Dedicated adult & metabolic care",
    description:
      "Focused consultation for diabetes, hypertension, thyroid disorders, and internal medicine at Mediix Clinic, Indirapuram, Ghaziabad.",
  },
];

export default function CareerMilestonesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((card): card is HTMLElement => card !== null);
      if (cards.length !== MILESTONES.length) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(cards, { autoAlpha: 0, y: 55, scale: 0.94, pointerEvents: "none" });
        gsap.set(cards[0], { autoAlpha: 1, y: 0, scale: 1, pointerEvents: "auto" });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.65,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }
              const active = Math.min(cards.length - 1, Math.floor(self.progress * cards.length));
              cards.forEach((card, index) => {
                card.style.pointerEvents = index === active ? "auto" : "none";
              });
            },
          },
        });

        // The first milestone is visible initially. Each subsequent milestone
        // replaces it as the user scrolls; reverse scrolling reverses the timeline.
        for (let index = 1; index < cards.length; index++) {
          tl.to(cards[index - 1], {
            autoAlpha: 0,
            y: -45,
            scale: 0.96,
            duration: 0.35,
          });
          tl.fromTo(
            cards[index],
            { autoAlpha: 0, y: 55, scale: 0.94 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.65 },
            "<"
          );
          tl.to({}, { duration: 0.25 });
        }

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className="cj-page">
      <section ref={sectionRef} className="cj-scroll" aria-labelledby="cj-title">
        <div className="cj-sticky">
          <div className="cj-glow" aria-hidden="true" />
          <div className="cj-shell">
            <header className="cj-heading">
              <p className="cj-eyebrow">Clinical Journey</p>
              <h1 id="cj-title">Education, training and practice</h1>
              <p className="cj-lead">
                Academic credentials, international fellowships, and dedicated clinical service in Ghaziabad.
              </p>
            </header>

            <div className="cj-stage" aria-label="Clinical journey milestones">
              {MILESTONES.map((item, index) => (
                <article
                  className="cj-card"
                  key={item.id}
                  ref={(element) => { cardsRef.current[index] = element; }}
                  aria-label={`${index + 1} of ${MILESTONES.length}: ${item.title}`}
                >
                  <div className="cj-card-top">
                    <span className="cj-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="cj-category">{item.category}</span>
                  </div>
                  <div className="cj-card-content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <span className="cj-watermark" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>

            {/* <div className="cj-progress-row" aria-hidden="true">
              <span>01</span>
              <div className="cj-progress-track"><div ref={progressRef} className="cj-progress-fill" /></div>
              <span>04</span>
            </div>
            <p className="cj-scroll-hint">Scroll to explore the journey</p> */}
          </div>
        </div>
      </section>

      <section className="cj-after">
        <div className="cj-after-inner">
          <p className="cj-eyebrow">Continue exploring</p>
          <h2>Thoughtful medicine, grounded in experience.</h2>
          <p>Learn more about Dr. Susheel Tyagi&apos;s qualifications and approach, or find out how to visit Mediix Clinic.</p>
          <div className="cj-actions">
            <Link href="/about" className="cj-button cj-primary">Explore Qualifications &amp; Approach</Link>
            <Link href="/contact" className="cj-button cj-secondary">Visit Mediix Clinic</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cj-page { background: #f3f8f6; color: #0b2636; overflow: clip; }
        .cj-scroll { position: relative; height: 420svh; }
        .cj-sticky { position: sticky; top: 0; height: 100svh; min-height: 620px; overflow: hidden; display: flex; align-items: center; background: radial-gradient(circle at 78% 50%, #dff5ee 0%, #f4faf8 45%, #fff 100%); }
        .cj-glow { position: absolute; right: -13vw; top: 5%; width: min(65vw, 900px); aspect-ratio: 1; border: 1px solid rgba(15,166,138,.16); border-radius: 50%; box-shadow: 0 0 0 65px rgba(15,166,138,.025), 0 0 0 135px rgba(15,166,138,.02); pointer-events: none; }
        .cj-shell { position: relative; z-index: 1; width: min(1180px, 90%); margin: 0 auto; padding: 100px 0 30px; }
        .cj-heading { max-width: 800px; margin-bottom: clamp(16px, 3vh, 30px); }
        .cj-eyebrow { color: #087e6b; text-transform: uppercase; letter-spacing: .13em; font-weight: 800; font-size: .78rem; margin-bottom: 10px; }
        .cj-heading h1 { font-size: clamp(2rem, 4.4vw, 4.2rem); line-height: 1.08; letter-spacing: -.045em; margin: 0; }
        .cj-lead { color: #4a636d; max-width: 700px; line-height: 1.65; font-size: clamp(.95rem, 1.4vw, 1.1rem); margin-top: 14px; }
        .cj-stage { position: relative; height: clamp(255px, 39vh, 380px); }
        .cj-card { position: absolute; inset: 0; border-radius: 24px; padding: clamp(22px, 3vw, 42px); overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(125deg, #0b2636 0%, #0c4848 75%, #087e6b 130%); color: #fff; box-shadow: 0 24px 55px rgba(11,31,46,.18); will-change: transform, opacity; }
        .cj-card:not(:first-child) { visibility: hidden; opacity: 0; }
        .cj-card-top { position: relative; z-index: 2; display: flex; align-items: center; gap: 18px; }
        .cj-number { font-size: .9rem; font-weight: 800; color: #81e9d0; }
        .cj-category { border: 1px solid rgba(255,255,255,.28); border-radius: 999px; padding: 7px 14px; font-size: .78rem; font-weight: 700; }
        .cj-card-content { position: relative; z-index: 2; max-width: 730px; }
        .cj-card-content h2 { color: #fff; font-size: clamp(1.6rem, 3.5vw, 3.1rem); line-height: 1.1; margin: 0 0 14px; }
        .cj-card-content p { max-width: 660px; font-size: clamp(.98rem, 1.6vw, 1.2rem); line-height: 1.65; color: rgba(255,255,255,.87); }
        .cj-watermark { position: absolute; right: 25px; bottom: -70px; font-size: clamp(12rem, 28vw, 25rem); font-weight: 900; line-height: 1; letter-spacing: -.12em; color: rgba(255,255,255,.045); pointer-events: none; }
        .cj-progress-row { display: flex; gap: 15px; align-items: center; margin-top: 23px; color: #47726c; font-size: .8rem; font-weight: 800; }
        .cj-progress-track { flex: 1; height: 4px; border-radius: 99px; overflow: hidden; background: #d1e6df; }
        .cj-progress-fill { height: 100%; width: 100%; background: #0fa68a; transform: scaleX(0); transform-origin: left; }
        .cj-scroll-hint { margin-top: 10px; color: #62827b; font-size: .8rem; letter-spacing: .04em; }
        .cj-after { padding: clamp(70px, 9vw, 130px) 5vw; background: #fff; }
        .cj-after-inner { max-width: 1100px; margin: auto; }
        .cj-after h2 { max-width: 800px; font-size: clamp(2rem, 4.5vw, 3.7rem); line-height: 1.12; margin: 0 0 18px; }
        .cj-after p:not(.cj-eyebrow) { max-width: 680px; color: #4a636d; line-height: 1.7; }
        .cj-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }
        .cj-button { display: inline-flex; align-items: center; justify-content: center; text-align: center; border-radius: 999px; padding: 13px 22px; font-weight: 700; text-decoration: none; font-size: .92rem; }
        .cj-primary { background: #0fa68a; color: #04221c; }
        .cj-secondary { background: #f3f8f6; color: #0b2636; border: 1px solid #cfe2dc; }
        @media (max-width: 820px) {
          .cj-sticky { min-height: 0; }
          .cj-shell { width: 90%; padding: 84px 0 16px; }
          .cj-heading { margin-bottom: 20px; }
          .cj-stage { height: clamp(280px, 43svh, 430px); }
          .cj-card { border-radius: 18px; padding: 24px; }
          .cj-card-content h2 { font-size: clamp(1.55rem, 6vw, 2.4rem); }
          .cj-card-content p { font-size: .96rem; }
          .cj-watermark { bottom: -25px; }
        }
        @media (max-width: 520px) {
          .cj-shell { padding-top: 76px; }
          .cj-heading h1 { font-size: clamp(1.7rem, 8vw, 2.5rem); }
          .cj-lead { font-size: .86rem; line-height: 1.5; margin-top: 8px; }
          .cj-stage { height: min(43svh, 370px); min-height: 245px; }
          .cj-card { padding: 20px; }
          .cj-card-content h2 { font-size: clamp(1.4rem, 6vw, 1.85rem); margin-bottom: 10px; }
          .cj-card-content p { font-size: .88rem; line-height: 1.5; }
          .cj-category { font-size: .7rem; padding: 5px 10px; }
          .cj-progress-row { margin-top: 14px; }
          .cj-scroll-hint { font-size: .72rem; }
        }
        @media (max-height: 650px) and (min-width: 821px) {
          .cj-shell { padding-top: 85px; }
          .cj-heading { margin-bottom: 12px; }
          .cj-stage { height: 40vh; min-height: 200px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cj-scroll { height: auto; }
          .cj-sticky { position: relative; height: auto; min-height: 0; padding: 50px 0; }
          .cj-stage { height: auto; display: grid; gap: 16px; }
          .cj-card, .cj-card:not(:first-child) { position: relative; inset: auto; min-height: 240px; opacity: 1 !important; visibility: visible !important; transform: none !important; }
          .cj-progress-row, .cj-scroll-hint { display: none; }
        }
      `}</style>
    </main>
  );
}
