import type { Metadata } from "next";
import BgSection from "@/components/BgSection";
import SectionHead from "@/components/SectionHead";
import SpecialityGrid from "@/components/SpecialityGrid";
import InternalPageBanner from "@/components/InternalPageBanner";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Diabetes & Internal Medicine Specialities", description: "Explore consultation areas with Dr. Susheel Tyagi in Indirapuram, Ghaziabad, including type 1 and type 2 diabetes, hypertension, obesity and metabolic health." , alternates: { canonical: "/specialities" } };

export default function Page() {
  return (
    <>
      <InternalPageBanner title="Specialities" />
      <div className="internal-page-content">
        <BgSection tone="white" id="specialities" className="specialities-section">
      <SectionHead kw="Specialities" title="Focused care for better health" />
      <SpecialityGrid />
    </BgSection>
      </div>
      <CtaBand locations={false} />
    </>
  );
}
