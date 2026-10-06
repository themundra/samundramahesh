import type { MetadataRoute } from "next";
import { listPortfolio } from "@/lib/portfolio";
import { listPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/portfolio", "/services", "/blog", "/contact"].map(
    (path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: new Date(),
    }),
  );

  const projects = listPortfolio().map((p) => ({
    url: absoluteUrl(`/portfolio/${p.slug}`),
    lastModified: new Date(),
  }));

  const posts = listPosts().map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...projects, ...posts];
}
