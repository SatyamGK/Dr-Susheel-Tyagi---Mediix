"use client";
import { useState } from "react";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import Icon from "./Icon";
const ic: Record<string, string> = { Articles: "book", Talks: "award", Studies: "flask" };
export default function PubList() {
  const [f, setF] = useState("All");
  const types = ["All", "Articles", "Talks", "Studies"];
  return (<>
    <div className="filters" role="group" aria-label="Filter">
      {types.map(t => <button key={t} className={f === t ? "on" : ""} aria-pressed={f === t} onClick={() => setF(t)}>{t}</button>)}
    </div>
    <Reveal key={f} type="right" className="pubs">
      {site.publications.filter(p => f === "All" || p.type === f).map((p, i) => (
        <article className="card pub" key={i}><span className="ico"><Icon name={ic[p.type]} /></span>
          <div><small>{p.type}</small><h3>{p.t}</h3><p>{p.m}</p></div></article>
      ))}
    </Reveal>
  </>);
}
