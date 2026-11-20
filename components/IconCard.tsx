import Icon from "./Icon";
export default function IconCard({ icon, t, d }: { icon: string; t: string; d: string }) {
  return <article className="card"><span className="ico"><Icon name={icon} /></span><h3>{t}</h3><p>{d}</p></article>;
}
