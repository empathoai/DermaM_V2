# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — DEPLOY.md Part 1 full-site sanity check + minor fixes (S)

- Ran the full `DEPLOY.md` Part 1 checklist (all 10 steps) live in-browser per this session's instruction, superseding `test:visual` for this pass: all 42 routes, SEO tags, JSON-LD, images, internal links, CTAs, mobile 375px, accessibility, compliance, GA4. No blocking failures.
- Fixed 4 findings surfaced during the check: (1) `CLAUDE.md` had a stale "médica" quote of the mandatory notice contradicting the already-decided "profesional" wording (`DECISIONS.md` 2026-08-30) — corrected to match; (2) mobile menu `aria-label` was hardcoded English ("Toggle menu") on a Spanish site — now dynamic `"Abrir menú"/"Cerrar menú"`; (3) 4 of 6 hub `metaDescription`s (faciales, láser y luz, dental, capilar) were under the 120-char SEO target — lengthened all 4 into the 120–160 range, verified live via HMR.
- Part 2 (protected files, Hostinger deploy) still gated on the user's explicit "hagamos el deploy" — not touched.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
