# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Pre-deploy checklist + client handoff communication (cont. 48, docs)

- **What:** two new docs, no site code. (1) `DEPLOY.md` at repo root (tracked) — full-site **local** sanity check to run before the Hostinger cut: clean build + `test:visual` (expect 33/1), route inventory (≈44 pages: 4 core, 6 hubs, 22 treatment slugs listed, 3 landings, legal + aliases, 1 redirect), head/SEO tags, JSON-LD validation, images (`alt`, no hardcoded Before/After), internal links, CTA taxonomy, 375px, WCAG AA, medical/legal compliance, GA4. Part 2 = the protected-file work at deploy time, pointing to `REDIRECT-MAP-VALIDATION-2026.md §8`. Folds in the scattered `NEXT.md` "Close the project" items. (2) `docs/communication_dermam.md` (gitignored dir; Spanish, client-facing) — formal handoff of the Vercel version for final approval: business-language WOW summary of the work (no task counts, SEO + compliance reinforced), image/template-adaptation narrative (omitted surplus example media; pages without own photos left imageless, no stock), Square §6.4 (14 direct links to confirm, 5 pairings needing a clinic decision, ~10 treatments + hubs stay on the general booking menu), plus what's pending client-side: approval, Hostinger hosting + Banahost domain migration + access list, team hero photo, reviews/dental/Yelp/authority-datapoint decisions, publish plan with DNS timings, cookie-consent + US state-privacy recommendations.
- **Why:** the deploy steps + validation lived only as fragments in `NEXT.md` and memory; `DEPLOY.md` is now the single pre-deploy source of truth. The client needs a professional, non-technical delivery doc to approve the Vercel build and unblock the Hostinger deploy.
- **Verified:** route inventory in `DEPLOY.md` cross-checked against `src/routes.jsx` + the 22 keys in `src/data/treatmentPages.js`. Square detail cross-checked against `docs/LINKEO-SQUARE-2026.md` (14 approved / 4-to-confirm / no-equivalent lists). No code, no `test:visual`, no `MEDICAL_COMPLIANCE` impact (client doc, not site copy). User confirmed the email was sent to the client.
- Commit `<hash>`. Client now reviewing; awaiting confirmation + hosting/domain authorization before any deploy work.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
