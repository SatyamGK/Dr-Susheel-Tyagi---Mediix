const P: Record<string, string> = {
  drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  heart: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.500-7 10-7 10z",
  shield: "M12 3l7 3v5c0 5-3.500 8-7 10-3.500-2-7-5-7-10V6l7-3z M9 12l2 2 4-4",
  stethoscope: "M6 3v6a4 4 0 0 0 8 0V3 M10 13v2a5 5 0 0 0 10 0v-2 M20 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  activity: "M3 12h4l3-8 4 16 3-8h4",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  calendar: "M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4",
  phone: "M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  mail: "M3 6h18v12H3z M3 7l9 7 9-7",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z M12 7.500a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5z",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 7v5l3 2",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z M8 7h7",
  award: "M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12z M8.500 14.500L7 21l5-3 5 3-1.500-6.500",
  quote: "M9 7H5v6h4l-2 4 M19 7h-4v6h4l-2 4",
  check: "M5 12l5 5L20 7",
  user: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M4 21c0-4 4-6 8-6s8 2 8 6",
  flask: "M9 3h6 M10 3v6L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V3",
  grad: "M2 9l10-5 10 5-10 5-10-5z M6 11v5c3 2 9 2 12 0v-5",
  apple: "M12 8c-3-2-7 0-7 5 0 4 3 8 5 8 1 0 1.500-.500 2-.500s1 .500 2 .500c2 0 5-4 5-8 0-5-4-7-7-5z M12 8c0-2 1-4 3-5",
  whatsapp: "M4 20l1.500-4.500A8 8 0 1 1 9 18.500L4 20z M9 9c0 3 3 6 6 6l1-1.500-2-1-1 .800c-1-.400-1.800-1.200-2.200-2.200l.800-1-1-2L9 9z",
  x: "M6 6l12 12M18 6L6 18",
  send: "M3 11l18-8-8 18-2-8-8-2z",
};
export default function Icon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[name] ?? P.drop} /></svg>
  );
}
