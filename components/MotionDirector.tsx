"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/animations";

/** Cinematic motion layer. Avoids elements already owned by Hero, Reveal, Timeline, or SpecialityGrid. */
export default function MotionDirector() {
  const pathname = usePathname();
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const reveal = (selector: string, from: gsap.TweenVars, start = "top 87%") => {
          gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
            gsap.fromTo(el, { autoAlpha: 0, ...from }, {
              autoAlpha: 1, y: 0, x: 0, scale: 1, rotateX: 0, filter: "blur(0px)",
              duration: 1.25, ease: "power3.out", clearProps: "transform,filter,opacity,visibility",
              scrollTrigger: { trigger: el, start, toggleActions: "play none none reverse" },
            });
          });
        };
        reveal(".sec .shead, .home-about-section .about-home-preview, .ftr .big", { y: 68, filter: "blur(12px)" });
        reveal(".research-feature-grid article, .about-interest-grid article", { y: 75, scale: .91, rotateX: 9 }, "top 92%");
        reveal(".clinic-detail-list > p", { x: -44, filter: "blur(4px)" }, "top 94%");
        reveal(".home-faq-section details", { y: 32, scale: .98 }, "top 94%");
        reveal(".fgrid > *, .footer-bio", { y: 42, filter: "blur(4px)" }, "top 95%");

        document.querySelectorAll<HTMLElement>(".phero-bg img").forEach((img) => {
          gsap.fromTo(img, { scale: 1.18, yPercent: -5 }, {
            scale: 1, yPercent: 5, ease: "none",
            scrollTrigger: { trigger: img.closest(".phero"), start: "top bottom", end: "bottom top", scrub: .8 },
          });
        });
        document.querySelectorAll<HTMLElement>(".bgs.dark").forEach((section) => {
          gsap.fromTo(section, { "--cinema-glow": "0%" }, {
            "--cinema-glow": "100%", ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        });
        document.querySelectorAll<HTMLElement>(".awards-slide img").forEach((img) => {
          gsap.fromTo(img, { scale: 1.09 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img.closest(".awards-carousel"), start: "top bottom", end: "bottom top", scrub: 1 } });
        });
      });
      return () => ctx.revert();
    });
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => { cancelAnimationFrame(raf); mm.revert(); };
  }, [pathname]);
  return null;
}
