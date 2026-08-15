import { experience, metrics } from "../../data/experience";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience">
      <div className="wrap py-24 md:py-36">
        <SectionHeader
          index="02"
          label="Experience"
          title="Where I&rsquo;ve built."
          note="Four years, three teams — with scope and responsibility growing at every step."
        />

        <Reveal className="mb-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:mb-20">
          {metrics.map((metric) => (
            <div key={metric.context} className="bg-base p-6 md:p-7">
              <p className="font-display text-4xl font-semibold tracking-tight text-accent md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{metric.label}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                {metric.context}
              </p>
            </div>
          ))}
        </Reveal>

        <ol>
          {experience.map((job) => (
            <Reveal
              as="li"
              key={job.company}
              className="grid gap-5 border-t border-line py-10 last:border-b md:grid-cols-12 md:gap-8 md:py-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  {job.period}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                  {job.location}
                </p>
              </div>

              <div className="md:col-span-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.7rem]">
                    {job.company}
                  </h3>
                  {job.current ? (
                    <span className="rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-sm font-medium text-accent">{job.role}</p>
              </div>

              <ul className="space-y-3 md:col-span-5">
                {job.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
