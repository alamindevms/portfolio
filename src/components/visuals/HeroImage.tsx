import { profile } from "../../data/profile";
import { HeroLayers } from "./HeroLayers";

/**
 * Resolves the hero image from src/assets at build time. Supports
 * png/jpg/jpeg/webp/svg — first match wins. When no image file exists,
 * the abstract layered visual is used as a fallback instead.
 */
const modules = import.meta.glob<string>("../../assets/hero-image.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});
const heroImageSrc = Object.values(modules)[0];

/**
 * Framed portrait/visual for the hero right column. Keeps the same
 * data-hero attributes as the abstract visual so the entrance timeline
 * and scroll parallax in Hero.tsx work unchanged.
 */
export function HeroImage() {
  if (!heroImageSrc) {
    return <HeroLayers />;
  }

  return (
    <div
      aria-hidden="true"
      data-hero="layers"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
    >
      <div
        data-hero="layers-in"
        className="absolute right-[-2.5rem] top-1/2 w-[20rem] -translate-y-1/2 xl:right-[-3rem] xl:w-[23rem]"
      >
        <div className="relative">
          <div className="absolute inset-0 translate-x-6 translate-y-6 rotate-[3deg] rounded-2xl border border-accent/25" />
          <div className="absolute inset-0 -translate-x-5 -translate-y-5 rotate-[-2.5deg] rounded-2xl border border-line bg-raised/60" />

          <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/20">
            <img
              src={heroImageSrc}
              alt={profile.heroImageAlt}
              width={640}
              height={800}
              loading="eager"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>

          <span className="absolute -left-10 top-1/2 h-px w-10 bg-gradient-to-l from-accent/60 to-transparent" />
          <span className="absolute -left-[2.72rem] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
