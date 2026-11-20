import type { Metadata } from "next";
import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import BgSection from "@/components/BgSection";
import Reveal from "@/components/Reveal";
import SpecialityGrid from "@/components/SpecialityGrid";
import CtaBand from "@/components/CtaBand";
export const metadata: Metadata = { title: "Diabetes & Internal Medicine Specialities", description: "Explore consultation areas with Dr. Susheel Tyagi in Indirapuram, Ghaziabad, including type 1 and type 2 diabetes, hypertension, obesity and metabolic health." };
export default function Specialities() {
  return <><PageHero eyebrow="Specialities" title="Diabetes and Internal Medicine" lead="A considered, individual approach to metabolic health and adult medical conditions." />
    <BgSection tone="white"><SectionHead kw="Areas of care" title="Clinical focus areas" sub="Each consultation is guided by symptoms, medical history and individual needs." type="blur" />
<SpecialityGrid />
    </BgSection>
    <BgSection tone="light" narrow><SectionHead kw="Before your visit" title="Frequently asked questions" sub="General information to help you prepare for a consultation." type="right" /><Reveal type="right" items="details" className="faq">{site.faqs.map((f, i) => <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>)}</Reveal></BgSection>
    <CtaBand /></>;
}
