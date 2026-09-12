# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — De-template the 6 category hub copy (cont. 67, L, copy-only)

- **What:** rewrote `overview.body`, `trustItems` (3), `benefits.list` (3), `approach.body`, and all 4 `process.steps` bodies for all 6 hubs (`faciales`, `corporales`, `laser-y-luz`, `dental-estetico`, `iv-therapy`, `capilar`) in `src/data/categoryPages.js`. Each hub now carries a distinct angle instead of the same sentence with the noun swapped: faciales = close conversation about skin concerns; corporales = multi-session process tied to a life moment (surgery recovery, postpartum); láser y luz = per-skin calibration/safety criteria; dental estético = comfort for dental anxiety, short sessions; IV therapy = daily-routine energy, fast sessions; capilar = judgment-free, private conversation about hair loss.
- **Why:** SlopMonster manual audit (cont. 64-66) flagged the 6 hubs as near-identical scaled/templated content — same 4 process steps, same section counts, same "approach" sentence with the noun swapped — the exact pattern Google's spam policies target. Brainstormed the differentiation angle per category (grounded in `project_dermam_differentiator_relational` memory: DERMA.M's real edge is relational, not results-based) and got explicit approval before writing; user flagged the first draft's Argentine "vos/podés" register and it was rewritten to standard `tú` to match the rest of the site.
- **Scope:** structure untouched — same data shape, same 4-step `process.steps` count, no component/template changes. `hero`, `featuredTreatments`/`complementaryTreatments`, `whoFor`, `testimonials`, `cta` left as-is (already category-specific or real-review content from cont. 66).
- **Verified:** browser-checked all 6 hub routes (`/faciales`, `/corporales`, `/laser-y-luz`, `/dental-estetico`, `/iv-therapy`, `/capilar`) — new copy renders correctly, no console errors. Checked against `docs/MEDICAL_COMPLIANCE.md` (no banned words, no guarantees, `MEDICAL_VALUATION_NOTICE` disclaimer untouched). Copy-only in existing structure, `test:visual` gate doesn't apply.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
