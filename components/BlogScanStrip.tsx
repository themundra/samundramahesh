import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

type BlogScanStripProps = {
  posts: BlogPost[];
  variant?: "grid" | "snap";
  className?: string;
};

/**
 * Interactive scan strip for blog — entry tiles to posts.
 */
export function BlogScanStrip({
  posts,
  variant = "grid",
  className = "",
}: BlogScanStripProps) {
  const snap = variant === "snap";
  const cols = posts.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1";

  return (
    <nav
      aria-label="Jump to a post"
      className={[snap ? "" : "mb-4 border border-line", className]
        .filter(Boolean)
        .join(" ")}
    >
      <ul
        className={
          snap
            ? `-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid ${cols} md:gap-0 md:overflow-visible md:border md:border-line md:px-0 md:pb-0`
            : `grid ${cols}`
        }
      >
        {posts.map((post, index) => (
          <li
            key={post.slug}
            className={
              snap
                ? [
                    "w-[min(78vw,18.5rem)] shrink-0 snap-start border border-line md:w-auto md:shrink md:border-0",
                    index > 0 ? "md:border-l md:border-line" : "",
                  ].join(" ")
                : [
                    "border-line",
                    index > 0 ? "border-t md:border-t-0 md:border-l" : "",
                  ].join(" ")
            }
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col justify-between gap-4 p-5 transition hover:bg-bg-elevated focus-visible:bg-bg-elevated md:min-h-[12rem] md:gap-6 md:p-7"
            >
              <div>
                <p className="font-mono-meta mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                  {post.date}
                </p>
                <span className="font-display block text-lg tracking-tight text-fg transition group-hover:text-accent md:text-2xl">
                  {post.title}
                </span>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted md:mt-3 md:line-clamp-none">
                  {post.summary}
                </p>
              </div>
              <span className="text-sm text-fg underline decoration-line underline-offset-4 transition group-hover:text-accent group-hover:decoration-accent">
                Read →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
