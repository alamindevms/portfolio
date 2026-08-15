import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { gsap } from "../lib/gsap";

/**
 * Subtle vertical drift tied to scroll position. Disabled on small
 * viewports and when the user prefers reduced motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(distance = 18) {
  const ref = useRef<T | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { y: distance },
        {
          y: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        },
      );
    });

    return () => mm.revert();
  }, [distance]);

  return ref;
}
