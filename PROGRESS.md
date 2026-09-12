# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Testimonial curation: remove unverifiable quotes, fix topical mismatch (cont. 66, S, copy-only)

- **What:** ran a fresh Apify `compass/crawler-google-places` pull of all 148 real Google reviews for DERMA.M's GBP. Confirmed 2 of 3 quotes shared identically across `dentalEstetico`/`ivTherapy`/`capilar` hub testimonials ("Katherine Burgos Valdez" ×1, "Mirasol Fernández") don't match any real review — removed the `testimonials` block from those 3 hubs (no real on-topic quote exists among the 148 for dental/IV Therapy/capilar). Also swapped `laser-y-luz` hub and the `postoperatorios` landing off generic facial/corporal quotes onto quotes confirmed to actually mention laser/depilación láser and post-op massages.
- **Why:** cont. 65's manual copy audit (SlopMonster-style, no scorer) surfaced the mismatch; user had explicitly asked before that testimonials must match each page's topic and was unaware it had drifted this far. This closes Part 2 (Option A, topical curation) of `docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md`.
- **Verified:** checked `faciales`, `corporales`, Home/`/nosotros`, `limpiezaFacial`, `prfYFibrina` against the same 148-review pull — already real + on-topic, left unchanged. Browser-verified all 4 touched pages (`/dental-estetico`, `/iv-therapy`, `/capilar`, `/laser-y-luz`, `/tratamientos-postoperatorios`) — no visual gap where testimonials were removed, new quotes render correctly. Copy-only, `test:visual` gate doesn't apply.
- **Follow-up same cycle:** 2 of the postoperatorios replacement quotes named "Josey," who is no longer with the clinic. Only 2 of 148 real postop-topic quotes avoid naming her — not enough to fill 3 slots — so redacted just the name from the Tania Segura / Mayuli Perez quotes rather than restructure to 2 cards (user's call, `DECISIONS.md` addendum).
- Raw Apify pull data (contains reviewer PII) was not committed — see `DECISIONS.md` 2026-09-12 for how to re-pull if needed. Memory `feedback_verify_testimonials_against_live_source` added.
- Commit `90423db` + follow-up.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
