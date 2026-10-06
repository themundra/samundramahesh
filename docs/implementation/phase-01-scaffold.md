# Phase 1 — Scaffold

**Outcome:** Next.js App Router + TypeScript + Tailwind app boots in the current workspace.

**Depends on:** [Phase 0](./phase-00-persist-plan.md)

See [README.md](./README.md) for locked decisions.

---

## Batch 1.1 — Create Next.js app in current folder

**Goal:** Working Next.js + TS + Tailwind + Framer Motion baseline.

### Prompt (copy-paste)

```text
Batch 1.1 — Scaffold only (see IMPLEMENTATION_PLAN.md Phase 1).

In the current workspace root (samundramahesh), create a Next.js App Router + TypeScript + Tailwind CSS app IN PLACE (do not nest an extra folder). Preserve initial_plan.md and IMPLEMENTATION_PLAN.md.

Commands/approach:
- Use create-next-app with App Router, TypeScript, Tailwind, ESLint, app/ directory, no src/, import alias @/*
- Install: framer-motion, next-mdx-remote, gray-matter, remark-gfm, resend, zod
- DevDep as needed for MDX types

Replace default page with a minimal placeholder that says "Samundra Mahesh" so the app boots.
Add .env.example with RESEND_API_KEY, CONTACT_TO_EMAIL, NEXT_PUBLIC_SITE_URL.

Acceptance: npm run dev works; npm run build works; Tailwind styles apply; listed packages installed; plan markdown files retained.
```

### Acceptance

- `npm run build` green
- Packages installed (`framer-motion`, `next-mdx-remote`, `gray-matter`, `remark-gfm`, `resend`, `zod`)
- Plan markdown files retained (`initial_plan.md`, `IMPLEMENTATION_PLAN.md`)

---

## Phase exit

`npm run build` must succeed.
