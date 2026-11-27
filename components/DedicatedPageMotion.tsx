"use client";
import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from '@/lib/animations';
import styles from './DedicatedPages.module.css';
export default function DedicatedPageMotion({children}:{children:ReactNode}) {
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{ const el=root.current; if(!el)return; const mm=gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
 el.querySelectorAll<HTMLElement>('[data-motion]').forEach((card,i)=>{
 const kind=card.dataset.motion; const target=card.firstElementChild || card;
 gsap.fromTo(target,{x:kind==='slide'?(i%2?24:-24):0,y:kind==='slide'?0:24,rotationX:kind==='tilt'?6:0,transformPerspective:1200},{x:0,y:0,rotationX:0,ease:'power2.out',duration:.65,scrollTrigger:{trigger:card,start:'top 92%',toggleActions:'play none none reverse'}});
 });
 el.querySelectorAll<HTMLElement>('[data-progress]').forEach(line=>{gsap.fromTo(line,{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:line.parentElement!,start:'top 80%',end:'bottom 60%',scrub:true}})});
 }); return ()=>mm.revert(); },[]);
 return <div ref={root} className={styles.root}>{children}</div>;
}
