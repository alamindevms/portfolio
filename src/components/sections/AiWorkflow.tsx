import { aiPractices } from "../../data/ai";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export default function AiWorkflow() {
  return (
    <section id="ai" aria-label="Engineering with AI" className="border-y border-line bg-surface/60">
      <div className="wrap py-24 md:py-32">
        <SectionHeader
          index="05"
          label="Engineering with AI"
          title="AI in the workflow, engineering in the decisions."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink/85">
              I use AI-assisted development and prompt engineering as part of my
              daily workflow — to move faster, explore solutions, keep quality
              high, and break down complex problems.
            </p>
            <p className="mt-6 border-l-2 border-accent/50 pl-5 text-[15px] italic leading-relaxed text-muted">
              AI is a tool in the workflow. The engineering judgment —
              architecture, quality, trade-offs — stays mine.
            </p>
          </Reveal>

          <Reveal stagger={0.07} className="lg:col-span-7">
            {aiPractices.map((practice, i) => (
              <div key={practice.title} className="flex gap-5 border-t border-line py-5 last:border-b">
                <span className="pt-1 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                    {practice.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
