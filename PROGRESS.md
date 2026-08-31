# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 21: skip-to-content link (cont. 36, code)

- **`Navbar.jsx` + `Navbar.module.css`:** `Navbar` is the only component on all 25 pages (no shared route layout). Wrapped its return in a fragment: `<a href="#main-content" className={styles.skipLink}>Saltar al contenido principal</a>` as the first focusable element, then the unchanged `<header>`, then `<div id="main-content" tabIndex={-1} className={styles.mainContentAnchor} />` immediately after it. `.skipLink` is off-screen (`position:absolute; left:-999px`, not `display:none`); `.skipLink:focus` = fixed top-left bar, `min-height:44px`, `z-index:1100` (above `.header` 1000 / `.megaMenu` 100), `#141313`/`#F2F0F1`, `outline:2px solid #CCC9C1`.
- **Why:** UX-10 / WCAG 2.4.1 (Level A). Sentinel `<div>` in `Navbar` instead of `id="main"` on 25 pages with an inconsistent `<main>` (`Home.jsx` wraps Navbar+Footer inside it) — one file, robust everywhere. See `DECISIONS.md` 2026-08-31. Spec: `docs/superpowers/specs/2026-08-31-skip-to-content-link-ux-10-design.md`.
- **Verified:** browser `:3000` at 375px + desktop — `Tab` on load reveals the bar top-left (hidden + no layout shift before focus); activating moves focus to `#main-content`; next `Tab` → Hero "Reservar" CTA, bypassing the nav. `npm run test:visual` — 33 passed, only failure is the standing unrelated `nosotros-viewport` (`about/hero.jpg` placeholder); link hidden until focus → no snapshot diffs. Copy "Saltar al contenido principal" — plain Spanish, MEDICAL_COMPLIANCE n/a.
- Closes audit Task 21 (UX-10). Commit `af5e46c`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
