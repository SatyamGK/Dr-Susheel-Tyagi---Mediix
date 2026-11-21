# Mediix immersive animation upgrade

This edition changes the homepage hero to a scroll-driven 4-stage experience. Desktop: credentials, care philosophy, proof, then portrait expands to fill the frame as the next section approaches. Mobile: top 60% holds sequential animated content, bottom 40% anchors the doctor's photograph; scrolling enlarges the photograph before releasing the next section. The animation reverses on upward scrolling. Existing Next.js routes, booking API, Supabase configuration, content and media are retained.

The homepage uses GSAP ScrollTrigger and the existing sticky layout. `components/MotionDirector.tsx` no longer animates the hero independently, avoiding conflicting transforms. Speciality hover depth and buttons are also enhanced.

## Install
1. Back up the existing project and retain your private `.env.local` outside the ZIP.
2. Extract the project, run `npm install`, `npm run dev`, and `npm run build`.
3. Test desktop, 390px mobile, reverse scrolling, and appointment form.
4. Deploy only after the build passes.

## Build status
A production build could not be completed in the packaging environment: `next: not found` (dependencies not installed). The code is not represented as build-verified. Existing `storage_not_configured` API configuration remains a separate issue.
