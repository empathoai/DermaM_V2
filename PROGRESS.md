# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — faq-consistency spec: read FAQPage from JSON-LD `@graph` (cont. 46, code — test only)

- **What:** `tests/faq-consistency.spec.js:40` — added `.flatMap((entry) => entry['@graph'] ?? [entry])` before the `.find((entry) => entry['@type'] === 'FAQPage')`. No site code touched.
- **Why:** pre-existing failure flagged cont. 40. `/faciales/hidrofacial` (only treatment-detail route in the spec) emits its FAQ schema nested in a `@graph` via `TreatmentSEO.jsx` (`emitSchema={false}` on the accordion), while the 4 landing/contact routes emit a flat `{"@type":"FAQPage"}` via `FAQAccordion emitSchema`. The old `.find()` only inspected root objects → `faqSchema` undefined → `toHaveLength(5)` threw "received value must have a length property". Page was always correct: 5 `mainEntity` questions == 5 rendered `button[aria-expanded]`, verified live on `:3003`.
- **Verified:** `npx playwright test tests/faq-consistency.spec.js` → **12/12 passed** (desktop-chrome + mobile-safari, 29.2s). The 4 flat-schema routes still pass (covered by `?? [entry]`). No `test:visual` needed — test-file-only change, no CSS/component/layout touched (`CLAUDE.md` §DoD gate). Temp `:3003` vite server started + stopped by PID. No `MEDICAL_COMPLIANCE` impact (no copy). SEO/GEO/AEO: nil — the emitted schema was already valid; only the test's reader changed.
- Commit `<HASH>`. Removes the "pre-existing test failure" item from `NEXT.md`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
