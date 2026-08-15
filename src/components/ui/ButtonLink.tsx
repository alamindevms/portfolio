import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "border border-accent bg-accent text-on-accent hover:bg-accent-strong hover:border-accent-strong",
  outline:
    "border border-line text-ink hover:border-ink/40 hover:bg-fill-1",
  ghost: "text-muted hover:text-accent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
