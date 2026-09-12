import { HERO_LOCAL_TAG, MEDICAL_VALUATION_NOTICE } from './siteMeta';

export const categoryPages = {
  faciales: {
    slug: 'faciales',
    route: '/faciales',
    metaTitle: 'Tratamientos Faciales en West Palm Beach | DERMA.M',
    metaDescription: 'Tratamientos faciales diseñados para renovar, equilibrar y cuidar tu piel en DERMA.M, medical spa en West Palm Beach, Florida.',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Faciales', link: '/faciales' }
    ],
    hero: {
      eyebrow: 'TRATAMIENTOS FACIALES',
      title: 'CUIDADO AVANZADO PARA LA SALUD Y BELLEZA DE TU PIEL',
      body: 'Soluciones diseñadas para mejorar textura, luminosidad, equilibrio y apariencia facial.',
      backgroundImage: '/assets/images/hubs/faciales/hero.jpg',
      localTag: HERO_LOCAL_TAG
    },
    trustItems: [
      {
        title: 'CONVERSACIÓN PRIMERO',
        body: 'Antes de recomendar nada te preguntamos qué no te gusta de tu piel y por qué.'
      },
      {
        title: 'PROTOCOLOS AJUSTADOS',
        body: 'Elegimos entre las opciones disponibles según tu piel, no un paquete cerrado.'
      },
      {
        title: 'SEGUIMIENTO REAL',
        body: 'Te decimos qué esperar entre sesión y sesión, no solo el día que vienes.'
      }
    ],
    overview: {
      eyebrow: 'FACIALES',
      headline: 'Tratamientos diseñados para renovar, equilibrar y cuidar tu piel',
      body: 'En DERMA.M la consulta facial arranca hablando de lo que te molesta cuando te miras al espejo, no del catálogo de aparatología. De ahí sale el protocolo: limpieza, luminosidad, textura, manchas o acné, según lo que realmente te preocupa.',
      image: '/assets/images/hubs/faciales/overview.jpg'
    },
    featuredTreatments: {
      eyebrow: 'TRATAMIENTOS DESTACADOS',
      headline: 'TRATAMIENTOS DE FACIALES',
      support: 'Las opciones con página propia tienen información ampliada. Las cards hub-only dirigen a contacto para consultar disponibilidad.',
      treatments: [
        {
          title: 'LIMPIEZA FACIAL PROFUNDA',
          description: 'Purificación folicular y textura más limpia.',
          benefits: [
            'Purificación profunda',
            'Textura suavizada',
            'Mejor absorción'
          ],
          ideal: 'Ideal si buscas poros más limpios.',
          to: '/limpieza-facial-profunda',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/landings/limpieza-facial-profunda/hero.jpg'
        },
        {
          title: 'PLASMA RICO EN PLAQUETAS Y FIBRINA',
          description: 'Bioestimulación autóloga para firmeza y textura.',
          benefits: [
            'Bioestimulación natural',
            'Apoyo a firmeza',
            'Textura mejorada'
          ],
          ideal: 'Ideal si buscas regeneración progresiva.',
          to: '/prf-y-fibrina',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/landings/prf-y-fibrina/hero.jpg'
        },
        {
          title: 'HIDROFACIAL',
          description: 'Purificación e hidratación simultáneas.',
          benefits: [
            'Hidratación profunda',
            'Textura suave',
            'Luminosidad fresca'
          ],
          ideal: 'Ideal si buscas piel limpia e hidratada.',
          to: '/faciales/hidrofacial',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/hidrofacial/hero.jpg'
        },
        {
          title: 'MICRONEEDLING / DERMAPEN',
          description: 'Remodelación de textura y poros.',
          benefits: [
            'Renovación epitelial',
            'Colágeno natural',
            'Poros refinados'
          ],
          ideal: 'Ideal si buscas mejorar marcas.',
          to: '/faciales/microneedling',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/microneedling/hero.jpg'
        },
        {
          title: 'HIFU FACIAL',
          description: 'Apoyo al tensado cutáneo sin cirugía.',
          benefits: [
            'Tensado cutáneo',
            'Soporte profundo',
            'Resultado progresivo'
          ],
          ideal: 'Ideal si buscas firmeza facial.',
          to: '/faciales/hifu-facial',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/hifu-facial/hero.jpg'
        },
        {
          title: 'PEEL COREANO',
          description: 'Renovación suave y luminosidad inmediata.',
          benefits: [
            'Luminosidad visible',
            'Exfoliación suave',
            'Barrera protegida'
          ],
          ideal: 'Ideal si buscas glow sin agresión.',
          to: '/faciales/peel-coreano',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/peel-coreano/hero.jpg'
        },
        {
          title: 'RADIOFRECUENCIA FACIAL',
          description: 'Firmeza cutánea y líneas suavizadas.',
          benefits: [
            'Firmeza cutánea',
            'Líneas suavizadas',
            'Estimulación profunda'
          ],
          ideal: 'Ideal si buscas elasticidad.',
          to: '/faciales/radiofrecuencia-facial',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/radiofrecuencia-facial/hero.jpg'
        },
        {
          title: 'OXIGENOTERAPIA FACIAL',
          description: 'Hidratación y revitalización del rostro.',
          benefits: [
            'Hidratación inmediata',
            'Vitalidad celular',
            'Piel calmada'
          ],
          ideal: 'Ideal si buscas frescura.',
          to: '/faciales/oxigenoterapia-facial',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/oxigenoterapia-facial/hero.jpg'
        },
        {
          title: 'REJUVENECIMIENTO FACIAL',
          description: 'Protocolo integral para calidad dérmica.',
          benefits: [
            'Elasticidad dérmica',
            'Líneas atenuadas',
            'Textura uniforme'
          ],
          ideal: 'Ideal si buscas prevención.',
          to: '/faciales/rejuvenecimiento-facial',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/rejuvenecimiento-facial/hero.jpg'
        },
        {
          title: 'TRATAMIENTO DE ACNÉ',
          description: 'Purificación para piel con brotes.',
          benefits: [
            'Poros limpios',
            'Acción calmante',
            'Prevención de marcas'
          ],
          ideal: 'Ideal si buscas control.',
          to: '/faciales/tratamiento-acne',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/tratamiento-acne/hero.jpg'
        },
        {
          title: 'MANCHAS Y CICATRICES',
          description: 'Apoyo para tono y relieve irregular.',
          benefits: [
            'Manchas difuminadas',
            'Cicatrices refinadas',
            'Luminosidad general'
          ],
          ideal: 'Ideal si buscas uniformidad.',
          to: '/faciales/manchas-cicatrices',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/manchas-cicatrices/hero.jpg'
        },
        {
          title: 'DERMABRASIÓN FACIAL',
          description: 'Exfoliación física de precisión.',
          benefits: [
            'Aspereza removida',
            'Poros despejados',
            'Luminosidad facial'
          ],
          ideal: 'Ideal si buscas suavidad.',
          to: '/faciales/dermabracion-facial',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/dermabracion-facial/hero.jpg'
        },
        {
          title: 'PLASMA FRÍO',
          description: 'Apoyo no térmico para piel sensible.',
          benefits: [
            'Purificación profunda',
            'Piel calmada',
            'Recuperación apoyada'
          ],
          ideal: 'Ideal si buscas confort.',
          to: '/faciales/plasma-frio',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/plasma-frio/hero.jpg'
        },
        {
          title: 'CARBOXITERAPIA FACIAL',
          description: 'Oxigenación tisular y firmeza facial.',
          benefits: [
            'Oxigenación local',
            'Firmeza progresiva',
            'Drenaje facial'
          ],
          ideal: 'Ideal si buscas revitalización.',
          to: '/faciales/carboxiterapia-facial',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/faciales/carboxiterapia-facial/hero.jpg'
        }
      ]
    },
    complementaryTreatments: {
      eyebrow: 'MÁS TRATAMIENTOS',
      headline: 'TRATAMIENTOS FACIALES COMPLEMENTARIOS',
      support: 'Consulta disponibilidad durante tu valoración para elegir el protocolo más adecuado según tu piel y tus objetivos.',
      treatments: [
        {
          title: 'ULTRASONIDO FACIAL',
          description: 'Estimula la piel a nivel profundo y mejora la absorción de activos.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'RADIOFRECUENCIA FRACCIONADA / EVEFUS 10',
          description: 'Tecnología térmica controlada para firmeza, textura y elasticidad.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'MS FACIAL + ENERGY',
          description: 'Estimula músculos faciales y activa colágeno para definición.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'MASAJE MANDIBULAR / MARCACIÓN MANDIBULAR',
          description: 'Técnica manual para realzar el contorno natural del rostro.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'MASAJE FACIAL RELAJANTE',
          description: 'Oxigena tejidos, reduce tensión y mejora el aspecto general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'MADEROTERAPIA FACIAL',
          description: 'Estimula circulación, drenaje y efecto lifting suave del rostro.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'Si buscas mejorar la calidad visible de tu piel',
      list: [
        'Piel opaca o con textura irregular',
        'Poros congestionados',
        'Manchas o marcas visibles',
        'Tendencia acneica',
        'Pérdida de luminosidad',
        'Signos iniciales de envejecimiento'
      ]
    },
    benefits: {
      headline: 'Beneficios del cuidado facial en DERMA.M',
      list: [
        {
          title: 'PIEL QUE SE VE Y SE SIENTE MEJOR',
          body: 'El objetivo es que notes el cambio tú, no que quede bien en una foto.'
        },
        {
          title: 'PROTOCOLOS QUE SE AJUSTAN',
          body: 'Si algo no te convence a mitad de camino, lo hablamos y lo cambiamos.'
        },
        {
          title: 'CLARIDAD SOBRE EL PROCESO',
          body: 'Sabes desde el principio cuántas sesiones estimamos y por qué.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'Cada piel requiere una mirada personalizada',
      body: 'Cada piel reacciona distinto. Antes de proponer un tratamiento miramos qué tan sensible es, qué ya probaste antes y qué resultado buscas; ese cruce arma el protocolo, no una lista fija de pasos.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Nos cuentas qué te preocupa de tu piel y miramos de cerca el estado actual.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Te explicamos qué opciones aplican a tu caso y por qué, sin apurar la decisión.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Hacemos la sesión con los productos y equipos que corresponden a lo definido.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te decimos qué cuidar los próximos días y cuándo tendría sentido la siguiente sesión.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'GOOGLE REVIEWS',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      support: 'Conoce cómo nuestros tratamientos faciales han devuelto la salud y luminosidad a la piel de nuestros pacientes.',
      list: [
        {
          quote: 'Desde que llamé me sentí muy cómoda y confiada. El spa es muy limpio. Y con el facial que me realizó quedé muy conforme.',
          author: 'SONIA GARAY'
        },
        {
          quote: 'Súper agradecida con Nancy. Tengo acné y siempre sabe exactamente qué productos ponerme y qué tratamientos necesito.',
          author: 'CARLA AFRICA GARUZ'
        },
        {
          quote: 'Una exprencia muy buena, el tratamiento me hizo muy bien. Muy profesional Daniela, amable y me explicó sobre los beneficios.',
          author: 'CELIDA SAAVEDRA'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'Empieza con un cuidado facial personalizado',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el tratamiento facial más adecuado para ti.',
      primaryCta: 'AGENDA TU VALORACIÓN',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/faciales/cta.jpg'
    }
  },
  corporales: {
    slug: 'corporales',
    route: '/corporales',
    metaTitle: 'Tratamientos Corporales en West Palm Beach | DERMA.M',
    metaDescription: 'Tratamientos corporales enfocados en bienestar, recuperación y objetivos estéticos personalizados en DERMA.M. West Palm Beach, Florida.',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Corporales', link: '/corporales' }
    ],
    hero: {
      eyebrow: 'TRATAMIENTOS CORPORALES',
      title: 'PROTOCOLOS PARA CUIDAR, MOLDEAR Y ACOMPAÑAR TU CUERPO',
      body: 'Tratamientos corporales enfocados en bienestar, recuperación y objetivos estéticos personalizados.',
      backgroundImage: '/assets/images/hubs/corporales/hero.jpg',
      localTag: HERO_LOCAL_TAG
    },
    trustItems: [
      {
        title: 'PENSADO PARA UN PROCESO',
        body: 'El plan se ajusta sesión a sesión según cómo vas evolucionando.'
      },
      {
        title: 'ACOMPAÑAMIENTO EN RECUPERACIONES',
        body: 'Trabajamos en línea con tu cirugía o tu rutina, no en paralelo a ciegas.'
      },
      {
        title: 'COMUNICACIÓN CONSTANTE',
        body: 'Si algo no va como esperabas, lo hablamos antes de seguir con el plan.'
      }
    ],
    overview: {
      eyebrow: 'CORPORALES',
      headline: 'Tratamientos diseñados para acompañar tu cuerpo con precisión',
      body: 'Los tratamientos corporales casi nunca son de una sola vez. Suelen ir de la mano de un proceso más largo: una recuperación, un cambio de peso, un posparto. En DERMA.M armamos el plan pensando en ese recorrido completo, no solo en la sesión de hoy.',
      image: '/assets/images/hubs/corporales/overview.jpg'
    },
    featuredTreatments: {
      eyebrow: 'TRATAMIENTOS DESTACADOS',
      headline: 'TRATAMIENTOS CORPORALES PRINCIPALES',
      support: 'Las opciones con página propia tienen información ampliada. Las cards hub-only dirigen a contacto para consultar disponibilidad.',
      treatments: [
        {
          title: 'TRATAMIENTOS POSTOPERATORIOS',
          description: 'Acompañamiento profesional para una recuperación más cómoda.',
          benefits: [
            'Drenaje linfático',
            'Reducción de inflamación',
            'Prevención de fibrosis'
          ],
          ideal: 'Ideal si estás en proceso de recuperación corporal.',
          to: '/tratamientos-postoperatorios',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/landings/tratamientos-postoperatorios/hero.jpg',
          imagePosition: '70% center'
        },
        {
          title: 'LIPO 360',
          description: 'Apoyo estético corporal para definición y recuperación.',
          benefits: [
            'Moldeo corporal',
            'Drenaje asistido',
            'Acompañamiento postproceso'
          ],
          ideal: 'Ideal si buscas apoyo corporal integral.',
          to: '/corporales/lipo-360',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/lipo-360/hero.jpg',
          imagePosition: '74% center'
        },
        {
          title: 'LEVANTAMIENTO DE GLÚTEOS',
          description: 'Protocolo corporal orientado a tonificación y apariencia glútea.',
          benefits: [
            'Estimulación localizada',
            'Apariencia más firme',
            'Definición progresiva'
          ],
          ideal: 'Ideal si buscas mejorar la apariencia de glúteos.',
          to: '/corporales/levantamiento-gluteos',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/levantamiento-gluteos/hero.jpg',
          imagePosition: '72% center'
        },
        {
          title: 'MARCACIÓN ABDOMINAL',
          description: 'Acompañamiento estético para definición y apariencia abdominal.',
          benefits: [
            'Definición visual',
            'Moldeo localizado',
            'Apoyo a tono corporal'
          ],
          ideal: 'Ideal si buscas una apariencia abdominal más definida.',
          to: '/corporales/marcacion-abdominal',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/marcacion-abdominal/hero.jpg',
          imagePosition: '70% center'
        },
        {
          title: 'HIFU CORPORAL',
          description: 'Tecnología focalizada para firmeza y soporte corporal.',
          benefits: [
            'Firmeza corporal',
            'Soporte profundo',
            'Resultado progresivo'
          ],
          ideal: 'Ideal si buscas acompañar firmeza sin cirugía.',
          to: '/corporales/hifu-corporal',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/hifu-corporal/hero.jpg',
          imagePosition: '82% center'
        },
        {
          title: 'CORRIENTES RUSAS',
          description: 'Estimulación muscular para apoyar tono y definición corporal.',
          benefits: [
            'Activación muscular',
            'Apoyo a tonificación',
            'Trabajo localizado'
          ],
          ideal: 'Ideal si buscas complementar definición corporal.',
          to: '/corporales/corrientes-rusas',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/corrientes-rusas/hero.jpg',
          imagePosition: '76% center'
        },
        {
          title: 'ESTRÍAS Y CELULITIS',
          description: 'Protocolos orientados a mejorar textura y apariencia corporal.',
          benefits: [
            'Textura suavizada',
            'Apariencia más uniforme',
            'Apoyo estético localizado'
          ],
          ideal: 'Ideal si buscas mejorar textura visible de la piel.',
          to: '/corporales/estrias-celulitis',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/estrias-celulitis/hero.jpg',
          imagePosition: '72% center'
        },
        {
          title: 'CARBOXITERAPIA CORPORAL',
          description: 'Protocolo estético corporal para oxigenación y apariencia de firmeza.',
          benefits: [
            'Oxigenación local',
            'Drenaje corporal',
            'Firmeza progresiva'
          ],
          ideal: 'Ideal si buscas revitalización corporal localizada.',
          to: '/corporales/carboxiterapia-corporal',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/carboxiterapia-corporal/hero.jpg',
          imagePosition: '78% center'
        }
      ]
    },
    complementaryTreatments: {
      eyebrow: 'MÁS TRATAMIENTOS',
      headline: 'TRATAMIENTOS CORPORALES COMPLEMENTARIOS',
      support: 'Consulta disponibilidad durante tu valoración para elegir el protocolo más adecuado según tu cuerpo, proceso y objetivos.',
      treatments: [
        {
          title: 'MADEROTERAPIA CORPORAL',
          description: 'Técnica manual para apoyar drenaje, circulación y apariencia corporal.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/corporales/maderoterapia-corporal/tratamiento-maderoterapia-corporal.jpg',
          imagePosition: 'center 80%'
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'Si buscas acompañar tu cuerpo con cuidado profesional',
      list: [
        'Recuperación corporal postoperatoria',
        'Inflamación o retención de líquidos',
        'Textura irregular en la piel',
        'Objetivos de definición corporal',
        'Pérdida de firmeza visible',
        'Necesidad de acompañamiento personalizado'
      ]
    },
    benefits: {
      headline: 'Beneficios del cuidado corporal en DERMA.M',
      list: [
        {
          title: 'UN PLAN QUE SE ADAPTA',
          body: 'El protocolo cambia si tu proceso cambia.'
        },
        {
          title: 'DRENAJE Y CUIDADO SUPERVISADOS',
          body: 'Cada sesión se ajusta al momento de tu recuperación.'
        },
        {
          title: 'TIEMPOS REALES, NO PROMESAS',
          body: 'Hablamos claro sobre cuánto suele tomar ver cambios, sesión por sesión.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'Cada cuerpo requiere un plan adaptado',
      body: 'Antes de armar el plan corporal entendemos en qué etapa estás: si vienes de una cirugía, si es un objetivo estético a mediano plazo, o si buscas complementar tu rutina. El protocolo se arma sobre eso.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Revisamos en qué etapa de tu proceso corporal estás y qué necesitas ahora.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Armamos un plan de sesiones, no un tratamiento suelto.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos la sesión según cómo evolucionaste desde la anterior.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Ajustamos el plan según tu recuperación o tus objetivos, sesión a sesión.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'GOOGLE REVIEWS',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      support: 'Conoce cómo nuestros tratamientos corporales han ayudado a la recuperación y bienestar de nuestros pacientes.',
      list: [
        {
          quote: 'Recibí un tratamiento de 5 masajes corporales con Yosy, la mejor masajista de West Palm Beach, la clínica excelente y las chicas súper amables.',
          author: 'YULEDSY RODRIGUEZ DOMINGUEZ'
        },
        {
          quote: 'Experiencia increíble, muy profesionales, mi masajista Yosy todo un amor como persona y con una preparación de calidad, me van encantando mis resultados.',
          author: 'LISANDRA'
        },
        {
          quote: 'Realmente estoy muy agradecida con DERMA.M aunque todo el equipo de trabajo es una maravilla. Súper lindas, cariñosas, comprometidas con su trabajo.',
          author: 'KARINA PÉREZ VAILLANT'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'Empieza con un cuidado corporal personalizado',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el tratamiento corporal más adecuado para ti.',
      primaryCta: 'AGENDA TU VALORACIÓN',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/corporales/cta.jpg'
    }
  }
,
  laserYLuz: {
    slug: 'laser-y-luz',
    route: '/laser-y-luz',
    metaTitle: 'Tratamientos Láser y Luz en West Palm Beach | DERMA.M',
    metaDescription: 'Tratamientos con tecnología estética avanzada para renovar y mejorar la piel en DERMA.M, medical spa en West Palm Beach, Florida.',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Láser y Luz', link: '/laser-y-luz' }
    ],
    hero: {
      eyebrow: 'LÁSER Y LUZ',
      title: 'TECNOLOGÍA ESTÉTICA PARA RENOVAR Y MEJORAR LA PIEL',
      body: 'Soluciones con aparatología avanzada para acompañar distintos objetivos faciales y corporales.',
      backgroundImage: '/assets/images/hubs/laser-y-luz/hero.jpg',
      localTag: HERO_LOCAL_TAG
    },
    trustItems: [
      {
        title: 'CALIBRACIÓN POR PIEL',
        body: 'El nivel de energía y la técnica se ajustan a tu tono y sensibilidad, no a un estándar fijo.'
      },
      {
        title: 'CRITERIO SOBRE EL RITMO',
        body: 'Si tu piel necesita más tiempo entre sesiones, te lo decimos en vez de forzarlo.'
      },
      {
        title: 'SEGURIDAD ANTES QUE NADA',
        body: 'Revisamos contraindicaciones (sol reciente, medicación, tipo de piel) antes de cualquier sesión.'
      }
    ],
    overview: {
      eyebrow: 'LÁSER Y LUZ',
      headline: 'Tratamientos con tecnología para acompañar la calidad visible de tu piel',
      body: 'Cada equipo de láser o luz se calibra distinto según el tono de piel, la sensibilidad y la zona a tratar. En DERMA.M ese ajuste se decide antes de prender el equipo, no es un mismo nivel para todos.',
      image: '/assets/images/hubs/laser-y-luz/overview.jpg'
    },
    featuredTreatments: {
      eyebrow: 'TRATAMIENTOS DESTACADOS',
      headline: 'TRATAMIENTOS DE LÁSER Y LUZ',
      support: 'Las opciones con página propia tienen información ampliada para ayudarte a conocer cada protocolo antes de tu valoración.',
      treatments: [
        {
          title: 'DEPILACIÓN LÁSER',
          description: 'Reducción progresiva del vello con tecnología estética.',
          benefits: [
            'Reducción del vello',
            'Piel más suave',
            'Sesiones progresivas'
          ],
          ideal: 'Ideal si buscas una solución más duradera para el vello corporal o facial.',
          to: '/laser-y-luz/depilacion-laser',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/laser-y-luz/depilacion-laser/hero.jpg'
        },
        {
          title: 'IPL',
          listName: 'IPL',
          description: 'Luz pulsada intensa para apoyar tono, textura y apariencia de la piel.',
          benefits: [
            'Tono más uniforme',
            'Apoyo en manchas',
            'Renovación visible'
          ],
          ideal: 'Ideal si buscas mejorar la apariencia general de la piel.',
          to: '/laser-y-luz/ipl',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/laser-y-luz/ipl/hero.jpg'
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'Si buscas tecnología para acompañar cambios visibles en tu piel',
      list: [
        'Vello facial o corporal no deseado',
        'Manchas visibles o tono irregular',
        'Textura desigual',
        'Marcas o cicatrices',
        'Signos visibles de envejecimiento',
        'Búsqueda de renovación cutánea progresiva'
      ]
    },
    benefits: {
      headline: 'Beneficios de Láser y Luz en DERMA.M',
      list: [
        {
          title: 'AJUSTE FINO POR SESIÓN',
          body: 'Cada sesión parte de cómo reaccionó tu piel a la anterior.'
        },
        {
          title: 'MENOS SORPRESAS EN CONSULTA',
          body: 'Te explicamos qué sentir y qué esperar antes de empezar.'
        },
        {
          title: 'RITMO SEGÚN TU PIEL',
          body: 'No forzamos sesiones seguidas si tu piel necesita más tiempo.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'La tecnología debe aplicarse con criterio',
      body: 'La tecnología no es un botón que se aprieta igual para todos. Antes de cualquier sesión de láser o luz revisamos tu tipo de piel, tu historial (sol, medicación, tratamientos previos) y definimos parámetros específicos para tu caso.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Revisamos tu tipo de piel, tu historial y la zona a tratar.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Definimos parámetros y una cantidad estimada de sesiones para tu caso.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos la sesión con el equipo calibrado a lo definido.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Revisamos cómo reaccionó tu piel antes de programar la siguiente sesión.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'GOOGLE REVIEWS',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      support: 'Conoce cómo nuestra atención profesional ha ayudado a cuidar la piel de nuestros pacientes.',
      list: [
        {
          quote: 'Excelente experiencia. Mikaela me realiza el facial y el láser, es súper profesional, amable y atenta. El salón está siempre muy limpio, tranquilo y tiene un ambiente muy agradable.',
          author: 'RATNEY PEREZ'
        },
        {
          quote: 'El facial y la depilación láser que me realizó superó mis expectativas, quedé encantada con el resultado.',
          author: 'GEIMY ORTIZ'
        },
        {
          quote: 'Mikaela también es la mejor! Ella es encargada de mi láser y tratamientos de plasma. Realmente son las mejores. Su carisma, profesionalismo y servicio es espectacular!',
          author: 'MELI LARCO'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'Descubre qué tecnología es adecuada para tu piel',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el protocolo de láser o luz más adecuado para tus objetivos.',
      primaryCta: 'AGENDA TU VALORACIÓN',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/laser-y-luz/cta.jpg'
    }
  }
,
  dentalEstetico: {
    slug: 'dental-estetico',
    route: '/dental-estetico',
    metaTitle: 'Dental Estético en West Palm Beach | DERMA.M',
    metaDescription: 'Tratamientos para cuidar la apariencia visible de tu sonrisa, como blanqueamiento y limpieza dental, en DERMA.M, West Palm Beach, Florida.',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Dental Estético', link: '/dental-estetico' }
    ],
    hero: {
      eyebrow: 'DENTAL ESTÉTICO',
      title: 'CUIDADO ESTÉTICO PARA UNA SONRISA MÁS LUMINOSA',
      body: 'Tratamientos diseñados para apoyar la estética y el cuidado visible de tu sonrisa.',
      backgroundImage: '/assets/images/hubs/dental-estetico/hero.jpg',
      localTag: HERO_LOCAL_TAG
    },
    trustItems: [
      {
        title: 'SIN VUELTA DE LO INCÓMODO',
        body: 'Si te pone nerviosa la silla dental, lo tenemos en cuenta desde que llegas.'
      },
      {
        title: 'SESIONES CORTAS',
        body: 'Blanqueamiento y limpieza son protocolos rápidos, pensados para no ocuparte el día.'
      },
      {
        title: 'EXPLICACIÓN CLARA',
        body: 'Te contamos qué esperar de tu sonrisa antes y después, sin tecnicismos.'
      }
    ],
    overview: {
      eyebrow: 'DENTAL ESTÉTICO',
      headline: 'Tratamientos para cuidar la apariencia visible de tu sonrisa',
      body: 'Sabemos que el tema dental le genera nervios a mucha gente. En DERMA.M el cuidado dental estético se plantea como algo simple y corto, sin el peso de una consulta odontológica tradicional.',
      image: '/assets/images/hubs/dental-estetico/overview.jpg'
    },
    featuredTreatments: {
      eyebrow: 'TRATAMIENTOS DESTACADOS',
      headline: 'TRATAMIENTOS DE DENTAL ESTÉTICO',
      support: 'Las opciones con página propia tienen información ampliada para ayudarte a conocer cada protocolo antes de tu valoración.',
      treatments: [
        {
          title: 'BLANQUEAMIENTO DENTAL',
          description: 'Protocolo estético para una sonrisa más luminosa.',
          benefits: [
            'Apariencia más clara',
            'Sonrisa luminosa',
            'Cuidado estético'
          ],
          ideal: 'Ideal si buscas mejorar la luminosidad visible de tu sonrisa.',
          to: '/dental-estetico/blanqueamiento-dental',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/dental-estetico/blanqueamiento-dental/hero.jpg',
          imagePosition: '74% center'
        },
        {
          title: 'LIMPIEZA DENTAL',
          description: 'Cuidado profesional para una sensación de limpieza y frescura.',
          benefits: [
            'Limpieza visible',
            'Sensación de frescura',
            'Cuidado preventivo'
          ],
          ideal: 'Ideal si buscas mantener una sonrisa limpia y cuidada.',
          to: '/dental-estetico/limpieza-dental',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/dental-estetico/limpieza-dental/hero.jpg',
          imagePosition: '74% center'
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'Si buscas cuidar la estética visible de tu sonrisa',
      list: [
        'Sonrisa opaca o con pérdida de luminosidad',
        'Necesidad de limpieza profesional',
        'Objetivos de estética dental',
        'Búsqueda de frescura y cuidado visible',
        'Interés en una sonrisa más equilibrada',
        'Rutina de mantenimiento estético'
      ]
    },
    benefits: {
      headline: 'Beneficios del cuidado dental estético en DERMA.M',
      list: [
        {
          title: 'UNA SONRISA MÁS LUMINOSA',
          body: 'Sin promesas exageradas: hablamos de lo que realmente cambia.'
        },
        {
          title: 'COMODIDAD DURANTE LA SESIÓN',
          body: 'Priorizamos que te sientas tranquila mientras dura el proceso.'
        },
        {
          title: 'MANTENIMIENTO SIMPLE',
          body: 'Te decimos cada cuánto conviene repetir la limpieza o el blanqueamiento.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'Una sonrisa cuidada también es parte de tu bienestar',
      body: 'Antes de blanqueamiento o limpieza te preguntamos qué te incomoda de tu sonrisa y qué tan cómoda te sientes con el proceso; eso define el ritmo de la sesión, no solo el protocolo.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Conversamos sobre tu sonrisa y qué tan cómoda te sientes con el proceso dental.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Te explicamos si blanqueamiento, limpieza o ambos aplican a tu caso.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Hacemos la sesión priorizando tu comodidad de principio a fin.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te decimos cómo mantener el resultado y cuándo repetir.'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'Descubre cómo cuidar la estética de tu sonrisa',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el protocolo dental estético más adecuado para ti.',
      primaryCta: 'AGENDA TU VALORACIÓN',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/dental-estetico/cta.jpg'
    }
  }
,
  ivTherapy: {
    slug: 'iv-therapy',
    route: '/iv-therapy',
    metaTitle: 'IV Therapy en West Palm Beach | DERMA.M',
    metaDescription: 'Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado en DERMA.M. West Palm Beach, Florida.',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'IV Therapy', link: '/iv-therapy' }
    ],
    hero: {
      eyebrow: 'IV THERAPY',
      title: 'BIENESTAR DESDE EL INTERIOR',
      body: 'Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado.',
      backgroundImage: '/assets/images/hubs/iv-therapy/hero.jpg',
      localTag: HERO_LOCAL_TAG
    },
    trustItems: [
      {
        title: 'SEGÚN CÓMO LLEGAS HOY',
        body: 'El suero se elige por cómo te sientes esa semana, no por un catálogo cerrado.'
      },
      {
        title: 'SESIONES RÁPIDAS',
        body: 'Pensadas para entrar y salir sin que te complique el día.'
      },
      {
        title: 'AMBIENTE CÓMODO',
        body: 'La sesión se hace en un espacio tranquilo, sin apuros.'
      }
    ],
    overview: {
      eyebrow: 'IV THERAPY',
      headline: 'Terapias diseñadas para acompañar tu bienestar general',
      body: 'IV Therapy es la única categoría pensada para tu rutina de todos los días: cansancio, bajas defensas, un fin de semana pesado. La sesión es corta y se elige según cómo llegas ese día, no según un menú fijo.',
      image: '/assets/images/hubs/iv-therapy/overview.jpg'
    },
    complementaryTreatments: {
      eyebrow: 'IV THERAPY',
      headline: 'SUEROS IV THERAPY',
      support: 'Las opciones de IV Therapy se orientan durante la valoración para elegir el protocolo más adecuado según tus objetivos de bienestar.',
      treatments: [
        {
          title: 'TRI-IMMUNE BOOST IV',
          description: 'Protocolo intravenoso orientado a apoyar bienestar, defensas y vitalidad general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'GET-UP-AND-GO IV',
          description: 'Opción intravenosa diseñada para acompañar energía, hidratación y recuperación.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'IMMUNITY IV',
          description: 'Protocolo orientado a apoyar el bienestar inmunológico y la vitalidad general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'BRAINSTORM IV',
          description: 'Opción intravenosa enfocada en apoyar claridad, concentración y bienestar general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'ALLEVIATE IV',
          description: 'Protocolo diseñado para acompañar recuperación, confort y equilibrio general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'QUENCH IV',
          description: 'Opción enfocada en apoyar hidratación, reposición y sensación de bienestar.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'REBOOT IV',
          description: 'Protocolo orientado a recuperación, hidratación y revitalización general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'RECOVERY & PERFORMANCE IV',
          description: 'Opción diseñada para acompañar recuperación física, hidratación y rendimiento general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'SNOW BRIGHT IV',
          description: 'Protocolo orientado a apoyar bienestar, luminosidad y cuidado integral desde el interior.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'TIMELESS IV',
          description: 'Opción intravenosa enfocada en bienestar, antioxidantes y apoyo al cuidado integral.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        },
        {
          title: 'EL B-LEAN IV',
          description: 'Protocolo orientado a acompañar energía, metabolismo y bienestar general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: null
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'Si buscas acompañar tu bienestar desde una experiencia personalizada',
      list: [
        'Necesidad de hidratación',
        'Sensación de cansancio o baja energía',
        'Búsqueda de bienestar general',
        'Recuperación después de actividad intensa',
        'Apoyo complementario a tu rutina de cuidado',
        'Interés en una experiencia cómoda y profesional'
      ]
    },
    benefits: {
      headline: 'Beneficios de IV Therapy en DERMA.M',
      list: [
        {
          title: 'ENERGÍA PARA TU SEMANA',
          body: 'Apoyo puntual cuando el cuerpo lo pide.'
        },
        {
          title: 'HIDRATACIÓN GUIADA',
          body: 'Te orientamos sobre qué opción tiene sentido según tu objetivo.'
        },
        {
          title: 'FÁCIL DE SUMAR A TU RUTINA',
          body: 'No requiere preparación previa ni tiempos largos de recuperación.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'El bienestar también requiere orientación profesional',
      body: 'Antes de recomendar un suero te preguntamos cómo vienes esta semana (cansancio, entrenamiento, recuperación, defensas bajas) y de ahí sale la opción que tiene sentido, no la más cara ni la más pedida.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Nos cuentas cómo vienes esta semana y qué buscas con la sesión.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Te orientamos sobre qué opción de IV Therapy tiene sentido para eso.'
        },
        {
          number: '03',
          title: 'SESIÓN',
          body: 'Haces la sesión en un ambiente cómodo, sin apuros.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te contamos qué esperar después y cuándo repetir si aplica.'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'Descubre si IV Therapy es adecuado para ti',
      body: 'Agenda tu cita y recibe orientación profesional sobre opciones de bienestar adaptadas a tus objetivos.',
      primaryCta: 'AGENDA TU VALORACIÓN',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/iv-therapy/cta.jpg'
    }
  }
,
  capilar: {
    slug: 'capilar',
    route: '/capilar',
    metaTitle: 'Tratamientos Capilares en West Palm Beach | DERMA.M',
    metaDescription: 'Tratamientos para acompañar la salud, apariencia y fortaleza del cabello en DERMA.M, medical spa en West Palm Beach, Florida.',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Capilar', link: '/capilar' }
    ],
    hero: {
      eyebrow: 'CAPILAR',
      title: 'CUIDADO CAPILAR CON ENFOQUE PROFESIONAL',
      body: 'Soluciones enfocadas en acompañar la salud, apariencia y fortaleza del cabello.',
      backgroundImage: '/assets/images/hubs/capilar/hero.jpg',
      localTag: HERO_LOCAL_TAG
    },
    trustItems: [
      {
        title: 'CONVERSACIÓN SIN JUICIO',
        body: 'Puedes contarnos qué te preocupa de tu cabello sin sentirte incómoda.'
      },
      {
        title: 'PRIVACIDAD EN LA CONSULTA',
        body: 'La valoración capilar se hace en un espacio reservado.'
      },
      {
        title: 'PROTOCOLO SEGÚN TU CASO',
        body: 'No es el mismo tratamiento para pérdida reciente que para cabello debilitado de años.'
      }
    ],
    overview: {
      eyebrow: 'CAPILAR',
      headline: 'Tratamientos para acompañar la salud y apariencia del cabello',
      body: 'Hablar de pérdida de cabello no siempre es fácil. En DERMA.M la primera conversación es justamente esa, sin apuro y sin juicio, antes de definir cualquier protocolo capilar.',
      image: '/assets/images/hubs/capilar/overview.jpg'
    },
    featuredTreatments: {
      eyebrow: 'TRATAMIENTO DESTACADO',
      headline: 'TRATAMIENTO CAPILAR',
      support: 'Información ampliada disponible para conocer el protocolo antes de tu valoración.',
      treatments: [
        {
          title: 'TRATAMIENTO CAPILAR',
          description: 'Protocolo enfocado en acompañar la salud, fortaleza y apariencia del cabello.',
          benefits: [
            'Cuidado capilar',
            'Apoyo a fortaleza',
            'Apariencia saludable'
          ],
          ideal: 'Ideal si buscas acompañar la calidad visible de tu cabello.',
          to: '/capilar/tratamiento-capilar',
          cta: 'VER TRATAMIENTO',
          disclaimer: MEDICAL_VALUATION_NOTICE,
          image: '/assets/images/treatments/capilar/tratamiento-capilar/hero.jpg'
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'Si buscas acompañar el cuidado y apariencia de tu cabello',
      list: [
        'Pérdida de fortaleza visible',
        'Cabello débil o con apariencia apagada',
        'Interés en cuidado capilar profesional',
        'Necesidad de orientación personalizada',
        'Búsqueda de apoyo para salud capilar',
        'Rutina de cuidado capilar integral'
      ]
    },
    benefits: {
      headline: 'Beneficios del cuidado capilar en DERMA.M',
      list: [
        {
          title: 'ACOMPAÑAMIENTO DESDE EL PRIMER DÍA',
          body: 'Aunque no sepas bien qué te pasa, arrancamos por escuchar.'
        },
        {
          title: 'CUIDADO SIN VERGÜENZA',
          body: 'El espacio está pensado para que hables con confianza.'
        },
        {
          title: 'SEGUIMIENTO REAL',
          body: 'Vemos si el protocolo está funcionando y ajustamos si hace falta.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'El cuidado capilar requiere una mirada personalizada',
      body: 'Antes de proponer un tratamiento capilar entendemos hace cuánto empezó lo que te preocupa, si es algo puntual o algo de más tiempo, y qué tan cómoda te sientes hablándolo. De ahí sale el protocolo.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Conversamos sobre lo que te preocupa de tu cabello, con calma y en privado.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Te explicamos qué protocolo aplica a tu caso y por qué.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos la sesión con el cuidado que corresponde a tu situación.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Revisamos cómo vas evolucionando y ajustamos el plan si hace falta.'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'Empieza con un cuidado capilar personalizado',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el protocolo capilar más adecuado para tus objetivos.',
      primaryCta: 'AGENDA TU VALORACIÓN',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/capilar/cta.jpg'
    }
  }
};
