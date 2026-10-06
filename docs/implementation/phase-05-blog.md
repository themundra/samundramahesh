# Phase 5 — Blog

**Outcome:** Blog index/detail with two seed MDX posts and home teaser.

**Depends on:** [Phase 4](./phase-04-services-experience.md)

See [README.md](./README.md) for locked decisions (seed post slugs/dates).

---

## Batch 5.1 — Seed posts + blog routes

**Goal:** Two real seed posts + `/blog` routes + home blog teaser.

### Prompt (copy-paste)

```text
Batch 5.1 — Blog index/detail + 2 seed MDX posts.

Create:
- content/blog/building-trackify-privacy-first-finance.mdx
- content/blog/flutter-ui-micro-interactions.mdx
Real, useful short posts (not lorem). Frontmatter complete.

app/blog/page.tsx — date-sorted list (mono dates, Syne titles).
app/blog/[slug]/page.tsx — Prose + generateStaticParams + metadata.
Home: blog teaser section (latest 2) after experience — one headline, one line, links.

Acceptance: both posts render; empty-blog problem solved; home teaser works.
```

### Acceptance

- Blog fully usable with 2 posts

---

## Phase exit

`npm run build` must succeed.
