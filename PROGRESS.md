# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 9: hero text no longer gated on the video-load event (cont. 28, code)

- **`Hero.jsx` + `TreatmentHero.jsx`:** removed the `mediaReady` state + 2000ms fallback timer + `onReady` gate that held the headline/body/CTAs at `opacity:0` until `<video>` `onLoadedData`. Critical text now renders from first paint.
- **`Hero.jsx`** keeps the `motion.div` entrance beat but time-driven: `delay 0.3s → 0.7s`, plus a `useReducedMotion()` guard (`initial={false}` / `duration:0` when opted out). **`TreatmentHero.jsx`** had no entrance animation → renders immediately (full redesign is Task 8). No CSS-module changes (initial opacity was inline-only). `HeroMedia.onReady` now unused by both callers, left as harmless optional.
- **Why:** `onLoadedData` can take 4–5s on slow networks and may never fire in a backgrounded tab → old code showed an empty hero for up to 2s on the visits that matter for LCP/CLS. User's intent was a "video first, then header" UX beat, not a load gate; a fixed 0.7s delay preserves it safely. See `DECISIONS.md` 2026-08-30.
- **Verified:** `npm run test:visual` 33/34 — Home Hero Viewport (desktop + mobile) pass → no diff in settled state. The 1 fail is the standing `nosotros-viewport` `about/hero.jpg` placeholder (unrelated, `NEXT.md`). `useReducedMotion` confirmed as a valid `motion/react` export. No re-baseline.
- Closes audit Task 9 (UX-04). Commit `<hash>`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
