import { capabilities } from "../../data/capabilities";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ArrowUpRightIcon } from "../ui/Icons";

export default function Strengths() {
  return (
    <section id="strengths" aria-label="Engineering strengths">
      <div className="wrap py-24 md:py-36">
        <SectionHeader
          index="03"
          label="Engineering strengths"
          title="How I solve problems."
          note="Capability over tool lists — what I actually bring to a team."
        />

        <Reveal stagger={0.06} as="ul">
          {capabilities.map((capability, i) => (
            <li
              key={capability.id}
              className="group grid gap-2 border-t border-line py-7 transition-colors duration-200 last:border-b hover:bg-fill-1 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <span className="font-mono text-sm text-accent md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium tracking-tight text-ink md:col-span-4 md:text-2xl">
                {capability.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted md:col-span-6">
                {capability.description}
              </p>
              <ArrowUpRightIcon className="hidden size-5 text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:col-span-1 md:block md:justify-self-end" />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
