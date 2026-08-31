# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 19: Contacto CSS purge + button token (cont. 41, code)

- **Ciclo A — purga de CSS zombi (`src/pages/Contacto.module.css`, 1123 → 434 líneas).** Borradas ~690 líneas sin consumidor en `Contacto.jsx` (verificado por grep de cada clase): formulario retirado completo (`formSection`…`successText`, `inputGroup`/`label`/`input`/`textarea`/`select`/`submitBtn`/`microcopy`), `quickSection`/`quickCard`/`quickCta`, `locationsSection`/`sectionHeaderBlock`/`sectionTitle`/`sectionIntro`/`locationsRow`, `trustSection`…`trustColText`, `quickActionBar`…`quickActionText`, `legalAccordion`/`legalSummary`/`legalSummaryIcon`, `fieldRow`, `mapPlaceholder`/`mapGraphicBg` (incl. la única `radial-gradient` — zombi)/`mapInnerContent`/`mapLocationIcon`/`mapAddressText`, `badgeUpcoming`, `locNote`, `locBtnSecondary`. Regla base `.locBtnPrimary, .locBtnSecondary` colapsada a `.locBtnPrimary`. Sin tocar reglas vivas ni el JSX.
- **Ciclo B — token de botón + aplanado.** `.locBtnPrimary` + `.startBtnPrimary`: fondo y borde `#363633` (Stone) → `#141313` (Dark Authority); su `:hover` ya resolvía a `#141313`. Quitado `backdrop-blur-[2px]` del escudo del mapa (`Contacto.jsx:209`; el botón interno ya era `bg-[#141313]`). **`.heroOverlay` conservado** — es scrim fotográfico de legibilidad = patrón sitewide (`PageHero.module.css:34` usa valor casi idéntico; `Hero`/`FinalCTA`/`MethodProcess`/`TreatmentHero`/`TreatmentCategories` igual). Aplanarlo solo aquí = regresión de consistencia + riesgo de contraste a 375px. Push-back registrado en `DECISIONS.md` 2026-08-31.
- **Why:** audit UX-08 — `Contacto.module.css` con ~55% de reglas muertas de secciones ya retiradas (cont. 18/20/39) + token de botón incorrecto. Diseño de 2 ciclos aprobado por el usuario (A = borrado sin riesgo, B = ajuste visual mínimo). Brainstorm de esta sesión; sin spec formal (talla S mecánica). Padding fijo → `clamp()` NO tocado (fuera del alcance literal de UX-08 / Task 19; es Task 27 para AboutPage).
- **Verified:** Ciclo A — `test:visual /contacto` (`-g "Contacto Page - Viewport"`) 2 passed, **cero diff**. Ciclo B — mismo test 2 passed (desktop-chrome + mobile-safari), diff dentro de la tolerancia 2% → sin actualizar baselines. Browser pane 375px + desktop: "AGENDA TU VALORACIÓN" y "CÓMO LLEGAR" ahora `#141313`, consistentes con navbar; contraste `#F2F0F1`/`#141313` mejora vs `#363633` (WCAG AAA); escudo del mapa sigue velando el mapa, sin blur, sin glassmorphism; scrim del hero intacto. Sin errores de consola. Sin copy tocado → `MEDICAL_COMPLIANCE` n/a. Servidor `:3003` levantado y detenido por PID (×2).
- Commits: `49ae920` (Ciclo A) · `c7ff7ac` (Ciclo B). **Task 19 cerrada.**

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
