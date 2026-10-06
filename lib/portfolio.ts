import {
  compileMdxContent,
  listMdxSlugs,
  readMdxFile,
  type PortfolioFrontmatter,
} from "./mdx";

export type PortfolioItem = PortfolioFrontmatter & {
  slug: string;
};

export function listPortfolio(): PortfolioItem[] {
  return listMdxSlugs("portfolio")
    .map((slug) => {
      const file = readMdxFile("portfolio", slug);
      if (!file) return null;
      return { slug, ...(file.data as PortfolioFrontmatter) };
    })
    .filter((item): item is PortfolioItem => item !== null)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return listPortfolio().filter((p) => p.featured).slice(0, 3);
}

export async function getPortfolioBySlug(slug: string) {
  const file = readMdxFile("portfolio", slug);
  if (!file) return null;
  const frontmatter = file.data as PortfolioFrontmatter;
  const content = await compileMdxContent(file.content);
  return { slug, frontmatter, content };
}
