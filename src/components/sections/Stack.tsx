import { skillGroups } from "../../data/skills";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export default function Stack() {
  return (
    <section id="stack" aria-label="Technology stack">
      <div className="wrap py-24 md:py-36">
        <SectionHeader
          index="04"
          label="Technology stack"
          title="The toolkit."
          note="Technologies I use to design, build, test, and ship — no meaningless percentages."
        />

        <Reveal stagger={0.05}>
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 border-t border-line py-7 last:border-b md:grid-cols-12 md:gap-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint md:col-span-3">
                {group.label}
              </h3>
              <p className="text-lg font-medium leading-relaxed tracking-tight text-ink/90 md:col-span-9">
                {group.items.join("   ·   ")}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
