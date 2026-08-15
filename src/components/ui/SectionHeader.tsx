import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  note?: string;
};

export function SectionHeader({ index, label, title, note }: SectionHeaderProps) {
  return (
    <Reveal className="mb-14 flex flex-col gap-6 border-b border-line pb-8 md:mb-20 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
          {index} <span className="text-faint">/</span> {label}
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h2>
      </div>
      {note ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted md:pb-1 md:text-right">
          {note}
        </p>
      ) : null}
    </Reveal>
  );
}
