# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 3: `/nosotros/nancy-nieto` into discovery files (cont. 25, code)

- **Additions only, format/order preserved.** `public/sitemap.xml` — `<url>` for `https://dermamskinhealth.com/nosotros/nancy-nieto` after `/nosotros`, `priority` 0.7, no `<lastmod>` (that's Task 13). `public/robots.txt` — `Allow: /nosotros/nancy-nieto` after `Allow: /nosotros`. `public/llms.txt` — `- Nancy Nieto — Founder & Director: …` in `## About` (title traceable to `aboutPage.js:20`).
- **Verified:** sitemap parses as valid XML (44/44 tags balanced); robots/llms placement confirmed by inspection. No visual gate — files not rendered by the SPA. Navbar untouched per `MEMORY.md` `project_nav_orphan_bio_page`.
- Closes audit Task 3 (SEO-02). Commit `<hash>`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
