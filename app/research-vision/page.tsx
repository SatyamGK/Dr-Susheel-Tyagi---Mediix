import type { Metadata } from "next";
import BgSection from "@/components/BgSection";
import ResearchPreview from "@/components/ResearchPreview";
import InternalPageBanner from "@/components/InternalPageBanner";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Research & Vision | Sugar Coat Diabetes Care Platform",
  description: "The Sugar Coat concept: a multilingual, privacy-respecting platform to support continuity, engagement and coordination in diabetes care between clinic visits.",
  alternates: { canonical: "/research-vision" },
};

export default function Page() {
  return (
    <>
      <InternalPageBanner title="Research & Vision" />
      <div className="internal-page-content">
        <BgSection bg="vision" tone="dark" id="research-vision" className="research-section">
      <ResearchPreview />
    </BgSection>
      </div>
      <CtaBand locations={false} />
    </>
  );
}
