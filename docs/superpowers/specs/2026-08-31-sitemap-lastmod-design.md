# Task 13 — `<lastmod>` for `sitemap.xml` (SEO-09)

**Date:** 2026-08-31 · **Cycle:** cont. 35 · **Size:** S · **Protected file:** `public/sitemap.xml` (nominal go given)

## Problem

All 43 `<url>` entries carry only `<changefreq>` and `<priority>` — signals Google ignores. No
`<lastmod>`, so no reliable freshness signal for crawl-budget prioritisation.

## Approach (A — per-section date, hand-maintained)

Add one `<lastmod>` (`YYYY-MM-DD`, W3C date) to every `<url>`, valued at the last date that URL's
content meaningfully changed, derived from `git log` of the backing `src/data/*.js` (or the shared
component that renders it). No build tooling — a top-of-file comment tells future editors to bump the
`<lastmod>` of a section when they edit its data file.

Rejected: **B** true per-URL dates via `git log -S` on each slug (43 fragile lookups, re-done every
edit = hand-rolled tooling on a near-final site); **C** one global `<lastmod>` (Google treats
all-identical dates as noise).

## Dates to write

| URLs | `<lastmod>` | Rationale |
|---|---|---|
| `/`, `/nosotros`, `/nosotros/nancy-nieto` | `2026-08-30` | home/about data + Task 3 (nancy-nieto) + Task 5 |
| `/contacto` | `2026-08-29` | `src/data/contactPage.js` last change |
| `/limpieza-facial-profunda`, `/prf-y-fibrina`, `/tratamientos-postoperatorios` | `2026-08-30` | `src/data/landingPages.js` |
| 6 category hubs (`/faciales` … `/capilar`) | `2026-08-30` | Task 5 wired benefits/process into `CategoryPage` |
| 24 treatment detail pages | `2026-08-30` | `src/data/treatmentPages.js` |
| `/treatment-disclaimer` | `2026-08-31` | Task 10 (EN mirror, cont. 34) |
| `/politica-de-privacidad`, `/terminos-de-uso`, `/booking-cancellation-refund-policy`, `/accessibility`, `/legal` | `2026-08-30` | Task 11 (`LegalPageLayout` `<h3>`→`<p>`) touched all legal DOM |

Placement: `<lastmod>` first child of each `<url>`, before `<changefreq>` (conventional order
`loc → lastmod → changefreq → priority`).

## Verification

- XML well-formed (parse check).
- Every `<lastmod>` ≤ 2026-08-31 and matches the table.
- `/nosotros/nancy-nieto` still present (Task 3 / SEO-02) — already at line 21, unchanged.
- No `test:visual` (static file, not a rendered route). No browser check.

## Impact

SEO: better crawl-budget management — Google re-crawls URLs with a recent, trustworthy `<lastmod>`
sooner. No direct GEO/AEO effect.

## Out of scope

Automating `<lastmod>` at build time; touching `<changefreq>`/`<priority>`; adding new URLs.
