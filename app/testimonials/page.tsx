import type { Metadata } from "next";
import BgSection from "@/components/BgSection";
import Testimonials from "@/components/Testimonials";
import InternalPageBanner from "@/components/InternalPageBanner";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: 'Testimonials' , alternates: { canonical: "/testimonials" } };

export default function Page() {
  return (
    <>
      <InternalPageBanner title="Testimonials" />
      <div className="internal-page-content">
        <BgSection bg="testimonials" tone="dark" id="testimonials" className="testimonials-section">
      
      <Testimonials />
    </BgSection>
      </div>
      <CtaBand locations={false} />
    </>
  );
}
