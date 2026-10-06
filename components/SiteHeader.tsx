"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { site } from "@/content/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative whitespace-nowrap py-1 text-[0.95rem] leading-none tracking-wide transition md:text-base ${
        active ? "text-fg" : "text-muted hover:text-fg"
      }`}
    >
      {label}
      {active ? (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-x-0 -bottom-2 h-px bg-accent"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </Link>
  );
}

/** Desktop sticky header — hidden below md (mobile uses MobileTopBar). */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden border-b border-line bg-bg/70 backdrop-blur-md md:block">
      <div className="container-site relative flex items-center justify-between gap-6 py-5">
        <Link href="/" className="group flex shrink-0 flex-col justify-center gap-1">
          <span className="font-display text-xl leading-none tracking-tight text-fg transition group-hover:text-accent">
            {site.name}
          </span>
          <span className="font-mono-meta text-xs leading-none tracking-[0.14em] text-muted transition group-hover:text-fg/80">
            {site.handle}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-8 lg:gap-10"
        >
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={isActive(pathname, item.href)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
