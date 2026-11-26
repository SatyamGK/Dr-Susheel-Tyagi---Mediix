import type { Metadata } from "next";
import BgSection from "@/components/BgSection";
import SectionHead from "@/components/SectionHead";
import InternalPageBanner from "@/components/InternalPageBanner";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: 'About Dr. Susheel Tyagi' , alternates: { canonical: "/about" } };

export default function Page() {
  return (
    <>
      <InternalPageBanner title="About Dr. Susheel Tyagi" />
      <div className="internal-page-content">
        <BgSection tone="white" id="about-dr-susheel" className="home-about-section">
      <SectionHead kw="About Dr. Susheel Tyagi" title="A commitment to thoughtful medicine and better health" sub="Internal Medicine, patient awareness and continuity of care." />
      <div className="about-home-preview"><p>Dr. Susheel Tyagi is a physician in Internal Medicine with a medical background from King George’s Medical University (KGMU). His professional interests span diabetes, hypertension, obesity, infectious diseases and metabolic disorders.</p><p>His approach centres on understanding the individual behind the condition through careful evaluation, informed clinical decisions, patient awareness and continuity of care.</p></div>
    </BgSection>
      </div>
      <CtaBand locations={false} />
    </>
  );
}
