import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import { CloseIcon, DownloadIcon, MenuIcon } from "../ui/Icons";
import { ThemeToggle } from "../ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const NAV_IDS = ["work", "experience", "about", "contact"] as const;

export default function Header() {
  const scrolled = useScrolled();
  const active = useActiveSection(NAV_IDS);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) firstLinkRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          scrolled || open
            ? "border-b border-line bg-base/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg border border-line font-display text-sm font-semibold tracking-tight text-ink transition-colors group-hover:border-accent/60">
              AH
            </span>
            <span className="hidden text-sm font-medium text-ink sm:block">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative py-1 text-sm transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-on-accent"
            >
              <DownloadIcon className="size-4" />
              CV
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink/40 lg:hidden"
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-40 bg-base/95 backdrop-blur-xl transition-[opacity,visibility] duration-300 motion-reduce:transition-none lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex h-full flex-col justify-center gap-1 pb-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${140 + i * 60}ms` : "0ms" }}
              className={`font-display text-4xl font-semibold tracking-tight text-ink transition-all duration-500 motion-reduce:transition-none ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="mr-4 font-mono text-sm font-normal text-accent">
                0{i + 1}
              </span>
              {link.label}
            </a>
          ))}

          <div
            className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center"
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
          >
            <a
              href={profile.cvUrl}
              download
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent"
            >
              <DownloadIcon className="size-4" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
