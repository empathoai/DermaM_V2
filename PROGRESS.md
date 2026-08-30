# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — /contacto: se quita el formulario muerto y se de-duplican los puntos de contacto

- **`Contacto.jsx` + `Contacto.module.css` (169 +/315 −).** El `<form>` de 7 campos tenía `handleFormSubmit` simulado (sin backend, sin Square, sin email) → un dead-end que mostraba "¡Mensaje enviado!" y perdía el lead. Se reemplaza por el **Start block**: "Agenda en línea" → Square (link `target=_blank`, mismo `bookingUrl` que Navbar/PageHero/FinalCTA) + "Consultar primero por WhatsApp" → wa.me + microcopy "Continúas en Square" + línea `tel:`.
- **De-dup.** Se elimina la Quick Action Bar (WhatsApp/tel/email — copia literal de la tarjeta de sede). La tarjeta de sede pierde "WhatsApp Directo", queda solo "Cómo llegar" + NAP + horario (bloque de referencia, bueno para SEO local). FinalCTA de la página repunta a Square ("Agenda en línea") — componente compartido sin tocar.
- **Limpieza:** imports sin uso fuera (`Link`, `MessageSquare`, `PhoneCall`, `Mail`, `CheckCircle2`, `ChevronDown`, `contactConsentCopy`). CSS muerto del form + de la Quick Action Bar **NO se borró** (blast radius, un-cambio-por-ciclo) → follow-up doc-hygiene. `contactConsentCopy` queda huérfano en `legalPages.js`.
- **Embed inline de Square (snippet `square.site/appointments/buyer/widget/…​.js`): decisión PENDING.** Es best practice y técnicamente viable (nada en `.htaccess` lo bloquea), pero requiere pasada de copy legal (privacidad/treatment-disclaimer/booking-policy dicen "abandonarás este sitio") + sign-off de la clínica. Se retoma como brainstorm propio.
- **Verificación.** Render en server temporal (`:3007`): layout OK, hrefs OK, 0 errores de consola. `test:visual` 21/22 — `contacto-viewport` **pasa sin diff** (el snapshot cubre solo el hero, intacto). El 1 fallo (`nosotros-viewport` desktop) es **drift preexistente en `main`**: el hero de `/nosotros` usa `contact/hero.jpg` desde el ciclo data-only anterior que saltó `test:visual` por gate — no lo tocó este cambio. WCAG AA OK (`<a>` reales, `:focus-visible`, contraste ~8.9:1). Compliance OK (copy nuevo sin banned words ni claims).
- Spec/plan: `docs/superpowers/{specs/2026-08-30-contacto-remove-form-design,plans/2026-08-30-contacto-streamline}.md` (gitignored). Commit `7225e57`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
