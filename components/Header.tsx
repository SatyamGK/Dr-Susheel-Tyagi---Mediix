"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useLenis from "@/hooks/useLenis";
import { ScrollTrigger } from "@/lib/animations";
import { site } from "@/content/site";
import Logo from "./Logo";
import { BookButton } from "./Booking";
export default function Header() {
  useLenis();
  const path = usePathname();
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      setSmall(window.scrollY > 80);
      const max = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    on(); addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  useEffect(() => { const t = setTimeout(() => ScrollTrigger.refresh(), 150); return () => clearTimeout(t); }, [path]);
  return (
    <header className={`hdr ${small ? "small" : ""}`}>
      <div className="progress" ref={bar} />
      <Link href="/" aria-label="Home"><Logo /></Link>
      <nav className={open ? "open" : ""} aria-label="Main">
        {site.nav.map(([l, h]) => <Link key={h} href={h} className={path === h ? "act" : ""} onClick={() => setOpen(false)}>{l}</Link>)}
        <BookButton onClick={() => setOpen(false)} />
      </nav>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    </header>
  );
}
