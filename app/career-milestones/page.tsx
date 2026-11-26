import type { Metadata } from "next";
import BgSection from "@/components/BgSection";
import ClinicalJourney from "@/components/ClinicalJourney";
import InternalPageBanner from "@/components/InternalPageBanner";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: 'Clinical Journey' , alternates: { canonical: "/career-milestones" } };

export default function Page() {
  return (
    <>
      <InternalPageBanner title="Clinical Journey" />
      <div className="internal-page-content">
        <BgSection bg="journey" tone="dark" id="journey" className="journey-section">
      <ClinicalJourney />
    </BgSection>
      </div>
      <CtaBand locations={false} />
    </>
  );
}
