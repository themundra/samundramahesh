import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { listPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on Flutter, product craft, and interface motion.",
};

export default function BlogPage() {
  const posts = listPosts();

  return (
    <Section
      headline="Blog"
      support="Short notes on Flutter, product decisions, and interface craft."
    >
      <ul className="divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.slug} className="py-8">
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="font-mono-meta text-xs text-muted">{post.date}</p>
              <h2 className="font-display mt-2 text-2xl tracking-tight text-fg transition group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {post.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
