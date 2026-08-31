# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 19: Contacto CSS purge + button token (cont. 41, code)

- **Ciclo A — purga de CSS zombi (`src/pages/Contacto.module.css`, 1123 → 434 líneas).** Borradas ~690 líneas sin consumidor en `Contacto.jsx` (verificado por grep de cada clase): formulario retirado completo (`formSection`…`successText`, `inputGroup`/`label`/`input`/`textarea`/`select`/`submitBtn`/`microcopy`), `quickSection`/`quickCard`/`quickCta`, `locationsSection`/`sectionHeaderBlock`/`sectionTitle`/`sectionIntro`/`locationsRow`, `trustSection`…`trustColText`, `quickActionBar`…`quickActionText`, `legalAccordion`/`legalSummary`/`legalSummaryIcon`, `fieldRow`, `mapPlaceholder`/`mapGraphicBg` (incl. la única `radial-gradient` — zombi)/`mapInnerContent`/`mapLocationIcon`/`mapAddressText`, `badgeUpcoming`, `locNote`, `locBtnSecondary`. Regla base `.locBtnPrimary, .locBtnSecondary` colapsada a `.locBtnPrimary`. Sin tocar reglas vivas ni el JSX.
- **Ciclo B — pendiente:** botones `.locBtnPrimary` + `.startBtnPrimary` fondo `#363633` → `#141313`; quitar `backdrop-blur-[2px]` del escudo del mapa (`Contacto.jsx:209`); conservar `.heroOverlay` (scrim fotográfico = patrón sitewide, ver `DECISIONS.md`).
- **Why:** audit UX-08 — `Contacto.module.css` con ~55% de reglas muertas de secciones ya retiradas (cont. 18/20/39) + token de botón incorrecto. Diseño de 2 ciclos aprobado (A = borrado sin riesgo, B = ajuste visual mínimo). Brainstorm de esta sesión; sin spec formal (talla S mecánica).
- **Verified (Ciclo A):** `npm run test:visual` en `/contacto` (`-g "Contacto Page - Viewport"`) — **2 passed** (desktop-chrome + mobile-safari), **cero diff** → confirma que nada visible cambió. Servidor `:3003` levantado y detenido por PID.
- Commit `49ae920`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
