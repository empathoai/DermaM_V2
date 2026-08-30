import { categoryPages } from './categoryPages';

function getTreatmentAssetFolder(categoryKey) {
  if (categoryKey === 'laserYLuz') return 'laser-y-luz';
  if (categoryKey === 'dentalEstetico') return 'dental-estetico';
  return categoryKey;
}

// Dynamic helper to find base treatment info from categoryPages
function getBaseTreatment(categoryKey, slug) {
  const cat = categoryPages[categoryKey];
  if (!cat) return null;

  // Search in featured treatments
  let found = cat.featuredTreatments?.treatments?.find(t => {
    const routeParts = (t.to || t.link || '').split('/');
    const tSlug = routeParts[routeParts.length - 1];
    return tSlug === slug;
  });

  // Search in complementary if not found
  if (!found && cat.complementaryTreatments?.treatments) {
    found = cat.complementaryTreatments.treatments.find(t => {
      // Complementary treatments might not have a direct link, but we check by slug similarity or manual map
      const tSlug = (t.title || '').toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-');
      return tSlug.includes(slug) || slug.includes(tSlug);
    });
  }

  if (found) {
    return {
      title: found.title,
      description: found.description,
      metaTitle: found.metaTitle || null,
      metaDescription: found.metaDescription || null,
      benefits: found.benefits || [],
      ideal: found.ideal || '',
      image: found.image || `/assets/images/treatments/${getTreatmentAssetFolder(categoryKey)}/${slug}/hero.jpg`,
      imagePosition: found.imagePosition,
      route: found.to || found.link || `/${getTreatmentAssetFolder(categoryKey)}/${slug}`,
      disclaimer: found.disclaimer || 'Requiere valoración previa para garantizar tu seguridad y resultados.'
    };
  }

  // Pure fallback if not found in categoryPages
  return {
    title: slug.replace(/-/g, ' ').toUpperCase(),
    description: 'Protocolo de cuidado estético profesional integral en Derma.M.',
    benefits: ['Cuidado profesional', 'Enfoque personalizado', 'Bienestar visible'],
    ideal: 'Ideal si buscas un cuidado personalizado y de alta calidad.',
    image: `/assets/images/treatments/${getTreatmentAssetFolder(categoryKey)}/${slug}/hero.jpg`,
    route: `/${getTreatmentAssetFolder(categoryKey)}/${slug}`,
    disclaimer: 'Requiere valoración previa para garantizar tu seguridad y resultados.'
  };
}

// Category labels for UI presentation
const categoryLabels = {
  faciales: 'FACIALES',
  corporales: 'CORPORALES',
  laserYLuz: 'LÁSER Y LUZ',
  dentalEstetico: 'DENTAL ESTÉTICO',
  capilar: 'CAPILAR'
};

// Custom clinical details for each of the 26 treatments
const customDetails = {
  // --- FACIALES ---
  hidrofacial: {
    contentUpdated: '2026-08-27',
    heroDescription: 'Mejora la luminosidad, la textura y la hidratación de la piel limpiando los poros e infundiendo sueros hidratantes en una sola sesión.',
    whatIsHeadline: 'Hidrofacial: qué es y para qué sirve',
    whatIsBody: 'El hidrofacial es un tratamiento estético facial que limpia los poros, extrae impurezas e infunde sueros hidratantes en una sola sesión, mediante un sistema de succión al vacío suave. Puede ayudar a mejorar la luminosidad, la textura y el nivel de hidratación de la piel. En Derma.M, medical spa en West Palm Beach, se realiza en cabina y requiere una valoración previa para adaptar los sueros a cada tipo de piel.',
    problemContextHeadline: 'LA CONGESTIÓN DIARIA DISMINUYE LA LUMINOSIDAD DE TU ROSTRO',
    problemContextBody: 'El sebo acumulado, la exposición solar continua y la polución crean una película que obstruye los folículos y ralentiza el proceso de renovación de la piel. Esto da como resultado un rostro apagado, deshidratación profunda y una textura áspera que no responde a la rutina habitual de cuidado en casa.',
    duration: '45 - 60 min',
    application: 'Cabina / Tópica',
    anesthesia: 'No requiere',
    resultado: 'Revitalización y humectación inmediatas',
    whoForList: [
      'Personas con poros congestionados o acumulación de impurezas visibles.',
      'Quienes desean un brillo natural y una hidratación profunda inmediata.',
      'Todo tipo de piel, incluyendo aquellas propensas a la sensibilidad y rojeces.'
    ],
    safetyPrecautions: [
      'No se aplica sobre piel con heridas abiertas o quemaduras solares recientes.',
      'Evitar exfoliantes químicos fuertes en casa durante las primeras 72 horas.',
      'Se recomienda la aplicación diaria y protector solar constante.'
    ],
    faq: [
      {
        question: '¿La extracción del Hidrofacial deja marcas rojas?',
        answer: 'No. A diferencia de las limpiezas tradicionales agresivas, el Hidrofacial utiliza una tecnología de succión de vacío suave combinada con infusión líquida que ablanda los poros, facilitando una extracción suave y muy tolerable, y previniendo la aparición de marcas o rojeces severas.'
      },
      {
        question: '¿Se nota la piel seca o descamada después de la sesión?',
        answer: 'Al contrario. Durante la sesión infundimos sueros hidratantes cargados de ácido hialurónico y antioxidantes, por lo que saldrás de la cabina con una piel profundamente humectada, fresca y con un brillo natural inmediato.'
      },
      {
        question: '¿Cuántas sesiones de Hidrofacial se recomiendan?',
        answer: 'Para mantener una piel limpia y equilibrada, recomendamos realizar una sesión cada 28 a 30 días, lo que acompaña el ciclo de renovación natural de tus células cutáneas.'
      },
      {
        question: '¿Es seguro para pieles muy sensibles?',
        answer: 'Sí, es un protocolo sumamente seguro. Nuestro especialista calibra la potencia de la succión y selecciona los sueros nutritivos adecuados para reconfortar incluso las pieles más delicadas.'
      },
      {
        question: '¿Puedo maquillarme inmediatamente después de la sesión?',
        answer: 'Sugerimos esperar al menos de 4 a 6 horas antes de aplicar maquillaje pesado, permitiendo que la piel absorba por completo los principios activos y sueros aplicados durante el facial.'
      }
    ]
  },
  microneedling: {
    contentUpdated: '2026-08-27',
    heroDescription: 'Mejora la textura, la firmeza y la apariencia de marcas y poros dilatados estimulando la renovación natural de la piel con microagujas.',
    whatIsHeadline: 'Microneedling con Dermapen: qué es y para qué sirve',
    whatIsBody: 'El microneedling con Dermapen es un tratamiento estético facial que crea micro-canales controlados en la piel con agujas ultrafinas para estimular su renovación natural. Puede ayudar a mejorar la textura, la firmeza y la apariencia de marcas y poros dilatados. En Derma.M, medical spa en West Palm Beach, se realiza por sesiones, con valoración médica previa.',
    problemContextHeadline: 'LA PERDIDA PROGRESIVA DE SOPORTE ESTRUCTURAL DE LA PIEL',
    problemContextBody: 'Con los años y el daño ambiental, la producción interna de colágeno disminuye, abriendo paso a poros dilatados, líneas finas visibles y marcas resistentes de acné. El microneedling despierta de forma mecánica la capacidad de renovación de la estructura cutánea para restaurar la firmeza y suavizar imperfecciones de relieve.',
    duration: '45 - 60 min',
    application: 'Cabina / Facial',
    anesthesia: 'Anestesia tópica',
    resultado: 'Atuenuación de líneas y textura de forma progresiva',
    whoForList: [
      'Personas que buscan suavizar el relieve de marcas persistentes y líneas finas.',
      'Quienes desean mejorar la apariencia de poros dilatados y devolver firmeza al rostro.',
      'Búsqueda de una renovación cutánea progresiva mediante un protocolo profesional de alta precisión vertical.'
    ],
    safetyPrecautions: [
      'No aplicable directamente sobre brotes de acné activo o inflamado.',
      'Evitar el uso de ingredientes activos fuertes (retinol, ácidos) durante las primeras 48 horas.',
      'No recomendado en caso de historial de cicatrización queloide o lesiones abiertas.',
      'Requiere posponer el maquillaje convencional durante las primeras 24 horas.'
    ],
    faq: [
      {
        question: '¿El microneedling con Dermapen duele mucho?',
        answer: 'Para garantizar tu comodidad, aplicamos un gel calmante de alta potencia antes de la sesión. Los micro-pinchazos se realizan de forma muy suave y rápida, haciéndolo sumamente tolerable.'
      },
      {
        question: '¿Cuántos días dura la cara roja después del Dermapen?',
        answer: 'El enrojecimiento es temporal y de intensidad leve a moderada, similar a una ligera exposición solar. Suele desaparecer por completo entre las 24 y 48 horas posteriores, permitiendo una rápida reincorporación a tus actividades habituales.'
      },
      {
        question: '¿Cuándo se empiezan a notar los resultados en las marcas de la piel?',
        answer: 'Aunque sentirás la piel más tersa desde la primera semana, el proceso de formación de colágeno natural toma aproximadamente 90 días en consolidarse. Los mejores resultados en textura y marcas se aprecian tras un ciclo de 4 a 6 sesiones.'
      },
      {
        question: '¿Cuántas sesiones se necesitan para el tratamiento?',
        answer: 'Se recomienda un ciclo inicial de 4 a 6 sesiones, espaciadas cada 30 días para respetar el ciclo celular de regeneración de la piel.'
      },
      {
        question: '¿Es seguro para pieles con brotes activos?',
        answer: 'Evitamos pasar los aplicadores de micro-infusión sobre brotes activos e inflamados para prevenir la propagación de imperfecciones, enfocándonos en las zonas sanas del rostro.'
      }
    ]
  },
  'hifu-facial': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Favorece la firmeza y la definición del óvalo facial y el cuello llevando ultrasonido focalizado a capas profundas de la piel, sin cirugía.',
    whatIsHeadline: 'HIFU facial: qué es y para qué sirve',
    whatIsBody: 'El HIFU facial es un tratamiento estético que emplea ultrasonido focalizado de alta intensidad para llevar calor controlado a las capas profundas de la piel del rostro y estimular la producción natural de colágeno. Está diseñado para favorecer la firmeza y la definición del óvalo facial y el cuello de forma progresiva, sin cirugía. Se realiza en Derma.M, medical spa en West Palm Beach, tras una valoración que define la energía adecuada para cada caso.',
    problemContextHeadline: 'LA FLACIDEZ CUTÁNEA EN EL ÓVALO FACIAL Y CUELLO',
    problemContextBody: 'El envejecimiento de la piel debilita las fibras elásticas que sostienen las facciones del rostro, provocando descolgamiento visible en la línea mandibular, mejillas y cuello. HIFU actúa en zonas profundas sin dañar la superficie externa de la piel, ideal para quienes buscan firmeza sin pasar por procesos quirúrgicos.',
    duration: '60 - 90 min',
    application: 'Cabina / Ultrasonido',
    anesthesia: 'Evaluación personalizada',
    resultado: 'Tensión cutánea y definición progresiva en 2 a 3 meses',
    whoForList: [
      'Personas con flacidez leve a moderada en el contorno del rostro, papada y cuello.',
      'Quienes desean un efecto de soporte y definición de contornos con reincorporación inmediata a tu rutina.',
      'Quienes buscan estimular la síntesis natural de colágeno a largo plazo.'
    ],
    safetyPrecautions: [
      'No recomendado en caso de hilos tensores metálicos o implantes metálicos activos en la zona.',
      'Evitar tratamientos que generen calor intenso en el rostro por una semana.',
      'No aplicar directamente sobre zonas con rellenos inyectables recientes (esperar 4 semanas).'
    ],
    faq: [
      {
        question: '¿El HIFU facial duele o causa quemaduras?',
        answer: 'Durante las descargas de ultrasonido es normal sentir un pinchazo caliente profundo. Nuestro especialista calibra la energía de forma personalizada y mantiene comunicación constante contigo para garantizar una sesión cómoda y libre de lesiones.'
      },
      {
        question: '¿Cuándo se nota el efecto de soporte y firmeza?',
        answer: 'Notarás una ligera tensión y firmeza al instante por contracción térmica. Sin embargo, los resultados de elevación y definición estables se aprecian de forma progresiva a partir de los 2 a 3 meses, a medida que se genera colágeno nuevo.'
      },
      {
        question: '¿Cuántas sesiones de HIFU facial se recomiendan al año?',
        answer: 'Por lo general, se realiza 1 o 2 sesiones al año para mantener y prolongar el efecto de soporte y firmeza de la piel facial.'
      },
      {
        question: '¿Reemplaza este tratamiento una cirugía de estiramiento?',
        answer: 'No. El HIFU facial es una alternativa no invasiva excelente para flacidez leve a moderada. Si existe un descolgamiento muscular severo, los resultados serán de soporte preventivo pero no sustituyen a un estiramiento quirúrgico.'
      },
      {
        question: '¿Puedo volver a mi rutina diaria inmediatamente?',
        answer: 'Sí. El HIFU facial no daña la epidermis externa, por lo que no requiere reposo; puedes retomar tu rutina el mismo día, manteniendo hidratación y protección solar.'
      }
    ]
  },
  'peel-coreano': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Aporta luminosidad y un aspecto más terso combinando exfoliación enzimática suave e infusión de activos botánicos que retiran las células muertas.',
    whatIsHeadline: 'Peel coreano: qué es y para qué sirve',
    whatIsBody: 'El peel coreano es un tratamiento estético facial de renovación superficial que combina exfoliación enzimática e infusión de activos botánicos para retirar células muertas de forma suave y cuidar la barrera de hidratación. Suele usarse para aportar luminosidad y un aspecto más terso, el conocido efecto "glass skin". En nuestro medical spa de West Palm Beach, Derma.M, se ofrece durante todo el año como protocolo de cabina, siempre con valoración previa.',
    problemContextHeadline: 'LA OPACIDAD FACIAL POR ACUMULACIÓN DE IMPUREZAS',
    problemContextBody: 'Muchos exfoliantes convencionales dañan el manto hidrolipídico natural, generando enrojecimiento y descamación molesta. El tratamiento de piel coreano ofrece una renovación controlada para devolver el aspecto fresco y el característico efecto de "piel de vidrio" (glass skin) sin agresión y con una recuperación inmediata.',
    duration: '45 - 60 min',
    application: 'Cabina / Tópico profesional',
    anesthesia: 'No requiere',
    resultado: 'Efecto luminoso inmediato',
    whoForList: [
      'Personas que buscan un efecto de piel radiante y translúcida (glass skin).',
      'Quienes desean una renovación superficial libre de descamaciones agresivas.',
      'Pieles opacas, deshidratadas o que deseen prepararse para un evento especial.'
    ],
    safetyPrecautions: [
      'Evitar la exposición solar directa durante las siguientes 48 horas.',
      'No aplicar ácidos (glicólico, salicílico) en casa por 3 días.',
      'Es indispensable el uso de protector solar de amplio espectro.'
    ],
    faq: [
      {
        question: '¿El peel coreano deja la piel descamada u opaca?',
        answer: 'No. A diferencia de los peelings químicos fuertes, el peel coreano utiliza enzimas y botánicos suaves que remueven células muertas sin provocar descamación visible, dejando tu rostro suave e hidratado de forma inmediata.'
      },
      {
        question: '¿Qué es el efecto piel de vidrio (glass skin)?',
        answer: 'Es un concepto de belleza coreana que describe un cutis tan limpio, terso y humectado que tiene una apariencia traslúcida y luminosa similar al vidrio, libre de poros congestionados.'
      },
      {
        question: '¿Duele o arde la piel durante la aplicación?',
        answer: 'No. El tratamiento es sumamente reconfortante. Sentirás una ligera sensación de frescura y un micro-masaje suave durante la aplicación de los activos botánicos.'
      },
      {
        question: '¿Con qué frecuencia se realiza el peel coreano?',
        answer: 'Recomendamos programar una sesión cada 15 a 30 días, dependiendo del tipo de piel y de tus metas estéticas de luminosidad.'
      },
      {
        question: '¿Se puede aplicar este peeling en verano?',
        answer: 'Sí, es totalmente seguro. Al no contener ácidos fotosensibilizantes fuertes, se puede realizar durante todo el año, siempre aplicando protector solar como cuidado general diario.'
      }
    ],
    beforeAfter: {
      items: [{
        before: '/assets/images/treatments/faciales/peel-coreano/peel-coreano-antes.jpg',
        after: '/assets/images/treatments/faciales/peel-coreano/peel-coreano-despues.jpg',
        beforeAlt: 'Rostro con enrojecimiento, textura irregular y aspecto opaco antes de un peel coreano en Derma.M, West Palm Beach',
        afterAlt: 'Rostro con piel más uniforme, luminosa e hidratada tras un peel coreano en Derma.M, West Palm Beach'
      }]
    }
  },
  'radiofrecuencia-facial': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Suaviza líneas de expresión y mejora la sensación de firmeza en mejillas, óvalo y cuello generando calor controlado con radiofrecuencia.',
    whatIsHeadline: 'Radiofrecuencia facial: qué es y para qué sirve',
    whatIsBody: 'La radiofrecuencia facial es un tratamiento estético que aplica ondas electromagnéticas para generar calor controlado en la piel, contraer el colágeno existente y favorecer la formación de fibras nuevas. Puede ayudar a suavizar líneas de expresión y a mejorar la sensación de firmeza en mejillas, óvalo y cuello. En Derma.M, medical spa en West Palm Beach, se trabaja en ciclos de sesiones definidos en la valoración inicial.',
    problemContextHeadline: 'CANSANCIO VISIBLE Y PÉRDIDA DE TONO EPIDÉRMICO',
    problemContextBody: 'Con el tiempo, la pérdida de firmeza se hace evidente en zonas como las mejillas, el óvalo facial y el cuello debido a la disminución del colágeno interno. El calor controlado reactiva los procesos tensores naturales, devolviendo turgencia y elasticidad a los tejidos.',
    duration: '40 - 50 min',
    application: 'Cabina / Electromagnética',
    anesthesia: 'No requiere',
    resultado: 'Atuenuación de líneas y sensación turgente',
    whoForList: [
      'Personas que notan pérdida de elasticidad y turgencia en el rostro y cuello.',
      'Quienes buscan suavizar líneas finas de expresión de forma progresiva.',
      'Quienes prefieren un tratamiento relajante con sensación de calor agradable.'
    ],
    safetyPrecautions: [
      'No recomendado si tienes marcapasos o dispositivos metálicos activos en la zona.',
      'Evitar en caso de inflamaciones cutáneas graves o quemaduras solares activas.',
      'No apto durante procesos infecciosos sistémicos.'
    ],
    faq: [
      {
        question: '¿Qué se siente durante la sesión de radiofrecuencia?',
        answer: 'Sentirás un calor profundo muy agradable y relajante en las zonas tratadas, similar a un masaje con piedras calientes, sin ardor ni quemaduras.'
      },
      {
        question: '¿Cuántas sesiones se necesitan para ver la piel más firme?',
        answer: 'Para resultados notables y acumulativos, recomendamos realizar un ciclo de 6 a 8 sesiones, programadas una vez por semana.'
      },
      {
        question: '¿La radiofrecuencia facial causa flacidez si se suspende?',
        answer: 'No, al contrario. El calor estimula la producción de colágeno real en tu dermis. Si suspendes el tratamiento, tu piel conservará la firmeza ganada por meses antes de retomar su proceso de envejecimiento natural.'
      },
      {
        question: '¿Es seguro el tratamiento si tengo implantes dentales?',
        answer: 'Sí, es muy seguro. Los implantes de titanio no se ven afectados por las ondas electromagnéticas superficiales. En caso de sentir una vibración de calor inusual en las encías, nuestro especialista adaptará la potencia.'
      },
      {
        question: '¿Cuánto dura el efecto de tensión facial?',
        answer: 'Los resultados iniciales se aprecian al terminar la sesión por contracción inmediata. Al completar el ciclo recomendado, los efectos tensores pueden perdurar entre 6 y 12 meses según el cuidado de la piel.'
      }
    ]
  },
  'oxigenoterapia-facial': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Envuelve el rostro en una cápsula rica en oxígeno de alta pureza y una fina bruma de activos para hidratar la barrera cutánea y devolver frescura y luminosidad de forma inmediata.',
    whatIsHeadline: 'Oxigenoterapia facial: qué es y para qué sirve',
    whatIsBody: 'La oxigenoterapia facial es un tratamiento estético en el que el rostro se coloca bajo una cápsula transparente que se llena de oxígeno de alta pureza junto con una fina bruma de activos —vitaminas, péptidos y ácido hialurónico—. La piel queda envuelta en un microclima húmedo y rico en oxígeno, sin chorro a presión ni exfoliación física, y la sesión suele combinarse con luz LED. Está pensada para hidratar la barrera cutánea y devolver frescura y luminosidad de forma inmediata. En Derma.M, medical spa en West Palm Beach, se realiza en cabina y con una valoración previa, sobre todo en pieles sensibles.',
    problemContextHeadline: 'PIEL DESHIDRATADA Y ESTRESADA POR FACTORES URBANOS',
    problemContextBody: 'El aire acondicionado, la falta de descanso y los hábitos cotidianos saturan y apagan las células de la piel, haciéndola lucir opaca y deshidratada. Este protocolo calma el rostro sensible, aporta oxigenación superficial profunda y restaura un aspecto descansado y fresco al instante.',
    duration: '45 min',
    application: 'Cabina / Cápsula de oxígeno',
    anesthesia: 'No requiere',
    resultado: 'Suavidad y frescura tras finalizar el tratamiento',
    whoForList: [
      'Pieles apagadas, estresadas o visiblemente deshidratadas.',
      'Ideal como preparación previa a eventos especiales para un aspecto luminoso inmediato.',
      'Pieles sensibles que buscan una hidratación reconfortante sin exfoliación física.'
    ],
    safetyPrecautions: [
      'No recomendado en caso de heridas abiertas o infecciones activas en el rostro.',
      'Evitar la exposición directa a fuentes de calor intenso el día de la sesión.'
    ],
    faq: [
      {
        question: '¿Qué es la bruma de oxígeno y qué se siente?',
        answer: 'El rostro se coloca bajo una cápsula que se llena de oxígeno de alta pureza y una fina bruma de sueros; no es un chorro a presión. Se siente como un ambiente fresco y húmedo que envuelve la cara, muy relajante y cómodo.'
      },
      {
        question: '¿Es adecuado para pieles deshidratadas u opacas?',
        answer: 'Sí, es el protocolo ideal. Humecta de forma inmediata las capas superficiales de la piel del rostro, aportando luminosidad y calmando la irritación por resequedad.'
      },
      {
        question: '¿Sirve para antes de un evento especial?',
        answer: 'Totalmente. Al rellenar e hidratar las líneas de expresión de forma instantánea y dar luminosidad, es el tratamiento favorito para lucir un rostro descansado antes de bodas o sesiones de fotos.'
      },
      {
        question: '¿Tiene algún tiempo de recuperación?',
        answer: 'No requiere reposo. No causa descamación ni enrojecimiento, así que puedes maquillarte o retomar tus actividades habituales el mismo día.'
      },
      {
        question: '¿Con qué frecuencia se aconseja realizarlo?',
        answer: 'Para mantener la piel hidratada frente al aire acondicionado y la polución, se recomienda una sesión cada 15 a 21 días.'
      }
    ],
    beforeAfter: {
      eyebrow: 'EL PROCEDIMIENTO',
      headline: 'ASÍ ES UNA SESIÓN DE OXIGENOTERAPIA FACIAL',
      items: [{
        before: '/assets/images/treatments/faciales/oxigenoterapia-facial/oxigenoterapia-facial-procedimiento.mp4',
        after: '/assets/images/treatments/faciales/oxigenoterapia-facial/oxigenoterapia-facial-procedimiento-detalle.jpg',
        beforeAlt: 'Sesión de oxigenoterapia facial en Derma.M, West Palm Beach: rostro dentro de una cápsula donde se libera oxígeno en forma de vapor, con panel de luz LED y protección ocular',
        afterAlt: 'Primer plano del panel de luz LED durante una sesión de oxigenoterapia facial en cápsula en Derma.M, West Palm Beach'
      }],
      beforeLabel: 'EN CABINA',
      afterLabel: 'EQUIPO',
      disclaimer: 'Contenido de referencia del procedimiento con fines informativos. No representa un resultado garantizado; los efectos varían según cada persona, la piel y el protocolo aplicado.'
    }
  },
  'rejuvenecimiento-facial': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Favorece la elasticidad, unifica el tono y suaviza la textura y las líneas finas combinando bioestimulación de tejidos y aparatología avanzada.',
    whatIsHeadline: 'Rejuvenecimiento facial: qué es y para qué sirve',
    whatIsBody: 'El rejuvenecimiento facial en Derma.M es un protocolo estético personalizado que combina varias técnicas —bioestimulación de tejidos y aparatología avanzada— para mejorar de forma global la calidad de la piel del rostro. Busca favorecer la elasticidad, unificar el tono y suavizar la textura y las líneas finas. En Derma.M, medical spa en West Palm Beach, se define y se aplica a partir de una valoración profesional previa.',
    problemContextHeadline: 'SIGNOS GLOBALES DE ENVEJECIMIENTO CRÓNICO Y SOLAR',
    problemContextBody: 'La combinación de fotoenvejecimiento y desgaste genético no afecta solo una zona del rostro, sino que se manifiesta en flacidez media, líneas finas extendidas y pérdida generalizada del brillo. Un enfoque integrado permite abordar múltiples necesidades simultáneamente para un aspecto armónico y muy natural.',
    duration: '60 - 75 min',
    application: 'Cabina / Enfoque multi-técnico',
    anesthesia: 'Según protocolo elegido',
    resultado: 'Mejora progresiva de la calidad total de la piel',
    whoForList: [
      'Personas con signos globales de cansancio y envejecimiento solar o cronológico.',
      'Quienes buscan una mejora integral de la textura, tono y firmeza de la piel.',
      'Quienes desean un protocolo personalizado adaptado a múltiples necesidades faciales.'
    ],
    safetyPrecautions: [
      'Sujeto a valoración obligatoria según las tecnologías combinadas.',
      'Evitar el uso de retinoides u otros ingredientes de descamación 3 días antes.',
      'Es indispensable el uso de protector solar SPF 30+ diario en casa.'
    ],
    faq: [
      {
        question: '¿En qué consiste el protocolo de rejuvenecimiento integral?',
        answer: 'Es una combinación a medida diseñada por nuestro especialista, que puede integrar exfoliación, radiofrecuencia tensora e infusión de principios activos antioxidantes según el estado de tu piel.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para suavizar líneas de expresión?',
        answer: 'Recomendamos un ciclo de 4 a 6 sesiones, programadas cada 21 a 30 días, para dar tiempo a la renovación profunda de los tejidos.'
      },
      {
        question: '¿Los resultados son inmediatos o progresivos?',
        answer: 'Notarás frescura y luminosidad el mismo día. Sin embargo, la mejora estructural en firmeza y textura fina es progresiva y se consolida a lo largo de las semanas.'
      },
      {
        question: '¿Es seguro para todo tipo de piel (fototipos)?',
        answer: 'Sí. Diseñamos el protocolo seleccionando los activos y temperaturas aptas para tu color y sensibilidad de piel, eliminando riesgos de hiperpigmentación.'
      },
      {
        question: '¿Qué cuidados diarios debo mantener en casa?',
        answer: 'Es fundamental aplicar una hidratación abundante recomendada por tu especialista y usar protector solar de amplio espectro SPF 30+ todos los días.'
      }
    ]
  },
  'tratamiento-acne': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Ayuda a controlar el exceso de grasa, calmar el aspecto inflamado y prevenir marcas con limpieza profunda, activos seborreguladores y luz estimulante.',
    whatIsHeadline: 'Tratamiento de acné: en qué consiste y para quién es',
    whatIsBody: 'El tratamiento de acné en Derma.M es un protocolo estético de higiene y equilibrio para pieles con brotes frecuentes: combina limpieza profunda de los poros, activos seborreguladores y luz estimulante. Puede ayudar a controlar el exceso de grasa, calmar el aspecto inflamado y prevenir marcas. Se realiza por sesiones en Derma.M, medical spa en West Palm Beach, y parte de una valoración previa; no sustituye el tratamiento médico del acné.',
    problemContextHeadline: 'EL CICLO INFLAMATORIO Y CONGESTIÓN SEBÁCEA',
    problemContextBody: 'La sobreproducción de grasa natural, unida a la acumulación de células muertas en la entrada del poro, crea el entorno propicio para brotes recurrentes e inflamaciones cutáneas incómodas. Tratar la piel con delicadeza pero con gran precisión ayuda a despejar impurezas, controlar el brillo graso y restaurar la claridad cutánea.',
    duration: '60 min',
    application: 'Cabina / Purificación',
    anesthesia: 'No requiere',
    resultado: 'Reducción de imperfecciones y piel equilibrada',
    whoForList: [
      'Personas con imperfecciones recurrentes, poros congestionados y brillo graso visible.',
      'Quienes buscan calmar la apariencia enrojecida e inflamada de su cutis.',
      'Pieles jóvenes y adolescentes que deseen establecer una higiene cutánea correcta.'
    ],
    safetyPrecautions: [
      'No se realizan extracciones sobre lesiones severamente inflamadas o infectadas.',
      'Evitar manipular la piel o pellizcar brotes en casa para prevenir marcas.',
      'Suspender el uso de exfoliantes abrasivos caseros tras el protocolo.'
    ],
    faq: [
      {
        question: '¿La limpieza de acné me va a dejar más brotes?',
        answer: 'No. Nuestro protocolo equilibra la producción de grasa natural y desinfecta los folículos congestionados. Es común que la piel se desinflame notablemente tras la primera sesión.'
      },
      {
        question: '¿Duele la extracción de los poros congestionados?',
        answer: 'Se puede sentir una molestia leve durante la extracción manual. Sin embargo, aplicamos previamente técnicas de ablandamiento para que la sesión sea sumamente suave y tolerable.'
      },
      {
        question: '¿Cuántas sesiones necesito para ver la piel limpia?',
        answer: 'Recomendamos un ciclo inicial de 4 a 6 sesiones, espaciadas cada 15 a 21 días, para controlar los brotes y estabilizar la producción de sebo.'
      },
      {
        question: '¿Elimina este tratamiento las cicatrices viejas de acné?',
        answer: 'Este protocolo está diseñado para equilibrar la piel y prevenir nuevos brotes. Para atenuar marcas y cicatrices profundas consolidadas, se programan sesiones posteriores de microneedling o láser una vez que los brotes cedan.'
      },
      {
        question: '¿Es seguro para adolescentes (teenagers)?',
        answer: 'Sí. Es un servicio altamente recomendado para enseñarles hábitos de higiene facial correctos y equilibrar su piel joven de forma segura.'
      }
    ],
    beforeAfter: {
      items: [{
        before: '/assets/images/treatments/faciales/tratamiento-acne/tratamiento-acne-antes.jpg',
        after: '/assets/images/treatments/faciales/tratamiento-acne/tratamiento-acne-despues.jpg',
        beforeAlt: 'Rostro con brotes de acné, poros congestionados y brillo graso antes del tratamiento de acné en Derma.M, West Palm Beach',
        afterAlt: 'Rostro con piel más equilibrada, menos imperfecciones y aspecto calmado tras el tratamiento de acné en Derma.M, West Palm Beach'
      }]
    }
  },
  'manchas-cicatrices': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Atenúa la apariencia de manchas solares y suaviza la textura de marcas superficiales combinando exfoliación, activos que unifican el tono y estimulación del relieve.',
    whatIsHeadline: 'Tratamiento de manchas y cicatrices: qué es y cómo funciona',
    whatIsBody: 'El tratamiento de manchas y cicatrices es un protocolo estético facial que combina exfoliación suave, activos que unifican el tono y técnicas de estimulación del relieve cutáneo. Su objetivo es atenuar la apariencia de las manchas solares y suavizar la textura de marcas superficiales para lograr un rostro más uniforme. En Derma.M, medical spa en West Palm Beach, se planifica por sesiones tras una valoración y exige fotoprotección estricta durante todo el ciclo.',
    problemContextHeadline: 'DISCROMÍAS Y TEXTURA CRATERIFORME EN LA PIEL',
    problemContextBody: 'Las irregularidades debido al sol (manchas) o las marcas permanentes tras imperfecciones alteran la refracción de luz sobre la cara, dando un aspecto irregular o cansado. Mediante una estimulación renovadora puntual, apoyamos la renovación controlada y la uniformización gradual de la piel afectada.',
    duration: '50 - 60 min',
    application: 'Cabina / Focalizado',
    anesthesia: 'Según protocolo sugerido',
    resultado: 'Tono visiblemente más homogéneo y relieve suavizado',
    whoForList: [
      'Personas con hiperpigmentaciones solares o tono irregular en el rostro.',
      'Quienes desean suavizar la textura de marcas superficiales dejadas por imperfecciones.',
      'Quienes buscan devolver luminosidad y claridad al cutis de forma gradual.'
    ],
    safetyPrecautions: [
      'Uso obligatorio de protector solar SPF 30+ cada 4 horas tras la sesión.',
      'Evitar la exposición directa al sol o cámaras de bronceado durante el ciclo.',
      'Suspender el uso de ácidos fuertes en casa 3 días antes y después.'
    ],
    faq: [
      {
        question: '¿El peeling para manchas oscurece la piel al principio?',
        answer: 'No, si se siguen las indicaciones de fotoprotección. Para evitar manchas secundarias, utilizamos activos despigmentantes seguros de liberación controlada que protegen la barrera de tu piel.'
      },
      {
        question: '¿Se pueden eliminar las manchas de sol por completo?',
        answer: 'No por completo. Se logra una atenuación y un aclarado visibles y significativos, que unifican el tono del rostro. Para sostener el resultado, es obligatorio evitar el sol directo y usar bloqueador.'
      },
      {
        question: '¿Este tratamiento sirve para cicatrices de acné profundas?',
        answer: 'Sí, ayuda a suavizar los bordes y mejorar el relieve irregular de la piel. Dependiendo de la profundidad de la cicatriz, se puede combinar con microneedling.'
      },
      {
        question: '¿Cuántas sesiones se aconseja programar?',
        answer: 'Se recomienda un ciclo de 4 a 6 sesiones, espaciadas cada 21 a 30 días para permitir la renovación correcta de la capa superficial.'
      },
      {
        question: '¿Puedo tomar sol durante el tratamiento?',
        answer: 'No. La exposición solar directa sobre el área tratada está totalmente desaconsejada. Debes aplicar protector solar SPF 30 o superior cada 4 horas.'
      }
    ],
    beforeAfter: {
      items: [
        {
          before: '/assets/images/treatments/faciales/manchas-cicatrices/manchas-cicatrices-antes-1.jpg',
          after: '/assets/images/treatments/faciales/manchas-cicatrices/manchas-cicatrices-despues-1.jpg',
          beforeAlt: 'Mejilla con manchas solares e hiperpigmentación de tono irregular antes del tratamiento de manchas y cicatrices en Derma.M, West Palm Beach',
          afterAlt: 'Mejilla con tono más homogéneo y manchas atenuadas tras el tratamiento de manchas y cicatrices en Derma.M, West Palm Beach'
        },
        {
          before: '/assets/images/treatments/faciales/manchas-cicatrices/manchas-cicatrices-antes-2.jpg',
          after: '/assets/images/treatments/faciales/manchas-cicatrices/manchas-cicatrices-despues-2.jpg',
          beforeAlt: 'Rostro con pecas y manchas de melasma extendidas antes del tratamiento de manchas y cicatrices en Derma.M, West Palm Beach',
          afterAlt: 'Rostro con pigmentación más uniforme y manchas menos visibles tras el tratamiento de manchas y cicatrices en Derma.M, West Palm Beach'
        }
      ]
    }
  },
  'dermabracion-facial': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Alisa la textura y refina el aspecto de los poros puliendo la capa más superficial de la piel con punta de diamante y micro-succión.',
    whatIsHeadline: 'Dermabrasión facial: qué es y para qué sirve',
    whatIsBody: 'La dermabrasión facial, o microdermoabrasión con punta de diamante, es un tratamiento estético que pule de forma mecánica y calibrada la capa más superficial de la piel mientras aplica una micro-succión que activa el drenaje local. Suele usarse para alisar la textura, refinar el aspecto de los poros y preparar la piel para asimilar mejor los activos. En nuestro medical spa de West Palm Beach, Derma.M, es un protocolo de cabina que suele agendarse cada 3 o 4 semanas y parte de una valoración inicial.',
    problemContextHeadline: 'LA REMOCIÓN CUTÁNEA DE LAS CÉLULAS ENVEJECIDAS',
    problemContextBody: 'El proceso natural de recambio de la piel va perdiendo velocidad, lo que genera que las células muertas se apilen en la capa superficial, obstruyendo tratamientos y apagando el rostro. Un pulido mecánico controlado deja la superficie libre de asperezas y lista para asimilar nutrientes en plenitud.',
    duration: '45 min',
    application: 'Cabina / Mecánica dermoestética',
    anesthesia: 'No requiere',
    resultado: 'Suavidad y textura sedosa desde la primera sesión',
    whoForList: [
      'Personas con textura áspera, piel opaca o acumulación de células muertas.',
      'Quienes buscan suavizar de inmediato la superficie cutánea y refinar poros.',
      'Ideal como paso previo para optimizar la asimilación de sueros y activos.'
    ],
    safetyPrecautions: [
      'No realizar sobre piel con acné inflamado activo o rosácea severa.',
      'Evitar el uso de exfoliantes físicos o químicos caseros por 7 días.',
      'No exponer la zona tratada al sol directo durante las primeras 48 horas.'
    ],
    faq: [
      {
        question: '¿La punta de diamante raspa la piel de forma dolorosa?',
        answer: 'No. El pulido es físico pero sumamente suave. Sentirás un ligero roce raspante y un masaje de succión muy cómodo en el rostro; no produce sangrado.'
      },
      {
        question: '¿Qué diferencia hay con un peeling químico facial?',
        answer: 'La dermabrasión es una exfoliación mecánica física inmediata que remueve células muertas mediante fricción controlada. El peeling químico utiliza ácidos para promover el desprendimiento de células.'
      },
      {
        question: '¿Ayuda a refinar los poros dilatados?',
        answer: 'Sí. Al remover la acumulación de queratina y sebo seco en la entrada de los poros, asiste en la retracción del folículo dándole un aspecto más fino.'
      },
      {
        question: '¿Cada cuánto se recomienda agendar la dermabrasión?',
        answer: 'Para mantener la piel suave y libre de asperezas, se aconseja realizar una sesión cada 21 a 28 días.'
      },
      {
        question: '¿Qué cuidados posteriores debo seguir?',
        answer: 'Sugerimos hidratar profundamente la piel tratada, no exfoliar en casa durante una semana y evitar la exposición solar directa por 48 horas.'
      }
    ]
  },
  'plasma-frio': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Purifica la piel y favorece la recuperación de la barrera cutánea con gas ionizado a temperatura ambiente, pensado para pieles sensibles o reactivas.',
    whatIsHeadline: 'Plasma frío: qué es y para qué sirve',
    whatIsBody: 'El plasma frío es un tratamiento estético facial que usa gas ionizado a temperatura ambiente para purificar y desinfectar la piel sin aplicar calor, a la vez que abre micro-canales temporales que favorecen la recuperación de la barrera cutánea. Está pensado sobre todo para pieles sensibles o reactivas que no toleran bien los ácidos fuertes o el láser. En Derma.M, medical spa en West Palm Beach, se realiza por sesiones tras una valoración previa.',
    problemContextHeadline: 'SENSIBILIDAD, INFLAMACIÓN O BROTES RECURRENTES',
    problemContextBody: 'Muchas pieles reactivas no toleran las exfoliaciones ácidas fuertes o el calor de ciertos láseres, lo que dificulta tratar impurezas o acné. El plasma frío proporciona una alternativa libre de calor que equilibra, desinfecta y estimula la barrera protectora de la piel con total confort.',
    duration: '30 - 45 min',
    application: 'Cabina / Gas ionizado',
    anesthesia: 'No requiere',
    resultado: 'Alivio visible y purificación folicular calmada',
    whoForList: [
      'Pieles altamente sensibles, reactivas o con enrojecimiento de barrera.',
      'Personas con brotes o desequilibrios de grasa que buscan purificar su cutis.',
      'Quienes desean un protocolo no térmico para favorecer la recuperación.'
    ],
    safetyPrecautions: [
      'No recomendado en caso de implantes electrónicos o marcapasos.',
      'Evitar la aplicación de cremas densas o aceites las primeras 6 horas.',
      'Asegurar que la zona a tratar esté libre de lesiones abiertas graves.'
    ],
    faq: [
      {
        question: '¿Qué se siente durante la sesión de plasma frío?',
        answer: 'Sentirás un cosquilleo fresco en la cara acompañado de un olor característico a ozono (gas ionizado), sin calor, pinchazos ni molestias eléctricas.'
      },
      {
        question: '¿Es seguro para pieles con rosácea o dermatitis?',
        answer: 'Sí, es el tratamiento ideal. Al ser un protocolo no térmico (libre de calor) y desinfectante, calma el enrojecimiento y apoya la barrera sin irritar la piel.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para ver resultados?',
        answer: 'Para equilibrar la piel o controlar brotes leves, se recomienda un ciclo inicial de 4 a 6 sesiones, programadas una vez por semana.'
      },
      {
        question: '¿Cómo ayuda a purificar los poros?',
        answer: 'La energía del gas ionizado neutraliza las bacterias que causan brotes y disminuye la grasa superficial, promoviendo una superficie cutánea más clara.'
      },
      {
        question: '¿Tiene algún tiempo de inactividad o rojez?',
        answer: 'El enrojecimiento, si aparece, es leve y breve. Tu piel se siente calmada y fresca, y puedes retomar tu rutina el mismo día.'
      }
    ],
    beforeAfter: {
      eyebrow: 'EL PROCEDIMIENTO',
      headline: 'ASÍ ES UNA SESIÓN DE PLASMA FRÍO',
      items: [{
        before: '/assets/images/treatments/faciales/plasma-frio/tratamiento-plasma-frio-procedimiento.mp4',
        after: '/assets/images/treatments/faciales/plasma-frio/tratamiento-plasma-frio-procedimiento-detalle.jpg',
        beforeAlt: 'Sesión de plasma frío en Derma.M, West Palm Beach: electrodo de vidrio con gas ionizado, con filamentos de plasma violeta, deslizándose sobre la piel del rostro',
        afterAlt: 'Primer plano del electrodo de vidrio con gas ionizado durante una sesión de plasma frío en Derma.M, West Palm Beach'
      }],
      beforeLabel: 'EN CABINA',
      afterLabel: 'EQUIPO',
      disclaimer: 'Contenido de referencia del procedimiento con fines informativos. No representa un resultado garantizado; los efectos varían según cada persona, la piel y el protocolo aplicado.'
    }
  },
  'carboxiterapia-facial': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Mejora el aspecto de las ojeras, desinflama el rostro y aporta una apariencia más descansada activando la microcirculación con microdosis de dióxido de carbono.',
    whatIsHeadline: 'Carboxiterapia facial: qué es y para qué sirve',
    whatIsBody: 'La carboxiterapia facial es un tratamiento estético que introduce pequeñas cantidades de dióxido de carbono de grado cosmético bajo la piel para activar la microcirculación y la oxigenación local. Puede ayudar a mejorar el aspecto de las ojeras, a desinflamar el rostro y a dar una apariencia más descansada. Se aplica por sesiones en Derma.M, medical spa en West Palm Beach, y requiere una valoración previa para descartar contraindicaciones circulatorias.',
    problemContextHeadline: 'MICROCIRCULACIÓN DEFICIENTE Y ASPECTO CONGESTIONADO',
    problemContextBody: 'La mala oxigenación en áreas frágiles del rostro, como la órbita ocular u óvalo de la mandíbula, produce ojeras marcadas, retención de líquidos y pérdida de brillo saludable. Este protocolo estimula de forma activa la red vascular del cutis para un drenaje y revitalización inmediatos.',
    duration: '30 - 40 min',
    application: 'Cabina / Oxigenación tisular',
    anesthesia: 'No requiere',
    resultado: 'Piel desinflamada y contornos revitalizados',
    whoForList: [
      'Personas con ojeras oscuras o aspecto cansado en la zona de la mirada.',
      'Quienes buscan mejorar la microcirculación y desinflamar el rostro de forma natural.',
      'Quienes deseen un soporte no invasivo contra la retención de líquidos facial.'
    ],
    safetyPrecautions: [
      'No recomendado en caso de infecciones activas en la zona facial.',
      'Evitar masajes fuertes o fricción en el rostro durante las primeras 12 horas.',
      'Posponer en caso de condiciones circulatorias graves no controladas.'
    ],
    faq: [
      {
        question: '¿La carboxiterapia facial se aplica con agujas dolorosas?',
        answer: 'Para el rostro utilizamos una micro-insuflación superficial muy suave y fina. Sentirás una ligera presión sorda y un calor transitorio que cesa a los pocos minutos.'
      },
      {
        question: '¿Cómo ayuda a reducir las ojeras oscuras?',
        answer: 'Al oxigenar la sangre acumulada en la zona ocular, aclara el tono oscuro violáceo y mejora el drenaje linfático de las bolsas debajo de los ojos.'
      },
      {
        question: '¿En cuánto tiempo se absorbe el gas CO2 del rostro?',
        answer: 'El gas se absorbe por completo de forma inofensiva a través de los tejidos en menos de 45 minutos y el cuerpo lo elimina al respirar.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para la firmeza facial?',
        answer: 'Se aconseja realizar un ciclo de 6 a 8 sesiones, espaciadas una vez por semana, para ver una mejora progresiva en la elasticidad.'
      },
      {
        question: '¿Tiene contraindicaciones locales en la cara?',
        answer: 'Nuestro especialista evaluará tu piel en cabina. No se aplica directamente sobre áreas inflamadas, heridas abiertas o infecciones locales.'
      }
    ]
  },

  // --- CORPORALES ---
  'lipo-360': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Favorece la desinflamación, apoya la firmeza de la piel y ayuda a moldear el contorno con masaje y drenaje linfático manual en cintura, abdomen y espalda.',
    whatIsHeadline: 'Lipo 360: qué es y para qué sirve',
    whatIsBody: 'El Lipo 360 estético en Derma.M es un protocolo de masaje corporal y drenaje linfático manual sobre cintura, abdomen y espalda, pensado como acompañamiento tras cambios de peso o procedimientos. Está diseñado para favorecer la desinflamación, apoyar la firmeza de la piel y ayudar a moldear el contorno. Se realiza por sesiones en Derma.M, medical spa en West Palm Beach, y parte de una valoración previa; no reemplaza las indicaciones de tu cirujano.',
    problemContextHeadline: 'IRREGULARIDAD DE CONTORNOS Y PÉRDIDA DE ARMONÍA CORPORAL',
    problemContextBody: 'La acumulación de líquidos transitorios y la pérdida de elasticidad en la zona media y espalda dificultan lucir un contorno definido. El estímulo manual continuo promueve la retracción cutánea y la circulación de líquidos para un contorno más firme.',
    duration: '60 - 90 min',
    application: 'Cabina / Corporal',
    anesthesia: 'No requiere',
    resultado: 'Silueta más moldeada y contornos más definidos',
    whoForList: [
      'Personas que buscan moldear y desinflamar la zona del abdomen, costados y espalda.',
      'Quienes desean un acompañamiento manual pos-variación de peso para tensar la piel.',
      'Quienes buscan mejorar la definición de su silueta de forma cómoda e higiénica.'
    ],
    safetyPrecautions: [
      'No apto en caso de inflamaciones agudas de la pared abdominal o hernias no tratadas.',
      'Evitar masajes de alta presión sobre la zona si hay dolor agudo.',
      'Sujeto a valoración de las condiciones circulatorias previas.'
    ],
    faq: [
      {
        question: '¿Cuándo puedo iniciar los masajes de Lipo 360?',
        answer: 'Suele iniciarse entre los 7 y 10 días posteriores al procedimiento, siempre y cuando cuentes con la autorización de tu especialista a cargo.'
      },
      {
        question: '¿Los masajes post-Lipo 360 deben ser dolorosos?',
        answer: 'No. Nuestros masajes son de presión superficial suave (drenaje linfático manual) diseñados para desinflamar de forma confortable y suave, sin tracción.'
      },
      {
        question: '¿El protocolo estético ayuda a evitar la fibrosis?',
        answer: 'Sí. Al movilizar los líquidos atrapados y promover la circulación, asiste en la correcta adherencia de la piel y reduce la formación de durezas y relieves.'
      },
      {
        question: '¿Cuántas sesiones se aconseja contratar?',
        answer: 'Recomendamos un ciclo de 10 a 15 sesiones continuas para acompañar de forma adecuada el proceso de desinflamación corporal.'
      },
      {
        question: '¿Sustituye este masaje el uso de la faja postoperatoria?',
        answer: 'No. Los masajes estéticos son un complemento para moldear la silueta; debes continuar usando la faja según las pautas de tu cirujano.'
      }
    ]
  },
  'levantamiento-gluteos': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Mejora la firmeza y el aspecto de la piel glútea de forma progresiva con masaje manual y copas de succión pulsada que tonifican la zona.',
    whatIsHeadline: 'Levantamiento de glúteos: qué es y para qué sirve',
    whatIsBody: 'El levantamiento de glúteos sin cirugía es un protocolo estético que combina masaje manual con copas de succión pulsada para estimular la microcirculación y tonificar los tejidos de la zona. Puede ayudar a mejorar la firmeza y el aspecto de la piel glútea de forma progresiva. En Derma.M, medical spa en West Palm Beach, se trabaja en ciclos de sesiones definidos tras una valoración previa.',
    problemContextHeadline: 'PÉRDIDA DE VOLUMEN Y FLACIDEZ EN LA ZONA POSTERIOR',
    problemContextBody: 'La falta de tono cutáneo y la ralentización circulatoria local aplanan la silueta y opacan la textura de la piel glútea. La tecnología de succión rítmica y pulsada oxigena las células en profundidad, devolviendo volumen visual, firmeza y suavidad al tejido.',
    duration: '60 min',
    application: 'Cabina / Aparatología y drenaje',
    anesthesia: 'No requiere',
    resultado: 'Sensación de firmeza y apariencia estilizada',
    whoForList: [
      'Personas que buscan tonificar y realzar de forma visible la silueta glútea.',
      'Quienes desean alisar la textura y mejorar la firmeza de la piel en esa zona.',
      'Quienes buscan un protocolo cómodo libre de morados e irritaciones severas.'
    ],
    safetyPrecautions: [
      'No aplicar directamente sobre zonas con implantes de glúteos recientes o rellenos.',
      'Evitar en caso de fragilidad capilar extrema o venas varicosas en la zona.',
      'No recomendado sobre lesiones cutáneas activas o eccemas.'
    ],
    faq: [
      {
        question: '¿La succión con copas en los glúteos causa flacidez?',
        answer: 'No. En Derma.M aplicamos succión pulsada intermitente combinada con masajes manuales, lo que estimula la microcirculación y tonifica el tejido sin estirar la piel.'
      },
      {
        question: '¿Es normal que queden morados después de la sesión?',
        answer: 'No, bajo nuestro estándar de succión regulada evitamos la aparición de hematomas, adaptando la potencia del equipo a la resistencia capilar de tu piel.'
      },
      {
        question: '¿Cuántas sesiones se necesitan para ver glúteos más firmes?',
        answer: 'Se aconseja realizar un ciclo inicial de 8 a 10 sesiones, distribuidas dos veces por semana, para lograr una turgencia y definición progresiva.'
      },
      {
        question: '¿Es seguro si tengo implantes de glúteos?',
        answer: 'No. El tratamiento con copas de succión está totalmente contraindicado sobre implantes de glúteos quirúrgicos o rellenos inyectables recientes.'
      },
      {
        question: '¿Cuánto duran los resultados del levantamiento de glúteos?',
        answer: 'Los resultados se sostienen con hábitos activos y ejercicio en casa. Recomendamos realizar 1 sesión de mantenimiento mensual tras terminar el ciclo.'
      }
    ]
  },
  'marcacion-abdominal': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Acentúa la definición del abdomen en quienes ya tienen un porcentaje de grasa bajo, combinando electroestimulación de alta intensidad y radiofrecuencia.',
    whatIsHeadline: 'Marcación abdominal: qué es y para qué sirve',
    whatIsBody: 'La marcación abdominal no invasiva es un protocolo estético que combina electroestimulación muscular de alta intensidad con radiofrecuencia para trabajar el tono de la musculatura del abdomen y la firmeza de la piel. Suele buscarse para acentuar la definición en personas que ya tienen un porcentaje de grasa bajo. En Derma.M, medical spa en West Palm Beach, se realiza por sesiones y requiere una valoración previa.',
    problemContextHeadline: 'DIFICULTAD PARA VISUALIZAR EL TONO RECTO ABDOMINAL',
    problemContextBody: 'A pesar del ejercicio, a veces la piel abdominal pierde turgencia y las fibras musculares carecen de la estimulación necesaria para marcar definición. El enfoque de doble acción fortalece las fibras y tensa la piel de forma simultánea.',
    duration: '50 - 75 min',
    application: 'Cabina / Definición no invasiva',
    anesthesia: 'No requiere',
    resultado: 'Definición visual y firmeza en la zona tratada',
    whoForList: [
      'Personas con bajo porcentaje de grasa que desean acentuar la definición abdominal.',
      'Quienes buscan tonificar la musculatura abdominal sin ejercicio de alto impacto.',
      'Personas que desean combatir la flacidez cutánea superficial en el abdomen.'
    ],
    safetyPrecautions: [
      'Contraindicado si tienes marcapasos o implantes metálicos en la zona abdominal.',
      'No apto en caso de sospecha de hernias o diástasis abdominal severa sin evaluar.',
      'No recomendado si estás embarazada o en proceso de recuperación de cirugía abdominal reciente.'
    ],
    faq: [
      {
        question: '¿Se sienten calambres dolorosos durante la sesión?',
        answer: 'No. Sentirás contracciones rítmicas firmes acompañadas de un calor agradable. Nuestro especialista calibra la intensidad para que te adaptes cómodamente.'
      },
      {
        question: '¿Cuántas sesiones se necesitan para marcar líneas?',
        answer: 'Se aconseja un ciclo de 6 a 8 sesiones, distribuidas dos veces por semana, para tonificar y esculpir el área abdominal.'
      },
      {
        question: '¿Se siente dolor muscular o agujetas al día siguiente?',
        answer: 'Sí, es común sentir una sensación de agujetas ligera, similar a la que experimentas tras una rutina intensa de abdominales en el gimnasio.'
      },
      {
        question: '¿Es seguro si tengo una cesárea previa?',
        answer: 'Sí, es muy seguro siempre que hayan transcurrido al menos 6 meses desde la cirugía y tu cicatrización interna esté completamente consolidada.'
      },
      {
        question: '¿Funciona si tengo grasa abdominal moderada?',
        answer: 'El tratamiento tonifica las fibras musculares internas. La visibilidad externa de las líneas oblicuas dependerá de tu porcentaje de grasa subcutánea.'
      }
    ]
  },
  'hifu-corporal': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Favorece la firmeza y el soporte de la piel en abdomen, brazos o muslos llevando ultrasonido focalizado a los tejidos profundos, sin cirugía.',
    whatIsHeadline: 'HIFU corporal: qué es y para qué sirve',
    whatIsBody: 'El HIFU corporal es un protocolo estético que aplica ultrasonido focalizado de alta intensidad sobre los tejidos profundos del cuerpo para generar calor controlado y estimular la producción de colágeno. Está diseñado para favorecer la firmeza y el soporte de la piel en abdomen, brazos o muslos de forma progresiva, sin cirugía. En Derma.M, medical spa en West Palm Beach, parte de una medición del pliegue graso en la valoración inicial.',
    problemContextHeadline: 'FLACIDEZ INSTALADA EN ABDOMEN, MUSLOS O BRAZOS',
    problemContextBody: 'Las pérdidas repentinas de peso o la madurez de la piel suelen dejar tejidos corporales laxos y sin soporte, dando un aspecto irregular. El HIFU actúa específicamente donde es necesario aportar un tensado profundo de forma no invasiva.',
    duration: '60 - 90 min',
    application: 'Cabina / Ultrasonido profundo',
    anesthesia: 'No requiere',
    resultado: 'Reducción de flacidez corporal progresiva',
    whoForList: [
      'Personas con flacidez corporal moderada en brazos, abdomen o muslos.',
      'Quienes desean modelar zonas específicas sin recurrir a cirugías o inyecciones.',
      'Quienes buscan un protocolo de soporte corporal profundo y progresivo.'
    ],
    safetyPrecautions: [
      'No apto en caso de implantes metálicos o dispositivos activos en la zona.',
      'Evitar masajes o presiones fuertes en el área tratada por 5 días.',
      'Sujeto a medición de pliegue graso para confirmar idoneidad.'
    ],
    faq: [
      {
        question: '¿El HIFU corporal quema la piel o daña los nervios?',
        answer: 'No, medimos tu pliegue graso antes de iniciar. Usamos transductores específicos (8mm/13mm) para que la energía actúe solo en la grasa sin tocar hueso o nervios.'
      },
      {
        question: '¿Duele la descarga de calor profunda?',
        answer: 'Se percibe un pinchazo punzante y caliente profundo tolerable. Mantenemos comunicación activa contigo en cada disparo para ajustar la potencia.'
      },
      {
        question: '¿Cuántos centímetros se reducen y en cuánto tiempo?',
        answer: 'La reducción del grosor graso es gradual y se consolida entre las 8 y 12 semanas (90 días) a medida que el sistema linfático elimina los lípidos.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para grasa localizada?',
        answer: 'La mayoría de las personas obtienen resultados notables con 1 o 2 sesiones, programadas cada 2 meses para respetar los procesos naturales del cuerpo.'
      },
      {
        question: '¿Requiere tiempo de reposo después de la sesión?',
        answer: 'No requiere reposo. Puedes regresar al trabajo o a tus actividades habituales el mismo día.'
      }
    ]
  },
  'corrientes-rusas': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Apoya la tonificación y el drenaje en glúteos o abdomen con electroestimulación de frecuencia media que genera contracciones rítmicas, como complemento del ejercicio.',
    whatIsHeadline: 'Corrientes rusas: qué son y para qué sirven',
    whatIsBody: 'Las corrientes rusas son un protocolo estético de electroestimulación de frecuencia media que envía impulsos controlados a grupos musculares concretos para provocar contracciones rítmicas. Se usan como complemento del ejercicio para apoyar la tonificación y el drenaje en zonas como glúteos o abdomen. En nuestro medical spa de West Palm Beach, Derma.M, se programan 2 o 3 sesiones semanales por zona, siempre tras una valoración previa.',
    problemContextHeadline: 'FALTA DE TONO MUSCULAR Y ASISTENCIA REAFIRMANTE',
    problemContextBody: 'La inactividad o debilidad en grupos musculares específicos, como glúteos o abdomen, complica obtener una apariencia tónica o firme mediante ejercicio regular únicamente. Las corrientes rusas incrementan el trabajo de la fibra muscular, complementando tu rutina.',
    duration: '45 min',
    application: 'Cabina / Electroestimulación',
    anesthesia: 'No requiere',
    resultado: 'Tonificación, drenaje y activación profunda',
    whoForList: [
      'Personas que desean complementar su rutina de ejercicio y definir zonas rebeldes.',
      'Quienes buscan elevar y tonificar glúteos o firmeza en el abdomen.',
      'Quienes desean mejorar la circulación y drenaje local mediante contracción muscular.'
    ],
    safetyPrecautions: [
      'Contraindicado si posees marcapasos o implantes metálicos en las áreas a tratar.',
      'No aplicar sobre abdomen en personas embarazadas o con sospecha de embarazo.',
      'No recomendado si sufres de várices inflamadas o trombosis en la zona.'
    ],
    faq: [
      {
        question: '¿Las corrientes rusas dan descargas o corrientazos dolorosos?',
        answer: 'No, utilizamos corrientes rusas de media frecuencia (2500 Hz). Éstas penetran la resistencia natural de la piel suavemente, sin ardor ni pinchazos en la dermis.'
      },
      {
        question: '¿Cuántas veces a la semana se recomiendan?',
        answer: 'Se aconseja programar 2 o 3 sesiones semanales en la misma zona muscular para permitir el descanso adecuado de las fibras entre sesiones.'
      },
      {
        question: '¿Ayuda a levantar los glúteos caídos?',
        answer: 'Sí. La estimulación sincrónica ejercita las fibras profundas del glúteo, incrementando su tono y volumen para un levantamiento estético visible.'
      },
      {
        question: '¿Reemplaza este tratamiento el ejercicio físico en el gimnasio?',
        answer: 'No reemplaza al entrenamiento tradicional. Es el aliado perfecto para tonificar y definir áreas rebeldes que no responden de forma óptima a las pesas.'
      },
      {
        question: '¿Se siente dolor muscular al día siguiente?',
        answer: 'Sí. Es común sentir agujetas normales en las 24 o 48 horas posteriores, señal de que los músculos trabajaron intensamente.'
      }
    ]
  },
  'estrias-celulitis': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Suaviza el aspecto de la piel de naranja y atenúa la textura de las estrías combinando estimulación térmica, masaje y activos de renovación cutánea.',
    whatIsHeadline: 'Tratamiento de estrías y celulitis: qué es y cómo funciona',
    whatIsBody: 'El tratamiento de estrías y celulitis es un protocolo estético corporal que combina estimulación térmica, masaje y activos de renovación cutánea para actuar sobre la circulación superficial y la elasticidad de la piel. Puede ayudar a suavizar el aspecto de la piel de naranja y a atenuar la textura de las estrías, sin eliminarlas por completo. En Derma.M, medical spa en West Palm Beach, se planifica por sesiones tras una valoración previa.',
    problemContextHeadline: 'TEXTURA IRREGULAR Y MARCAS DE ESTIRAMIENTO DÉRMICO',
    problemContextBody: 'La acumulación localizada de líquidos o el estiramiento rápido de los tejidos dejan relieves con aspecto de piel de naranja o líneas delgadas visibles (estrías). Abordar este desafío desde la circulación superficial y reestructuración cutánea es clave para alisar la zona.',
    duration: '60 min',
    application: 'Cabina / Enfoque combinado',
    anesthesia: 'No requiere',
    resultado: 'Suavizado progresivo de marcas y relieves corporales',
    whoForList: [
      'Personas que buscan suavizar la apariencia de hoyuelos o piel de naranja.',
      'Quienes desean mejorar la elasticidad y disimular la textura de las estrías corporales.',
      'Quienes buscan un protocolo no invasivo para atenuar relieves y mejorar la textura cutánea.'
    ],
    safetyPrecautions: [
      'Evitar la exposición solar directa sobre la zona tratada durante las siguientes 48 horas.',
      'No aplicar exfoliantes fuertes en casa por una semana.',
      'Aplicar protector solar corporal de amplio espectro SPF 30+ diariamente.'
    ],
    faq: [
      {
        question: '¿Este protocolo elimina las estrías blancas por completo?',
        answer: 'No, las estrías blancas son cicatrices consolidadas que no desaparecen al 100%. Logramos atenuar notablemente su textura rugosa y profundidad.'
      },
      {
        question: '¿Cómo ayuda la radiofrecuencia a alisar la celulitis?',
        answer: 'El calentamiento controlado contrae las fibras elásticas internas y estimula colágeno nuevo para suavizar los hoyuelos de la piel de naranja.'
      },
      {
        question: '¿La radiofrecuencia corporal puede manchar mi piel?',
        answer: 'No. Al utilizar geles conductores gruesos y calibrar la temperatura de forma precisa, protegemos la epidermis de manchas e hiperpigmentación.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para ver la piel más lisa?',
        answer: 'Se aconseja realizar un ciclo de 8 a 10 sesiones, distribuidas una o dos veces por semana, para consolidar resultados de tersura.'
      },
      {
        question: '¿Se puede tomar sol después de la sesión?',
        answer: 'Recomendamos evitar la exposición solar directa sobre el área por 48 horas y aplicar protector solar corporal de amplio espectro.'
      }
    ]
  },
  'carboxiterapia-corporal': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Mejora el aspecto de la piel de naranja, la pesadez en las piernas y la firmeza corporal activando la microcirculación con microdosis de dióxido de carbono.',
    whatIsHeadline: 'Carboxiterapia corporal: qué es y para qué sirve',
    whatIsBody: 'La carboxiterapia corporal es un protocolo estético que introduce pequeñas cantidades de dióxido de carbono de grado cosmético bajo la piel para activar la microcirculación y la oxigenación local. Suele usarse para mejorar el aspecto de la piel de naranja, la sensación de pesadez en las piernas y la firmeza corporal. En Derma.M, medical spa en West Palm Beach, se realiza por sesiones y requiere una valoración circulatoria previa.',
    problemContextHeadline: 'CONGESTIÓN EN TEJIDOS Y GRASA FOCALIZADA',
    problemContextBody: 'Una microcirculación deficiente favorece la retención de agua y la falta de tono en zonas rebeldes. El suministro estético de CO2 reactiva de inmediato la oxigenación para dar mayor tersura y alisar relieves.',
    duration: '35 - 50 min',
    application: 'Cabina / Estética de reflujo CO2',
    anesthesia: 'No requiere',
    resultado: 'Alisado de la piel de naranja y mejor microcirculación',
    whoForList: [
      'Personas con retención de líquidos o celulitis visible en piernas y glúteos.',
      'Quienes desean suavizar la textura irregular y mejorar la firmeza corporal.',
      'Quienes buscan un protocolo de drenaje y oxigenación corporal efectivo.'
    ],
    safetyPrecautions: [
      'Evitar realizar ejercicio físico intenso las siguientes 4 horas.',
      'No tomar baños de inmersión caliente, piscina o sauna el día de la sesión.',
      'Sujeto a valoración circulatoria general.'
    ],
    faq: [
      {
        question: '¿Es peligroso que el gas de carboxiterapia quede en mi cuerpo?',
        answer: 'No. El gas CO2 de grado profesional cosmético es inofensivo y se absorbe por completo de forma natural en un lapso de 1 a 3 horas, eliminándose de manera natural.'
      },
      {
        question: '¿Qué es la sensación de crujido en la piel después?',
        answer: 'Es la crepitación normal y temporal por la dispersión del gas bajo la piel. Desaparece sola en pocas horas a medida que el gas se absorbe.'
      },
      {
        question: '¿La carboxiterapia corporal duele mucho?',
        answer: 'Sentirás una presión sorda y un calor transitorio localizado. Nuestro protocolo de flujo lento regula la entrada de gas para evitar el ardor agudo.'
      },
      {
        question: '¿Cuántas sesiones se necesitan para la celulitis?',
        answer: 'Para obtener resultados acumulativos, recomendamos realizar un ciclo de 8 a 12 sesiones, programadas una o dos veces por semana.'
      },
      {
        question: '¿Deja morados en las piernas o abdomen?',
        answer: 'Pueden aparecer pequeños hematomas o puntos rojos en las zonas de insuflación, los cuales sanan de forma natural en pocos días.'
      }
    ]
  },
  'maderoterapia-corporal': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Favorece la circulación, ayuda a drenar la retención de líquidos y acompaña el moldeo del contorno con masaje de instrumentos de madera sobre cintura, caderas y piernas.',
    whatIsHeadline: 'Maderoterapia corporal: qué es y para qué sirve',
    whatIsBody: 'La maderoterapia corporal es una técnica de masaje que utiliza instrumentos de madera de pino para aplicar deslizamientos y presiones rítmicas sobre cintura, caderas y piernas. Está pensada para favorecer la circulación, ayudar a drenar la retención de líquidos y acompañar el moldeo del contorno, con un efecto también relajante. En Derma.M, medical spa en West Palm Beach, se ofrece por sesiones y parte de una valoración previa.',
    problemContextHeadline: 'RETENCIÓN DE LÍQUIDOS Y TENSIÓN ACUMULADA',
    problemContextBody: 'La pesadez y las irregularidades en la textura del cuerpo derivan habitualmente de una acumulación excesiva de líquidos o cansancio circulatorio. Los estímulos anatómicos de madera liberan la tensión del tejido, dinamizan el flujo de drenaje corporal y aportan contornos fluidos.',
    duration: '50 - 60 min',
    application: 'Cabina / Manual / Maderas',
    anesthesia: 'No requiere',
    resultado: 'Drenaje inmediato, ligereza corporal y sensación relajante',
    whoForList: [
      'Personas con retención de líquidos acumulados o sensación de pesadez corporal.',
      'Quienes desean un protocolo manual natural para moldear cintura, caderas y piernas.',
      'Quienes buscan un masaje relajante y descontracturante corporal profundo.'
    ],
    safetyPrecautions: [
      'No recomendado sobre zonas con várices inflamadas expuestas.',
      'Evitar si se presentan infecciones activas en la piel corporal.',
      'Sujeto a presión moderada personalizada según sensibilidad capilar.'
    ],
    faq: [
      {
        question: '¿La maderoterapia corporal debe dejar morados para funcionar?',
        answer: 'No. En Derma.M desmentimos el mito del dolor. Aplicamos maniobras rítmicas de presión moderada que drenan y alisan la piel sin causar hematomas.'
      },
      {
        question: '¿Qué herramientas de madera se utilizan en el masaje?',
        answer: 'Utilizamos copas suecas, rodillos estriados, mazorcas y tablas moldeadoras anatómicas de madera noble pulida de seda libre de asperezas.'
      },
      {
        question: '¿Ayuda a reducir centímetros de cintura realmente?',
        answer: 'Sí, ayuda a deshinchar y moldear el contorno al drenar líquidos acumulados en los flancos, mejorando el aspecto general al instante.'
      },
      {
        question: '¿Cuántas sesiones se aconseja programar?',
        answer: 'Se recomienda un ciclo de 8 a 10 sesiones, espaciadas dos veces por semana, para lograr una tersura y desinflamación corporal acumulativa.'
      },
      {
        question: '¿Qué tipo de aceites se aplican en la piel?',
        answer: 'Aplicamos una cantidad generosa de aceite de jojoba orgánico puro no comedogénico para garantizar un deslizamiento cómodo y libre de fricción.'
      }
    ]
  },

  // --- LÁSER Y LUZ ---
  'depilacion-laser': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Logra una reducción progresiva del vello facial o corporal, sesión tras sesión, emitiendo luz que calienta y debilita el folículo de forma gradual.',
    whatIsHeadline: 'Depilación láser: qué es y cómo funciona',
    whatIsBody: 'La depilación láser es un procedimiento estético que emite luz sobre el pigmento del vello para calentar y debilitar el folículo de forma gradual, según el principio de fototermólisis selectiva. Está orientada a lograr una reducción progresiva y duradera del vello facial o corporal, sesión tras sesión. En Derma.M, medical spa en West Palm Beach, se realiza en ciclos de varias sesiones y parte de una valoración del fototipo.',
    problemContextHeadline: 'EL DESAFÍO DEL VELLO CORPORAL NO DESEADO Y LA IRRITACIÓN',
    problemContextBody: 'El afeitado tradicional o la cera convencional irritan repetidamente los poros, provocando vellos encarnados, aspereza crónica y manchas oscuras. El láser ofrece una vía de cuidado que refina la textura de la piel volviéndola sedosa y libre de vello de forma gradual.',
    duration: '20 - 60 min (según zona)',
    application: 'Cabina / Tecnología láser de vanguardia',
    anesthesia: 'No requiere (incluye frío integrado)',
    resultado: 'Reducción notable del vello sesión tras sesión',
    whoForList: [
      'Personas que buscan una reducción progresiva y duradera del vello facial o corporal.',
      'Quienes sufren de poros irritados o vellos encarnados por métodos tradicionales.',
      'Todo tipo de piel, seleccionando los parámetros adecuados para máxima seguridad.'
    ],
    safetyPrecautions: [
      'No exponer al sol directo la zona tratada por 7 días antes y después de la sesión.',
      'Venir a la cita con la zona rasurada al ras del día anterior (evitar cera o pinzas).',
      'Aplicar protector solar SPF 30+ o superior de forma continua.'
    ],
    faq: [
      {
        question: '¿La depilación láser corporal es dolorosa?',
        answer: 'Nuestro equipo cuenta con un sistema de frío integrado en el cabezal de metal, lo que adormece la zona al instante y hace la sesión muy cómoda.'
      },
      {
        question: '¿Cuántas sesiones se necesitan para reducir el vello?',
        answer: 'Recomendamos un ciclo inicial de 6 a 8 sesiones, espaciadas cada 4 a 6 semanas, para tratar el vello en sus fases de crecimiento activo.'
      },
      {
        question: '¿Es segura la depilación en pieles trigueñas o bronceadas?',
        answer: 'Sí. Calibramos los parámetros del láser de forma personalizada según tu fototipo para proteger la piel y evitar alteraciones del pigmento.'
      },
      {
        question: '¿La depilación láser elimina el vello para siempre?',
        answer: 'No de forma total. Se logra una reducción notable y duradera del vello; los folículos debilitados pueden requerir sesiones de retoque.'
      },
      {
        question: '¿Puedo rasurarme entre sesiones de láser?',
        answer: 'Sí. Se permite rasuradora manual convencional. Debes evitar arrancar el vello de raíz con cera o pinzas para mantener activo el bulbo folicular.'
      }
    ]
  },
  ipl: {
    contentUpdated: '2026-08-27',
    heroDescription: 'Atenúa manchas solares, unifica el tono y aporta luminosidad al rostro, el cuello o el escote con luz pulsada que actúa sobre pigmentos y rojeces.',
    whatIsHeadline: 'IPL (luz pulsada intensa): qué es y para qué sirve',
    whatIsBody: 'El IPL, o luz pulsada intensa, es un tratamiento estético que aplica un espectro amplio de luz sobre la piel para actuar de forma selectiva sobre pigmentos y rojeces superficiales. Suele usarse para atenuar manchas solares, unificar el tono y aportar luminosidad al rostro, el cuello o el escote. En Derma.M, medical spa en West Palm Beach, se planifica por sesiones tras una valoración previa y exige fotoprotección estricta.',
    problemContextHeadline: 'DAÑO SOLAR, MANCHAS EN LA EDAD Y TONO DISCRÓMICO',
    problemContextBody: 'La acumulación de radiación UV da paso a pecas solares marcadas, rojeces superficiales finas y opacidad en la piel. El tratamiento por pulsación lumínica rompe los pigmentos focales oscuros y promueve una unificación global en pocas sesiones.',
    duration: '40 - 50 min',
    application: 'Cabina / Luz Pulsada de Alta Gama',
    anesthesia: 'No requiere',
    resultado: 'Piel más uniforme, luminosa y con menos pigmentaciones visibles',
    whoForList: [
      'Personas con manchas causadas por el sol o enrojecimiento superficial persistente.',
      'Quienes desean unificar el tono y aportar luminosidad a rostro, cuello o escote.',
      'Quienes buscan un protocolo rápido con mínimo tiempo de recuperación.'
    ],
    safetyPrecautions: [
      'Es obligatorio evitar la exposición solar directa por 14 días posteriores.',
      'Uso estricto de protector solar de amplio espectro SPF 30+ cada 4 horas.',
      'No recomendado si has bronceado tu piel recientemente (esperar 4 semanas).'
    ],
    faq: [
      {
        question: '¿El IPL sirve para quitar las manchas de sol de los brazos?',
        answer: 'Sí, es sumamente efectivo para fragmentar la melanina oscura de forma progresiva tanto en rostro, escote, brazos como en manos.'
      },
      {
        question: '¿Duele la pulsación de luz en la piel?',
        answer: 'Sentirás una sensación similar a un leve golpe de banda elástica caliente en la zona, la cual es muy tolerable y pasa en fracciones de segundo.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para unificar el tono?',
        answer: 'Para obtener resultados notables de luminosidad y reducción de manchas, recomendamos realizar un ciclo de 3 a 5 sesiones, espaciadas cada 4 semanas.'
      },
      {
        question: '¿La piel se descama después de la sesión?',
        answer: 'Las manchas oscuras se oscurecerán ligeramente y formarán costras microscópicas finas que se desprenden solas de forma natural a los 7 días.'
      },
      {
        question: '¿Qué cuidados solares debo tener después del IPL?',
        answer: 'Es obligatorio evitar la exposición solar directa sobre el área tratada por 14 días y aplicar protector solar SPF 30 o superior cada 4 horas.'
      }
    ]
  },
  // --- DENTAL ESTÉTICO ---
  'blanqueamiento-dental': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Aclara el tono de la sonrisa de forma visible con geles aclaradores certificados que disuelven manchas superficiales, sin desgastar la estructura del diente.',
    whatIsHeadline: 'Blanqueamiento dental: qué es y para qué sirve',
    whatIsBody: 'El blanqueamiento dental estético es un protocolo que aplica geles aclaradores certificados sobre el esmalte para disolver manchas superficiales y pigmentaciones adquiridas, sin desgastar la estructura del diente. Puede ayudar a aclarar el tono de la sonrisa de forma visible, con una duración que depende de los hábitos de cada persona. En Derma.M, medical spa en West Palm Beach, parte de una valoración previa del esmalte.',
    problemContextHeadline: 'OPACIDAD Y PIGMENTACIÓN ADQUIRIDA EN LAS PIEZAS DENTALES',
    problemContextBody: 'El tabaco, café, té y ciertos pigmentos de alimentos van creando una película opaca sobre el esmalte, oscureciendo la sonrisa. El blanqueamiento te devuelve un tono más brillante, blanco y armónico compatible con tu simetría facial.',
    duration: '45 - 60 min',
    application: 'Cabina dermoestética dental',
    anesthesia: 'No requiere',
    resultado: 'Dientes visiblemente más claros y brillantes tras el tratamiento',
    whoForList: [
      'Personas con esmalte oscurecido o manchado por hábitos de alimentación y tabaco.',
      'Quienes desean lucir una sonrisa notablemente más brillante y clara de forma rápida.',
      'Ideal antes de eventos sociales o sesiones fotográficas.'
    ],
    safetyPrecautions: [
      'Requiere seguir una "dieta blanca" (evitar café, té, vino tinto, salsas oscuras) durante 48 horas.',
      'No recomendado si presentas caries activas o sensibilidad extrema sin tratar.',
      'Sujeto a evaluación previa del esmalte.'
    ],
    faq: [
      {
        question: '¿El blanqueamiento dental estético desgasta el esmalte?',
        answer: 'No. El gel aclarador actúa únicamente disolviendo las pigmentaciones y manchas del diente mediante oxígeno activo, sin debilitar el esmalte mineral.'
      },
      {
        question: '¿Provoca sensibilidad dental severa después?',
        answer: 'Utilizamos fórmulas aclaradoras de grado estético con desensibilizantes integrados para garantizar un proceso confortable y libre de sensibilidad severa.'
      },
      {
        question: '¿Cuántos tonos se aclaran en una sola sesión?',
        answer: 'El blanqueamiento ofrece una sonrisa notablemente más clara y brillante desde la primera visita, variando según el esmalte de cada persona.'
      },
      {
        question: '¿Cuánto dura el efecto de aclarado dental?',
        answer: 'El tono claro suele perdurar entre 6 y 12 meses, dependiendo de tus hábitos de consumo de café, té, tabaco y alimentos con colorantes.'
      },
      {
        question: '¿Qué es la dieta blanca y cuánto dura?',
        answer: 'Consiste en evitar alimentos y bebidas oscuras (vino tinto, salsas de tomate, café) durante las 48 horas posteriores para no teñir el poro del diente.'
      }
    ],
    beforeAfter: {
      items: [{
        before: '/assets/images/treatments/dental-estetico/blanqueamiento-dental/blanqueamiento-dental-procedimiento.jpg',
        after: '/assets/images/treatments/dental-estetico/blanqueamiento-dental/blanqueamiento-dental-antes-despues.jpg',
        beforeAlt: 'Blanqueamiento dental estético en cabina en Derma.M, West Palm Beach',
        afterAlt: 'Antes y después de blanqueamiento dental estético en Derma.M'
      }],
      beforeLabel: 'PROCEDIMIENTO',
      afterLabel: 'ANTES Y DESPUÉS'
    }
  },
  'limpieza-dental': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Mantiene el esmalte limpio y las encías sanas retirando placa y sarro acumulados con instrumental ultrasónico suave y copas de pulido.',
    whatIsHeadline: 'Limpieza dental: qué es y para qué sirve',
    whatIsBody: 'La limpieza dental estética es un protocolo de higiene profesional que retira placa y sarro acumulados con instrumental ultrasónico suave y copas de pulido. Está pensada para mantener el esmalte limpio y las encías sanas, y no reemplaza los tratamientos periodontales. En nuestro medical spa de West Palm Beach, Derma.M, se recomienda cada seis meses y parte de una valoración previa.',
    problemContextHeadline: 'ACUMULO DE CÁLCULO E INFLAMACIÓN GINGIVAL DISCRETA',
    problemContextBody: 'El cepillado doméstico regular no logra retirar por completo el sarro calcificado en el cuello de las piezas dentales o entre espacios interproximales. Una limpieza experta remueve estas acumulaciones, puliendo la sonrisa y regalando una profunda sensación de ligereza y frescor bucal.',
    duration: '45 min',
    application: 'Cabina dermoestética dental',
    anesthesia: 'No requiere',
    resultado: 'Sarro removido, esmalte pulido y frescura gingival total',
    whoForList: [
      'Personas con acumulación de sarro o manchas superficiales en los dientes.',
      'Quienes desean mantener una higiene oral óptima y prevenir la opacidad dental.',
      'Quienes buscan un pulido dental estético y una sensación duradera de frescor.'
    ],
    safetyPrecautions: [
      'No reemplaza los tratamientos periodontales o restauraciones estructurales.',
      'Se recomienda agendar cada 6 meses como mantenimiento estético e higiénico.',
      'Evitar alimentos altamente pigmentados las primeras 2 horas posteriores.'
    ],
    faq: [
      {
        question: '¿La limpieza dental por ultrasonido duele o sangra?',
        answer: 'La limpieza es muy cómoda. Se puede sentir una leve vibración metálica. Si tus encías presentan inflamación previa, puede ocurrir un sangrado mínimo temporal.'
      },
      {
        question: '¿Cada cuánto tiempo se recomienda programarla?',
        answer: 'Se aconseja agendar una limpieza dental profesional cada 6 meses para remover sarro acumulado y mantener tus encías firmes e higienizadas.'
      },
      {
        question: '¿Remueve las manchas de tabaco y café persistentes?',
        answer: 'Sí. Remueve de forma meticulosa el cálculo duro y las impregnaciones oscuras utilizando ultrasonido y copas de pulido con pasta profiláctica.'
      },
      {
        question: '¿Qué diferencia hay con un blanqueamiento dental?',
        answer: 'La limpieza dental se enfoca en remover sarro duro e higiene de las encías. El blanqueamiento dental aclara químicamente el tono del esmalte.'
      },
      {
        question: '¿Puedo comer inmediatamente después de la limpieza?',
        answer: 'Sí. Puedes comer inmediatamente después de tu visita, a menos que el especialista aplique un sellador protector de flúor en el esmalte.'
      }
    ],
    beforeAfter: {
      items: [{
        before: '/assets/images/treatments/dental-estetico/limpieza-dental/limpieza-dental-antes.jpg',
        after: '/assets/images/treatments/dental-estetico/limpieza-dental/limpieza-dental-despues.jpg',
        beforeAlt: 'Dientes con acumulación de sarro en la línea de las encías antes de una limpieza dental estética en Derma.M, West Palm Beach',
        afterAlt: 'Dientes limpios y pulidos tras una limpieza dental estética en Derma.M, West Palm Beach'
      }]
    }
  },

  // --- CAPILAR ---
  'tratamiento-capilar': {
    contentUpdated: '2026-08-27',
    heroDescription: 'Ayuda a fortalecer el cabello frágil y a reducir la sensación de caída infundiendo péptidos, aminoácidos y nutrientes en el cuero cabelludo.',
    whatIsHeadline: 'Tratamiento capilar: qué es y para qué sirve',
    whatIsBody: 'El tratamiento capilar es un protocolo de bioestimulación que infunde péptidos, aminoácidos y nutrientes en el cuero cabelludo mediante aplicadores superficiales para nutrir la raíz del cabello. Puede ayudar a fortalecer el cabello frágil y a reducir la sensación de caída, aunque no recupera folículos que ya han dejado de crecer. En Derma.M, medical spa en West Palm Beach, se realiza en ciclos de sesiones tras una valoración previa.',
    problemContextHeadline: 'CABELLO DEBILITADO, CAÍDA ESTACIONAL Y PÉRDIDA DE VOLUMEN',
    problemContextBody: 'El estrés, el cansancio y agentes ambientales agresivos debilitan el folículo, haciendo que el vello capilar nazca más delgado, frágil o se desprenda prematuramente. El aporte localizado nutre y oxigena en profundidad la base para prolongar la calidad y resistencia del cabello.',
    duration: '45 - 60 min',
    application: 'Cabina / Estimulación dermo-capilar',
    anesthesia: 'No requiere o anestesia tópica mínima',
    resultado: 'Fragilidad disminuida y cabello fortalecido progresivamente',
    whoForList: [
      'Personas que notan caída de cabello estacional o pérdida progresiva de volumen.',
      'Quienes desean fortalecer el cabello frágil y delgado desde la raíz.',
      'Quienes buscan un protocolo de nutrición y estimulación capilar profundo.'
    ],
    safetyPrecautions: [
      'No lavar el cabello ni mojar la cabeza por un mínimo de 12 horas posteriores.',
      'Evitar el uso de tintes o tratamientos químicos fuertes durante la semana de la sesión.',
      'No recomendado sobre cuero cabelludo con infecciones o heridas abiertas.'
    ],
    faq: [
      {
        question: '¿El tratamiento capilar duele o se aplica con agujas?',
        answer: 'Utilizamos aplicadores superficiales de precisión que realizan micro-aperturas sumamente tolerables y cómodas; no producen sangrado.'
      },
      {
        question: '¿Cuándo se empieza a notar el cabello más fuerte?',
        answer: 'Apreciarás una reducción notable en la caída diaria a las 4 semanas. La densidad y volumen de cabello nuevo se nota de forma progresiva a los 3 meses.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para la caída del cabello?',
        answer: 'Se aconseja realizar un ciclo de 6 a 8 sesiones, programadas cada 15 días, para nutrir de forma continua la raíz folicular.'
      },
      {
        question: '¿Funciona este protocolo para la calvicie avanzada?',
        answer: 'Este tratamiento revitaliza y nutre los folículos activos debilitados. No recupera folículos pilosos que han cicatrizado o desaparecido por completo.'
      },
      {
        question: '¿Puedo lavarme el cabello después de la sesión?',
        answer: 'Recomendamos esperar al menos 12 horas antes de lavar el cabello o mojar la cabeza para permitir que la hebra absorba todos los nutrientes.'
      }
    ],
    beforeAfter: {
      items: [{
        before: '/assets/images/treatments/capilar/tratamiento-capilar/tratamiento-capilar-antes.jpg',
        after: '/assets/images/treatments/capilar/tratamiento-capilar/tratamiento-capilar-despues.jpg',
        beforeAlt: 'Cuero cabelludo con cabello fino, frágil y con menor densidad antes de un tratamiento capilar en Derma.M, West Palm Beach',
        afterAlt: 'Cabello con aspecto más fuerte y mayor volumen tras un ciclo de tratamiento capilar en Derma.M, West Palm Beach'
      }]
    }
  }
};

// Compile and export the full array of 26 treatments
const compileTreatments = () => {
  const categories = ['faciales', 'corporales', 'laserYLuz', 'dentalEstetico', 'capilar'];
  const compiled = {
    faciales: {},
    corporales: {},
    laserYLuz: {},
    dentalEstetico: {},
    capilar: {}
  };

  // Define target slugs for each category
  const slugsByCategory = {
    faciales: [
      'hidrofacial',
      'microneedling',
      'hifu-facial',
      'peel-coreano',
      'radiofrecuencia-facial',
      'oxigenoterapia-facial',
      'rejuvenecimiento-facial',
      'tratamiento-acne',
      'manchas-cicatrices',
      'dermabracion-facial',
      'plasma-frio',
      'carboxiterapia-facial'
    ],
    corporales: [
      'lipo-360',
      'levantamiento-gluteos',
      'marcacion-abdominal',
      'hifu-corporal',
      'corrientes-rusas',
      'estrias-celulitis',
      'carboxiterapia-corporal',
      'maderoterapia-corporal'
    ],
    laserYLuz: [
      'depilacion-laser',
      'ipl'
    ],
    dentalEstetico: [
      'blanqueamiento-dental',
      'limpieza-dental'
    ],
    capilar: [
      'tratamiento-capilar'
    ]
  };

  categories.forEach(catKey => {
    const slugs = slugsByCategory[catKey];
    slugs.forEach(slug => {
      const base = getBaseTreatment(catKey, slug);
      const custom = customDetails[slug] || {};

      const title = base.title;
      const description = base.description;
      const benefits = base.benefits.length > 0 ? base.benefits : ['Renovación visible', 'Cuidado profesional', 'Bienestar integral'];
      const ideal = base.ideal || 'Ideal si buscas un cuidado dermoestético avanzado y adaptado a tus necesidades.';
      const image = base.image;
      const route = base.route;
      const disclaimer = base.disclaimer;

      // Define default or custom specs
      const specs = {
        'Tipo': 'Protocolo dermoestético no invasivo',
        'Zonas': catKey === 'faciales' ? 'Facial, cuello y escote' :
                 catKey === 'corporales' ? 'Corporal adaptado' :
                 catKey === 'laserYLuz' ? 'Zona facial o corporal según sesión' :
                 catKey === 'dentalEstetico' ? 'Cavidad oral / Piezas dentales' : 'Cuero cabelludo y raíz',
        'Objetivo principal': description,
        'Número estimado de sesiones': 'Variable según valoración previa',
        'Recuperación necesaria': 'Inmediata, reincorporación al instante',
        'Requiere cita de valoración': 'Sí, obligatoria previo a sesión'
      };

      // Define quickFacts with safe values or overrides
      const quickFacts = [
        { label: 'RESULTADO', value: custom.resultado || 'Variable según valoración', icon: 'result' },
        { label: 'APLICACIÓN', value: custom.application || 'Según protocolo', icon: 'application' },
        { label: 'DURACIÓN', value: custom.duration || 'Según valoración', icon: 'duration' },
        { label: 'ANESTESIA', value: custom.anesthesia || 'Según indicación', icon: 'anesthesia' }
      ];

      // Define custom FAQ list (must exist in customDetails, no fallback allowed)
      const faq = custom.faq;
      if (!faq || faq.length !== 5) {
        throw new Error(`Treatment ${slug} is missing exactly 5 custom FAQs! Found: ${faq ? faq.length : 0}`);
      }

      // Related treatments from the same category first (excluding the current slug)
      const allCategorySlugs = slugsByCategory[catKey];
      const relatedSlugs = allCategorySlugs.filter(s => s !== slug).slice(0, 3);
      const related = relatedSlugs.map(rSlug => {
        const rBase = getBaseTreatment(catKey, rSlug);
        return {
          title: rBase.title,
          description: rBase.description,
          benefits: rBase.benefits,
          ideal: rBase.ideal,
          to: rBase.route,
          image: rBase.image,
          imagePosition: rBase.imagePosition,
          disclaimer: rBase.disclaimer
        };
      });

      const treatmentAssetFolder = getTreatmentAssetFolder(catKey);
      const treatmentAssetBase = `/assets/images/treatments/${treatmentAssetFolder}/${slug}`;

      compiled[catKey][slug] = {
        category: catKey,
        categoryLabel: categoryLabels[catKey],
        slug,
        route,
        title,
        description,
        heroDescription: custom.heroDescription || description,
        metaTitle: base.metaTitle || null,
        metaDescription: base.metaDescription || null,
        contentUpdated: custom.contentUpdated || null,
        image,
        protocolImage: custom.protocolImage || null,
        beforeAfter: custom.beforeAfter || null,
        heroImageAlt: custom.heroImageAlt || null,
        whatIsImageAlt: custom.whatIsImageAlt || null,
        quickFacts,
        benefits,
        ideal,
        specs,
        faqHeadline: 'PREGUNTAS FRECUENTES',
        faq,
        related,
        whatIs: {
          eyebrow: 'EL PROTOCOLO',
          headline: custom.whatIsHeadline || `TRATAMIENTO DE ${title}`,
          body: custom.whatIsBody || `El tratamiento de ${title} en Derma.M es un protocolo diseñado estratégicamente para abordar ${description.toLowerCase()} utilizando aparatología y activos avanzados. Buscamos restaurar la luminosidad, equilibrio y vitalidad de la zona mediante un cuidado integral.`,
          image: `${treatmentAssetBase}/whatis.jpg`
        },
        problemContext: {
          eyebrow: 'CONTEXTO Y CONDICIÓN',
          headline: custom.problemContextHeadline || `EQUILIBRAR LAS NECESIDADES DE TU CUERPO Y PIEL.`,
          body: custom.problemContextBody || `Factores diarios como el estrés óxido-luminoso, desequilibrios locales de lípidos, y la ralentización natural de los procesos circulatorios opacan la vitalidad de la superficie cutánea o muscular. Tratamientos especializados como ${title} actúan puntualmente para contrarrestar estas condiciones de forma controlada y segura.`
        },
        cta: {
          eyebrow: 'AGENDA TU VALORACIÓN',
          headline: `DEFINE SI ${title} ES EL PROTOCOLO ADECUADO PARA TI`,
          body: 'Agenda tu cita de evaluación en Derma.M y recibe un diagnóstico estético especializado e integral diseñado según tus objetivos de cuidado personal.',
          primaryCta: 'RESERVAR',
          secondaryCta: 'WHATSAPP',
          disclaimer: disclaimer,
          backgroundImage: `${treatmentAssetBase}/cta.jpg`
        },
        whoForList: custom.whoForList || null,
        safetyPrecautions: custom.safetyPrecautions || null
      };
    });
  });

  return compiled;
};

export const treatmentPages = compileTreatments();

