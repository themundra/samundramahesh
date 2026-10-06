# Phase 2 — Design system + shell

**Outcome:** Ink Studio tokens, layout shell, navigation, and home hero composition.

**Depends on:** [Phase 1](./phase-01-scaffold.md)

See [README.md](./README.md) for locked decisions (tokens, fonts, motion rules).

---

## Batch 2.1 — Tokens, fonts, globals, primitives

**Goal:** Ink Studio CSS variables, fonts, and thin primitives.

### Prompt (copy-paste)

```text
Batch 2.1 — Ink Studio tokens + primitives (IMPLEMENTATION_PLAN.md).

Implement exactly:
1. app/globals.css — CSS variables: --bg #070B12, --bg-elevated #0E1522, --fg #E8EEF7, --muted #8B97AB, --accent #5EC8E8, --accent-dim, --line, --danger, --success. Base body on --bg/--fg. No purple gradients, no cream/terracotta, no newspaper grids.
2. app/layout.tsx — next/font: Syne (display), DM Sans (body), JetBrains Mono (mono); wire CSS variables; metadata title template "%s · Samundra Mahesh".
3. Components: Button (primary filled accent + secondary text/underline), TextLink, Section (optional eyebrow + ONE headline + ONE supporting line), SkipLink.
4. Max content width ~1120px utility/class; prose width ~65ch class for later.

Do not build header/footer/pages yet beyond layout shell.

Acceptance: tokens visible in DevTools; fonts load; Button/TextLink/Section/SkipLink render on a temporary layout smoke test or home placeholder.
```

### Acceptance

- Tokens + fonts + primitives exist and match locks

---

## Batch 2.2 — Header, footer, nav motion

**Goal:** Site shell navigation with active indicator motion (#2).

### Prompt (copy-paste)

```text
Batch 2.2 — SiteHeader + SiteFooter + nav active motion.

Nav items EXACT: Home (/), Portfolio (/portfolio), Services (/services), Blog (/blog), Contact (/contact). No product names in nav. No Drone Hospital as co-brand.

SiteHeader: skip link target #main; visible focus rings using accent; active route indicator slides (Framer Motion layoutId) — this is motion #2.
SiteFooter: name, short role line, email mahesamun@gmail.com, nav repeats, copyright year.

Wire header/footer into app/layout.tsx. Main landmark id="main".

Create placeholder route pages for portfolio, services, blog, contact that only render Section with page title so nav works.

Acceptance: all nav links work; active indicator animates; keyboard focus visible; mobile nav usable (simple collapse or stacked — no pill clusters).
```

### Acceptance

- Shell navigation complete across 5 routes

---

## Batch 2.3 — Home hero composition only

**Goal:** Brand-first full-bleed first viewport + PageEnter motion (#1).

### Prompt (copy-paste)

```text
Batch 2.3 — Home hero ONLY (first viewport). Follow UX rules strictly.

First viewport = ONE composition:
- Brand signal loudest: "Samundra Mahesh" (Syne display)
- ONE headline (must not overpower brand)
- ONE supporting sentence (Flutter / UI-UX / Drone Hospital founder — personal brand first)
- ONE CTA group: primary → /portfolio, secondary → /contact
- ONE dominant full-bleed visual plane/background (atmospheric ink wash + optional abstract device silhouette or real photo if available in public/). NO inset hero cards, NO service cards, NO stats, NO overlays/badges/chips.

Soft radial wash allowed for atmosphere only.
Add PageEnter motion wrapper (opacity/y) — motion #1.

Leave below-fold sections as empty placeholders with comments for later batches.

Acceptance: brand-test passes (remove nav → still clearly Samundra); hero is full-bleed; build passes.
```

### Acceptance

- Hero matches UX rules; motion #1 present

---

## Phase exit

`npm run build` must succeed.
