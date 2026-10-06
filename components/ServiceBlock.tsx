import Link from "next/link";

/** Compact index row — detail lives on /services/[slug]. */
export function ServiceBlock({
  title,
  summary,
  label,
  id,
}: {
  id: string;
  title: string;
  summary: string;
  label?: string;
}) {
  return (
    <Link
      href={`/services/${id}`}
      className="group grid gap-3 border-t border-line py-6 transition active:bg-bg-elevated md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:items-baseline md:gap-8 md:py-8 md:active:bg-transparent"
    >
      <div className="flex items-start justify-between gap-3 md:block">
        <div className="min-w-0 flex-1">
          {label ? (
            <p className="font-mono-meta mb-2 text-xs uppercase tracking-[0.16em] text-accent md:mb-3">
              {label}
            </p>
          ) : null}
          <h2 className="font-display text-xl tracking-tight text-fg transition group-hover:text-accent md:text-3xl">
            {title}
          </h2>
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
          {summary}
        </p>
        <p className="mt-3 text-sm text-fg underline decoration-line underline-offset-4 transition group-hover:text-accent group-hover:decoration-accent md:mt-4">
          Details →
        </p>
      </div>
    </Link>
  );
}
