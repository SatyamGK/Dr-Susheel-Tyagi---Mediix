import Reveal, { RevealType } from "./Reveal";

export default function SectionHead({
  kw,
  title,
  sub,
  type = "up",
}: {
  kw: string;
  title: string;
  sub?: string;
  type?: RevealType;
}) {
  return (
    <>
      <div className="sticky-section-title">
        <h1 className="section-h1">{kw}</h1>
      </div>

      <Reveal type={type} className="shead">
        <h2 className="section-h2">{title}</h2>

        {sub && <p className="sub">{sub}</p>}
      </Reveal>
    </>
  );
}