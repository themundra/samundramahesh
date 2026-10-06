import {
  compileMdxContent,
  listMdxSlugs,
  readMdxFile,
  type BlogFrontmatter,
} from "./mdx";

export type BlogPost = BlogFrontmatter & {
  slug: string;
};

export function listPosts(): BlogPost[] {
  return listMdxSlugs("blog")
    .map((slug) => {
      const file = readMdxFile("blog", slug);
      if (!file) return null;
      return { slug, ...(file.data as BlogFrontmatter) };
    })
    .filter((item): item is BlogPost => item !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const file = readMdxFile("blog", slug);
  if (!file) return null;
  const frontmatter = file.data as BlogFrontmatter;
  const content = await compileMdxContent(file.content);
  return { slug, frontmatter, content };
}
