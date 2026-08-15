import type { Project } from "../../data/projects";
import { useParallax } from "../../hooks/useParallax";
import { Reveal } from "../ui/Reveal";
import { ArrowRightIcon, ArrowUpRightIcon } from "../ui/Icons";
import { DashboardMock } from "../visuals/DashboardMock";
import { MarketplaceMock } from "../visuals/MarketplaceMock";
import { profile } from "../../data/profile";

type ProjectFeatureProps = {
  project: Project;
  flip?: boolean;
};

export function ProjectFeature({ project, flip }: ProjectFeatureProps) {
  const parallaxRef = useParallax(14);

  return (
    <Reveal stagger={0.1} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className={`group relative ${flip ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 group-hover:border-accent/35">
          <div ref={parallaxRef} className="h-full py-6 will-change-transform md:py-8">
            {project.visual === "dashboard" ? <DashboardMock /> : <MarketplaceMock />}
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-fill-1 to-transparent" />
        </div>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Stylized interface study — not a product screenshot
        </p>
      </div>

      <div>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="text-accent">{project.index}</span>
          <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
          <span className="text-muted">{project.category}</span>
        </div>

        <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-1.5 text-muted">{project.subtitle}</p>

        <p className="mt-5 leading-relaxed text-ink/85">{project.overview}</p>

        {project.stat ? (
          <div className="mt-6 inline-flex flex-wrap items-baseline gap-3 rounded-lg border border-accent/25 bg-accent-soft px-4 py-3">
            <span className="font-display text-2xl font-semibold text-accent">
              {project.stat.value}
            </span>
            <span className="text-sm text-muted">{project.stat.label}</span>
          </div>
        ) : null}

        <div className="mt-7 grid gap-5 border-t border-line pt-7 sm:grid-cols-2">
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              The challenge
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              The approach
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.approach}
            </p>
          </div>
        </div>

        <ul className="mt-7 space-y-2.5">
          {project.contributions.map((contribution) => (
            <li key={contribution} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
              <ArrowRightIcon className="mt-1 size-3.5 shrink-0 text-accent" />
              {contribution}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}?subject=Project walkthrough — ${project.title}`}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          Request a walkthrough
          <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </Reveal>
  );
}
