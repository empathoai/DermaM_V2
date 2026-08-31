# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 20: FeaturedServices bullets → `<ListSparkle />` (cont. 35, code)

- **`FeaturedServices.jsx` + `.module.css`:** the home "Tratamientos destacados" section was the only place still using one-off 4×4px `<span className={styles.bullet}>` square markers for benefit lists. Migrated all 9 `<li>` across the 3 cards to `<ListSparkle variant="dark|light" /><span>…</span>` (the site-wide component already used in `LandingPage`, `TreatmentDetailPage`, `WarningBox`). Deleted `.bullet`/`.bulletDark` CSS; `.benefitsList li` now `align-items: flex-start` + `gap: 12px`. Variant rule: `dark` glyph (`#363633`) on the light bands, `light` glyph (`#CCC9C1`) on the dark band.
- **`DESIGN.md` §"Lists & Bullets":** the existing prohibition (no browser bullets, no dashes) now also names "one-off custom markers (square/dot `<span>`s, geometric glyphs)" — closing the gap that let this slip. The `<ListSparkle />` mandate + `flex-start` + per-background variant rule were already written there.
- **Why:** UX-09. `DESIGN.md` already mandates `<ListSparkle />` as the canonical benefit-list marker; FeaturedServices was a straight violation (3 of 4 list sites already compliant).
- **Verified:** browser 375px + pane — ✦ renders on all 3 bands, aligned to first text line, correct variant color per background, no console errors. `npm run test:visual` — 33 passed; `home-featured-services.png` passes with no diff (glyph-vs-square delta below pixel threshold); the 1 failure is the standing unrelated `nosotros-viewport` (`about/hero.jpg` placeholder). No copy change → MEDICAL_COMPLIANCE n/a. A11y: decorative SVG, list semantics + text unchanged.
- Closes audit Task 20 (UX-09). Commit `<hash>`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
