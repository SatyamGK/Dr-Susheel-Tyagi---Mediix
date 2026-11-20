import GlucoseCanvas from "./GlucoseCanvas";
import Reveal from "./Reveal";
import { media } from "@/content/media";
// Page banner with a full-width photo. Title = H1 (keyword + heading), lead = H2.
export default function PageHero({ eyebrow, title, lead, bg }: { eyebrow: string; title: string; lead?: string; bg?: string }) {
  const m = bg ? media[bg] : undefined;
  return (
    <section className="phero">
      {m && <div className="phero-bg"><img src={m.poster ?? m.src} alt="" style={{ objectPosition: m.pos }} /></div>}
      <div className="phero-ov" />
      <GlucoseCanvas />
      <Reveal className="phero-in">
        <h1><span className="eyebrow">{eyebrow}</span>{title}</h1>
        {lead && <h2 className="sub">{lead}</h2>}
      </Reveal>
    </section>
  );
}