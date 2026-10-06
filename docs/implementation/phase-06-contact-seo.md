# Phase 6 — Contact + SEO

**Outcome:** Contact form + Resend API (mailto fallback) and SEO baseline (metadata, sitemap, robots, OG).

**Depends on:** [Phase 5](./phase-05-blog.md)

See [README.md](./README.md) for locked decisions (email, env vars).

---

## Batch 6.1 — Contact form + API

**Goal:** `/contact` + `POST /api/contact` via Resend with mailto fallback.

### Prompt (copy-paste)

```text
Batch 6.1 — Contact page + Resend API.

app/contact/page.tsx: email, location, socials from site.ts; ContactForm as the rare interactive card/surface.
Fields: name, email, message. Client validation with zod. POST /api/contact.
app/api/contact/route.ts: validate body; send via Resend to CONTACT_TO_EMAIL; return JSON errors safely; rate-limit lightly (simple in-memory or hop-by-hop headers OK for v1).
If RESEND_API_KEY missing: API returns 503 with message; UI shows mailto fallback to mahesamun@gmail.com.

Acceptance: happy path works with key; without key, mailto fallback UX clear; no secrets committed.
```

### Acceptance

- Contact path production-safe for v1

---

## Batch 6.2 — SEO + sitemap + OG

**Goal:** Per-route metadata, sitemap, robots, default OG image.

### Prompt (copy-paste)

```text
Batch 6.2 — SEO polish.

lib/seo.ts helpers for metadata.
Per-route metadata (title/description).
app/sitemap.ts includes home, portfolio, each project slug, services, blog, each post, contact.
app/robots.ts allows all; sitemap URL from NEXT_PUBLIC_SITE_URL.
Basic OG: use public/og/default.png (create a simple branded PNG or SVG→PNG placeholder). Dynamic OG optional later — not required for v1 if default OG exists.

Acceptance: metadata tags present; /sitemap.xml and /robots.txt resolve.
```

### Acceptance

- SEO baseline shipped

---

## Phase exit

`npm run build` must succeed.
