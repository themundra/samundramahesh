# Phase 3 — MDX pipeline + Portfolio

**Outcome:** MDX content pipeline, three portfolio projects (Trackify full), SelectedWork on home.

**Depends on:** [Phase 2](./phase-02-design-shell.md)

See [README.md](./README.md) for locked decisions (seed slugs, MDX stack).

---

## Batch 3.1 — MDX lib + content helpers

**Goal:** File-based MDX read/compile helpers for portfolio and blog.

### Prompt (copy-paste)

```text
Batch 3.1 — MDX content pipeline.

Create:
- content/portfolio/*.mdx and content/blog/*.mdx folders
- lib/mdx.ts — read file, gray-matter parse, compile with next-mdx-remote/rsc + remark-gfm
- lib/portfolio.ts — listPortfolio(), getPortfolioBySlug(slug), getFeaturedPortfolio()
- lib/blog.ts — listPosts(), getPostBySlug(slug)
- Frontmatter types:
  Portfolio: title, summary, role, stack: string[], status, links: {label, href}[], cover, featured: boolean
  Blog: title, date, summary, tags: string[]

Add stub trackify.mdx with minimal frontmatter so helpers can be unit-smoked via a temporary server log or typed compile.

Acceptance: helpers return typed data; invalid slug returns null; no UI pages required beyond compile safety.
```

### Acceptance

- MDX read/compile path works for portfolio + blog

---

## Batch 3.2 — Portfolio list + WorkRow + Trackify case study

**Goal:** Portfolio routes + Trackify deep case study + APK links + motion #3.

### Prompt (copy-paste)

```text
Batch 3.2 — Portfolio UI + Trackify full case study.

1. Migrate Trackify copy from https://samundra.dronehospitalnepal.com/ into content/portfolio/trackify.mdx (full case study depth). Preserve APK download link(s) in frontmatter links and render a clear download CTA on the case study page (interactive container OK — not a decorative card grid).
2. Add lighter MDX for falanocollege and courier-direct with honest summaries (role/stack/status); mark trackify featured: true.
3. components/WorkRow.tsx — list row composition (title, summary, stack mono tags), NOT equal card tiles.
4. app/portfolio/page.tsx — list all projects via WorkRow.
5. app/portfolio/[slug]/page.tsx — generateStaticParams; Prose MDX body; metadata from frontmatter.
6. Motion #3: reveal on SelectedWork / WorkRow hover or scroll for image/title.

Acceptance: /portfolio lists 3 projects; /portfolio/trackify shows full MDX + APK links; build lists static params; no card chrome.
```

### Acceptance

- Three projects live; Trackify is deep; APK preserved

---

## Batch 3.3 — Home below-fold: SelectedWork

**Goal:** Featured work section on home after hero.

### Prompt (copy-paste)

```text
Batch 3.3 — Wire SelectedWork on home below hero.

SelectedWork: featured projects from lib/portfolio (Trackify + up to 2 others). List/composition layout linking to case studies. One section job only: headline + one line + work rows. No service content here.

Acceptance: home shows selected work; links resolve; still no services cards under hero.
```

### Acceptance

- Home selected work section complete

---

## Phase exit

`npm run build` must succeed.
