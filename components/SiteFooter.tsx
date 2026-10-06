import Link from "next/link";
import { TextLink } from "./TextLink";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-site flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg text-fg">Samundra Mahesh</p>
          <p className="mt-1 text-sm text-muted">
            Flutter Developer &amp; UI/UX Designer
          </p>
          <p className="mt-4 text-sm">
            <TextLink href="mailto:mahesamun@gmail.com">
              mahesamun@gmail.com
            </TextLink>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container-site border-t border-line py-6">
        <p className="font-mono-meta text-xs text-muted">
          © {year} Samundra Mahesh
        </p>
      </div>
    </footer>
  );
}
