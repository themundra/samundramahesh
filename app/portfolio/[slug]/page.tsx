import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
import { TopicTags } from "@/components/TopicTags";
import { getPortfolioBySlug, listPortfolio } from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listPortfolio().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
  };
}

export default async function PortfolioCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = await getPortfolioBySlug(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;
  const downloads = frontmatter.links.filter((l) =>
    /download|apk/i.test(l.label),
  );
  const external = frontmatter.links.filter(
    (l) => !/download|apk/i.test(l.label),
  );
  const primaryCta = downloads[0] ?? external[0];
  const others = listPortfolio().filter((p) => p.slug !== slug);

  return (
    <article className="pb-10 md:pb-8">
      <header className="container-site py-8 md:py-16">
        <p className="font-mono-meta text-xs uppercase tracking-[0.18em] text-accent">
          Case study
          {frontmatter.featured ? (
            <span> · Featured</span>
          ) : null}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl tracking-tight text-fg md:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">
          {frontmatter.summary}
        </p>
        <div className="mt-6 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          {primaryCta ? (
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          ) : (
            <Button href="/contact">Discuss a similar build</Button>
          )}
          <TextLink href="/portfolio" className="hidden md:inline">
            All projects
          </TextLink>
        </div>
      </header>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="relative aspect-[16/9] overflow-hidden border border-line bg-bg-elevated md:aspect-[21/9]">
          <Image
            src={frontmatter.cover}
            alt={`${frontmatter.title} cover`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1120px) 100vw, 1120px"
          />
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          <div>
            <h2 className="font-mono-meta text-xs uppercase tracking-wide text-accent">
              Role
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-fg">
              {frontmatter.role}
            </p>
          </div>
          <div>
            <h2 className="font-mono-meta text-xs uppercase tracking-wide text-accent">
              Status
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-fg">
              {frontmatter.status}
            </p>
          </div>
          <div>
            <h2 className="font-mono-meta text-xs uppercase tracking-wide text-accent">
              Stack
            </h2>
            <TopicTags tags={frontmatter.stack} className="mt-3" />
          </div>
        </div>
      </section>

      {downloads.length > 0 ? (
        <section className="container-site section-divider py-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
            <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
              Download
            </h2>
            <div className="rounded-sm border border-line bg-bg-elevated p-6">
              <p className="text-sm text-muted">
                Android builds from the live Trackify release set.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {downloads.map((link) => (
                  <Button key={link.href} href={link.href}>
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {external.length > 0 ? (
        <section className="container-site section-divider py-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
            <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
              Links
            </h2>
            <ul className="space-y-3">
              {external.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href} external>
                    {link.label} →
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            Case study
          </h2>
          <Prose>{content}</Prose>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
          Build something similar
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Share a short brief — product goals, platform, and constraints.
        </p>
        <div className="mt-6">
          <Button href="/contact">Get in touch</Button>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <h2 className="font-display text-lg tracking-tight text-fg md:text-xl">
          Other projects
        </h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="group flex flex-col gap-1 py-4 transition md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <span className="font-display text-lg text-fg transition group-hover:text-accent">
                  {p.title}
                </span>
                <span className="text-sm text-muted md:text-right">
                  {p.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
