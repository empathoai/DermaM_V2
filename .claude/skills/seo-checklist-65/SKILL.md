---
name: seo-checklist-65
description: "Auditoría rigurosa y determinista de 65 factores SEO y GEO para cualquier sitio web o URL. Evalúa 9 bloques estratégicos: Contenido y Semántica, On-Page Técnico, Enlazado Interno, E-E-A-T, Core Web Vitals, Indexabilidad, Optimización de Imágenes, Schema JSON-LD y Off-Page. Genera un Scorecard sobre 100 y un plan de remediación priorizado por impacto comercial. Úsala cuando se requiera: auditar un sitio web, validar 65 factores SEO, checklist SEO 2026, evaluación técnica, o diagnóstico de salud orgánica."
user-invocable: true
argument-hint: "[url-o-dominio]"
license: MIT
metadata:
  author: "Pedro SEO / Adaptado para EmpathoAI AIOS"
  version: "1.0.0"
  category: "seo-audit"
---

# Skill: Auditoría de 65 Factores SEO & GEO (Checklist Maestro 2026)

Esta skill ejecuta una evaluación exhaustiva y cuantitativa basada en la matriz oficial de 65 factores de auditoría de Pedro SEO. Funciona de manera agnóstica para cualquier sitio web ingresado por el usuario o agente externo.

## 🎯 Protocolo de Ejecución en 3 Fases

### Fase 1: Inspección y Recolección de Datos
Para el dominio o URL proporcionada (`<URL>`):
1. **Rastreo On-Page:** Inspeccionar el HTML (Title, Meta Description, H1-H6, Canónicas, Open Graph, Viewport).
2. **Análisis Semántico & RAG:** Evaluar si el contenido responde la intención de búsqueda en los primeros 100 caracteres y si ofrece datos estructurados para motores de IA (AEO/GEO).
3. **Extracción de Schema:** Validar bloques JSON-LD (`Organization`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`, etc.).
4. **Rendimiento & Indexabilidad:** Verificar `robots.txt`, `sitemap.xml`, cabeceras HTTP y señales Core Web Vitals (LCP, INP, CLS).

### Fase 2: Evaluación Bloque a Bloque (65 Factores)

Cada factor se califica con:
- **✅ PASS (Cumple):** Implementado conforme al estándar 2026.
- **⚠️ WARN (Parcial):** Implementado de forma incompleta o subóptima.
- **❌ FAIL (Crítico):** Ausente o configurado con errores graves.

---

## 📋 Matriz de los 65 Factores


### Bloque: Contenido & Semántica

- **[ALTA] Factor 1: Intención de Búsqueda (Search Intent)**
  - *Criterio:* Antes de escribir una sola palabra, identifica si la query es informacional (el usuario quiere aprender), navegacional (busca una marca/web), transaccional (quiere comprar) o comercial (compara antes de decidir). Google es muy bueno detectando esto y posicionará primero el formato que corresponda: si los top 10 son listicles, no posicionarás con una landing de venta. Analiza las SERPs antes de estructurar el contenido.
- **[ALTA] Factor 2: H1 Único y Orientado a la Keyword**
  - *Criterio:* Cada página debe tener exactamente un H1. Es la señal principal de relevancia para Googlebot. Debe contener la keyword principal lo más cerca del inicio posible, de forma natural. No uses el H1 para creatividad de branding; úsalo para describir con precisión el tema de la página. Un H1 ambiguo o ausente es uno de los errores más comunes en auditorías.
- **[ALTA] Factor 3: Keyword Principal en los Primeros 100 Caracteres**
  - *Criterio:* Google asigna más peso semántico a las palabras que aparecen al principio del contenido. La keyword principal debe aparecer de forma natural en el primer párrafo, idealmente en las primeras dos frases. Esto también impacta en cómo el motor genera el snippet y confirma la relevancia de la página para la query.
- **[MEDIA] Factor 4: Jerarquía de Encabezados H2-H6**
  - *Criterio:* Los subencabezados no son decorativos: estructuran el documento para crawlers y mejoran la UX. Un H2 debe representar un subtema principal del H1, y los H3 profundizan en cada H2. Nunca saltes niveles (H1 → H3 sin H2). Una jerarquía limpia facilita que Google extraiga fragmentos para featured snippets y que los lectores escaneen el contenido.
- **[ALTA] Factor 5: Cobertura Semántica Completa (Entidades y LSI)**
  - *Criterio:* Google no evalúa páginas por densidad de keywords sino por completitud semántica. Usa sinónimos, entidades relacionadas (personas, lugares, conceptos), preguntas frecuentes del tema y términos que los competidores mejor posicionados usan. Herramientas como Surfer SEO, NeuronWriter o Clearscope ayudan a identificar los términos que debe cubrir tu contenido para ser considerado autoridad en el tema.
- **[ALTA] Factor 6: Profundidad y Extensión del Contenido**
  - *Criterio:* La longitud correcta es la que hace el mejor trabajo cubriendo la intención de búsqueda, ni más ni menos. Para queries informacionales competitivas suelen ganar artículos de 1.500-3.000 palabras; para transaccionales puede bastar una buena landing de 600 palabras. Analiza la longitud media del top 5 de la SERP objetivo y supérala en calidad, no en relleno. El contenido 'fluff' penaliza la tasa de rebote y la permanencia.
- **[MEDIA] Factor 7: Legibilidad y Estructura Visual del Texto**
  - *Criterio:* Un texto bien escrito que nadie termina de leer no sirve para SEO. Usa párrafos cortos (máximo 3-4 líneas), frases directas, vocabulario adecuado al público y recursos como tablas, acordeones o comparativas para sintetizar información densa. El Flesch Reading Ease en español debería estar por encima de 50. La permanencia en página y el scroll depth son señales de comportamiento que Google monitoriza.
- **[MEDIA] Factor 8: Negritas, Destacados y Escaneo Visual**
  - *Criterio:* Los usuarios no leen, escanean. Las negritas deben usarse para marcar los conceptos clave que alguien que lee en diagonal no debe perderse, no para decorar al azar. Google extrae texto en negrita para generar snippets. Usa destacados visuales (blockquotes, cajas de tip, iconos) para guiar la atención hacia los puntos más importantes del contenido.
- **[ALTA] Factor 9: Listas, Viñetas y Formato para Featured Snippets**
  - *Criterio:* Google tiene un apetito enorme por el contenido estructurado en listas porque puede mostrarlo directamente en Position Zero (featured snippets). Siempre que respondas una pregunta con pasos, rankings, opciones o comparativas, usa listas numeradas o con viñetas. Las listas de 5-8 ítems tienen mayor probabilidad de ser seleccionadas. Combina con un párrafo introductorio que contenga la keyword.
- **[ALTA] Factor 10: Cero Contenido Duplicado (Interno y Externo)**
  - *Criterio:* El contenido duplicado no penaliza directamente, pero sí diluye la autoridad: Google no sabe qué URL posicionar y puede que no posicione ninguna bien. Duplicidad interna ocurre con parámetros de URL, paginación sin canonicals o contenido copiado entre secciones. Duplicidad externa es copiar de otras webs. Usa canonical tags para señalizar la URL preferida y herramientas como Screaming Frog o Siteliner para detectarlo.
- **[ALTA] Factor 11: Actualización y Freshness del Contenido**
  - *Criterio:* Para muchas queries (noticias, comparativas de herramientas, precios, legislación), Google premia activamente el contenido actualizado. Establece un calendario de revisión periódica para tus páginas principales: actualiza datos, elimina referencias obsoletas, añade nuevas secciones y actualiza la fecha de modificación en el schema. Un contenido de 2021 sin actualizar puede perder posiciones ante uno de 2025 aunque sea menos extenso.
- **[MEDIA] Factor 12: Vídeos de YouTube Embebidos en el Contenido**
  - *Criterio:* Incluir vídeos relevantes (propios o de terceros) aumenta el tiempo de permanencia en página, una de las señales de comportamiento más valoradas. Un vídeo propio en YouTube también puede posicionar en búsqueda de vídeo y en la búsqueda universal (carrusel de vídeos). Si el vídeo es tuyo, implementa VideoObject schema para maximizar la visibilidad. Los vídeos embebidos también reducen la tasa de rebote al ofrecer alternativas de consumo del contenido.
- **[MEDIA] Factor 13: Gramática, Ortografía y Calidad Editorial**
  - *Criterio:* La calidad editorial es una señal directa de E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Un contenido con faltas de ortografía, errores gramaticales o frases mal construidas genera desconfianza en el usuario y aumenta el bounce rate. Google ha confirmado que evalúa la calidad del texto como parte de sus algoritmos de calidad de contenido. Revisa siempre con corrector y, si es posible, con un editor humano.
- **[ALTA] Factor 14: Canibalización de Keywords**
  - *Criterio:* Dos o más páginas de tu web compitiendo por la misma keyword es uno de los problemas más subestimados en SEO. El resultado: ninguna posiciona bien porque Google divide la autoridad entre ellas y no sabe cuál mostrar. Audita regularmente con Google Search Console (queries con múltiples URLs posicionando) o con herramientas como Ahrefs. La solución puede ser redirigir, fusionar contenidos o diferenciar la intención de cada URL.
- **[ALTA] Factor 15: Preguntas Frecuentes (FAQ) Integradas**
  - *Criterio:* Añadir una sección de FAQ al final de tus contenidos sirve para tres cosas: 1) Capturar long tails conversacionales que la gente busca en Google, 2) Implementar FAQPage schema para aparecer con acordeones en los resultados, 3) Responder objeciones del usuario que podrían hacer que rebotara. Basa tus preguntas en 'People Also Ask', Google Suggest y herramientas como AnswerThePublic.

### Bloque: Snippet & Visibilidad SERP

- **[ALTA] Factor 16: Meta Title — Keyword al Inicio**
  - *Criterio:* El meta title es el elemento más visible del snippet y uno de los factores de ranking on-page más importantes. La keyword principal debe aparecer lo más cerca posible del inicio (Google muestra mayor peso a las primeras palabras). Mantén entre 50-60 caracteres para evitar truncado. Incluye un diferenciador o propuesta de valor si el espacio lo permite (año, ubicación, beneficio). Evita el keyword stuffing.
- **[ALTA] Factor 17: Meta Description Orientada al CTR**
  - *Criterio:* La meta description no es un factor de ranking directo, pero sí lo es indirectamente: un buen CTR mejora tus posiciones. Debe funcionar como un mini-anuncio: incluir la keyword (Google la pone en negrita), un beneficio claro y una llamada a la acción. Máximo 155 caracteres. Si no la defines, Google la genera automáticamente, muchas veces extrayendo texto aleatorio del contenido.
- **[ALTA] Factor 18: URL Limpia, Corta y con Keyword**
  - *Criterio:* La URL es parte del snippet y los usuarios la leen antes de hacer clic. Debe contener la keyword principal, ser corta (máximo 4-5 palabras en el slug), sin parámetros innecesarios, en minúsculas y con guiones como separadores (nunca guiones bajos ni espacios). Evita fechas en la URL si el contenido es evergreen, ya que envejecen visualmente el resultado.
- **[MEDIA] Factor 19: Estructura de URL Jerárquica y Lógica**
  - *Criterio:* La jerarquía de la URL comunica arquitectura de información a Google y al usuario: /blog/seo/link-building es mejor que /post?id=1234. Una estructura clara facilita el crawl, el interlinking y la distribución de autoridad. Define una arquitectura de categorías desde el principio y sé consistente. Cambiar la estructura de URLs de una web con tráfico requiere redirects 301 masivos bien planificados.
- **[ALTA] Factor 20: HTTPS y Seguridad del Sitio**
  - *Criterio:* HTTPS es un factor de ranking confirmado desde 2014 y hoy es un requisito mínimo. Sin él, Chrome muestra 'No seguro' en la barra de direcciones, lo que destruye la confianza del usuario y dispara la tasa de rebote. Asegúrate de que el certificado SSL esté activo, que no haya mixed content (recursos HTTP en páginas HTTPS) y que los redirects de HTTP a HTTPS estén correctamente implementados.
- **[ALTA] Factor 21: Breadcrumbs Implementados y con Schema**
  - *Criterio:* Las migas de pan mejoran la navegación del usuario y ayudan a Google a entender la jerarquía del sitio. Cuando se implementan con BreadcrumbList schema (JSON-LD), Google puede mostrarlas en el snippet reemplazando la URL cruda, lo que mejora el CTR visualmente. Son especialmente valiosas en ecommerce, blogs con categorías y sitios con arquitectura profunda.
- **[ALTA] Factor 22: Schema Markup (JSON-LD) Relevante al Tipo de Página**
  - *Criterio:* Los datos estructurados no son un factor de ranking directo, pero desbloquean rich results que aumentan drásticamente el CTR: estrellas de valoración, precios, recetas, eventos, FAQs, How-to, breadcrumbs, sitelinks search box... Implementa el schema type que corresponde a cada tipo de página. Valida siempre con el Rich Results Test de Google antes de publicar. En 2026, el schema también alimenta los resultados en AI Overviews.
- **[MEDIA] Factor 23: Open Graph y Twitter Cards**
  - *Criterio:* Cuando alguien comparte tu URL en redes sociales (LinkedIn, X, WhatsApp, Facebook), las etiquetas OG determinan qué imagen, título y descripción se muestran. Sin ellas, las plataformas extraen contenido aleatorio, lo que resulta en compartidos poco atractivos que generan menos clics. Define og:title, og:description, og:image (mínimo 1200x630px) y og:type en todas las páginas estratégicas.
- **[ALTA] Factor 24: Optimización para AI Overviews y SGE**
  - *Criterio:* Desde 2024-2025, Google muestra respuestas generadas por IA (AI Overviews) encima de los resultados orgánicos. Para aparecer citado en ellas, tu contenido debe ser: factualmente preciso, bien estructurado, con autoridad demostrable y responder preguntas concretas de forma directa. El schema markup, los FAQ y el E-E-A-T son factores clave. Monitoriza qué queries generan AI Overviews en tu sector.
- **[ALTA] Factor 25: Sitemap XML Actualizado y Enviado a GSC**
  - *Criterio:* El sitemap XML es el mapa que le das a Google de todas las páginas que quieres que rastree e indexe. Debe estar actualizado automáticamente (los CMS modernos lo hacen), excluir páginas noindex/duplicadas/de baja calidad y estar enviado en Google Search Console. Un sitemap mal configurado puede hacer que páginas importantes no se indexen o que páginas de baja calidad consuman el crawl budget.

### Bloque: Multimedia & Experiencia

- **[ALTA] Factor 26: Alt Text Descriptivo en Todas las Imágenes**
  - *Criterio:* El atributo alt cumple dos funciones: accesibilidad (lectores de pantalla para personas con discapacidad visual) y SEO (Google lo usa para entender de qué trata la imagen). Debe describir la imagen con precisión incluyendo la keyword si encaja naturalmente, sin hacer keyword stuffing. Las imágenes sin alt text son invisibles para Google Images, perdiendo oportunidades de tráfico visual.
- **[MEDIA] Factor 27: Nombres de Archivo de Imagen Descriptivos**
  - *Criterio:* El nombre del archivo de imagen es una señal semántica adicional para Google. 'auriculares-inalambricos-sony-wh1000xm5.jpg' aporta contexto; 'IMG_3847.jpg' no aporta nada. Renombra las imágenes antes de subirlas con palabras descriptivas separadas por guiones. Esta práctica también mejora la visibilidad en Google Images, que puede ser una fuente de tráfico significativa dependiendo del nicho.
- **[ALTA] Factor 28: Compresión y Peso de Imágenes (< 150kb)**
  - *Criterio:* Las imágenes sin comprimir son la causa número uno de LCP alto (Largest Contentful Paint). Una imagen de 3MB en un artículo de blog puede destruir la velocidad de carga en móvil. Usa herramientas como ShortPixel, Imagify o Squoosh para comprimir sin pérdida visible de calidad. El objetivo es que ninguna imagen supere los 150kb para contenido editorial (iconos y miniaturas, menos de 30kb).
- **[ALTA] Factor 29: Formatos Modernos: WebP y AVIF**
  - *Criterio:* WebP ofrece un 25-35% mejor compresión que JPEG/PNG con calidad similar. AVIF es todavía mejor (40-50% más eficiente) pero con soporte de navegadores más limitado. En 2026, WebP tiene soporte universal y debe ser el estándar por defecto. Implementa el elemento HTML <picture> para servir AVIF a navegadores compatibles y WebP/JPEG como fallback. WordPress con plugins como Imagify lo hace automáticamente.
- **[ALTA] Factor 30: Dimensiones Definidas en HTML (Prevención de CLS)**
  - *Criterio:* Cuando el navegador no sabe el tamaño de una imagen antes de cargarla, reserva espacio cero y luego desplaza el contenido al cargar, generando CLS (Cumulative Layout Shift). La solución es definir siempre los atributos width y height en el HTML o CSS. Un CLS superior a 0.1 penaliza en Core Web Vitals. Es uno de los errores técnicos más frecuentes y fáciles de resolver.
- **[MEDIA] Factor 31: Vídeo Propio con VideoObject Schema**
  - *Criterio:* Si produces vídeo propio (tutoriales, reviews, demos), incrustarlo en las páginas estratégicas de tu web y añadir VideoObject schema aumenta la probabilidad de aparecer en el carrusel de vídeos de Google. Especifica nombre, descripción, thumbnail, duración y fecha de publicación en el schema. Hostea en YouTube para máxima visibilidad y benefíciate del doble posicionamiento: web + YouTube.
- **[MEDIA] Factor 32: Transcripción de Vídeos y Podcasts**
  - *Criterio:* El audio y el vídeo son opacos para Google. Si tienes contenido multimedia sin transcripción, estás dejando indexar cero del valor de ese contenido. Añadir la transcripción completa (o un resumen estructurado) debajo del vídeo/podcast convierte ese contenido en indexable, aumenta la extensión del contenido de la página y mejora la accesibilidad. Herramientas como Otter.ai o Whisper (OpenAI) automatizan la transcripción.
- **[BAJA] Factor 33: Infografías y Contenido Visual Propio**
  - *Criterio:* Las infografías originales generan enlaces entrantes de forma orgánica porque otros sitios las citan como fuente. Una infografía bien diseñada sobre datos de tu sector puede convertirse en un activo de link building pasivo durante años. Añade el código de embed para facilitar que otros sitios la incluyan con atribución. Las imágenes originales también diferencian tu contenido visualmente del resto de resultados.

### Bloque: Enlazado & Arquitectura

- **[ALTA] Factor 34: Interlinking Estratégico Entrante (hacia esta página)**
  - *Criterio:* El interlinking interno es la forma más controlable de distribuir PageRank dentro de tu web. Las páginas que reciben más enlaces internos son las que Google interpreta como más importantes. Identifica tus páginas pillar (las más estratégicas) y asegúrate de que reciben enlaces internos desde los artículos del cluster temático relacionado. Usa anchos descriptivos, no genéricos como 'haz clic aquí'.
- **[ALTA] Factor 35: Interlinking Saliente (desde esta página a otras)**
  - *Criterio:* Cada página debe enlazar a otras páginas tuyas relevantes para guiar al usuario en su journey y ayudar al crawler a descubrir más contenido. Una página que no enlaza a ninguna otra crea dead ends en la navegación. Apunta a que cada pieza de contenido tenga entre 3 y 8 enlaces internos salientes hacia páginas relacionadas, con anchor texts descriptivos del contenido destino.
- **[ALTA] Factor 36: Anchor Text Variado y Descriptivo**
  - *Criterio:* El anchor text (texto del enlace) es una señal semántica para Google sobre el contenido de la página destino. Usar siempre el mismo anchor text exacto puede parecer manipulador; variar entre anchor exacto, anchor de marca, anchor parcial y anchor de URL es la práctica correcta. Nunca uses 'aquí', 'este artículo' o 'ver más' como anchos internos; siempre describe el contenido destino.
- **[ALTA] Factor 37: Páginas Huérfanas (sin ningún enlace interno entrante)**
  - *Criterio:* Una página huérfana es aquella a la que no llega ningún enlace interno. Google puede no encontrarla, y si la encuentra, interpretará que no es importante para tu web. Haz un crawl regular con Screaming Frog o Ahrefs para detectar estas páginas y añadirles al menos un enlace interno desde una página relevante y con tráfico. Las páginas huérfanas suelen ser el resultado de publicar sin pensar en la arquitectura.
- **[MEDIA] Factor 38: Profundidad de Clic Máxima de 3 Niveles**
  - *Criterio:* Ninguna página importante debería requerir más de 3 clics desde la home para ser alcanzada. A mayor profundidad de clic, menor PageRank recibe la página y menor prioridad de crawl le asigna Google. Si tienes páginas estratégicas enterradas a 5-6 clics de profundidad, considera restructurar la navegación o añadir enlaces directos desde páginas de mayor nivel.
- **[MEDIA] Factor 39: Enlaces Externos a Fuentes de Autoridad**
  - *Criterio:* Enlazar a fuentes externas de calidad (estudios científicos, medios de referencia, páginas oficiales) no te quita PageRank: refuerza la credibilidad de tu contenido y es una señal de E-E-A-T. Un artículo que cita datos con fuentes es más confiable que uno que hace afirmaciones sin respaldo. Usa nofollow solo en enlaces de afiliados o cuando no quieras avalar el contenido destino.
- **[MEDIA] Factor 40: Control de Nofollow, Sponsored y UGC**
  - *Criterio:* Google reconoce tres atributos de enlace: rel='nofollow' (no transfieras autoridad, pista), rel='sponsored' (enlace de pago o afiliado) y rel='ugc' (contenido generado por usuarios como comentarios). No etiquetar correctamente los enlaces de afiliado puede resultar en penalizaciones manuales. Los comentarios de blog sin nofollow son vectores de spam. Audita regularmente los atributos de enlace de tu web.
- **[ALTA] Factor 41: Arquitectura en Silos Temáticos (Topic Clusters)**
  - *Criterio:* Google premia las webs que demuestran autoridad temática profunda. El modelo de topic clusters organiza el contenido en un pilar page (contenido exhaustivo sobre el tema principal) rodeado de cluster pages (artículos que profundizan en subtemas) enlazadas bidireccionalmente. Esta arquitectura concentra la autoridad en el pilar y señaliza a Google que tu web es una referencia en ese topic.
- **[ALTA] Factor 42: Robots.txt Bien Configurado**
  - *Criterio:* El archivo robots.txt indica a los crawlers qué secciones no deben rastrear. Un robots.txt mal configurado puede bloquear accidentalmente páginas importantes (ha pasado con webs de millones de visitas). Bloquea recursos innecesarios (áreas de admin, páginas de filtros sin valor SEO, entornos de staging) pero nunca bloquees CSS/JS que Google necesita para renderizar. Valida en GSC → Herramienta de inspección de robots.txt.

### Bloque: SEO Técnico On-Page

- **[ALTA] Factor 43: LCP (Largest Contentful Paint) — Velocidad de Carga**
  - *Criterio:* LCP mide el tiempo que tarda en cargar el elemento visual más grande de la página (imagen principal, hero, bloque de texto). El umbral de Google es: bueno < 2.5s, necesita mejorar 2.5-4s, malo > 4s. Es el Core Web Vital con mayor impacto en SEO. Las principales causas de LCP alto son: imágenes sin comprimir, hosting lento, render-blocking JavaScript y falta de CDN. Mídelo con PageSpeed Insights o Web Vitals extension.
- **[ALTA] Factor 44: CLS (Cumulative Layout Shift) — Estabilidad Visual**
  - *Criterio:* CLS mide cuánto se mueven los elementos de la página durante la carga. Un anuncio que aparece y desplaza el contenido, una imagen sin dimensiones definidas o una fuente que cambia el layout al cargarse son causas frecuentes. El umbral bueno es < 0.1. Un CLS alto es una experiencia frustrante: el usuario hace clic en un botón y aparece otro en su lugar. Es penalizado directamente en Core Web Vitals.
- **[ALTA] Factor 45: INP (Interaction to Next Paint) — Interactividad**
  - *Criterio:* INP sustituyó a FID en 2024 y mide cuánto tarda la página en responder visualmente a cualquier interacción del usuario (clic, tap, tecla). El umbral bueno es < 200ms. Un INP alto suele deberse a JavaScript pesado que bloquea el hilo principal. Es especialmente crítico en móvil. Mídelo con Chrome DevTools → Performance tab o con CrUX data en Search Console.
- **[ALTA] Factor 46: Mobile-First y Diseño Responsivo**
  - *Criterio:* Google indexa y posiciona las páginas basándose en su versión móvil (mobile-first indexing desde 2023 para todos los sitios). Si tu web se ve mal en móvil, tiene texto pequeño, botones juntos o contenido oculto en mobile que existe en desktop, estás penalizando tu SEO. Testea con Google Mobile-Friendly Test. El diseño responsivo (mismo HTML adaptado por CSS) es el estándar recomendado por Google.
- **[MEDIA] Factor 47: Minificación y Optimización de Código**
  - *Criterio:* El CSS, JavaScript y HTML sin minificar contiene espacios, comentarios y saltos de línea que aumentan el tamaño del archivo sin aportar funcionalidad. Minificar estos recursos reduce su peso y mejora el TTFB (Time to First Byte) y el tiempo de parseo del navegador. Herramientas como Autoptimize (WordPress) o el pipeline de build de frameworks modernos lo hacen automáticamente. Elimina también el CSS no usado (unused CSS).
- **[ALTA] Factor 48: Lazy Loading de Imágenes y Vídeos**
  - *Criterio:* El lazy loading retrasa la carga de imágenes y vídeos que están fuera del viewport inicial hasta que el usuario hace scroll hacia ellas. Esto reduce el peso de la página en la carga inicial y mejora el LCP. En HTML moderno se implementa con el atributo loading='lazy' en las etiquetas <img>. Importante: no uses lazy load en las imágenes que están en el viewport inicial (above the fold), ya que perjudicaría el LCP.
- **[MEDIA] Factor 49: Evitar Pop-ups e Interstitials Intrusivos**
  - *Criterio:* Google penaliza los interstitials que bloquean el contenido principal en dispositivos móviles, especialmente cuando aparecen inmediatamente al cargar la página. Si usas pop-ups de captación de leads o cookie banners, asegúrate de que son fáciles de cerrar, no cubren todo el viewport y no aparecen en los primeros segundos. Los pop-ups con exit intent (al intentar salir) tienen menor riesgo de penalización.
- **[ALTA] Factor 50: Canonical Tags Correctamente Implementadas**
  - *Criterio:* La etiqueta canonical indica a Google cuál es la URL preferida cuando existen versiones duplicadas o similares de una página (por parámetros de URL, paginación, versiones de impresión, etc.). Una canonical mal configurada (apuntando a una URL incorrecta o en bucle) puede desindexar páginas importantes. Todas las páginas deben tener un canonical, incluso auto-referenciado, para evitar ambigüedades.
- **[MEDIA] Factor 51: Página 404 Personalizada y Útil**
  - *Criterio:* Cuando un usuario llega a una URL que no existe, la página 404 es tu última oportunidad para retenerlo. Una 404 genérica del servidor provoca abandono inmediato. Una 404 personalizada con tu branding, un buscador interno, enlaces a las secciones principales y un mensaje amigable puede recuperar al usuario. Además, monitoriza los 404 en Google Search Console para detectar broken links internos o externos que apuntan a URLs eliminadas.
- **[ALTA] Factor 52: CTA Claro y Objetivo de Conversión Definido**
  - *Criterio:* Cada página debe tener un objetivo de conversión específico: una compra, una suscripción, una descarga, una llamada. Un CTA claro y visible (botón con color contrastante, copy orientado a la acción, posicionado above the fold y también al final del contenido) reduce la tasa de abandono y mejora las métricas de comportamiento que Google monitoriza. Sin CTA, el tráfico no convierte y la sesión termina sin señal positiva.
- **[BAJA] Factor 53: Favicon e Identidad Visual en SERPs**
  - *Criterio:* El favicon aparece junto al nombre del sitio en los resultados de búsqueda desde la versión móvil y en las pestañas del navegador. Aunque es un factor menor, contribuye al reconocimiento de marca: los usuarios identifican visualmente tu resultado antes de leer el título. Usa un favicon de 48x48px en formato ICO o SVG, con buena legibilidad a tamaño pequeño. Google lo muestra en mobile SERPs desde 2019.

### Bloque: E-E-A-T & Autoridad de Marca

- **[ALTA] Factor 54: Contenido Firmado por Autor con Experiencia Real**
  - *Criterio:* E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) es el marco con el que los Quality Raters humanos de Google evalúan la calidad de las páginas. El contenido firmado por un autor identificable con experiencia demostrable en el tema puntúa mucho más alto que el contenido anónimo. Añade el nombre del autor al byline con enlace a su página de autor. Especialmente crítico en nichos YMYL (salud, finanzas, legal).
- **[ALTA] Factor 55: Páginas de Autor con Bio, Credenciales y Redes**
  - *Criterio:* Cada autor que produce contenido en tu web debe tener una página de autor completa: foto real, bio detallada, área de especialización, formación, años de experiencia, redes sociales profesionales (LinkedIn, X) y una muestra de sus publicaciones. Esta página es la que los Quality Raters visitan para verificar la credibilidad del autor. Un schema Person bien implementado en la página de autor refuerza la señal.
- **[MEDIA] Factor 56: Presencia y Actividad en Redes Sociales**
  - *Criterio:* Las redes sociales no son un factor de ranking directo, pero sí de autoridad de marca. Una web con perfiles activos en LinkedIn, X, Instagram o YouTube, con seguidores reales y contenido regular, tiene más probabilidades de ser percibida como una fuente confiable. Las menciones en redes pueden generar enlaces naturales. Además, el contenido que se comparte masivamente puede recibir más backlinks de forma orgánica.
- **[ALTA] Factor 57: Brand Queries: Búsquedas de Marca**
  - *Criterio:* Cuando muchos usuarios buscan específicamente tu marca en Google (brand queries), es una señal potente de que eres una referencia reconocida. Google usa este dato como indicador de autoridad. Para crecer en brand queries: trabaja el branding en contenido, email marketing, redes sociales, podcasts y prensa. Monitoriza las brand queries en Google Search Console > Rendimiento > filtra por tu nombre de marca.
- **[ALTA] Factor 58: Google My Business / Google Business Profile Optimizado**
  - *Criterio:* Para negocios con presencia local o física, el Google Business Profile (antes GMB) es esencial. Un perfil completo y verificado aparece en Google Maps, en el panel de conocimiento de las SERPs y en búsquedas locales. Optimiza: categoría correcta, descripción con keywords locales, fotos de calidad, horarios actualizados, respuesta a reseñas y publicaciones regulares. Las reseñas positivas tienen impacto directo en el ranking local.
- **[ALTA] Factor 59: Página 'Sobre Nosotros' y 'Quiénes Somos' Completa**
  - *Criterio:* Una página About detallada (equipo, historia, misión, oficinas, medios en los que ha aparecido la marca) es fundamental para el E-E-A-T. Es una de las primeras páginas que visitan los Quality Raters para evaluar la confianza de un sitio. Incluye fotos del equipo real, dirección física si la hay, año de fundación y logros relevantes. Una web sin About page o con una genérica pierde puntos de credibilidad.
- **[MEDIA] Factor 60: Política de Privacidad, Legal y Condiciones de Uso**
  - *Criterio:* La presencia de páginas legales (Privacy Policy, Términos y Condiciones, Política de Cookies) es una señal de trustworthiness básica. Google las busca como indicadores de que el sitio opera con transparencia. Son especialmente importantes en ecommerce y en webs que recopilan datos de usuarios. Deben estar actualizadas conforme a la legislación vigente (GDPR en Europa) y accesibles desde el footer.
- **[MEDIA] Factor 61: Menciones en Medios y Prensa (PR Digital)**
  - *Criterio:* Las menciones de tu marca en medios de comunicación relevantes, aunque sean sin enlace (unlinked mentions), contribuyen a la autoridad de marca que Google evalúa. Una estrategia de Digital PR (publicar estudios propios con datos originales, colaborar en artículos como experto, crear contenido que los medios quieran citar) es una de las formas más efectivas de construir E-E-A-T en sectores competitivos.
- **[ALTA] Factor 62: Reseñas de Clientes y Testimonios Verificables**
  - *Criterio:* Las reseñas en Google, Trustpilot, G2 u otras plataformas verificadas son señales de confianza tanto para usuarios como para Google. Un negocio con cientos de reseñas positivas tiene más autoridad que uno sin ellas. Añade schema Review o AggregateRating en páginas de producto/servicio para que Google pueda mostrar las estrellas en los resultados. Responde siempre a las reseñas, positivas y negativas.
- **[ALTA] Factor 63: Directorios y Rankings en Contenido de Blog**
  - *Criterio:* Los artículos tipo 'Los 10 mejores X', 'Ranking de Y' o 'Directorio de Z' atraen naturally enlaces entrantes porque otras webs y blogs los citan como referencia. Son también el formato perfecto para capturar intenciones de búsqueda comparativas y comerciales. Actualiza estos rankings periódicamente para mantener el freshness, cambia el año en el título y actualiza los datos para que Google los siga considerando relevantes.
- **[ALTA] Factor 64: HTTPS, Datos de Contacto Visibles y Transparencia**
  - *Criterio:* Un sitio de confianza muestra claramente cómo contactar con él: email, teléfono, formulario de contacto, dirección física si es un negocio. La combinación de HTTPS + datos de contacto visibles + páginas legales es el mínimo de transparencia que Google espera de cualquier web. Un sitio sin datos de contacto identificables puntúa muy bajo en trustworthiness según las Quality Rater Guidelines.
- **[BAJA] Factor 65: Presencia en Wikipedia y Wikidata (para marcas consolidadas)**
  - *Criterio:* Tener una entrada en Wikipedia (si tu marca lo justifica) o en Wikidata es una señal de autoridad de marca muy potente. Google usa la información de estos proyectos para construir el Knowledge Graph. Si tu marca no tiene entrada en Wikipedia pero sí tiene suficiente notoriedad, trabajar en crearla (con fuentes verificables) puede mejorar significativamente el reconocimiento de marca en los resultados de búsqueda.

---

## Fase 3: Cálculo del Scorecard y Reporte de Salida

El reporte final debe estructurarse exactamente con esta plantilla:

```markdown
# 📊 Reporte de Auditoría: 65 Factores SEO & GEO — [Dominio/URL]

## 🏆 Scorecard Global: [Puntuación / 100]

| Bloque Evaluado | Factores Aprobados | Estado |
| :--- | :--- | :--- |
| 1. Contenido & Semántica | X / 10 | [Óptimo / Requiere Atención / Crítico] |
| 2. SEO On-Page Técnico | X / 8 | [Óptimo / Requiere Atención / Crítico] |
| 3. Enlazado Interno & Siloing | X / 7 | [Óptimo / Requiere Atención / Crítico] |
| 4. E-E-A-T & Señales de Confianza | X / 7 | [Óptimo / Requiere Atención / Crítico] |
| 5. Rendimiento & Core Web Vitals | X / 8 | [Óptimo / Requiere Atención / Crítico] |
| 6. Indexabilidad & Rastreo | X / 7 | [Óptimo / Requiere Atención / Crítico] |
| 7. Optimización de Imágenes | X / 6 | [Óptimo / Requiere Atención / Crítico] |
| 8. Schema & Datos Estructurados | X / 6 | [Óptimo / Requiere Atención / Crítico] |
| 9. SEO Off-Page & Menciones | X / 6 | [Óptimo / Requiere Atención / Crítico] |

## 🚨 Top 5 Hallazgos Críticos (Acción Inmediata)
1. **[Bloque] Factor X:** [Descripción del problema y remediación exacta]
2. ...

## 🛠️ Plan de Remediación Priorizado (Sprint de 7 Días)
- **Día 1-2 (Técnico & Indexabilidad):** ...
- **Día 3-4 (Semántica, Schema & GEO):** ...
- **Día 5-7 (Rendimiento & Enlazado Interno):** ...
```
