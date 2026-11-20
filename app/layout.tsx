import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BookingProvider } from "@/components/Booking";
import { site } from "@/content/site";
const font = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) } : {}),
  title: { default: `${site.name} | ${site.role}, Indirapuram`, template: `%s | ${site.name}` },
  description: "Consult Dr. Susheel Tyagi, MD Internal Medicine, for diabetes care, hypertension, obesity and adult internal medicine at Mediix Clinic, Indirapuram, Ghaziabad.",
  keywords: ["Dr Susheel Tyagi", "diabetes doctor in Indirapuram", "diabetes specialist Ghaziabad", "MD Internal Medicine Ghaziabad", "physician in Indirapuram", "hypertension consultation Ghaziabad", "Mediix Clinic"],
  robots: { index: true, follow: true },
  openGraph: { title: site.name, description: site.tagline, type: "website", siteName: site.name, locale: "en_IN" },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#0B1F2E" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org", "@type": "Physician", name: site.name,
    description: "Consultant physician in internal medicine with a clinical focus on diabetes care, hypertension and metabolic health.",
    medicalSpecialty: "Internal Medicine", telephone: site.phone,
    address: { "@type": "PostalAddress", streetAddress: "14/3, Niti Khand-2, near Swarn Jayanti Park", addressLocality: "Indirapuram, Ghaziabad", addressRegion: "Uttar Pradesh", postalCode: "201014", addressCountry: "IN" },
    availableService: ["Diabetes care", "Internal medicine consultation", "Hypertension care", "Metabolic health consultation"],
    areaServed: { "@type": "Place", name: "Indirapuram, Ghaziabad, Uttar Pradesh, India" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "12:30", closes: "15:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "17:30", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "14:00" },
    ],
    sameAs: []
  };
  return (
    <html lang="en"><body className={font.className}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <BookingProvider><a href="#content" className="skip-link">Skip to content</a><Header /><main id="content">{children}</main><Footer /><WhatsAppButton /></BookingProvider>
    </body></html>
  );
}
