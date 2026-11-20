import { site } from "@/content/site";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import BgSection from "@/components/BgSection";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import LocationsBand from "@/components/LocationsBand";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import AwardsCarousel from "@/components/AwardsCarousel";
import SpecialityGrid from "@/components/SpecialityGrid";
import ResearchPreview from "@/components/ResearchPreview";

export default function Home() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: site.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <Hero />
    <BgSection tone="white" id="specialities" className="specialities-section">
      <SectionHead kw="Specialities" title="Focused care for better health" sub="Consultation and ongoing management across common metabolic and medical conditions." />
      <SpecialityGrid />
    </BgSection>
    <BgSection bg="journey" tone="dark" id="journey" className="journey-section">
      <SectionHead kw="Clinical Journey" title="A journey shaped by learning and practice" sub="Medical education, specialist training, professional fellowships and current clinical practice." />
      <Timeline items={site.milestones} />
    </BgSection>
    <LocationsBand />
    <BgSection bg="vision" tone="dark" id="research-vision" className="research-section">
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
    <BgSection bg="testimonials" tone="dark" id="testimonials" className="testimonials-section">
      <h1 className="sr-only">Testimonials: patient experiences</h1>
      <Testimonials />
    </BgSection>
    <BgSection tone="white" id="about-dr-susheel" className="home-about-section">
      <SectionHead kw="About Dr. Susheel Tyagi" title="A commitment to thoughtful medicine and better health" sub="Internal Medicine, patient awareness and continuity of care." />
      <div className="about-home-preview"><p>Dr. Susheel Tyagi is a physician in Internal Medicine with a medical background from King George’s Medical University (KGMU). His professional interests span diabetes, hypertension, obesity, infectious diseases and metabolic disorders.</p><p>His approach centres on understanding the individual behind the condition through careful evaluation, informed clinical decisions, patient awareness and continuity of care.</p><Link href="/about" className="btn">View full profile</Link></div>
    </BgSection>
    <CtaBand locations={false} />
  </>;
}
