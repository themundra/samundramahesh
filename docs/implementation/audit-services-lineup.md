# Audit — Services lineup refresh (Rishikesh-inspired)

Source pattern: [rishikeshrana.com.np services](https://rishikeshrana.com.np/page.php?view=services)

## Request

- Add **Social Media Management** and **Content Creation for Business**
- Replace separate **Flutter apps** + **UI/UX** with one **Website/App Design & Development**
- Keep Ink Studio (no turnkey sales, no logo carousel, scan strip + deep blocks)

## Findings

| Area | Before | Risk if unchanged |
| --- | --- | --- |
| Services | Flutter / UI-UX / Drone Hospital | Contradicts new offer set |
| Home hero / footer / SEO | Flutter-first | Services page and brand line disagree |
| Scan strip | 3-col grid | Awkward with 4 services |
| Portfolio / blog | Flutter case studies | OK — craft proof under Website/App |
| Turnkey / brands strip | Absent | Stay absent (locked out of scope) |

## Decision

1. **Four services:** Website/App Design & Development (Most requested) · Social Media Management · Content Creation for Business · Drone Hospital (venture line).
2. **Flutter + UI/UX** fold into Website/App (Flutter remains craft inside that block, not a separate nav product).
3. **Site role / hero / metadata** broaden slightly so services and identity match; portfolio stays Flutter-led proof.
4. **Scan strip** → 2×2 on desktop for four jump cells.
5. **No** turnkey, flash sales, or invented client logos.
