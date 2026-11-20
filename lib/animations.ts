import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
// Tune the wavy gallery here
export const wavy = { columns: 4, amplitude: 70, frequency: 1.5, phaseStep: 0.9, scrubSmoothing: 0.6, pinLength: 1.5 };
