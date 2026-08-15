import { useRef } from "react";
import { profile } from "../../data/profile";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { gsap } from "../../lib/gsap";
import { ButtonLink } from "../ui/ButtonLink";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon, DownloadIcon } from "../ui/Icons";
import { HeroImage } from "../visuals/HeroImage";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          "[data-hero='line']",
          { yPercent: 110 },
          { yPercent: 0, duration: 1, stagger: 0.12 },
        )
          .fromTo(
            "[data-hero='fade']",
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 },
            "-=0.55",
          );
      });

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            "[data-hero='layers-in']",
            { autoAlpha: 0, y: 48 },
            { autoAlpha: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.35 },
          );
          gsap.to("[data-hero='layers']", {
            y: -70,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_15%,transparent_78%)]"
      />
      <HeroImage />

      <div className="wrap relative flex min-h-svh flex-col justify-between pb-8 pt-24 md:pt-28">
        <div className="mt-12 md:mt-16">
          <h1 className="max-w-5xl font-display text-[clamp(2.9rem,9vw,7.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
            <span className="block overflow-hidden pb-1">
              <span data-hero="line" className="block">
                I build <span className="text-outline">complex</span>
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span data-hero="line" className="block">
                digital products<span className="text-accent">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p
              data-hero="fade"
              className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              Frontend developer with 4+ years of experience shipping enterprise
              ERP, e-commerce, LMS, and management platforms with React, Next.js,
              and TypeScript — currently engineering enterprise software at Tyro
              Solutions.
            </p>
          </div>

          <div data-hero="fade" className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="#work">
              View selected work
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href={profile.cvUrl} variant="outline" download>
              Download CV
              <DownloadIcon className="size-4" />
            </ButtonLink>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              Let&rsquo;s connect
              <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div
          data-hero="fade"
          className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-faint md:flex-row md:items-center md:justify-between"
        >
          <span className="text-muted">
            React · Next.js · TypeScript · Vue · Nuxt · Tailwind
          </span>
          <span className="hidden md:block">
            Enterprise systems — Data-heavy interfaces
          </span>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-accent transition-colors"
          >
            Scroll to explore
            <ArrowDownIcon className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
