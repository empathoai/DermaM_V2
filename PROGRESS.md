# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-12 — Fix one AI-tell word in depilación láser copy (cont. 65, XS, copy-only)

- **What:** `treatmentPages.js:1051` `application` field — "Tecnología láser de vanguardia" → "Tecnología de fototermólisis selectiva" (reuses the term already present in the same entry's `whatIsBody`, no new claim invented).
- **Why:** manual SlopMonster-style audit (cont. 64's follow-up, no code) flagged "de vanguardia" as the Spanish equivalent of the "cutting-edge" tier-1 AI-vocabulary tell. Full audit report + ChatGPT rewrite pass logged in chat, not committed as a doc (diagnostic only).
- **Verified:** browser on `/laser-y-luz/depilacion-laser` — "APLICACIÓN" card renders the new text correctly. Copy-only change, `test:visual` gate doesn't apply (not CSS/shared component/layout).
- **Deferred, larger findings from the same audit — not yet scheduled:** (1) `categoryPages.js` testimonials block identically reused across `dentalEstetico`/`ivTherapy`/`capilar` hubs, including an off-topic acne-facial quote on IV Therapy/Capilar — sized S, needs visual check. (2) The 6 category hubs share a near-identical template (same 4 process steps, same section counts) — the scaled-content-pattern Google's spam policies target; sized L, needs its own brainstorming cycle to write real per-category copy.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
