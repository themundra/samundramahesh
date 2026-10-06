import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
import { TopicTags } from "@/components/TopicTags";
import { getPostBySlug, listPosts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const others = listPosts().filter((p) => p.slug !== slug);

  return (
    <article className="pb-10 md:pb-8">
      <header className="container-site py-8 md:py-16">
        <p className="font-mono-meta text-xs uppercase tracking-[0.18em] text-accent">
          Article · {post.frontmatter.date}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl tracking-tight text-fg md:text-5xl">
          {post.frontmatter.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">
          {post.frontmatter.summary}
        </p>
        {post.frontmatter.tags.length > 0 ? (
          <TopicTags tags={post.frontmatter.tags} className="mt-5 md:mt-6" />
        ) : null}
        <div className="mt-6 hidden md:block">
          <TextLink href="/blog">All posts</TextLink>
        </div>
      </header>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            Article
          </h2>
          <Prose>{post.content}</Prose>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
          Continue the conversation
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Questions about the ideas here — or a project they sparked — are
          welcome.
        </p>
        <div className="mt-6">
          <Button href="/contact">Get in touch</Button>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="container-site section-divider py-8 md:py-16">
          <h2 className="font-display text-lg tracking-tight text-fg md:text-xl">
            More notes
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-1 py-4 transition md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="font-display text-lg text-fg transition group-hover:text-accent">
                    {p.title}
                  </span>
                  <span className="font-mono-meta text-xs text-muted md:text-right">
                    {p.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
