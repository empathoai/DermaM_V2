# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 4: medical-valuation notice unified into one constant (cont. 26, code)

- **Decision (user):** canonical string = `"Requiere valoración profesional previa para garantizar tu seguridad y resultados."` — **"profesional"**, not "médica": accurate for esthetician-performed *and* physician-supervised services, keeps "medical spa ≠ clínica". Supersedes `MEDICAL_COMPLIANCE.md` L11 (old "médica") + the ambiguous `DECISIONS.md` 2026-08-27 reference. See `DECISIONS.md` 2026-08-30.
- **New `MEDICAL_VALUATION_NOTICE`** in `src/data/siteMeta.js`, wired into: `categoryPages.js` (46, replacing the "valoración previa" / "valoración profesional previa" variants), `treatmentPages.js` (2), `FeaturedServices.jsx` (3 hardcoded `<p>`), `shared/FinalCTA.jsx` (`compactLegal` branch → `` `${NOTICE} Resultados pueden variar.` ``). The 6 long `cta.disclaimer` informational strings + `TreatmentSEO.jsx:31` meta fragment left as-is (different slot/purpose).
- **`docs/MEDICAL_COMPLIANCE.md` L11** updated to the new wording (on-disk; gitignored).
- **Verified:** grep → 0 notice literals outside the constant, 1 definition, 5 importers. Browser `:3000` — renders correctly on Home / treatment / landing CTAs. `test:visual` 33/34; the 1 failure is the pre-existing `nosotros-viewport` `about/hero.jpg` placeholder (NEXT.md), diff is 100% the hero image, unrelated. No re-baseline.
- Closes audit Task 4 (CPY-01). Commit `<hash>`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
