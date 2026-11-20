"use client";
import { createContext, useContext, useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import Icon from "./Icon";
const Ctx = createContext({ open: () => {} });
export const useBooking = () => useContext(Ctx);
export function BookButton({ className = "", children, onClick }: { className?: string; children?: React.ReactNode; onClick?: () => void }) {
  const { open } = useBooking();
  return <button type="button" className={`btn ${className}`} onClick={() => { onClick?.(); open(); }}>{children ?? "Book appointment"}</button>;
}
export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [o, setO] = useState(false);
  useEffect(() => {
    if (!o) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setO(false);
    addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [o]);
  return (
    <Ctx.Provider value={{ open: () => setO(true) }}>
      {children}
      {o && (
        <div className="modal-bg" onClick={() => setO(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label="Book an appointment" data-lenis-prevent onClick={e => e.stopPropagation()}>
            <button className="x" aria-label="Close" onClick={() => setO(false)}><Icon name="x" /></button>
            <BookingForm onClose={() => setO(false)} />
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
