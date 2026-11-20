import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LocationsBand from "@/components/LocationsBand";
import BgSection from "@/components/BgSection";
import SectionHead from "@/components/SectionHead";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact & Clinic Location | Dr. Susheel Tyagi",
  description: "Visit Mediix Clinic at 14/3 Niti Khand-2, Indirapuram, Ghaziabad. Check OPD timings, directions, phone and WhatsApp contact details.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        bg="contact"
        eyebrow="Contact"
        title="Plan your visit to Mediix Clinic"
        lead="Clinic address, OPD timings, Google Map directions, and direct phone or WhatsApp booking support."
      />
      <LocationsBand showMap={true} />
      <BgSection tone="light">
        <SectionHead
          kw="Patient Guidance"
          title="Before you arrive at the clinic"
          sub="Helpful information to make your consultation smooth and productive."
        />
        <div className="about-interest-grid">
          <article>
            <h2><Icon name="pin" size={20} /> Landmark &amp; Parking</h2>
            <p>Located at Plot No. 14/3, Niti Khand-2, Indirapuram, right near Swarn Jayanti Park. Easily accessible from Vaishali, Vasundhara, Kaushambi, and Sector 62 Noida.</p>
          </article>
          <article>
            <h2><Icon name="book" size={20} /> Reports to Carry</h2>
            <p>Please bring previous prescriptions, recent blood sugar / HbA1c / lipid profile reports, and a list of all daily medications.</p>
          </article>
        </div>
      </BgSection>
      <CtaBand locations={false} />
    </>
  );
}