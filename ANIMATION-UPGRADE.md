# Mediix Cinematic Edition — substantive animation upgrade

## Changes
- `components/Hero.tsx`: new cinematic kinetic name typography, interactive pointer-based portrait 3D tilt, atmospheric grid, tracking glow, portrait halo, scroll indicator, progress rail, editorial overline.
- `components/MotionDirector.tsx`: GSAP scrubbed hero layers and progress, parallax interior page banners, editorial reveals for research, FAQ, footer and clinic details, scroll-linked dark-section light sweep, gallery depth.
- `components/SpecialityGrid.tsx`: interactive pointer-driven 3D card faces, light hotspot, numbered editorial labels, while preserving scroll-triggered entry animations.
- `app/globals.css`: full cinematic visual system, glass hero cards, dark teal motion backgrounds, luminous timeline cards and rail, responsive and reduced-motion fallbacks.

## Important
No Supabase API or booking implementation changes. The previous Vercel `storage_not_configured` error requires valid Production environment variables and redeployment.

## Run
`npm install` then `npm run build` then `npm run dev`.

The uploaded original ZIP contained secrets and Git metadata. This distribution intentionally excludes `.env*`, `.git`, `node_modules`, `.next` and `.vercel`.
