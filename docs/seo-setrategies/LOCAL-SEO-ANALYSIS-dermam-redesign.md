# LOCAL-SEO-ANALYSIS — Derma.M (rediseño, este repo)

**Fecha:** 2026-08-27
**Objeto auditado:** el rediseño en `F:\EmpathoAI-projects\DermaM_Website` (dev `localhost:3000` + `src/`), **no** la URL de producción (que hoy sirve el sitio viejo). Deploy inminente, mismo dominio `dermamskinhealth.com`.
**Metodología:** skill `seo-local` v2.2.4 (instalada / canonical-suite). Sin `scripts/` de crawl/DataForSEO → dimensiones que dependen de datos en vivo (geo-grid, DA, backlinks, GBP Insights) quedan fuera — ver Limitaciones.

---

## 1. Puntuación de SEO Local: 48 / 100

| # | Dimensión | Peso | Estado | Puntos |
|---|---|---|---|---|
| 1 | Señales de GBP | 25 | Bajo-Parcial | 12 / 25 |
| 2 | Reseñas y reputación | 20 | Bajo | 5 / 20 |
| 3 | SEO on-page local | 20 | Parcial-Alto | 14 / 20 |
| 4 | Consistencia NAP y citas | 15 | Parcial | 9 / 15 |
| 5 | Marcado de schema local | 10 | Parcial | 6 / 10 |
| 6 | Enlaces y autoridad local | 10 | Bajo | 2 / 10 |
| | **Total** | 100 | | **48 / 100** |

Lectura: el rediseño tiene **buena base estructural** (páginas de servicio dedicadas, `<title>` con ciudad en todo el sitio, NAP visible en el footer de cada página, mapa embebido, click-to-call). Lo que arrastra el score: **GBP sin cablear/verificar**, un `aggregateRating` que hoy es un pasivo, `sameAs` muerto, `description` de schema que se autodenomina "clínica", H1 sin intención local, y cero señales de autoridad local.

---

## 2. Tipo de negocio

**Físico** (single-location). Dirección visible en `<address>` del footer + tarjeta de ubicación en `/contacto` + mapa `<iframe>` de Google + `address` estructurada en el schema. No hay lenguaje de "service area" → recibe las comprobaciones completas de NAP + mapa.

---

## 3. Vertical + hallazgos específicos

**Medical spa / estética** (borde entre `HealthAndBeautyBusiness` y sanidad). Señales: 25 tratamientos estéticos, aparatología (HIFU, RF, láser, IPL), "requiere valoración previa", aviso tipo-HIPAA en `NoticePrivacyPractices.jsx`. **Sin inyectables**, sin claims de pérdida de peso (`docs/MEDICAL_COMPLIANCE.md`), modelo esteticista + director médico.

- El sitio se posiciona como **"medical spa"** (`index.html` `<title>`, `public/llms.txt` "professional med spa") — **pero** el schema `#organization` (`Home.jsx:44`) dice **"clínica de medicina estética"**. Contradicción directa con la decisión "es medical spa, NO clínica" (`DECISIONS.md` 2026-08-27).
- `medicalSpecialty: "Dermatology"` (`Home.jsx:50`, `Contacto.jsx`) **no es propiedad válida** en `HealthAndBeautyBusiness` (es de `MedicalBusiness`/`Physician`). Google la ignora.
- Restricción HIPAA aplicable a respuestas de reseñas: no confirmar/negar que quien reseña es paciente (precedente de multa: Manasa Health Center, 2023). Relevante para el sub-proyecto C.

---

## 4. Checklist de optimización de GBP

> El GBP **no aparece** en búsqueda de marca ("derma.m", "Derma.M West Palm Beach") — sin knowledge panel ni ficha en el map pack. Ver `docs/SEO_AUDIT_2026.md` ítem 8.19 (entity ambiguity: colisión con Derma M Academy y Derma M Institute).

| Señal | Estado en el rediseño | Acción |
|---|---|---|
| Categoría primaria | ✗ no verificable (GBP ausente) | **B — fijar "Medical spa / Spa médico"** (factor #1 del local pack; categoría primaria incorrecta = factor negativo #1) |
| Categorías secundarias (óptimo 4) | ✗ | **B** — Skin Care Clinic, Facial Spa, Laser Hair Removal Service, Esthetician, Teeth Whitening Service. **NO** "Weight Loss Service" (compliance), **NO** "Dermatologist" salvo médico titulado firmando |
| Áreas de servicio | ✗ | **B** — solo zonas reales alrededor de 33405 (test del dolor: no inflar) |
| Servicios/productos en la ficha | ✗ | **B** — cargar los 25 tratamientos como servicios |
| Referencia/embed de GBP en la web | Parcial — hay `<iframe>` de Maps en `/contacto`, pero **no** widget de reseñas ni place ID | **A** — considerar place ID en el schema; **no** enlazar el GBP a la home (Sterling Sky diversity update) |
| Horario visible en la página | ✗ no confirmado en `/contacto` (sí está en `openingHoursSpecification` del schema) | **A** — mostrar horario en `/contacto` (factor #5: negocios abiertos al momento de la búsqueda rankean mejor) |
| Fotos / posts / P&R del propietario | ✗ (fuera de la web) | **B/C** — plan de posts 30 días (ver transcript Pedro SEO), fotos reales del local |
| Insignia Google Verified | ✗ desconocido | **B** — comprobar elegibilidad |

---

## 5. Instantánea de salud de reseñas

| | |
|---|---|
| `aggregateRating` en schema | **4.9 / 117** hardcodeado en `Home.jsx:51-55` y `Contacto.jsx` |
| Reseñas visibles en la página | **Ninguna** |
| Riesgo | **Alto.** La política de Review snippets de Google exige valoraciones **genuinas y visibles en la misma página**. `aggregateRating` sin reviews on-page → riesgo de acción manual y pérdida de rich results de todo el dominio. También choca con la regla de honestidad de `MEDICAL_COMPLIANCE.md`. (= ítem 8.18) |
| Presencia multiplataforma | Yelp (existe, **sin reclamar**), Facebook (~2.1K), sin enlaces a reseñas desde la web |
| Respuestas del propietario | No evaluable desde el repo |
| Velocidad de reseñas (regla 18 días) | No evaluable — sub-proyecto C |

---

## 6. Auditoría de consistencia NAP

| Fuente | Nombre | Dirección | Teléfono |
|---|---|---|---|
| Footer `<address>` (todas las páginas) | **DERMA.M, LLC** | 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405 | 561 253 5384 → `tel:+15612535384` |
| Schema `#organization` (`Home.jsx`) | **Derma.M** (`legalName` "DERMA.M, LLC") | 5707 S Dixie Hwy UNIT D, WPB, FL 33405 | +15612535384 |
| `public/llms.txt` | DERMA.M, LLC | idéntica | +1 561 253 5384 |
| Contacto — schema | Derma.M — West Palm Beach | idéntica | +15612535384 |

**Interno (web ↔ schema ↔ llms.txt): consistente en dirección y teléfono.** ✓

Discrepancias:
- **Forma del nombre:** footer visible muestra "DERMA.M, LLC" como línea de nombre; schema `name` = "Derma.M". Elegir un display name único.
- **Geo:** schema (`Home.jsx:72`, `Contacto.jsx:119`) = `26.6627718, -80.0558881`. Centro del `<iframe>` del mapa (`Contacto.jsx:467`) = `26.6531589, -80.0543666` — **~1.1 km de diferencia**. Verificar a rooftop y unificar (el `pb=` del embed puede ser solo centrado de mapa, pero conviene confirmar).
- **Externo (fuera del repo, para sub-proyecto C):** CareCredit lista dominio **`dermamskincare.com`** (incorrecto) y "SUITE D" vs "UNIT D"; Square mezcla WPB + una ficha Miami; Yelp sin reclamar.

Citas Nivel 1: Yelp ✓ (unclaimed), Facebook ✓, **GBP ✗/no verificado**, BBB desconocido, Bing Places ✗, Apple Maps ✗.

---

## 7. Comprobación de presencia de citas

| Directorio | Estado |
|---|---|
| Google Business Profile | **Ausente / no verificado** — prioridad (8.19) |
| Yelp | Existe (`yelp.com/biz/derma-m-west-palm-beach`), **sin reclamar**, NAP correcta |
| Facebook | Existe (`facebook.com/DermaMskinhealth`), NAP correcta |
| Instagram | `instagram.com/dermamskinhealth` (~15K) |
| Bing Places | ✗ — recomendado (nutre ChatGPT/Copilot/Alexa) |
| Apple Maps / Apple Business | ✗ — recomendado |
| BBB | Desconocido |
| Nextdoor / MapQuest / Atly / CareCredit | Presentes como agregadores (CareCredit con datos erróneos) — no son perfiles propios, no priorizar |

---

## 8. Estado del schema local

**Presente y rico, pero con defectos.** `Home.jsx` `@graph`: `HealthAndBeautyBusiness` (`@id #organization`) + `WebSite`. `Contacto.jsx`: repite el business. Templates de tratamiento (`TreatmentSEO.jsx`): `Service` + `BreadcrumbList` (bien). Hubs: solo `ItemList`.

| Propiedad | Estado |
|---|---|
| `@type` | `HealthAndBeautyBusiness` — defendible; decidir si multi-tipo con `MedicalBusiness` (requiere sign-off del director médico) o `additionalType` al concepto "Medical spa" |
| `name` / `address` (PostalAddress completo) | ✓ |
| `geo` (≥5 decimales) | ✓ 7 decimales — **pero** inconsistente con el mapa (ver §6) |
| `openingHoursSpecification` | ✓ (L-S 09-17, D 09-13) — verificar que coincide con GBP y que se muestra en `/contacto` |
| `telephone` / `url` / `priceRange` ("$$") / `image` | ✓ |
| `aggregateRating` | ✗ **pasivo** — sin reviews visibles (§5) |
| `medicalSpecialty: "Dermatology"` | ✗ inválido en `HealthAndBeautyBusiness` |
| `sameAs` | ✗ `["https://dermamskinhealth.com"]` — autorreferencia inútil |
| `description` | ✗ "clínica de medicina estética" — contradice posicionamiento |
| `alternateName` | ✗ ausente — falta para variantes "med spa"/"medspa" y desambiguación |
| `areaServed` (nivel org) | ✗ ausente (los `Service` de tratamiento sí lo tienen: `City` WPB) |
| `location` anidado | Re-declara otro `HealthAndBeautyBusiness` completo — patrón raro; debería ser `Place` o un `LocalBusiness` con `@id` propio + `branchOf` |
| Hubs | Solo `ItemList` — falta `CollectionPage` + `BreadcrumbList` |

**Solución lista para usar** → sub-proyecto A (abajo).

---

## 9. Calidad de páginas (no es multi-ubicación)

Single-location → **sin riesgo de página puerta multi-ciudad.** Las 25 páginas de tratamiento + 6 hubs + 3 landings son contenido único por tratamiento (no por ciudad). Test de intercambio: N/A (no hay plantilla por ciudad). Páginas de servicio dedicadas = **factor orgánico local #1 y factor de visibilidad IA #2 (Whitespark)** → esto el rediseño lo tiene bien resuelto. Enlazado interno hub-and-spoke ✓ (hubs → tratamientos, `RelatedTreatments`, footer).

---

## 10. Top 10 de acciones priorizadas

Etiquetas: **A** = código (este repo, entra con el deploy) · **B** = consola GBP (browser, sesión con el usuario) · **C** = operativo/off-site.

### CRÍTICO

1. **[B] GBP: verificar o crear la ficha + fijar categoría primaria "Medical spa".** Factor #1 del local pack. Bloquea todo lo demás en local. Sin código. (8.19)
2. **[A] `aggregateRating` 4.9/117 sin reviews visibles** (`Home.jsx:51-55`, `Contacto.jsx`). Decidir con el usuario: (a) mostrar/enlazar reviews reales de GBP en Home + Contacto y mantener el schema, o (b) eliminar `aggregateRating` de ambos. Riesgo de acción manual de Google + honestidad. (8.18)
3. **[A] `sameAs` real** en `Home.jsx:91`, `Contacto.jsx`, `NancyNieto.jsx`. Instagram / Facebook / Yelp confirmadas; GBP cuando exista. Hoy es autorreferencia. (8.14)

### ALTO

4. **[A] Fix `description` del `#organization`** (`Home.jsx:44`): "clínica de medicina estética" → redacción "medical spa". Contradice el posicionamiento canónico y `DECISIONS.md` 2026-08-27.
5. **[A] H1 con intención local.** Home (`"Salud profesional para tu piel"`), 6 hubs (`hero.title` genérico, ej. "CUIDADO AVANZADO PARA LA SALUD Y BELLEZA DE TU PIEL") y 25 tratamientos (nombre pelado) — ninguno tiene ciudad+servicio en el `<h1>`. Los `<title>` sí. Prioridad: Home + 6 hubs.
6. **[A] `alternateName` + `keywords`/`knowsAbout`** en `#organization`: variantes "med spa" / "medspa" + términos alineados a las categorías GBP (medical spa, skin care clinic, facial spa, laser hair removal). Desambigua de Derma M Academy / Derma M Institute. (8.19 on-page)
7. **[B] GBP: 4-5 categorías secundarias** (Skin Care Clinic, Facial Spa, Laser Hair Removal Service, Esthetician, Teeth Whitening Service). Sin código.
8. **[A] `medicalSpecialty` inválido** en `HealthAndBeautyBusiness` (`Home.jsx:50`, `Contacto.jsx`) → quitar, o decidir `@type` multi-tipo `["HealthAndBeautyBusiness","MedicalBusiness"]` con sign-off del director médico y entonces sí es válido.

### MEDIO

9. **[A] Geo inconsistente** (schema `26.6627718,-80.0558881` vs centro del map embed `26.6531589,-80.0543666`, ~1 km) → verificar a rooftop y unificar. + unificar forma del nombre (footer "DERMA.M, LLC" vs schema "Derma.M"). + mostrar horario en `/contacto`. + hubs: agregar `CollectionPage` + `BreadcrumbList`.
10. **[C] Reseñas + citas:** estrategia de captación con cadencia (regla 18 días, mín. 10 para arrancar) · reclamar **Bing Places** y **Apple Maps** (nutren ChatGPT/Copilot/Siri) · reclamar Yelp · corregir CareCredit (dominio `dermamskincare.com`, "SUITE"→"UNIT").

---

## 11. Descargo de limitaciones

Este análisis **no** pudo evaluar (requieren herramientas de pago / accesos):
- Ranking **geo-grid** real en Google Maps por zona (Semrush / BrightLocal / DataForSEO / herramienta propia tipo la del transcript).
- **Domain Authority** y perfil completo de **backlinks** locales (Ahrefs / Moz / Semrush).
- **GBP Insights** (vistas, acciones, búsquedas que activan la ficha) — requiere acceso a la ficha.
- Posición en **tiempo real del local pack** para las keywords objetivo.
- Categoría primaria/secundarias **reales** de los competidores del top-3 (requiere ver código fuente en Google Maps o extensión GMBspy / PlePer — pendiente para la sesión B).
- **Velocidad y contenido de reseñas** (recencia, respuestas del propietario) — requiere extracción de la ficha.

---

## Cómo se ejecuta esto

- **Sub-proyecto A (código):** ítems 2, 3, 4, 6, 8, 9 caen casi todos en `Home.jsx` + `Contacto.jsx` (nodo `#organization`) → **un solo ciclo de brainstorming → `writing-plans` → ejecución**. Ítem 5 (H1 local) = ciclo aparte (toca `Hero`, `PageHero`, data de hubs). Entra **con el deploy**.
- **Sub-proyecto B (GBP):** ítems 1, 7 + checklist §4 → sesión con el usuario logueado en el pane del browser; cada guardado se aprueba. Desacoplado del deploy.
- **Sub-proyecto C (off-site):** ítem 10 → operativo del usuario.
