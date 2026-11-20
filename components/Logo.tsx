import { site } from "@/content/site";
export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#0FA68A" />
      <path d="M20 7s9 9.5 9 16a9 9 0 0 1-18 0c0-6.5 9-16 9-16z" fill="#fff" />
      <path d="M20 18v10M15 23h10" stroke="#0FA68A" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
export default function Logo() {
  return (
    <span className="logo"><LogoMark /><span className="logo-t"><b>{site.name}</b><small>{site.role}</small></span></span>
  );
}
