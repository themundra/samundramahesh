import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/portfolio";

type PortfolioScanStripProps = {
  projects: PortfolioItem[];
  /**
   * snap — horizontal rail under md, grid at md+ (home).
   * grid — classic grid; hide on mobile from the parent when used on indexes.
   */
  variant?: "grid" | "snap";
  className?: string;
};

/**
 * Interactive scan strip for portfolio — entry tiles to case studies.
 */
export function PortfolioScanStrip({
  projects,
  variant = "grid",
  className = "",
}: PortfolioScanStripProps) {
  const snap = variant === "snap";

  return (
    <nav
      aria-label="Jump to a project"
      className={[
        snap ? "" : "mb-4 border border-line",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ul
        className={
          snap
            ? "-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mb-0 md:grid md:grid-cols-3 md:gap-0 md:overflow-visible md:border md:border-line md:px-0 md:pb-0"
            : "grid md:grid-cols-3"
        }
      >
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className={
              snap
                ? [
                    "w-[min(78vw,18.5rem)] shrink-0 snap-start border border-line md:w-auto md:shrink md:snap-align-none md:border-0",
                    index > 0 ? "md:border-l md:border-line" : "",
                  ].join(" ")
                : [
                    "border-line",
                    index > 0 ? "border-t md:border-t-0 md:border-l" : "",
                  ].join(" ")
            }
          >
            <Link
              href={`/portfolio/${project.slug}`}
              className="group flex h-full flex-col justify-between gap-4 p-5 transition hover:bg-bg-elevated focus-visible:bg-bg-elevated md:min-h-[12rem] md:gap-5 md:p-7"
            >
              <div>
                {project.featured ? (
                  <p className="font-mono-meta mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                    Featured
                  </p>
                ) : (
                  <p className="font-mono-meta mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                )}
                <div className="relative mb-3 aspect-[16/10] overflow-hidden border border-line bg-bg-elevated md:mb-4">
                  <Image
                    src={project.cover}
                    alt=""
                    fill
                    className="object-cover transition duration-300 [@media(hover:hover)]:group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 78vw, 33vw"
                  />
                </div>
                <span className="font-display block text-lg tracking-tight text-fg transition group-hover:text-accent md:text-2xl">
                  {project.title}
                </span>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted md:mt-3 md:line-clamp-none">
                  {project.summary}
                </p>
              </div>
              <span className="text-sm text-fg underline decoration-line underline-offset-4 transition group-hover:text-accent group-hover:decoration-accent">
                Explore →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
