import type { Metadata } from "next";
import { site } from "@/content/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const desc =
    description ??
    "Website & app design, creative services, and founder of Drone Hospital Nepal.";
  const url = absoluteUrl(path);

  return {
    title,
    description: desc,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: title ? `${title} · ${site.name}` : site.name,
      description: desc,
      url,
      siteName: site.name,
      images: [{ url: "/og/default.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} · ${site.name}` : site.name,
      description: desc,
      images: ["/og/default.png"],
    },
  };
}
