import BgSection from "./BgSection";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { site } from "@/content/site";
import { locations, clinicMapEmbed } from "@/content/media";
import { BookButton } from "./Booking";

export default function LocationsBand({ showMap = true }: { showMap?: boolean }) {
  const clinic = locations[0];
  const waUrl = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello, I would like to enquire about an appointment with Dr. Susheel Tyagi at Mediix Clinic."
  )}`;

  return (
    <BgSection tone="white" id="consultation" className="consultation-section">
      <SectionHead
        kw="Consultation"
        title="Meet Dr. Susheel Tyagi at Mediix Clinic"
        sub="Comprehensive consultation for diabetes, hypertension, metabolic health, and adult internal medicine in Indirapuram, Ghaziabad."
      />
      <Reveal type="pop" className="consultation-grid">
        <article className="card loc consultation-card">
          <div className="consultation-card-top">
            <span className="badge">Primary Outpatient Clinic</span>
            <a className="btn ghost dark small" href={clinic.map} target="_blank" rel="noopener noreferrer">
              <Icon name="pin" size={15} /> Open in Google Maps
            </a>
          </div>

          <h2>{clinic.name}</h2>

          <div className="clinic-detail-list">
            <p>
              <Icon name="pin" size={18} />
              <span>
                <strong>Address:</strong> {clinic.address} (Near Swarn Jayanti Park)
              </span>
            </p>
            <p>
              <Icon name="clock" size={18} />
              <span>
                <strong>OPD Timings:</strong> {clinic.timing}
              </span>
            </p>
            <p>
              <Icon name="phone" size={18} />
              <span>
                <strong>Appointment Desk:</strong>{" "}
                <a href="tel:+919625878756">+91 96258 78756</a> ·{" "}
                <a href="tel:+917303190200">+91 73031 90200</a>
              </span>
            </p>
            <p>
              <Icon name="stethoscope" size={18} />
              <span>
                <strong>Services:</strong> Diabetes &amp; Blood Glucose Management, Hypertension, Thyroid &amp; Metabolic Care, Adult Internal Medicine, ECG &amp; Diagnostic Coordination
              </span>
            </p>
          </div>

          <p className="consultation-note">
            Hospital Affiliations: Also consulting at Yashoda Super Speciality Hospital &amp; Avantika Hospital.
          </p>

          {/* <div className="clinic-action-bar">
            <BookButton>Book Appointment</BookButton>
            <a className="btn clinic-call-btn" href="tel:+919625878756">
              <Icon name="phone" size={17} /> Call Clinic
            </a>
            <a className="btn clinic-wa-btn" href={waUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={17} /> WhatsApp
            </a>
          </div> */}
        </article>

       
      </Reveal>
    </BgSection>
  );
}