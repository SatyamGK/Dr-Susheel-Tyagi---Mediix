import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import Icon from "@/components/Icon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book an Appointment with Dr. Susheel Tyagi",
  description: "Request an appointment with Dr. Susheel Tyagi at Mediix Clinic, Indirapuram, Ghaziabad.",
};

export default function Book() {
  const waHref = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello, I would like to book an appointment with Dr. Susheel Tyagi at Mediix Clinic."
  )}`;

  return (
    <>
     <PageHero title="Plan your visit" />
      <section className="sec">
        <div className="book-direct-bar">
          <span>Prefer instant assistance?</span>
          <div className="book-direct-actions">
            <a className="btn clinic-call-btn" href="tel:+919625878756">
              <Icon name="phone" size={17} /> Call +91 96258 78756
            </a>
            <a className="btn clinic-wa-btn" href={waHref} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={17} /> Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="bk-card">
          <BookingForm />
        </div>
      </section>
    </>
  );
}