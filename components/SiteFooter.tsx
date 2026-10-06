import Link from "next/link";
import { TextLink } from "./TextLink";
import { site } from "@/content/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/cv", label: "CV" },
] as const;

/** Desktop marketing footer — hidden on mobile (app shell). */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto hidden border-t border-line md:block">
      <div className="container-site flex flex-col gap-5 py-8 md:flex-row md:items-start md:justify-between md:gap-6 md:py-10">
        <div>
          <p className="font-display text-lg text-fg">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
          <p className="mt-3 text-sm md:mt-4">
            <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:mt-4">
            {site.socials.map((s) => (
              <li key={s.id}>
                <TextLink href={s.href} external className="text-sm">
                  {s.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-muted transition hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container-site border-t border-line py-5 md:py-6">
        <p className="font-mono-meta text-xs text-muted">
          © {year} Samundra Mahesh
        </p>
      </div>
    </footer>
  );
}
