# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Reconcile technical SEO/GEO audit doc + close item 8.19 (cont. 71, code)

- Verified `docs/TECHNICAL_SEO_GEO_AUDIT_2026.md` against current code (not a re-research pass) and corrected stale `❌ pendiente` markers that were actually already resolved: 8.12 (robots.txt AI-bot directives), 8.14 (`sameAs` real profiles), 8.16/6.1 (sitemap `<lastmod>`), 8.18/5.6 (`aggregateRating` removed from Home/Contacto), `BreadcrumbList` in treatment templates, 8.9/8.10 (PRF naming), GA4. Reclassified 8.17 (GSC/Bing WT) as blocked by the Hostinger deploy, not un-worked. `docs/SEO_AUDIT_2026.md` left untouched — out of scope.
- Closed item **8.19** (`organizationSchema.js` `sameAs` was missing the verified GBP Maps URL): added `https://maps.google.com/?cid=1960512029393287772` (user-supplied, confirmed live GBP with the 4.9★ rating). Clarified with the user first that this belongs only in the JSON-LD `sameAs` array, not in `siteMeta.js`'s `GOOGLE_REVIEWS_URL` (a separate, already-decided outbound link used by `RatingBadge`/footer) — left that file untouched. Verified live: the `#organization` JSON-LD on Home now contains the cid link.
- Data-only change in `src/data/organizationSchema.js` (single string added to an existing array, no new visible UI) — `test:visual` skipped per the `CLAUDE.md` §DoD gate.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
