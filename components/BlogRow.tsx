import Link from "next/link";
import { TopicTags } from "@/components/TopicTags";
import type { BlogPost } from "@/lib/blog";

/** Compact blog index/home row — detail lives on /blog/[slug]. */
export function BlogRow({
  post,
  heading: Heading = "h2",
}: {
  post: BlogPost;
  heading?: "h2" | "h3";
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid gap-3 border-t border-line py-6 transition active:bg-bg-elevated md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:items-baseline md:gap-8 md:py-8 md:active:bg-transparent"
    >
      {/* Desktop: date column first. Mobile: title-first via order. */}
      <div className="order-2 md:order-1">
        <p className="font-mono-meta text-xs text-muted">{post.date}</p>
        {post.tags.length > 0 ? (
          <TopicTags tags={post.tags} className="mt-2 md:mt-3" />
        ) : null}
      </div>
      <div className="order-1 flex items-start justify-between gap-3 md:order-2 md:block">
        <div className="min-w-0 flex-1">
          <Heading className="font-display text-xl tracking-tight text-fg transition group-hover:text-accent md:text-3xl">
            {post.title}
          </Heading>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted md:mt-3 md:line-clamp-none md:text-lg">
            {post.summary}
          </p>
          <p className="mt-3 text-sm text-fg underline decoration-line underline-offset-4 transition group-hover:text-accent group-hover:decoration-accent md:mt-4">
            Article →
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-muted transition group-hover:text-accent md:hidden"
        >
          →
        </span>
      </div>
    </Link>
  );
}
