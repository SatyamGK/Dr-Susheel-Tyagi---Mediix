// ONE place for: background media, hero scenes, locations and vision text.
// Facts below were taken from the signboards/banners in the photos you supplied. Please verify them.
export type Media = { type: "image" | "video"; src: string; poster?: string; pos?: string };
const I = (src: string, pos = "50% 50%"): Media => ({ type: "image", src, pos });

export const media: Record<string, Media> = {
  hero:   { type: "video", src: "/videos/mediix-banner.mp4", poster: "/images/bg/mediix-banner-poster.jpg" },
  vision: I("/images/bg/vision-poster.jpg", "60% 40%"),
  services: I("/images/bg/specialities.jpg", "50% 22%"),
  gallery: I("/images/bg/gallery.jpg"),
  journey: I("/images/bg/about.jpg", "60% 40%"),
  clinicFront: I("/images/bg/contact.jpg", "50% 45%"),
  testimonials: I("/images/bg/testimonials.jpg", "50% 35%"),
  cta: I("/images/bg/about.jpg", "62% 30%"),
  about: I("/images/bg/about.jpg", "62% 30%"),
  about2: I("/images/bg/about.jpg", "25% 70%"),
  spec: I("/images/bg/specialities.jpg", "50% 20%"),
  spec2: I("/images/bg/specialities.jpg", "50% 75%"),
  pub: I("/images/bg/publications.jpg", "60% 40%"),
  pub2: I("/images/bg/publications.jpg", "20% 30%"),
  test: I("/images/bg/testimonials.jpg", "55% 35%"),
  test2: I("/images/bg/testimonials.jpg", "20% 60%"),
  contact: I("/images/bg/contact.jpg", "50% 40%"),
  contact2: I("/images/bg/contact.jpg", "85% 60%"),
};

export const gallery = [
  { src: "/images/bg/testimonials.jpg", alt: "Dr. Susheel Tyagi examining a patient with a stethoscope" },
  { src: "/images/bg/about.jpg", alt: "Dr. Susheel Tyagi at his consultation desk" },
  { src: "/images/bg/specialities.jpg", alt: "Dr. Susheel Tyagi seated at his desk" },
  { src: "/images/bg/contact.jpg", alt: "Entrance of Mediix Clinic, Indirapuram" },
  { src: "/images/bg/publications.jpg", alt: "Dr. Susheel Tyagi with his framed certificates" },
  { src: "/images/bg/gallery.jpg", alt: "Reception and waiting area of the clinic" },
  { src: "/images/doctor.png", alt: "Portrait of Dr. Susheel Tyagi" },
  { src: "/images/bg/mediix-banner-poster.jpg", alt: "Mediix Clinic signboard" },
];

// Home hero: left text changes with scroll while the doctor's photo stays still.
export const scenes = [
  { tag: "Dr. Susheel Tyagi", k: "Diabetes Care", s: "Personalised plans for lasting blood-sugar control." },
  { tag: "Dr. Susheel Tyagi", k: "Internal Medicine", s: "Whole-person care for adults, from everyday illness to complex conditions." },
  { tag: "Dr. Susheel Tyagi", k: "Preventive Care", s: "Early checks and healthy habits that lower your risk." },
  { tag: "Where to find me", k: "Mediix Clinic", s: "Indirapuram, Ghaziabad. Also consulting at Yashoda Hospital and Avantika Hospital." },
];

export const locations = [
  { id: "mediix", primary: true, name: "Mediix Clinic", tag: "Primary clinic",
    address: "14/3, Niti Khand-2, Indirapuram, Near Swarn Jayanti Park, Ghaziabad – 201014",
    timing: "Mon–Sat: 12:30 PM–3:00 PM & 5:30 PM–7:00 PM · Sun: 12:00 PM–2:00 PM",
    phone: "96258 78756 · 73031 90200", tel: "+919625878756", // numbers as printed on the clinic signboard: please confirm
    map: "https://maps.google.com/?q=Mediix+Clinic+Niti+Khand+2+Indirapuram+Ghaziabad" },
] as { id: string; primary?: boolean; name: string; tag: string; address: string; timing: string; phone?: string; tel?: string; map: string }[];

// Google Maps embed (no API key needed) for Mediix Clinic. Used by the footer and the Contact page.
export const clinicMapEmbed = `https://www.google.com/maps?q=${encodeURIComponent("Mediix Clinic, 14/3 Niti Khand-2, Indirapuram, Ghaziabad, Uttar Pradesh 201014")}&output=embed`;

// Draft vision statement: confirm or rewrite with Dr. Tyagi.
export const vision = {
  kw: "Our vision", title: "Care that is evidence-led and personal.",
  sub: "To make high-quality diabetes and preventive care understandable, accessible and centred on every patient.",
};