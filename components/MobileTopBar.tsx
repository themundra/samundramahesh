"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getMobileBackHref,
  getMobileBackLabel,
  getMobileScreenTitle,
  isNestedMobileRoute,
} from "@/lib/mobile-routes";
import { site } from "@/content/site";

export function MobileTopBar() {
  const pathname = usePathname();
  const nested = isNestedMobileRoute(pathname);
  const title = getMobileScreenTitle(pathname);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md print:hidden md:hidden"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div
        className="touch-chrome relative flex items-center px-5"
        style={{ height: "var(--app-header-h)" }}
      >
        {nested ? (
          <>
            <Link
              href={getMobileBackHref(pathname)}
              className="absolute left-2 flex min-h-11 min-w-11 items-center gap-1 px-1 text-sm text-accent active:opacity-70"
            >
              <span aria-hidden className="text-base leading-none">
                ←
              </span>
              <span className="max-w-[5.5rem] truncate">
                {getMobileBackLabel(pathname)}
              </span>
            </Link>
            <h1 className="mx-auto max-w-[55%] truncate text-center font-display text-base tracking-tight text-fg">
              {title}
            </h1>
          </>
        ) : (
          <>
            <h1 className="pl-1 font-display text-lg tracking-tight text-fg">
              {title}
            </h1>
            <span className="font-mono-meta ml-auto pr-1 text-[0.65rem] tracking-[0.12em] text-muted">
              {site.handle}
            </span>
          </>
        )}
      </div>
    </header>
  );
}
