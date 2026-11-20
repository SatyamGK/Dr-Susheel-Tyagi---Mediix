import Reveal from "./Reveal";
import BgSection from "./BgSection";
import LocationsBand from "./LocationsBand";
import { BookButton } from "./Booking";
import { site } from "@/content/site";
import Icon from "./Icon";

export default function CtaBand({ locations = true }: { locations?: boolean }) {
  return (
    <>
      {locations && <LocationsBand />}
      <BgSection bg="cta" tone="dark" className="cta appointment-steps" id="appointment">
        <Reveal type="zoom" className="appointment-content">
          <h1 className="section-h1 on-dark">Your next step</h1>
          <h2 className="cta-main-title">Make time for your health</h2>
          <p className="sub">Request an appointment in a few simple steps.</p>
          <div className="appointment-step-grid">
            {site.steps.map((step, index) => (
              <article className="appointment-step" key={step.t}>
                <span className="appointment-step-no">0{index + 1}</span>
                <span className="appointment-step-icon"><Icon name={step.icon} size={22} /></span>
                <h3>{step.t.replace(/^\d+\.\s*/, "")}</h3>
                <p>{step.d}</p>
              </article>
            ))}
          </div>
          <BookButton>Request an appointment</BookButton>
        </Reveal>
      </BgSection>
    </>
  );
}