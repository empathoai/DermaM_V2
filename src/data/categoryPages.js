export const categoryPages = {
  faciales: {
    slug: 'faciales',
    route: '/faciales',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Faciales', link: '/faciales' }
    ],
    hero: {
      eyebrow: 'TRATAMIENTOS FACIALES',
      title: 'CUIDADO AVANZADO PARA LA SALUD Y BELLEZA DE TU PIEL',
      body: 'Soluciones diseñadas para mejorar textura, luminosidad, equilibrio y apariencia facial.',
      backgroundImage: '/assets/images/hubs/faciales/hero.jpg'
    },
    trustItems: [
      {
        title: 'EVALUACIÓN PERSONALIZADA',
        body: 'Tratamientos adaptados a tu piel y objetivos.'
      },
      {
        title: 'PROTOCOLOS SELECCIONADOS',
        body: 'Cuidado facial con productos y aparatología profesional.'
      },
      {
        title: 'RESULTADOS NATURALES',
        body: 'Enfoque estético pensado para equilibrio, luminosidad y bienestar.'
      }
    ],
    overview: {
      eyebrow: 'FACIALES',
      headline: 'TRATAMIENTOS DISEÑADOS PARA RENOVAR, EQUILIBRAR Y CUIDAR TU PIEL',
      body: 'En Derma.M trabajamos tratamientos faciales personalizados para acompañar distintas necesidades de la piel, desde limpieza profunda y luminosidad hasta textura, manchas, acné y rejuvenecimiento.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: '/assets/images/landings/limpieza-facial-profunda/hero.jpg'
        },
        {
          title: 'PRP Y FIBRINA',
          description: 'Bioestimulación autóloga para firmeza y textura.',
          benefits: [
            'Bioestimulación natural',
            'Apoyo a firmeza',
            'Textura mejorada'
          ],
          ideal: 'Ideal si buscas regeneración progresiva.',
          to: '/prf-y-fibrina',
          cta: 'VER TRATAMIENTO',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'RADIOFRECUENCIA FRACCIONADA / EVEFUS 10',
          description: 'Tecnología térmica controlada para firmeza, textura y elasticidad.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'MS FACIAL + ENERGY',
          description: 'Estimula músculos faciales y activa colágeno para definición.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'MASAJE MANDIBULAR / MARCACIÓN MANDIBULAR',
          description: 'Técnica manual para realzar el contorno natural del rostro.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'MASAJE FACIAL RELAJANTE',
          description: 'Oxigena tejidos, reduce tensión y mejora el aspecto general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'MADEROTERAPIA FACIAL',
          description: 'Estimula circulación, drenaje y efecto lifting suave del rostro.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: null
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'SI BUSCAS MEJORAR LA CALIDAD VISIBLE DE TU PIEL',
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
      headline: 'BENEFICIOS DEL CUIDADO FACIAL EN DERMA.M',
      list: [
        {
          title: 'PIEL MÁS EQUILIBRADA',
          body: 'Apoyo para mejorar limpieza, textura y apariencia general.'
        },
        {
          title: 'PROTOCOLOS PERSONALIZADOS',
          body: 'Cada tratamiento se adapta a las necesidades de tu piel.'
        },
        {
          title: 'CUIDADO PROFESIONAL',
          body: 'Acompañamiento con productos seleccionados y aparatología estética.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'CADA PIEL REQUIERE UNA MIRADA PERSONALIZADA',
      body: 'Antes de recomendar un tratamiento, evaluamos tus objetivos, el estado visible de tu piel y el protocolo más adecuado para acompañarte con claridad y cuidado.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Escuchamos tus objetivos y observamos las necesidades de tu piel.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Definimos el protocolo facial más adecuado para tu caso.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos el tratamiento con productos y aparatología seleccionada.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te orientamos sobre cuidados posteriores y próximos pasos.'
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
      headline: 'EMPIEZA CON UN CUIDADO FACIAL PERSONALIZADO',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el tratamiento facial más adecuado para ti.',
      primaryCta: 'RESERVAR',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/faciales/cta.jpg'
    }
  },
  corporales: {
    slug: 'corporales',
    route: '/corporales',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Corporales', link: '/corporales' }
    ],
    hero: {
      eyebrow: 'TRATAMIENTOS CORPORALES',
      title: 'PROTOCOLOS PARA CUIDAR, MOLDEAR Y ACOMPAÑAR TU CUERPO',
      body: 'Tratamientos corporales enfocados en bienestar, recuperación y objetivos estéticos personalizados.',
      backgroundImage: '/assets/images/hubs/corporales/hero.jpg'
    },
    trustItems: [
      {
        title: 'EVALUACIÓN PERSONALIZADA',
        body: 'Tratamientos adaptados a tu cuerpo, proceso y objetivos.'
      },
      {
        title: 'PROTOCOLOS PROFESIONALES',
        body: 'Cuidado corporal con técnicas, productos y aparatología seleccionada.'
      },
      {
        title: 'ACOMPAÑAMIENTO SEGURO',
        body: 'Orientación profesional antes, durante y después del tratamiento.'
      }
    ],
    overview: {
      eyebrow: 'CORPORALES',
      headline: 'TRATAMIENTOS DISEÑADOS PARA ACOMPAÑAR TU CUERPO CON PRECISIÓN',
      body: 'En Derma.M trabajamos protocolos corporales personalizados para acompañar objetivos estéticos, bienestar físico, recuperación y cuidado integral del cuerpo.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: null
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'SI BUSCAS ACOMPAÑAR TU CUERPO CON CUIDADO PROFESIONAL',
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
      headline: 'BENEFICIOS DEL CUIDADO CORPORAL EN DERMA.M',
      list: [
        {
          title: 'ACOMPAÑAMIENTO PERSONALIZADO',
          body: 'Cada protocolo se adapta a tu cuerpo, etapa y objetivos.'
        },
        {
          title: 'CUIDADO CORPORAL PROFESIONAL',
          body: 'Trabajamos con técnicas y aparatología seleccionada para cada caso.'
        },
        {
          title: 'BIENESTAR Y RECUPERACIÓN',
          body: 'Apoyamos procesos corporales desde una mirada estética e integral.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'CADA CUERPO REQUIERE UN PLAN ADAPTADO',
      body: 'Antes de recomendar un tratamiento, evaluamos tus objetivos, tu proceso corporal y el protocolo más adecuado para acompañarte con seguridad, claridad y cuidado.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Escuchamos tus objetivos y entendemos tu proceso corporal.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Definimos el protocolo corporal más adecuado para tu caso.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos técnicas, productos o aparatología seleccionada según el objetivo.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te orientamos sobre cuidados posteriores y próximos pasos.'
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
      headline: 'EMPIEZA CON UN CUIDADO CORPORAL PERSONALIZADO',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el tratamiento corporal más adecuado para ti.',
      primaryCta: 'RESERVAR',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/corporales/cta.jpg'
    }
  }
,
  laserYLuz: {
    slug: 'laser-y-luz',
    route: '/laser-y-luz',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Láser y Luz', link: '/laser-y-luz' }
    ],
    hero: {
      eyebrow: 'LÁSER Y LUZ',
      title: 'TECNOLOGÍA ESTÉTICA PARA RENOVAR Y MEJORAR LA PIEL',
      body: 'Soluciones con aparatología avanzada para acompañar distintos objetivos faciales y corporales.',
      backgroundImage: '/assets/images/hubs/laser-y-luz/hero.jpg'
    },
    trustItems: [
      {
        title: 'EVALUACIÓN PERSONALIZADA',
        body: 'Orientamos cada protocolo según tu piel, objetivos y sensibilidad.'
      },
      {
        title: 'TECNOLOGÍA AVANZADA',
        body: 'Tratamientos con aparatología estética seleccionada para distintas necesidades.'
      },
      {
        title: 'CUIDADO PROFESIONAL',
        body: 'Acompañamiento seguro antes, durante y después del tratamiento.'
      }
    ],
    overview: {
      eyebrow: 'LÁSER Y LUZ',
      headline: 'TRATAMIENTOS CON TECNOLOGÍA PARA ACOMPAÑAR LA CALIDAD VISIBLE DE TU PIEL',
      body: 'En Derma.M trabajamos protocolos de láser y luz orientados a mejorar la apariencia de la piel, apoyar renovación, textura, manchas, depilación y otros objetivos estéticos personalizados.',
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
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: '/assets/images/treatments/laser-y-luz/depilacion-laser/hero.jpg'
        },
        {
          title: 'IPL',
          description: 'Luz pulsada intensa para apoyar tono, textura y apariencia de la piel.',
          benefits: [
            'Tono más uniforme',
            'Apoyo en manchas',
            'Renovación visible'
          ],
          ideal: 'Ideal si buscas mejorar la apariencia general de la piel.',
          to: '/laser-y-luz/ipl',
          cta: 'VER TRATAMIENTO',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: '/assets/images/treatments/laser-y-luz/ipl/hero.jpg'
        },
        {
          title: 'CO2 LÁSER',
          description: 'Tecnología fraccionada para renovación profunda de la piel.',
          benefits: [
            'Textura refinada',
            'Apoyo en cicatrices',
            'Renovación cutánea'
          ],
          ideal: 'Ideal si buscas mejorar textura, marcas o signos visibles de envejecimiento.',
          to: '/laser-y-luz/co2-laser',
          cta: 'VER TRATAMIENTO',
          disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.',
          image: '/assets/images/treatments/laser-y-luz/co2-laser/hero.jpg'
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'SI BUSCAS TECNOLOGÍA PARA ACOMPAÑAR CAMBIOS VISIBLES EN TU PIEL',
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
      headline: 'BENEFICIOS DE LÁSER Y LUZ EN DERMA.M',
      list: [
        {
          title: 'TECNOLOGÍA SELECCIONADA',
          body: 'Protocolos con aparatología estética adaptada a cada necesidad.'
        },
        {
          title: 'RESULTADOS PROGRESIVOS',
          body: 'Tratamientos diseñados para acompañar cambios visibles de forma gradual.'
        },
        {
          title: 'ACOMPAÑAMIENTO PROFESIONAL',
          body: 'Orientación antes y después de cada sesión para cuidar tu experiencia.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'LA TECNOLOGÍA DEBE APLICARSE CON CRITERIO',
      body: 'Antes de recomendar un protocolo de láser o luz, evaluamos tu piel, tus objetivos y las condiciones necesarias para elegir una opción adecuada y segura.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Evaluamos tu piel, tus objetivos y la zona a tratar.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Definimos el protocolo tecnológico más adecuado para tu caso.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos la sesión con aparatología seleccionada y cuidado profesional.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te orientamos sobre cuidados posteriores y próximas sesiones si aplica.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'GOOGLE REVIEWS',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      support: 'Conoce cómo nuestra atención profesional ha ayudado a cuidar la piel de nuestros pacientes.',
      list: [
        {
          quote: 'Tengo dos años asistiendo a DERMA y estoy muy feliz con los cambios que ha tenido mi piel. Son excelentes y muy profesionales.',
          author: 'CECY GARCIA'
        },
        {
          quote: 'Una exprencia muy buena, el tratamiento me hizo muy bien. Me explicaron sobre los beneficios y el seguimiento para tener una piel más saludable.',
          author: 'CELIDA SAAVEDRA'
        },
        {
          quote: 'Realmente estoy muy agradecida con DERMA.M especialmente con Mikaela y Nancy... Es un momento de relajación.',
          author: 'KARINA PÉREZ VAILLANT'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'DESCUBRE QUÉ TECNOLOGÍA ES ADECUADA PARA TU PIEL',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el protocolo de láser o luz más adecuado para tus objetivos.',
      primaryCta: 'RESERVAR',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/laser-y-luz/cta.jpg'
    }
  }
,
  dentalEstetico: {
    slug: 'dental-estetico',
    route: '/dental-estetico',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Dental Estético', link: '/dental-estetico' }
    ],
    hero: {
      eyebrow: 'DENTAL ESTÉTICO',
      title: 'CUIDADO ESTÉTICO PARA UNA SONRISA MÁS LUMINOSA',
      body: 'Tratamientos diseñados para apoyar la estética y el cuidado visible de tu sonrisa.',
      backgroundImage: '/assets/images/hubs/dental-estetico/hero.jpg'
    },
    trustItems: [
      {
        title: 'EVALUACIÓN PERSONALIZADA',
        body: 'Orientación según tus objetivos estéticos y necesidades visibles.'
      },
      {
        title: 'CUIDADO PROFESIONAL',
        body: 'Protocolos diseñados para acompañar la estética de tu sonrisa.'
      },
      {
        title: 'RESULTADOS NATURALES',
        body: 'Enfoque orientado a una apariencia limpia, luminosa y equilibrada.'
      }
    ],
    overview: {
      eyebrow: 'DENTAL ESTÉTICO',
      headline: 'TRATAMIENTOS PARA CUIDAR LA APARIENCIA VISIBLE DE TU SONRISA',
      body: 'En Derma.M acompañamos el cuidado dental estético con protocolos orientados a mejorar la apariencia visible de la sonrisa desde una experiencia profesional, clara y personalizada.',
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
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
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
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: '/assets/images/treatments/dental-estetico/limpieza-dental/hero.jpg',
          imagePosition: '74% center'
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'SI BUSCAS CUIDAR LA ESTÉTICA VISIBLE DE TU SONRISA',
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
      headline: 'BENEFICIOS DEL CUIDADO DENTAL ESTÉTICO EN DERMA.M',
      list: [
        {
          title: 'SONRISA MÁS LUMINOSA',
          body: 'Protocolos orientados a mejorar la apariencia visible de tu sonrisa.'
        },
        {
          title: 'CUIDADO PERSONALIZADO',
          body: 'Orientación según tus objetivos, necesidades y estado visible.'
        },
        {
          title: 'EXPERIENCIA PROFESIONAL',
          body: 'Atención clara, cuidadosa y enfocada en tu bienestar.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'UNA SONRISA CUIDADA TAMBIÉN ES PARTE DE TU BIENESTAR',
      body: 'Antes de recomendar un tratamiento dental estético, evaluamos tus objetivos visibles y el protocolo más adecuado para acompañarte con claridad y cuidado profesional.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Escuchamos tus objetivos y revisamos tus necesidades visibles.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Definimos el protocolo dental estético más adecuado para tu caso.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos el tratamiento con cuidado profesional y orientación clara.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te orientamos sobre cuidados posteriores y próximos pasos.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'GOOGLE REVIEWS',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      support: 'Conoce cómo nuestra atención profesional ha ayudado a cuidar la piel de nuestros pacientes.',
      list: [
        {
          quote: 'Excelente servicio, calidad en sus productos y amabilidad que encanta. En mi rostro he recobrado elasticidad y brillo.',
          author: 'KATHERINE BURGOS VALDEZ'
        },
        {
          quote: 'Súper profesional, muy amable y honesta. Me explicó cómo sería el proceso y siempre contestó mis preguntas.',
          author: 'KATHERINE BURGOS VALDEZ'
        },
        {
          quote: 'Me realicé un tratamiento facial para el acné. Nancy sabe lo que está haciendo y lo hace con cuidado.',
          author: 'MIRASOL FERNÁNDEZ'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'DESCUBRE CÓMO CUIDAR LA ESTÉTICA DE TU SONRISA',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el protocolo dental estético más adecuado para ti.',
      primaryCta: 'RESERVAR',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/dental-estetico/cta.jpg'
    }
  }
,
  ivTherapy: {
    slug: 'iv-therapy',
    route: '/iv-therapy',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'IV Therapy', link: '/iv-therapy' }
    ],
    hero: {
      eyebrow: 'IV THERAPY',
      title: 'BIENESTAR DESDE EL INTERIOR',
      body: 'Terapias orientadas a acompañar tu bienestar general desde un enfoque profesional y personalizado.',
      backgroundImage: '/assets/images/hubs/iv-therapy/hero.jpg'
    },
    trustItems: [
      {
        title: 'VALORACIÓN PERSONALIZADA',
        body: 'Orientación según tus objetivos de bienestar y necesidades individuales.'
      },
      {
        title: 'PROTOCOLOS SELECCIONADOS',
        body: 'Opciones diseñadas para acompañar hidratación, energía y bienestar general.'
      },
      {
        title: 'ACOMPAÑAMIENTO PROFESIONAL',
        body: 'Atención clara antes, durante y después de cada sesión.'
      }
    ],
    overview: {
      eyebrow: 'IV THERAPY',
      headline: 'TERAPIAS DISEÑADAS PARA ACOMPAÑAR TU BIENESTAR GENERAL',
      body: 'En Derma.M ofrecemos opciones de IV Therapy orientadas a apoyar hidratación, recuperación, energía y bienestar desde una experiencia profesional, cómoda y personalizada.',
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
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'GET-UP-AND-GO IV',
          description: 'Opción intravenosa diseñada para acompañar energía, hidratación y recuperación.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'IMMUNITY IV',
          description: 'Protocolo orientado a apoyar el bienestar inmunológico y la vitalidad general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'BRAINSTORM IV',
          description: 'Opción intravenosa enfocada en apoyar claridad, concentración y bienestar general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'ALLEVIATE IV',
          description: 'Protocolo diseñado para acompañar recuperación, confort y equilibrio general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'QUENCH IV',
          description: 'Opción enfocada en apoyar hidratación, reposición y sensación de bienestar.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'REBOOT IV',
          description: 'Protocolo orientado a recuperación, hidratación y revitalización general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'RECOVERY & PERFORMANCE IV',
          description: 'Opción diseñada para acompañar recuperación física, hidratación y rendimiento general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'SNOW BRIGHT IV',
          description: 'Protocolo orientado a apoyar bienestar, luminosidad y cuidado integral desde el interior.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'TIMELESS IV',
          description: 'Opción intravenosa enfocada en bienestar, antioxidantes y apoyo al cuidado integral.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        },
        {
          title: 'EL B-LEAN IV',
          description: 'Protocolo orientado a acompañar energía, metabolismo y bienestar general.',
          cta: 'CONSULTAR DISPONIBILIDAD',
          ctaTo: '/contacto',
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: null
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'SI BUSCAS ACOMPAÑAR TU BIENESTAR DESDE UNA EXPERIENCIA PERSONALIZADA',
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
      headline: 'BENEFICIOS DE IV THERAPY EN DERMA.M',
      list: [
        {
          title: 'HIDRATACIÓN Y BIENESTAR',
          body: 'Protocolos orientados a acompañar hidratación y sensación general de bienestar.'
        },
        {
          title: 'EXPERIENCIA PERSONALIZADA',
          body: 'Orientación según tus objetivos y necesidades individuales.'
        },
        {
          title: 'ATENCIÓN PROFESIONAL',
          body: 'Acompañamiento en un entorno cómodo, seguro y cuidado.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'EL BIENESTAR TAMBIÉN REQUIERE ORIENTACIÓN PROFESIONAL',
      body: 'Antes de recomendar una sesión de IV Therapy, escuchamos tus objetivos y revisamos tus necesidades para orientarte con claridad y cuidado.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Escuchamos tus objetivos de bienestar y tus necesidades actuales.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Te orientamos sobre el protocolo más adecuado para tu caso.'
        },
        {
          number: '03',
          title: 'SESIÓN',
          body: 'Realizamos la sesión en un entorno cómodo y cuidado.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te ofrecemos orientación posterior según tu experiencia y próximos pasos.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'GOOGLE REVIEWS',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      support: 'Conoce cómo nuestra atención profesional ha ayudado a cuidar la piel de nuestros pacientes.',
      list: [
        {
          quote: 'Excelente servicio, calidad en sus productos y amabilidad que encanta. En mi rostro he recobrado elasticidad y brillo.',
          author: 'KATHERINE BURGOS VALDEZ'
        },
        {
          quote: 'Súper profesional, muy amable y honesta. Me explicó cómo sería el proceso y siempre contestó mis preguntas.',
          author: 'KATHERINE BURGOS VALDEZ'
        },
        {
          quote: 'Me realicé un tratamiento facial para el acné. Nancy sabe lo que está haciendo y lo hace con cuidado.',
          author: 'MIRASOL FERNÁNDEZ'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'DESCUBRE SI IV THERAPY ES ADECUADO PARA TI',
      body: 'Agenda tu cita y recibe orientación profesional sobre opciones de bienestar adaptadas a tus objetivos.',
      primaryCta: 'RESERVAR',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/iv-therapy/cta.jpg'
    }
  }
,
  capilar: {
    slug: 'capilar',
    route: '/capilar',
    breadcrumb: [
      { label: 'Inicio', link: '/' },
      { label: 'Capilar', link: '/capilar' }
    ],
    hero: {
      eyebrow: 'CAPILAR',
      title: 'CUIDADO CAPILAR CON ENFOQUE PROFESIONAL',
      body: 'Soluciones enfocadas en acompañar la salud, apariencia y fortaleza del cabello.',
      backgroundImage: '/assets/images/hubs/capilar/hero.jpg'
    },
    trustItems: [
      {
        title: 'EVALUACIÓN PERSONALIZADA',
        body: 'Orientación según tus objetivos capilares y necesidades visibles.'
      },
      {
        title: 'CUIDADO PROFESIONAL',
        body: 'Protocolos enfocados en acompañar la salud y apariencia del cabello.'
      },
      {
        title: 'ACOMPAÑAMIENTO INTEGRAL',
        body: 'Atención clara antes, durante y después de cada tratamiento.'
      }
    ],
    overview: {
      eyebrow: 'CAPILAR',
      headline: 'TRATAMIENTOS PARA ACOMPAÑAR LA SALUD Y APARIENCIA DEL CABELLO',
      body: 'En Derma.M trabajamos el cuidado capilar desde una mirada profesional y personalizada, orientada a apoyar la apariencia, fortaleza y bienestar visible del cabello.',
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
          disclaimer: 'Requiere valoración profesional previa para garantizar tu seguridad y resultados.',
          image: '/assets/images/treatments/capilar/tratamiento-capilar/hero.jpg'
        }
      ]
    },
    whoFor: {
      eyebrow: 'PARA QUIÉN ES',
      headline: 'SI BUSCAS ACOMPAÑAR EL CUIDADO Y APARIENCIA DE TU CABELLO',
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
      headline: 'BENEFICIOS DEL CUIDADO CAPILAR EN DERMA.M',
      list: [
        {
          title: 'ORIENTACIÓN PERSONALIZADA',
          body: 'Evaluamos tus objetivos y necesidades visibles para recomendar el protocolo adecuado.'
        },
        {
          title: 'CUIDADO CAPILAR PROFESIONAL',
          body: 'Acompañamiento enfocado en salud, fortaleza y apariencia del cabello.'
        },
        {
          title: 'ENFOQUE INTEGRAL',
          body: 'Cuidamos el cabello como parte de tu bienestar y confianza personal.'
        }
      ]
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      headline: 'EL CUIDADO CAPILAR REQUIERE UNA MIRADA PERSONALIZADA',
      body: 'Antes de recomendar un tratamiento, evaluamos tus objetivos, la apariencia visible del cabello y el protocolo más adecuado para acompañarte con claridad y cuidado.'
    },
    process: {
      headline: 'CÓMO ES TU VISITA',
      steps: [
        {
          number: '01',
          title: 'VALORACIÓN',
          body: 'Escuchamos tus objetivos y revisamos tus necesidades capilares visibles.'
        },
        {
          number: '02',
          title: 'RECOMENDACIÓN',
          body: 'Definimos el protocolo capilar más adecuado para tu caso.'
        },
        {
          number: '03',
          title: 'TRATAMIENTO',
          body: 'Aplicamos el tratamiento con orientación profesional y cuidado personalizado.'
        },
        {
          number: '04',
          title: 'SEGUIMIENTO',
          body: 'Te orientamos sobre cuidados posteriores y próximos pasos.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'GOOGLE REVIEWS',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      support: 'Conoce cómo nuestra atención profesional ha ayudado a cuidar la piel de nuestros pacientes.',
      list: [
        {
          quote: 'Excelente servicio, calidad en sus productos y amabilidad que encanta. En mi rostro he recobrado elasticidad y brillo.',
          author: 'KATHERINE BURGOS VALDEZ'
        },
        {
          quote: 'Súper profesional, muy amable y honesta. Me explicó cómo sería el proceso y siempre contestó mis preguntas.',
          author: 'KATHERINE BURGOS VALDEZ'
        },
        {
          quote: 'Me realicé un tratamiento facial para el acné. Nancy sabe lo que está haciendo y lo hace con cuidado.',
          author: 'MIRASOL FERNÁNDEZ'
        }
      ]
    },
    cta: {
      eyebrow: 'AGENDA TU VALORACIÓN',
      headline: 'EMPIEZA CON UN CUIDADO CAPILAR PERSONALIZADO',
      body: 'Agenda tu cita y recibe orientación profesional para elegir el protocolo capilar más adecuado para tus objetivos.',
      primaryCta: 'RESERVAR',
      secondaryCta: 'WHATSAPP',
      disclaimer: 'La información presentada tiene fines informativos y no sustituye una evaluación profesional personalizada. Los resultados pueden variar según cada persona, tratamiento y condición individual.',
      backgroundImage: '/assets/images/hubs/capilar/cta.jpg'
    }
  }
};
