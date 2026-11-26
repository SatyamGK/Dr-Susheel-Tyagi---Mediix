
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/animations";

const CLINIC_ADDRESS =
  "14/3, Niti Khand-2, Indirapuram, Near Swarn Jayanti Park, Ghaziabad - 201014";

const MAP_QUERY = encodeURIComponent(
  "Mediix Clinic, " + CLINIC_ADDRESS
);

const MAP_URL =
  `https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

/* Add your official social media profile URLs here */

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "",
    icon: "instagram",
  },
  {
    name: "YouTube",
    url: "",
    icon: "youtube",
  },
  {
    name: "LinkedIn",
    url: "",
    icon: "linkedin",
  },
  {
    name: "X",
    url: "",
    icon: "twitter",
  },
];

function FooterIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z" />
    ),

    facebook: (
      <path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V2h-3c-4 0-6 2-6 6v1H6v4h3v8" />
    ),

    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" />
      </>
    ),

    youtube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3Z" />
      </>
    ),

    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7M11 17v-7M11 13c0-4 6-4 6 0v4" />
        <circle cx="7" cy="7" r=".7" />
      </>
    ),

    twitter: (
      <path d="M4 3h5l11 18h-5L4 3ZM20 3 4 21" />
    ),
  };

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          gsap.fromTo(
            ".mediix-footer-reveal",
            {
              opacity: 0,
              y: 22,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }, footerRef);

        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="mediix-premium-footer"
      aria-label="Website footer"
    >
      {/* Logo background watermark */}

      <div
        className="mediix-footer-watermark"
        aria-hidden="true"
      />

      <div className="mediix-footer-container">

        {/* Quick Links */}

        <div className="mediix-footer-navigation mediix-footer-reveal">
          <h2>Quick Links</h2>

          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/#specialities">
              Specialities
            </Link>
            <Link href="/#journey">
              Clinical Journey
            </Link>
            <Link href="/#research-vision">
              Research &amp; Vision
            </Link>
            <Link href="/#gallery">Gallery</Link>
            <Link href="/#testimonials">
              Testimonials
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Clinic information */}

        <div className="mediix-footer-clinic">

          <div className="mediix-footer-reveal">
            <h2 className="mediix-footer-title">
              Visit Mediix Clinic
            </h2>

            <p className="mediix-footer-subtitle">
              Indirapuram, Ghaziabad
            </p>
          </div>

          {/* Google Maps */}

          <div className="mediix-footer-map mediix-footer-reveal">
            <iframe
              src={MAP_URL}
              title="Mediix Clinic Google Maps location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Clinic Address */}

          <div className="mediix-footer-info mediix-footer-reveal">
            <span className="mediix-footer-icon">
              <FooterIcon name="location" />
            </span>

            <div>
              <h3>Clinic Address</h3>

              <address>
                {CLINIC_ADDRESS}
              </address>
            </div>
          </div>

          {/* Clinic Timings */}

          <div className="mediix-footer-info mediix-footer-reveal">
            <span className="mediix-footer-icon">
              <FooterIcon name="clock" />
            </span>

            <div>
              <h3>Clinic Timings</h3>

              <p className="mediix-footer-day">
                Monday – Saturday
              </p>

              <p>12:30 PM – 3:00 PM</p>
              <p>5:30 PM – 7:00 PM</p>

              <p className="mediix-footer-day">
                Sunday
              </p>

              <p>12:00 PM – 2:00 PM</p>
            </div>
          </div>

          {/* Clinic Mobile Numbers */}

          <div className="mediix-footer-info mediix-footer-reveal">
            <span className="mediix-footer-icon">
              <FooterIcon name="phone" />
            </span>

            <div>
              <h3>Clinic Mobile Number</h3>

              <a href="tel:+919625878756">
                +91 96258 78756
              </a>

              <a href="tel:+917303190200">
                +91 73031 90200
              </a>
            </div>
          </div>

        </div>

        {/* Social media channels */}

        <div className="mediix-footer-social mediix-footer-reveal">

          <h2>Follow Us</h2>

          <div className="mediix-footer-social-links">
            {SOCIAL_LINKS.map((social) =>
              social.url ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <FooterIcon name={social.icon} />
                </a>
              ) : (
                <span
                  key={social.name}
                  className="mediix-social-unconfigured"
                  title={`${social.name} profile not configured`}
                  aria-label={`${social.name} unavailable`}
                >
                  <FooterIcon name={social.icon} />
                </span>
              )
            )}
          </div>

        </div>

        {/* Copyright */}

        <div className="mediix-footer-copyright">
          <p>
            © {new Date().getFullYear()} Dr. Susheel Tyagi
            · Mediix Clinic. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
