"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNestedMobileRoute } from "@/lib/mobile-routes";

const TABS = [
  { href: "/", label: "Home", icon: IconHome },
  { href: "/portfolio", label: "Portfolio", icon: IconPortfolio },
  { href: "/services", label: "Services", icon: IconServices },
  { href: "/blog", label: "Blog", icon: IconBlog },
  { href: "/contact", label: "Contact", icon: IconContact },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function IconHome({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={active ? "text-accent" : "text-muted"}
    >
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPortfolio({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={active ? "text-accent" : "text-muted"}
    >
      <rect
        x="3.5"
        y="7"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconServices({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={active ? "text-accent" : "text-muted"}
    >
      <path
        d="M4 7h7v7H4V7Zm9 0h7v4h-7V7Zm0 6h7v4h-7v-4ZM4 16h7v4H4v-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBlog({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={active ? "text-accent" : "text-muted"}
    >
      <path
        d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v14L12 16.5 4.5 20V6A1.5 1.5 0 0 1 6 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9h7M8.5 12h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconContact({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={active ? "text-accent" : "text-muted"}
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MobileTabBar() {
  const pathname = usePathname();

  if (isNestedMobileRoute(pathname)) {
    return null;
  }

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/70 backdrop-blur-md print:hidden md:hidden"
      style={{
        height: "calc(var(--app-tab-h) + env(safe-area-inset-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <ul className="touch-chrome grid h-[var(--app-tab-h)] grid-cols-5">
        {TABS.map((tab) => {
          const active = isActive(pathname, tab.href);
          const Icon = tab.icon;
          return (
            <li key={tab.href} className="min-w-0">
              <Link
                href={tab.href}
                prefetch
                aria-current={active ? "page" : undefined}
                className="flex h-full flex-col items-center justify-center gap-0.5 px-0.5 transition-transform active:scale-95 active:opacity-70"
              >
                <Icon active={active} />
                <span
                  className={`font-mono-meta max-w-full truncate text-[0.62rem] tracking-wide ${
                    active ? "text-accent" : "text-muted"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
