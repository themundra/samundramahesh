import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { TextLink } from "@/components/TextLink";
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

  return (
    <article className="container-site py-20 md:py-28">
      <p className="font-mono-meta text-xs text-muted">
        {post.frontmatter.date}
      </p>
      <h1 className="font-display mt-3 max-w-3xl text-4xl tracking-tight text-fg md:text-5xl">
        {post.frontmatter.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        {post.frontmatter.summary}
      </p>
      <p className="font-mono-meta mt-6 text-xs text-muted">
        {post.frontmatter.tags.join(" · ")}
      </p>
      <div className="mt-12">
        <Prose>{post.content}</Prose>
      </div>
      <p className="mt-16">
        <TextLink href="/blog">← All posts</TextLink>
      </p>
    </article>
  );
}
