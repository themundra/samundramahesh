import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { BlogScanStrip } from "@/components/BlogScanStrip";
import { BlogRow } from "@/components/BlogRow";
import { Button } from "@/components/Button";
import { listPosts } from "@/lib/blog";
import { blogPage } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on product craft, Flutter, and interface discipline by Samundra Mahesh.",
};

export default function BlogPage() {
  const posts = listPosts();

  return (
    <>
      <Section
        eyebrow={blogPage.eyebrow}
        headline={blogPage.headline}
        support={blogPage.support}
      />

      <div className="container-site pb-4">
        <BlogScanStrip posts={posts} variant="snap" />
      </div>

      <section aria-label="All posts" className="pb-6 md:pb-12">
        <div className="container-site border-b border-line">
          {posts.map((post) => (
            <BlogRow key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Section
        headline="Want to talk product?"
        support="If a note resonates — or you have a build in mind — send a short message."
      >
        <Button href="/contact">Get in touch</Button>
      </Section>
    </>
  );
}
