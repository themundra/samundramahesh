import Link from "next/link";
import { Section } from "@/components/Section";
import { listPosts } from "@/lib/blog";
import { TextLink } from "@/components/TextLink";

export function BlogTeaser() {
  const posts = listPosts().slice(0, 2);

  return (
    <Section
      eyebrow="Writing"
      headline="Recent notes"
      support="Short posts on Flutter craft and product decisions."
    >
      <ul className="divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.slug} className="py-6">
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="font-mono-meta text-xs text-muted">{post.date}</p>
              <h3 className="font-display mt-2 text-xl text-fg transition group-hover:text-accent">
                {post.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <TextLink href="/blog">All posts →</TextLink>
      </p>
    </Section>
  );
}
