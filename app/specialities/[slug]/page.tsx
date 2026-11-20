import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { BookButton } from "@/components/Booking";

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export function generateStaticParams() {
  return site.conditions.map((condition) => ({ slug: slugify(condition.t) }));
}
function getCondition(slug: string) {
  return site.conditions.find((condition) => slugify(condition.t) === slug);
}
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const condition = getCondition(params.slug);
  if (!condition) return { title: "Speciality not found" };
  return {
    title: `${condition.t} Consultation in Indirapuram, Ghaziabad`,
    description: `${condition.d} Learn about consultation for ${condition.t} with Dr. Susheel Tyagi at Mediix Clinic, Indirapuram, Ghaziabad.`,
  };
}
export default function SpecialityDetailPage({ params }: { params: { slug: string } }) {
  const condition = getCondition(params.slug);
  if (!condition) notFound();
  return (
    <div className="speciality-detail-page">
      <section className="speciality-detail-hero">
        <h1><span className="eyebrow">Speciality · Dr. Susheel Tyagi</span>{condition.t}</h1>
        <p>{condition.d}</p>
        <BookButton />
      </section>
      <section className="speciality-detail-content">
        <h2>Understanding {condition.t}</h2>
        <p>{condition.detail}</p>
        <h2>How the consultation may help</h2>
        <p>A consultation can provide an opportunity to discuss your health history, symptoms, relevant reports, current medicines and questions. The doctor can explain the assessment and follow-up options that are appropriate to your individual circumstances.</p>
        <h2>What to bring to your consultation</h2>
        <ul>
          <li>Previous medical reports and relevant test results.</li>
          <li>A current list of medicines and supplements.</li>
          <li>Relevant home blood-glucose or blood-pressure readings, where applicable.</li>
          <li>Questions or concerns you would like to discuss.</li>
        </ul>
        <p className="medical-disclaimer">This information is general educational content and is not a substitute for an individual medical assessment or emergency care.</p>
        <div className="speciality-detail-actions"><BookButton /><Link className="btn ghost dark" href="/specialities">All specialities</Link></div>
      </section>
    </div>
  );
}
