# Dr. Susheel Tyagi Website: production pass

## Requested changes
- **Hero**: scroll-pinning removed. The profile cards, proof chips and portrait caption now *pop up* in sequence on load (CSS spring animation, honours reduced-motion). Hero eyebrow now sits inside the H1.
- **Research & Vision (home)**: background heading text removed. The card rises into view, then each line of its text animates in.
- **Testimonials (home + /testimonials)**: background heading text removed. Four opaque flip cards (no photo inside the cards) flip automatically one after another; tap/click also flips. Still clearly labelled as illustrative samples.
- **Footer**: the clinic text column is replaced by an embedded Google Map, with *Get directions* and *Call* links.
- **Menu**: always a dark surface with white text, so it is readable over dark or light sections. The mobile menu no longer breaks after scrolling (blur moved to a pseudo-element).
- **Eyebrows**: every `.eyebrow` is now inside an `<h1>` (hero, CTA band, booking form, speciality pages, section heads, page heroes).

## Bugs and quality fixes
- Appointment API only did `console.log`: requests were silently lost. It now validates, rate-limits, has a honeypot, and delivers by email (Resend) and/or webhook. With nothing configured in production it returns 503 and the form shows the clinic phone number instead of a false "submitted". See `.env.example`.
- Removed hackathon wording from public pages ("What problem are *you* solving", "in this hackathon").
- "Awards & Recognition" showed clinic photos, not awards: renamed to "Gallery".
- Nested `<main>` on speciality pages fixed; skip-link added; heading order on the CTA band fixed.
- Sitemap now includes `/research-vision` and each speciality page.
- Local-date bug in the booking form (used UTC) fixed.
- Security headers, caching headers, opening hours in structured data, copyright line.

## Setup
1. `npm ci`  2. `npm run dev`  3. `npm run build` (before deploying)  4. Set env vars from `.env.example` on Vercel.

## Please verify before launch
- Phone numbers (`96258 78756 · 73031 90200`), address and hours: taken from the clinic signboard.
- Replace sample testimonials only with genuine feedback and written patient consent.
- Sugar Coat is described as a concept; it makes no diagnostic or treatment claims.
