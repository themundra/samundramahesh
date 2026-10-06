import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
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

  return (
    <article className="container-site py-20 md:py-28">
      <p className="font-mono-meta text-xs uppercase tracking-[0.18em] text-muted">
        Case study
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-tight text-fg md:text-5xl">
        {frontmatter.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{frontmatter.summary}</p>

      <dl className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
        <div>
          <dt className="font-mono-meta text-xs uppercase tracking-wide text-muted">
            Role
          </dt>
          <dd className="mt-2 text-sm text-fg">{frontmatter.role}</dd>
        </div>
        <div>
          <dt className="font-mono-meta text-xs uppercase tracking-wide text-muted">
            Status
          </dt>
          <dd className="mt-2 text-sm text-fg">{frontmatter.status}</dd>
        </div>
        <div>
          <dt className="font-mono-meta text-xs uppercase tracking-wide text-muted">
            Stack
          </dt>
          <dd className="mt-2 font-mono-meta text-xs text-fg">
            {frontmatter.stack.join(" · ")}
          </dd>
        </div>
      </dl>

      {downloads.length > 0 ? (
        <div className="mt-8 rounded-sm border border-line bg-bg-elevated p-6">
          <p className="text-sm text-muted">Download</p>
          <div className="mt-4 flex flex-wrap gap-4">
            {downloads.map((link) => (
              <Button key={link.href} href={link.href}>
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-12">
        <Prose>{content}</Prose>
      </div>

      <p className="mt-16">
        <TextLink href="/portfolio">← All projects</TextLink>
      </p>
    </article>
  );
}
