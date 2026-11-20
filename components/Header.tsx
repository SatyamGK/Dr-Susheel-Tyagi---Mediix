
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import useLenis from "@/hooks/useLenis";
import { ScrollTrigger } from "@/lib/animations";
import { site } from "@/content/site";
import { BookButton } from "./Booking";

export default function Header() {
  useLenis();

  const path = usePathname();
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setSmall(window.scrollY > 80);

      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (bar.current) {
        const progress =
          max > 0 ? window.scrollY / max : 0;

        bar.current.style.transform =
          `scaleX(${Math.min(1, Math.max(0, progress))})`;
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => window.clearTimeout(timer);
  }, [path]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className={`hdr ${small ? "small" : ""}`}>
      <div className="progress" ref={bar} />

      <Link
        href="/"
        className="st-logo-link"
        aria-label="Dr. Susheel Tyagi - Home"
        onClick={() => setOpen(false)}
      >
        <span className="st-logo-frame">
          <Image
            src="/susheel-tyagi-logo.png"
            alt="ST - Dr. Susheel Tyagi"
            width={1536}
            height={1024}
            sizes="(max-width: 480px) 100px, (max-width: 1024px) 125px, 155px"
            className="st-logo-image"
            priority
          />
        </span>
      </Link>

      <nav
        className={open ? "open" : ""}
        aria-label="Main"
      >
        {site.nav.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className={path === href ? "act" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}

        <BookButton onClick={() => setOpen(false)} />
      </nav>

      <button
        type="button"
        className="burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
