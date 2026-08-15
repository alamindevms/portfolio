import { profile } from "../../data/profile";
import { ArrowUpIcon, GithubIcon, GlobeIcon, LinkedinIcon, MailIcon } from "../ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} — {profile.positioning}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            © {year}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          <a href="#work" className="transition-colors hover:text-ink">Work</a>
          <a href="#experience" className="transition-colors hover:text-ink">Experience</a>
          <a href="#stack" className="transition-colors hover:text-ink">Stack</a>
          <a href="#about" className="transition-colors hover:text-ink">About</a>
          <a href="#contact" className="transition-colors hover:text-ink">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <MailIcon className="size-4" />
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Website"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GlobeIcon className="size-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ArrowUpIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
