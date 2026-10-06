import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
import { cv, cvPage } from "@/content/cv";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae for Mahesh Dangal (Samundra Mahesh) — Flutter, UI/UX, experience, education, and projects.",
};

export default function CvPage() {
  return (
    <article className="cv-print pb-10 md:pb-8">
      <header className="container-site py-8 md:py-16">
        <p className="font-mono-meta text-xs uppercase tracking-[0.18em] text-accent">
          {cvPage.eyebrow}
        </p>
        <h1 className="font-display mt-3 text-3xl tracking-tight text-fg md:text-5xl">
          {cvPage.headline}
        </h1>
        <p className="mt-2 text-sm text-muted">
          Also known as {cv.displayName} · {cv.location}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">
          {cvPage.support}
        </p>
        <div className="mt-6 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <Button href="#cv-body">Read CV</Button>
          <Button href={cv.downloadHref} variant="secondary">
            {cv.downloadLabel} →
          </Button>
          <TextLink href="/contact">Contact →</TextLink>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
          <li>
            <TextLink href={cv.phoneHref}>{cv.phone}</TextLink>
          </li>
          <li>
            <TextLink href={`mailto:${cv.email}`}>{cv.email}</TextLink>
          </li>
          {cv.links
            .filter((l) => l.label !== "Email" && l.label !== "Portfolio")
            .map((link) => (
              <li key={link.href}>
                <TextLink href={link.href} external={link.external}>
                  {link.label}
                </TextLink>
              </li>
            ))}
        </ul>
      </header>

      <div id="cv-body" className="container-site space-y-0">
        <CvBlock title="Summary">
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            {cv.summary}
          </p>
        </CvBlock>

        <CvBlock title="Skills">
          <ul className="divide-y divide-line border-y border-line">
            {cv.skills.map((group) => (
              <li
                key={group.label}
                className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] sm:gap-8"
              >
                <span className="font-mono-meta text-xs uppercase tracking-[0.14em] text-accent">
                  {group.label}
                </span>
                <span className="text-sm leading-relaxed text-fg/90">
                  {group.items}
                </span>
              </li>
            ))}
          </ul>
        </CvBlock>

        <CvBlock title="Experience">
          <ul className="space-y-8">
            {cv.experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-fg">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm text-fg/90">{job.role}</p>
                  </div>
                  <p className="font-mono-meta text-xs text-muted md:text-right">
                    {job.period}
                    <span className="text-line"> · </span>
                    {job.location}
                  </p>
                </div>
                <ul className="mt-4 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['—']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </CvBlock>

        <CvBlock title="Education">
          <h3 className="font-display text-xl tracking-tight text-fg">
            {cv.education.degree}
          </h3>
          <p className="mt-2 text-sm text-muted">
            {cv.education.institution}
            <span className="text-line"> · </span>
            {cv.education.period}
          </p>
          <p className="font-mono-meta mt-6 text-xs uppercase tracking-[0.14em] text-accent">
            Relevant coursework
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
            {cv.education.courses.map((course) => (
              <li
                key={course}
                className="font-mono-meta text-xs text-fg/80 after:ml-3 after:text-line after:content-['·'] last:after:content-none"
              >
                {course}
              </li>
            ))}
          </ul>
        </CvBlock>

        <CvBlock title="Selected projects">
          <ul className="divide-y divide-line border-y border-line">
            {cv.projects.map((project) => (
              <li key={project.title} className="py-8">
                <h3 className="font-display text-xl tracking-tight text-fg">
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="transition hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </h3>
                <ul className="mt-4 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['—']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </CvBlock>

        <section className="section-divider py-8 md:py-16 print:hidden">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            Need a file?
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Use your browser’s print dialog and choose “Save as PDF,” or download
            the markdown source. For hiring or collaboration, email is fine too.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Button href={`mailto:${cv.email}`}>Email me</Button>
            <TextLink href={cv.downloadHref}>{cv.downloadLabel} →</TextLink>
          </div>
        </section>
      </div>
    </article>
  );
}

function CvBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section-divider py-8 md:py-16">
      <div className="grid gap-5 md:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] md:gap-8">
        <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
