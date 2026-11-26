import type { Metadata } from "next";
import LocationsBand from "@/components/LocationsBand";
import InternalPageBanner from "@/components/InternalPageBanner";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Contact & Clinic Location | Dr. Susheel Tyagi",
  description: "Visit Mediix Clinic at 14/3 Niti Khand-2, Indirapuram, Ghaziabad. Check OPD timings, directions, phone and WhatsApp contact details.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <InternalPageBanner title="Contact" />
      <div className="internal-page-content">
        <LocationsBand />
      </div>
      <CtaBand locations={false} />
    </>
  );
}
