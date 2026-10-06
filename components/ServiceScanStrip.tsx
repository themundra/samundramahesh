import Link from "next/link";
import type { Service } from "@/content/services";

type ServiceScanStripProps = {
  services: Service[];
  variant?: "grid" | "snap";
  className?: string;
};

/**
 * Interactive scan strip for services — entry tiles to detail pages.
 */
export function ServiceScanStrip({
  services,
  variant = "grid",
  className = "",
}: ServiceScanStripProps) {
  const snap = variant === "snap";

  return (
    <nav
      aria-label="Jump to a service"
      className={[snap ? "" : "mb-4 border border-line", className]
        .filter(Boolean)
        .join(" ")}
    >
      <ul
        className={
          snap
            ? "-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-0 md:overflow-visible md:border md:border-line md:px-0 md:pb-0"
            : "grid sm:grid-cols-2"
        }
      >
        {services.map((s, index) => {
          const isLastRow =
            index >= services.length - (services.length % 2 === 0 ? 2 : 1);
          const isOddColumn = index % 2 === 0;
          return (
            <li
              key={s.id}
              className={
                snap
                  ? [
                      "w-[min(78vw,18.5rem)] shrink-0 snap-start border border-line md:w-auto md:shrink md:border-0",
                      index > 0 && isOddColumn ? "md:border-l md:border-line" : "",
                      !isLastRow ? "md:border-b md:border-line" : "",
                      index % 2 === 1 ? "md:border-l md:border-line" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  : [
                      "border-line",
                      index < services.length - 1 ? "border-b sm:border-b-0" : "",
                      !isLastRow ? "sm:border-b" : "",
                      isOddColumn ? "sm:border-r" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
              }
            >
              <Link
                href={`/services/${s.id}`}
                className="group flex h-full flex-col justify-between gap-4 p-5 transition hover:bg-bg-elevated focus-visible:bg-bg-elevated md:min-h-[11rem] md:gap-6 md:p-7"
              >
                <div>
                  {s.label ? (
                    <p className="font-mono-meta mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                      {s.label}
                    </p>
                  ) : (
                    <p className="font-mono-meta mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  )}
                  <span className="font-display block text-lg tracking-tight text-fg transition group-hover:text-accent md:text-2xl">
                    {s.title}
                  </span>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted md:mt-3 md:line-clamp-none">
                    {s.teaser}
                  </p>
                </div>
                <span className="text-sm text-fg underline decoration-line underline-offset-4 transition group-hover:text-accent group-hover:decoration-accent">
                  Explore →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
