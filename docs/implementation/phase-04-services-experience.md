# Phase 4 — Services + Experience

**Outcome:** Structured site/services/experience content; Services page; home ServicesPreview + ExperienceList.

**Depends on:** [Phase 3](./phase-03-mdx-portfolio.md)

See [README.md](./README.md) for locked decisions (brand framing for Drone Hospital).

---

## Batch 4.1 — Content modules

**Goal:** Typed `site.ts`, `services.ts`, `experience.ts` content modules.

### Prompt (copy-paste)

```text
Batch 4.1 — content/services.ts + content/experience.ts + content/site.ts.

site.ts: name, role, email, location, socials (from live site if present), short bio.
services.ts: three blocks — Flutter apps; UI/UX; Drone Hospital (repair / maintenance / training). Personal portfolio framing; DH is a venture service, not co-brand.
experience.ts: migrate career entries from live site into structured items {company, role, period, location?, bullets[], skills[]}. Tonality like Rishikesh depth but calmer — no skill percentage bars, no turnkey sales.

Acceptance: typed exports only; no UI yet beyond types compiling.
```

### Acceptance

- Structured content modules ready

---

## Batch 4.2 — Services page + home ServicesPreview

**Goal:** `/services` + home preview (list/composition, not card stack).

### Prompt (copy-paste)

```text
Batch 4.2 — Services page + ServicesPreview.

components/ServiceBlock.tsx — compositional blocks separated by hairlines/spacing, NOT 3 equal marketing cards.
app/services/page.tsx — one page title section + ServiceBlocks from content/services.ts.
Home ServicesPreview — short list → /services; place AFTER SelectedWork; one job only.

Acceptance: /services readable; home preview is list/composition not card stack under hero.
```

### Acceptance

- Services surface complete

---

## Batch 4.3 — Experience on home

**Goal:** Accessible experience timeline/accordion on home after services preview.

### Prompt (copy-paste)

```text
Batch 4.3 — ExperienceList + ExperienceItem.

Implement timeline/accordion (accessible): one open panel at a time OR simple expanding rows. Use content/experience.ts. Place on home after services preview. No skill bars. No testimonials unless already on live site for Samundra (do not invent).

Acceptance: keyboard accessible expand/collapse; content accurate to migrated data.
```

### Acceptance

- Experience snapshot on home

---

## Phase exit

`npm run build` must succeed.
