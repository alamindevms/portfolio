import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const facts: { term: string; value: string }[] = [
  { term: "Based in", value: "Dhaka, Bangladesh" },
  { term: "Experience", value: "4+ years" },
  { term: "Currently", value: "Software Engineer, Tyro Solutions" },
  { term: "Also fluent in", value: "Vue.js · Nuxt.js · Pinia" },
  { term: "Focus", value: "Enterprise & data-heavy interfaces" },
];

const education = [
  {
    degree: "Bachelor's Degree in Business Administration",
    school: "Kabi Nazrul Govt. College",
    period: "2016 — 2019",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Dania University College",
    period: "2014 — 2016",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About">
      <div className="wrap py-24 md:py-36">
        <SectionHeader index="06" label="About" title="The engineer behind the interfaces." />

        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/90">
              I&rsquo;m a frontend developer with 4+ years of experience building
              software that businesses run on — enterprise ERP platforms,
              e-commerce marketplaces, LMS products, and management systems. My
              work lives where complex data meets clear interfaces: dashboards,
              data-heavy screens, and permission-aware workflows.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              I care about the engineering behind the UI — reusable component
              architecture, predictable state, clean API integration, and
              performance users can feel. I work closely with backend, QA, and
              UX teams, and I use AI-assisted development to move faster and make
              better decisions without cutting corners.
            </p>

            <div className="mt-10 border-l-2 border-accent/50 pl-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Education
              </h3>
              <div className="mt-4 space-y-5">
                {education.map((item) => (
                  <div key={item.degree}>
                    <p className="font-medium text-ink">{item.degree}</p>
                    <p className="mt-0.5 text-sm text-faint">
                      {item.school} — {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <dl>
              {facts.map((fact) => (
                <div
                  key={fact.term}
                  className="flex items-baseline justify-between gap-6 border-t border-line py-4 last:border-b"
                >
                  <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {fact.term}
                  </dt>
                  <dd className="text-right text-sm font-medium text-ink/90">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
