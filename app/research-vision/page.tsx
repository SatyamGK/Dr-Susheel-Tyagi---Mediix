import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import BgSection from "@/components/BgSection";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Research & Vision | Sugar Coat Diabetes Care Platform",
  description: "The Sugar Coat concept: a multilingual, privacy-respecting platform to support continuity, engagement and coordination in diabetes care between clinic visits.",
};

export default function ResearchVisionPage() {
  return (
    <>
      <PageHero
        bg="vision"
        eyebrow="Research & Vision"
        title="Supporting continuity in diabetes care"
        lead="A multilingual, privacy-respecting approach to helping patients stay connected between clinic visits."
      />
      <BgSection tone="white" narrow>
        <SectionHead
          kw="Research & Vision"
          title="What problem are we solving?"
          sub="Diabetes care is a lifelong process, yet continuity between appointments can be difficult to sustain."
        />
        <div className="longform-copy">
          <p>Diabetes care is a lifelong process, yet many patients experience it as a sequence of isolated clinic visits. Between consultations, regular monitoring, scheduled follow-ups, nutrition counselling, lifestyle changes, and patient education often lose momentum. Patients may disengage because of work constraints, financial pressure, digital barriers, caregiver dependence, stigma, or diabetes-related fatigue.</p>
          <p>For diabetologists and care teams, fragmented records and manual calls/messages make it difficult to identify unmet follow-up needs, respond to patient-reported concerns, coordinate dietician support, and deliver timely, personalised encouragement at scale. We envision an assistive, privacy-respecting, multilingual solution that keeps patients engaged between visits without replacing clinical judgement.</p>
        </div>
      </BgSection>

      <BgSection bg="vision" tone="dark">
        <SectionHead
          kw="The Sugar Coat Concept"
          title="Five pillars of connected diabetes support"
          sub="Designed to make clinician-approved care plans easier to follow in daily life."
        />
        <div className="research-feature-grid">
          <article><h2>AI Care Companion</h2><p>A voice-first, supportive guide—not a second doctor. It understands each patient’s routine, explains clinician- and dietician-approved guidance in simple language, and provides timely, caring reminders.</p></article>
          <article><h2>Care Connections</h2><p>With patient consent, it helps complete practical next steps: booking visits, requesting lab reports, reaching pharmacies or dieticians, and involving a caregiver.</p></article>
          <article><h2>Care Passport</h2><p>A secure, patient-owned hub for health records, including reports, prescriptions, care plans, appointments, and consented routine updates.</p></article>
          <article><h2>Clinic Intelligence Layer</h2><p>A clear, non-clinical view of each patient’s latest updates, pending actions, requests, and reported barriers for the care team.</p></article>
          <article><h2>Community &amp; Education</h2><p>Curated, trustworthy patient education, local health camps, and structured milestones to sustain long-term motivation.</p></article>
        </div>
        <p className="research-safety-note">Sugar Coat is an assistive coordination and engagement concept. It does not provide medical diagnosis, treatment advice, or automated clinical decision-making.</p>
      </BgSection>
      <CtaBand />
    </>
  );
}