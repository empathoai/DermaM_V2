# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 13: `<lastmod>` for all sitemap URLs (cont. 35, no code)

- **`public/sitemap.xml` (PROTECTED — nominal go given):** added `<lastmod>` (`YYYY-MM-DD`) to all 44 `<url>` entries, ordered `loc → lastmod → changefreq → priority`. Dates per-section from `git log` of the backing `src/data/*.js` / shared template: `/treatment-disclaimer` = `2026-08-31` (Task 10), `/contacto` = `2026-08-29`, everything else = `2026-08-30` (cont. 21 remediation touched all data files / `CategoryPage` / `LegalPageLayout`). Top-of-file comment tells editors to bump a section's dates when its data file changes. `<changefreq>`/`<priority>` untouched.
- **Why:** SEO-09. `changefreq`/`priority` are ignored by Google; `<lastmod>` is the only reliable freshness signal for crawl-budget prioritisation. Per-section granularity (Approach A) over true per-URL dates (43 fragile `git log -S` lookups = hand-rolled tooling) or one global date (Google treats all-identical dates as noise). Spec: `docs/superpowers/specs/2026-08-31-sitemap-lastmod-design.md`.
- **Verified:** XML well-formed (ElementTree parse); 44/44 URLs have `<lastmod>`; no future dates; `/nosotros/nancy-nieto` still present (Task 3 / SEO-02). No `test:visual` (static file). No browser check.
- **SEO/GEO/AEO:** SEO crawl-budget only — faster re-crawl of recently-changed URLs. No direct GEO/AEO effect.
- Closes audit Task 13 (SEO-09). Commit `<hash>`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
