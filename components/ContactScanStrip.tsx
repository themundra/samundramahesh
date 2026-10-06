import Link from "next/link";
import { site } from "@/content/site";

type Channel = {
  id: string;
  label: string;
  handle: string;
  href: string;
  teaser: string;
  external?: boolean;
};

/**
 * Interactive scan strip for /contact — channels to reach out.
 * Compact tiles on mobile; larger editorial tiles from sm+.
 */
export function ContactScanStrip() {
  const channels: Channel[] = [
    {
      id: "email",
      label: "Email",
      handle: site.email,
      href: `mailto:${site.email}`,
      teaser: "Best for briefs, timelines, and detailed asks.",
    },
    ...site.socials.map((s) => ({
      id: s.id,
      label: s.label,
      handle: s.handle,
      href: s.href,
      teaser: s.teaser,
      external: true,
    })),
  ];

  return (
    <nav aria-label="Contact channels" className="mb-4 border border-line">
      <ul className="grid grid-cols-2 gap-0 sm:grid-cols-2">
        {channels.map((channel, index) => (
          <li
            key={channel.id}
            className={[
              "border-line",
              index > 0 ? "border-t sm:border-t-0" : "",
              index >= 2 ? "border-t" : "",
              index % 2 === 1 ? "border-l" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Link
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="group flex h-full flex-col justify-between gap-3 p-5 transition hover:bg-bg-elevated focus-visible:bg-bg-elevated sm:gap-6 sm:p-6 md:min-h-[11rem] md:p-7"
            >
              <div>
                <p className="font-mono-meta mb-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-accent sm:mb-2">
                  {channel.label}
                </p>
                <span className="font-display block break-all text-base tracking-tight text-fg transition group-hover:text-accent sm:truncate sm:text-xl md:text-2xl">
                  {channel.handle}
                </span>
                <p className="mt-2 hidden text-sm leading-relaxed text-muted sm:mt-3 sm:block">
                  {channel.teaser}
                </p>
              </div>
              <span className="text-sm text-fg underline decoration-line underline-offset-4 transition group-hover:text-accent group-hover:decoration-accent">
                Open →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
