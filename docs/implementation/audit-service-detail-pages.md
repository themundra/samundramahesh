# Audit — Individual service pages

## Request
Add dedicated, more detailed pages per service (`/services/[slug]`), in Ink Studio style.

## Current gaps
| Surface | Issue |
| --- | --- |
| `/services` | Long blocks on one page — skimmable but not deep enough for nuanced offer |
| Hash links (`#id`) | No shareable URL per service; weak SEO |
| Content model | `summary` + `bullets` only — no suited-for / process / approach layers |
| Sitemap | Service detail URLs missing |

## Decision
1. **Routes:** `/services` = index (scan strip + compact rows). `/services/[slug]` = full nuance.
2. **Content:** Expand `content/services.ts` with `overview`, `suitedFor`, `includes`, `process[]`, `approach` — structured TS (editable, no CMS).
3. **Links:** Scan strip, home preview, and index rows → `/services/{id}` (not hashes).
4. **Layout:** Editorial composition (type + hairlines), same as case studies — no marketing card stacks, no invented proof/logos.
5. **Helpers:** `lib/services.ts` + sitemap entries for each slug.

## Out of scope
Turnkey sales, fake testimonials, dual-brand Drone Hospital marketing site.
