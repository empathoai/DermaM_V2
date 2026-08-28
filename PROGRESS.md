# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Arquitectura de contenido del founder · Ciclo 1: Home `FounderSection`
- **Spec + plan** en `docs/superpowers/{specs,plans}/2026-08-28-founder-content-architecture*` — reparto de "beats" de Nancy en 3 superficies (Home = primer, `/nosotros` = puente, `/nancy-nieto` = persona completa), funnel de profundidad progresiva. 3 ciclos, 1 por página.
- **Ciclo 1 (Home) hecho:** `FounderSection` pasó de 3 párrafos hardcodeados a línea de credencial + 1 frase relacional + link de salida "Conoce a Nancy y al equipo →" a `/nosotros` (antes era un dead-end en la 2ª sección, la de mayor intención). Copy movida a `src/data/aboutPage.js` (`founderPrimer`).
- Baseline visual `home-founder` (desktop + mobile) regenerado — cambio intencional. `home-featured-services` intacto → sin regresión adyacente. `test:visual` 34/34.
- **Pendiente:** Ciclo 2 (`/nosotros` — trim spotlight + sub-H1 `Medical Spa · West Palm Beach`), Ciclo 3 (`/nancy-nieto` — data standalone + secciones Historia/Academy + cita larga, con el texto real que pasó la clínica).

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
