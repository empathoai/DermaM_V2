# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — DEPLOY.md Part 2 (items 1-3) + external-audit reconciliation (cont. 72, code + docs)

- **DEPLOY.md Part 2 items 1-3** (user go-ahead, full sweep not just documented steps): rewrote `public/.htaccess` (legacy 301 block reordered before the SPA fallback, +27 missing redirects added, trailing-slash regex bug fixed, `/notice-of-privacy-practices` 301 added); removed the 7× stale `Disallow: /notice-of-privacy-practices` from `public/robots.txt`; confirmed `/nosotros/nancy-nieto` already present in sitemap/robots/llms. Added a "Spec:" citation (Apache mod_rewrite docs, Google robots.txt spec, sitemaps.org, llmstxt.org) to each Part 2 item so future passes verify against ground truth, not self-graded thoroughness (`DECISIONS.md` 2026-09-12).
- **`public/llms.txt` brought into spec compliance**: was violating llmstxt.org (3 H1 headers, plain-text link items instead of `[name](url)`) — caught only because the user asked directly, not by the "thorough" pass. Fixed: single H1, all link sections use markdown hyperlinks, `## Optional` (legal links) moved to the end per spec convention.
- **Reconciled the external-audit package** (`auditorias-externas/resultados/*.md`, `docs/superpowers/plans/2026-08-30-remediacion-auditorias-externas.md`, gitignored) against current code + a live browser pass: of 27 original findings, 26 closed (19 already fixed in untracked prior cycles, 6 UX/`DESIGN.md` items closed after visual verification showed no real defect, 1 — PRF internal linking — matches an already-registered spec that defers it). Only CPY-07 (title-case inconsistency) stays open, deferred to the pre-deploy external re-audit per user request.
- `test:visual` skipped — no CSS/component changes, only protected config files + doc reconciliation.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
