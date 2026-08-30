# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 1: dead CTA in Postoperatorios fixed (cont. 24, code)

- **`FeaturedServices.jsx:124`** — replaced the routing-less `<button>Agenda tu valoración</button>` with `<Link to="/tratamientos-postoperatorios" className={styles.ctaLight}>Ver tratamiento</Link>`, matching cards 1 and 2. `Link` already imported; same class → no style/pixel change.
- **Verified:** browser pane on `:3000` — click navigates to `/tratamientos-postoperatorios`, no console errors. `test:visual` skipped per `CLAUDE.md` §DoD (single-component content edit, no CSS/shared-template/layout change, no pixel change). Copy unchanged → no MEDICAL_COMPLIANCE cross-check needed.
- Closes audit Task 1 (UX-01 = CPY-02). Commit `a52de89`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
