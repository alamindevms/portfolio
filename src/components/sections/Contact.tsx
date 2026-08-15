import { profile } from "../../data/profile";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, MailIcon } from "../ui/Icons";

type ContactCell = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  download?: boolean;
};

const cells: ContactCell[] = [
  {
    label: "GitHub",
    value: "@alamindevms",
    href: profile.github,
    external: true,
  },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Location", value: profile.location },
  {
    label: "LinkedIn",
    value: "in/alaminhossainpro",
    href: profile.linkedin,
    external: true,
  },
  { label: "Website", value: "alamindev.io", href: profile.website, external: true },
  { label: "CV", value: "Download PDF", href: profile.cvUrl, download: true },
];

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,var(--color-glow),transparent_70%)]"
      />
      <div className="wrap relative py-28 text-center md:py-40">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
            07 <span className="text-faint">/</span> Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.6rem,7.5vw,5.5rem)] font-semibold leading-[1.02] tracking-tight text-ink">
            Let&rsquo;s build something great<span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Have a frontend role or a project in mind? My inbox is open —
            I read everything.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={`mailto:${profile.email}`}>
            <MailIcon className="size-4" />
            Email me
          </ButtonLink>
          <ButtonLink href={profile.github} variant="outline" external>
            <GithubIcon className="size-4" />
            GitHub
            <ArrowUpRightIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href={profile.linkedin} variant="outline" external>
            Connect on LinkedIn
            <ArrowUpRightIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href={profile.cvUrl} variant="ghost" download>
            <DownloadIcon className="size-4" />
            Download CV
          </ButtonLink>
        </Reveal>

        <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line text-left sm:grid-cols-3">
          {cells.map((cell) => (
            <div key={cell.label} className="group bg-base p-5 transition-colors duration-200 hover:bg-raised">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                {cell.label}
              </dt>
              <dd className="mt-2 break-words text-sm font-medium">
                {cell.href ? (
                  <a
                    href={cell.href}
                    download={cell.download || undefined}
                    target={cell.external ? "_blank" : undefined}
                    rel={cell.external ? "noreferrer noopener" : undefined}
                    className="text-ink/90 transition-colors group-hover:text-accent"
                  >
                    {cell.value}
                  </a>
                ) : (
                  <span className="text-ink/90">{cell.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
