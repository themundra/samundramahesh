# Phase 7 — Polish + content parity

**Outcome:** Motion/a11y/responsive polish, live-site content parity, final home section order with contact CTA.

**Depends on:** [Phase 6](./phase-06-contact-seo.md)

See [README.md](./README.md) for locked decisions and definition of done.

---

## Batch 7.1 — Motion audit + a11y + responsive

**Goal:** Exactly 3 motions; a11y and responsive checklist; green build.

### Prompt (copy-paste)

```text
Batch 7.1 — Polish pass.

Verify exactly 3 intentional motions (page enter, nav indicator, work reveal). Remove any decorative motion noise.
A11y: skip link, focus rings, accordion keyboard, form errors announced, color contrast on muted/accent.
Responsive: hero, lists, header from 375px → desktop. No horizontal scroll.
npm run build must pass.

Acceptance: checklist above verified; build green.
```

### Acceptance

- Checklist verified; build green

---

## Batch 7.2 — Final migrate from live site + assets

**Goal:** Content/asset parity with the live portfolio; remove create-next-app leftovers.

### Prompt (copy-paste)

```text
Batch 7.2 — Content/asset parity with https://samundra.dronehospitalnepal.com/.

Pull remaining copy, images, APK link accuracy, project names, and bio into MDX/ts/public. Do not invent testimonials or employers. Keep Drone Hospital as services content only. Remove leftovers from create-next-app defaults.

Acceptance: no placeholder lorem; Trackify APK works; visual assets load; build green.
```

### Acceptance

- No placeholder lorem; Trackify APK works; visual assets load; build green

---

## Batch 7.3 — Home contact CTA close

**Goal:** Final home contact CTA; exact section order.

### Prompt (copy-paste)

```text
Batch 7.3 — Final home section: contact CTA only (headline + one line + CTA to /contact). Ensure home section order EXACTLY:

1. Hero (viewport 1)
2. SelectedWork
3. ServicesPreview
4. ExperienceList
5. Blog teaser
6. Contact CTA

Acceptance: order exact; each section one job; hero uncluttered.
```

### Acceptance

- Order exact; each section one job; hero uncluttered

---

## Phase exit

`npm run build` must succeed. v1 is done when [README definition of done](./README.md#definition-of-done-v1) is met.
