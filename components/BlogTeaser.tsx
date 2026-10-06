import { Section } from "@/components/Section";
import { BlogScanStrip } from "@/components/BlogScanStrip";
import { TextLink } from "@/components/TextLink";
import { listPosts } from "@/lib/blog";
import { home } from "@/content/home";

export function BlogTeaser() {
  const posts = listPosts().slice(0, 2);

  return (
    <Section
      eyebrow={home.blog.eyebrow}
      headline={home.blog.headline}
      support={home.blog.support}
    >
      <BlogScanStrip posts={posts} variant="snap" />
      <p className="mt-6 md:mt-8">
        <TextLink href="/blog">All posts →</TextLink>
      </p>
    </Section>
  );
}
