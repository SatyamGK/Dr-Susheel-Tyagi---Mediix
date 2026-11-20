"use client";
import { useEffect, useRef } from "react";
// Live background: drifting glucose droplets + a flowing glucose-monitor trace with a moving pulse.
export default function GlucoseCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, x = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    type P = { x: number; y: number; r: number; v: number; s: number; o: number };
    let w = 0, h = 0, t = 0, raf = 0, visible = true, ps: P[] = [];
    const line = (px: number) => h * 0.74 + Math.sin(px * 0.007 + t) * 24 + Math.sin(px * 0.017 - t * 1.4) * 11;
    const draw = () => {
      x.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.v; p.x += Math.sin(t + p.s) * 0.25;
        if (p.y < -20) { p.y = h + 20; p.x = rand(0, w); }
        const g = x.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.2);
        g.addColorStop(0, `rgba(15,166,138,${p.o * 2})`); g.addColorStop(1, "rgba(15,166,138,0)");
        x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, p.r * 2.2, 0, 6.283); x.fill();
      }
      x.beginPath();
      for (let i = 0; i <= w; i += 6) i ? x.lineTo(i, line(i)) : x.moveTo(i, line(i));
      x.strokeStyle = "rgba(15,166,138,.45)"; x.lineWidth = 2; x.stroke();
      const px = ((t * 90) % (w + 80)) - 40, py = line(px);
      const g = x.createRadialGradient(px, py, 0, px, py, 26);
      g.addColorStop(0, "rgba(255,255,255,.9)"); g.addColorStop(1, "rgba(15,166,138,0)");
      x.fillStyle = g; x.beginPath(); x.arc(px, py, 26, 0, 6.283); x.fill();
    };
    const size = () => {
      w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr;
      x.setTransform(dpr, 0, 0, dpr, 0, 0);
      ps = Array.from({ length: Math.round(w / 28) }, () => ({ x: rand(0, w), y: rand(0, h), r: rand(2, 9), v: rand(0.15, 0.5), s: rand(0, 6.28), o: rand(0.08, 0.28) }));
      draw();
    };
    const loop = () => { if (visible) { t += 0.012; draw(); } raf = requestAnimationFrame(loop); };
    size(); if (!reduce) loop();
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting)); io.observe(c);
    const ro = new ResizeObserver(size); ro.observe(c);
    return () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); };
  }, []);
  return <canvas ref={ref} className="hero-bg" aria-hidden="true" />;
}
