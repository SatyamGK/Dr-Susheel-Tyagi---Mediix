"use client";
import { useState } from "react";
import { site } from "@/content/site";
import { useBooking } from "./Booking";
import Icon from "./Icon";
const wa = (t: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;
export default function WhatsAppButton() {
  const [o, setO] = useState(false);
  const { open } = useBooking();
  const opts = [
    "I would like to book an appointment.",
    "Please share the clinic timings and location.",
    "I have a question about diabetes care.",
    "I would like to talk to the clinic team.",
  ];
  return (
    <div className="wa">
      {o && (
        <div className="wa-panel" role="dialog" aria-label="WhatsApp assistant">
          <div className="wa-head"><Icon name="whatsapp" /> <b>{site.name}'s clinic</b><button aria-label="Close" onClick={() => setO(false)}><Icon name="x" size={18} /></button></div>
          <div className="wa-body">
            <p className="bubble">Hello! How can we help you today? Choose an option and we'll continue on WhatsApp.</p>
            {opts.map(t => <a key={t} className="qr" href={wa(t)} target="_blank" rel="noopener noreferrer">{t}</a>)}
            <button className="qr" onClick={() => { setO(false); open(); }}>Book online with the form</button>
            <small>For emergencies, call your local emergency number.</small>
          </div>
        </div>
      )}
      <button className="wa-fab" aria-label="Chat on WhatsApp" aria-expanded={o} onClick={() => setO(!o)}><Icon name="whatsapp" size={30} /></button>
    </div>
  );
}
