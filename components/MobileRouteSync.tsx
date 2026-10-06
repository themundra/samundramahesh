"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isNestedMobileRoute } from "@/lib/mobile-routes";

/** Syncs nested-route body class for mobile shell padding (tabs hidden). */
export function MobileRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    const nested = isNestedMobileRoute(pathname);
    document.body.classList.toggle("is-nested-route", nested);
    return () => {
      document.body.classList.remove("is-nested-route");
    };
  }, [pathname]);

  return null;
}
