import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TopicTags } from "@/components/TopicTags";
import type { PortfolioItem } from "@/lib/portfolio";

/** Compact index/home row — detail lives on /portfolio/[slug]. */
export function WorkRow({ project }: { project: PortfolioItem }) {
  return (
    <Reveal>
      <Link
        href={`/portfolio/${project.slug}`}
        className="group grid gap-3 border-t border-line py-6 transition active:bg-bg-elevated md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:items-baseline md:gap-8 md:py-8 md:active:bg-transparent"
      >
        {/* Mobile: title-first list item */}
        <div className="flex items-start justify-between gap-3 md:block">
          <div className="min-w-0 flex-1">
            {project.featured ? (
              <p className="font-mono-meta mb-2 text-xs uppercase tracking-[0.16em] text-accent md:mb-3">
                Featured
              </p>
            ) : null}
            <h3 className="font-display text-xl tracking-tight text-fg transition group-hover:text-accent md:text-3xl">
              {project.title}
            </h3>
            <p className="font-mono-meta mt-1.5 text-xs text-muted md:mt-2">
              {project.status}
            </p>
            <TopicTags tags={project.stack} className="mt-2 md:mt-3" />
          </div>
          <span
            aria-hidden
            className="mt-1 shrink-0 text-muted transition group-hover:text-accent md:hidden"
          >
            →
          </span>
        </div>
        <div>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted md:line-clamp-none md:text-lg">
            {project.summary}
          </p>
          <p className="mt-3 text-sm text-fg underline decoration-line underline-offset-4 transition group-hover:text-accent group-hover:decoration-accent md:mt-4">
            Case study →
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
