/**
 * Services exploration audit (Ink Studio)
 * ---------------------------------------
 * Goal: improve scan/jump on /services without violating locked UX.
 *
 * Findings
 * 1. Home ServicesPreview is already list/composition — keep it (plan: no equal
 *    service cards under hero; one job after SelectedWork).
 * 2. /services dumps straight into long ServiceBlocks — no skim layer. Rishikesh
 *    gains exploration via repeated “Explore service” entries; we need a calmer
 *    equivalent.
 * 3. Locked rules: cards rare (interactive only); hairlines over chrome; no
 *    pill clusters; no turnkey/sales tiles; not in hero.
 * 4. Equal filled marketing cards would fail brand-test and “list-based services”.
 *
 * Decision (implemented)
 * - /services only: ServiceScanStrip — 3 interactive jump targets (title + teaser
 *   + Explore). Chrome = hairline grid + elevated hover, not shadow cards.
 * - Deep ServiceBlocks remain below for depth.
 * - Home list unchanged.
 */
