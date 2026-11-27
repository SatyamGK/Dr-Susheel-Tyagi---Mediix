import type { Metadata } from "next";
import InternalPageBanner from "@/components/InternalPageBanner";
import CtaBand from "@/components/CtaBand";
import Motion from "@/components/DedicatedPageMotion";
import s from "@/components/DedicatedPages.module.css";
import Icon from "@/components/Icon";
import Link from "next/link";
import { site } from "@/content/site";
const topics = ["Persistent or recurring symptoms, multiple conditions and medication reviews.","Insulin routines, glucose records and questions about day-to-day management.","Changes in glucose patterns, follow-up reports and individual health goals.","Home blood pressure readings, current medicines and associated risk factors.","Weight history, related health concerns and realistic management goals.","Blood glucose, lipids, blood pressure and other interconnected risk factors."];

export const metadata: Metadata = {title: 'Specialities', description: 'Explore adult medical consultations and preparation for diabetes, hypertension and metabolic health care in Indirapuram.', alternates: {canonical: "/specialities"}};
export default function Page() {return <><InternalPageBanner title={'Specialities'}/><Motion><section className={s.intro}><span className={s.eyebrow}>A guide to your consultation</span><h2>Understand your health, one concern at a time.</h2><p>Symptoms and long-term conditions can overlap. Explore what you might discuss with your physician and how to prepare for a focused consultation.</p></section><section className={s.grid}>{site.conditions.map((c,i)=><div data-motion="slide" key={c.t}><article className={s.card}><span className={s.icon}><Icon name={c.icon}/></span><h3>{c.t}</h3><p>{topics[i]}</p><details><summary>What can we discuss?</summary><p>{c.detail}</p></details><Link className={s.link} href={'/specialities/'+c.t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}>Read clinical overview →</Link></article></div>)}</section><section className={s.note}><h2>Make your visit more useful</h2><p>Bring a short symptom timeline, current medicines, previous reports and relevant home readings. Note your main questions before arriving.</p><p>For severe chest pain, sudden breathing difficulty or other emergencies, seek immediate emergency care rather than waiting for a routine appointment.</p></section></Motion><CtaBand locations={false}/></>;}
