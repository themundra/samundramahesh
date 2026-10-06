import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { ReactElement } from "react";

export type PortfolioFrontmatter = {
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: string;
  links: { label: string; href: string }[];
  cover: string;
  featured: boolean;
};

export type BlogFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

const contentRoot = path.join(process.cwd(), "content");

export function readMdxFile(dir: "portfolio" | "blog", slug: string) {
  const filePath = path.join(contentRoot, dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  return { content, data, slug, filePath };
}

export function listMdxSlugs(dir: "portfolio" | "blog") {
  const dirPath = path.join(contentRoot, dir);
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function compileMdxContent(
  source: string,
): Promise<ReactElement> {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });
  return content;
}
