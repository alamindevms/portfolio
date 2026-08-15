import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import type { ElementType, ReactNode, Ref } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Seconds to wait after entering the viewport. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  /** Stagger direct children instead of the container itself. */
  stagger?: number;
};

/**
 * Scroll-triggered fade-up built on a single GSAP pattern.
 * Content is never hidden in CSS, so it stays visible when JS is
 * disabled or the user prefers reduced motion.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 24,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets =
        stagger !== undefined ? gsap.utils.toArray(el.children) : el;
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });

    return () => ctx.revert();
  }, [delay, y, stagger]);

  const Component = as as ElementType<{
    ref?: Ref<HTMLElement | null>;
    className?: string;
    children?: ReactNode;
  }>;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
