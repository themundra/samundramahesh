/** Mobile app-shell route helpers — tab roots vs nested (push) screens. */

const TAB_ROOTS = new Set([
  "/",
  "/portfolio",
  "/services",
  "/blog",
  "/contact",
]);

const TAB_TITLES: Record<string, string> = {
  "/": "Home",
  "/portfolio": "Portfolio",
  "/services": "Services",
  "/blog": "Blog",
  "/contact": "Contact",
};

export function isNestedMobileRoute(pathname: string): boolean {
  if (pathname === "/cv" || pathname.startsWith("/cv/")) return true;
  if (TAB_ROOTS.has(pathname)) return false;
  // Detail under a tab section
  if (
    pathname.startsWith("/portfolio/") ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/blog/")
  ) {
    return true;
  }
  // Unknown deep paths (e.g. 404) treat as nested so tabs don't fight content
  return pathname !== "/" && !TAB_ROOTS.has(pathname);
}

export function getMobileScreenTitle(pathname: string): string {
  if (TAB_TITLES[pathname]) return TAB_TITLES[pathname];
  if (pathname === "/cv") return "CV";
  if (pathname.startsWith("/portfolio/")) return "Case study";
  if (pathname.startsWith("/services/")) return "Service";
  if (pathname.startsWith("/blog/")) return "Article";
  return "Samundra";
}

export function getMobileBackHref(pathname: string): string {
  if (pathname.startsWith("/portfolio/")) return "/portfolio";
  if (pathname.startsWith("/services/")) return "/services";
  if (pathname.startsWith("/blog/")) return "/blog";
  if (pathname === "/cv" || pathname.startsWith("/cv/")) return "/contact";
  return "/";
}

export function getMobileBackLabel(pathname: string): string {
  if (pathname.startsWith("/portfolio/")) return "Portfolio";
  if (pathname.startsWith("/services/")) return "Services";
  if (pathname.startsWith("/blog/")) return "Blog";
  if (pathname === "/cv" || pathname.startsWith("/cv/")) return "Contact";
  return "Home";
}
