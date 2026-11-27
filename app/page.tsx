import { site } from "@/content/site";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import BgSection from "@/components/BgSection";
import ClinicalJourney from "@/components/ClinicalJourney";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import LocationsBand from "@/components/LocationsBand";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import AwardsCarousel from "@/components/AwardsCarousel";
import SpecialityGrid from "@/components/SpecialityGrid";
import ResearchPreview from "@/components/ResearchPreview";
import AboutProfile from "@/components/AboutProfile";

export default function Home() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: site.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <Hero />
    <BgSection tone="white" id="specialities" className="specialities-section">
      <div className="sticky-section-title">
        <h1 className="section-h1">Specialities</h1>
      </div>
      <SpecialityGrid />
    </BgSection>
    <BgSection tone="white" id="journey" className="journey-section">
      <div className="sticky-section-title">
        <h1 className="section-h1">Medical Journey</h1>
      </div>
      <ClinicalJourney />
    </BgSection>
    <LocationsBand />
    <BgSection tone="white" id="research-vision" className="research-section">
      <div className="sticky-section-title">
        <h1 className="section-h1">Research &amp; Vision</h1>
      </div>
      <ResearchPreview />
    </BgSection>
    <BgSection tone="white" narrow id="common-questions" className="home-faq-section">
      <SectionHead kw="Patient information" title="Frequently asked questions" sub="Helpful answers about consultation with Dr. Susheel Tyagi." />
      <Reveal type="up" items="details" className="faq">{site.faqs.map((f, i) => <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>)}</Reveal>
    </BgSection>
    <BgSection tone="white" id="gallery" className="awards-section">
      <SectionHead kw="Gallery" title="A look inside the practice" sub="Moments from Dr. Susheel Tyagi's clinical practice and Mediix Clinic." />
      <AwardsCarousel />
    </BgSection>
    <BgSection tone="white" id="testimonials" className="testimonials-section">
      <div className="sticky-section-title">
        <h1 className="section-h1">Testimonials</h1>
      </div>
      <div className="testimonial-photo-panel">
        <h2 className="section-h2">Patient experiences</h2>
        <Testimonials />
      </div>
    </BgSection>
    {/* <BgSection tone="white" id="about-dr-susheel" className="home-about-section">
      <SectionHead kw="About Dr. Susheel Tyagi" title="A commitment to thoughtful medicine and better health" sub="Internal Medicine, patient awareness and continuity of care." />
      <div className="about-home-preview"><p>Dr. Susheel Tyagi is a physician in Internal Medicine with a medical background from King George’s Medical University (KGMU). His professional interests span diabetes, hypertension, obesity, infectious diseases and metabolic disorders.</p><p>His approach centres on understanding the individual behind the condition through careful evaluation, informed clinical decisions, patient awareness and continuity of care.</p><Link href="/about" className="btn">View full profile</Link></div>
    </BgSection> */}
    <AboutProfile />
    <CtaBand locations={false} />
  </>;
}
