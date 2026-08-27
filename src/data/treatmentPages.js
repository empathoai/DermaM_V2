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
    whatIsBody: 'Hidrofacial es un protocolo estético avanzado de renovación dérmica que limpia, extrae impurezas e hidrata profundamente de forma simultánea. Utilizando un sistema de succión de vacío suave combinado con la infusión activa de sueros ricos en antioxidantes, péptidos y ácido hialurónico, limpia los poros meticulosamente sin dejar marcas ni irritaciones en la piel.',
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
        answer: 'No. A diferencia de las limpiezas tradicionales agresivas, el Hidrofacial utiliza una tecnología de succión de vacío suave combinada con infusión líquida que ablanda los poros, facilitando una extracción sin dolor y previniendo la aparición de marcas o rojeces severas.'
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
    whatIsHeadline: 'Microneedling con Dermapen: qué es y para qué sirve',
    whatIsBody: 'El microneedling con Dermapen es un tratamiento estético facial que crea micro-canales controlados en la piel con agujas ultrafinas para estimular su renovación natural. Puede ayudar a mejorar la textura, la firmeza y la apariencia de marcas y poros dilatados. En Derma.M (West Palm Beach) se realiza por sesiones, con valoración médica previa.',
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
    whatIsBody: 'El HIFU Facial (Ultrasonido Focalizado de Alta Intensidad) es un protocolo estético de soporte profundo que trabaja mediante energía ultrasónica concentrada. Estimula las capas estructurales internas de la piel del rostro para generar un calor controlado que promueve la firmeza y elasticidad natural, logrando un aspecto más definido y firme sin procesos invasivos.',
    problemContextHeadline: 'LA FLACIDEZ CUTÁNEA EN EL ÓVALO FACIAL Y CUELLO',
    problemContextBody: 'El envejecimiento de la piel debilita las fibras elásticas que sostienen las facciones del rostro, provocando descolgamiento visible en la línea mandibular, mejillas y cuello. HIFU actúa en zonas profundas sin dañar la superficie externa de la piel, ideal para quienes buscan firmeza sin pasar por procesos quirúrgicos.',
    duration: '60 - 90 min',
    application: 'Cabina / Ultrasonido',
    anesthesia: 'Evaluación personalizada',
    resultado: 'Tensión cutánea y definición progresiva en 2 a 3 meses',
    whoForList: [
      'Personas con flacidez leve a moderada en el contorno del rostro, papada y cuello.',
      'Quienes desean un efecto de soporte y definición de contornos sin tiempo de recuperación.',
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
        answer: 'Sí. El HIFU facial no daña la epidermis externa, por lo que no requiere tiempo de recuperación ni cuidados especiales más allá de la hidratación y protección solar.'
      }
    ]
  },
  'peel-coreano': {
    whatIsBody: 'El peel coreano es un protocolo de renovación celular selectiva que asocia exfoliación enzimática e infusión botánica avanzada. Inspirado en los altos estándares de luminosidad orientales, este protocolo favorece el desprendimiento suave de células muertas sin indicar descamación agresiva, protegiendo en todo momento la barrera de humedad cutánea.',
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
    whatIsBody: 'La Radiofrecuencia Facial es un protocolo de estimulación térmica superficial que utiliza ondas electromagnéticas controladas. Su objetivo es generar una contracción inmediata del colágeno existente y promover la producción progresiva de nuevas fibras para suavizar líneas de expresión y atenuar la flacidez de forma cómoda.',
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
        answer: 'Sentirás un calor profundo muy agradable y relajante en las zonas tratadas, similar a un masaje con piedras calientes, sin dolor ni quemaduras.'
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
    whatIsBody: 'La Oxigenoterapia Facial es una bruma de hidratación y revitalización superficial. El protocolo consiste en la proyección de oxígeno de alta pureza combinado con principios activos nebulizados (vitaminas, péptidos y ácido hialurónico). Permite humectar la barrera protectora y devolver frescura al rostro de forma inmediata.',
    problemContextHeadline: 'PIEL DESHIDRATADA Y ESTRESADA POR FACTORES URBANOS',
    problemContextBody: 'El aire acondicionado, la falta de descanso y los hábitos cotidianos saturan y apagan las células de la piel, haciéndola lucir opaca y deshidratada. Este protocolo calma el rostro sensible, aporta oxigenación superficial profunda y restaura un aspecto descansado y fresco al instante.',
    duration: '45 min',
    application: 'Cabina / Nebulización',
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
        answer: 'Es la aplicación de un chorro de oxígeno puro enriquecido con sueros a alta presión. Se percibe como una brisa de viento frío, sumamente relajante y refrescante sobre la cara, sin dolor.'
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
        answer: 'Ninguno. No causa descamación ni enrojecimiento, por lo que puedes maquillarte o realizar tus actividades habituales inmediatamente después.'
      },
      {
        question: '¿Con qué frecuencia se aconseja realizarlo?',
        answer: 'Para mantener la piel hidratada frente al aire acondicionado y la polución, se recomienda una sesión cada 15 a 21 días.'
      }
    ]
  },
  'rejuvenecimiento-facial': {
    whatIsBody: 'El Rejuvenecimiento Facial en Derma.M es un protocolo integral personalizado concebido para mejorar la calidad global del rostro. Combina técnicas de vanguardia, como la bioestimulación de tejidos y la aparatología avanzada, para mejorar parámetros esenciales: elasticidad, textura, unificación del tono y soporte cutáneo.',
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
    whatIsBody: 'El Tratamiento de Acné es un protocolo higiénico y calmante diseñado específicamente para equilibrar las pieles propensas a brotes o imperfecciones constantes. Integra agentes purificantes, activos seborreguladores y tecnologías de luz estimulante para limpiar en profundidad los poros obstruidos, atenuar la apariencia irritada y prevenir marcas residuales.',
    problemContextHeadline: 'EL CICLO INFLAMATORIO Y CONGESTIÓN SEBÁCEA',
    problemContextBody: 'La sobreproducción de grasa natural, unida a la acumulación de células muertas en la entrada del poro, crea el entorno propicio para brotes recurrentes e inflamaciones cutáneas incómodas. Tratar la piel con delicadeza pero con gran precisión ayuda a despejar impurezas, controlar el brillo graso y restaurar la claridad cutánea.',
    duration: '60 min',
    application: 'Cabina / Purificación',
    anesthesia: 'No requiere',
    resultado: 'Reducción de imperfecciones and piel equilibrada',
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
    ]
  },
  'manchas-cicatrices': {
    whatIsBody: 'El tratamiento para Manchas y Cicatrices es un protocolo especializado que asocia agentes exfoliantes suaves, activos unificadores del tono y técnicas de estimulación de relieve. Su finalidad es suavizar la apariencia estética de las cicatrices residuales y atenuar las manchas causadas por el sol, devolviendo la uniformidad al rostro.',
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
        answer: 'Logramos una atenuación y aclarado visible muy significativo, unificando el tono del rostro. Para sostener el resultado, es obligatorio evitar el sol directo y usar bloqueador.'
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
    ]
  },
  'dermabracion-facial': {
    whatIsBody: 'La Dermabrasión Facial (o Microdermoabrasión con punta de diamante) consiste en una exfoliación física calibrada de las capas más superficiales de la piel. Remueve células muertas adheridas de forma precisa al tiempo que realiza una micro-succión que activa el flujo de drenaje local, favoreciendo suavidad y vitalidad cutáneas.',
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
        answer: 'No. El pulido es físico pero sumamente suave. Sentirás un ligero roce raspante y un masaje de succión muy cómodo en el rostro, sin dolor ni sangrado.'
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
    whatIsBody: 'El Plasma Frío es un innovador protocolo que utiliza energía gaseosa ionizada a temperatura ambiente. Al entrar en contacto con el rostro, el plasma ejerce una potente acción purificante y desinfectante del tejido, al tiempo que abre micro-canales provisionales e impulsa la restauración de pieles sensibilizadas o con desequilibrios.',
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
        answer: 'Cero enrojecimiento prolongado. Tu piel se sentirá calmada y fresca inmediatamente, permitiéndote retornar a tu rutina al instante.'
      }
    ]
  },
  'carboxiterapia-facial': {
    whatIsBody: 'La Carboxiterapia Facial es un protocolo avanzado que utiliza la aplicación controlada de dióxido de carbono de grado cosmético. Este proceso activa la oxigenación natural de la piel desde el interior, aumentando de forma inmediata la microcirculación local, facilitando la desinflamación del rostro y aportando un aspecto visiblemente fresco y descansado.',
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
    whatIsBody: 'El protocolo estético de Lipo 360 es un sistema de acompañamiento manual y moldeo del contorno de la cintura, abdomen y espalda. Combina técnicas de masaje suave y drenaje linfático superficial diseñadas para promover la firmeza de la piel y facilitar la desinflamación corporal tras variaciones de peso.',
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
        answer: 'No. Nuestros masajes son de presión superficial suave (drenaje linfático manual) diseñados para desinflamar de forma confortable, sin dolor ni tracción.'
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
    whatIsBody: 'Este protocolo combina técnicas manuales y copas de succión pulsada para realzar y reafirmar la silueta glútea. Nuestro estándar de vacío intermitente estimula la microcirculación local y tonifica los tejidos de forma cómoda, garantizando una piel firme y libre de marcas o hematomas molestos.',
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
        question: '¿El resultado de levantamiento es permanente?',
        answer: 'Los resultados se sostienen con hábitos activos y ejercicio en casa. Recomendamos realizar 1 sesión de mantenimiento mensual tras terminar el ciclo.'
      }
    ]
  },
  'marcacion-abdominal': {
    whatIsBody: 'Nuestro protocolo de marcación abdominal combina electroestimulación muscular de alta intensidad para tonificar las fibras del abdomen con radiofrecuencia superficial que tensa la piel. Esta doble acción ayuda a definir los contornos musculares y evitar la flacidez de forma 100% no invasiva y cómoda.',
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
    whatIsBody: 'El HIFU Corporal es un protocolo estético avanzado que utiliza energía de ultrasonido focalizada de alta intensidad. Actúa de forma controlada sobre los tejidos corporales profundos para promover la tensión y firmeza de la piel de forma progresiva, ideal para modelar contornos sin procesos quirúrgicos.',
    problemContextHeadline: 'FLACIDEZ INSTALADA EN ABDOMEN, MUSLOS O BRAZOS',
    problemContextBody: 'Las pérdidas repentinas de peso o la madurez de la piel suelen dejar tejidos corporales laxos y sin soporte, dando un aspecto irregular. El HIFU actúa específicamente donde es necesario aportar un tensado profundo desde adentro, sin reposo posoperatorio.',
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
        answer: 'Cero tiempo de reposo. Puedes regresar al trabajo o realizar actividades físicas inmediatamente después de tu visita.'
      }
    ]
  },
  'corrientes-rusas': {
    whatIsBody: 'El tratamiento de Corrientes Rusas emplea electroestimulación de frecuencia media regulable. Emite impulsos controlados dirigidos a grupos musculares seleccionados para generar contracciones rítmicas. Esto asiste en la definición del contorno, tonificación y drenaje estético del músculo de forma cómoda.',
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
    whatIsBody: 'Este protocolo multidimensional asocia tecnologías de estimulación térmica, técnicas de masaje y activos de renovación cutánea. Su finalidad es combatir de forma sinérgica la apariencia de la celulitis (piel de naranja) y estimular la elasticidad natural en zonas con estrías para recuperar una textura suave.',
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
    whatIsBody: 'La Carboxiterapia Corporal utiliza la aplicación controlada de CO2 cosmético para mejorar la apariencia de la piel de naranja, la pesadez en las extremidades y la falta de firmeza corporal. Al activar la oxigenación y el flujo circulatorio superficial, asiste al cuerpo en sus procesos naturales de drenaje.',
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
    whatIsBody: 'La maderoterapia corporal es una técnica manual depurada basada en masajes con instrumentos esculpidos en madera noble de pino. Trabaja a través de deslizamientos rítmicos controlados que ejercen presiones anatómicas capaces de favorecer la circulación, drenar la retención de líquidos y asistir al moldeo de contornos.',
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
    whatIsBody: 'La Depilación Láser es un procedimiento de eliminación progresiva del vello corporal y facial fundado en el principio de fototermólisis selectiva. La luz emitida por el cabezal viaja canalizada por el pigmento del vello hasta atenuar el folículo de forma gradual, logrando una piel suave y libre de vello sin alterar los tejidos circundantes.',
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
        question: '¿Cuántas sesiones se necesitan para eliminar el vello?',
        answer: 'Recomendamos un ciclo inicial de 6 a 8 sesiones, espaciadas cada 4 a 6 semanas, para tratar el vello en sus fases de crecimiento activo.'
      },
      {
        question: '¿Es segura la depilación en pieles trigueñas o bronceadas?',
        answer: 'Sí. Calibramos los parámetros del láser de forma personalizada según tu fototipo para proteger la piel y evitar alteraciones del pigmento.'
      },
      {
        question: '¿Se elimina el vello de forma definitiva para siempre?',
        answer: 'Logramos una reducción duradera del 85% al 90% del vello. Los folículos debilitados pueden requerir una sesión de retoque anual.'
      },
      {
        question: '¿Puedo rasurarme entre sesiones de láser?',
        answer: 'Sí. Se permite rasuradora manual convencional. Debes evitar arrancar el vello de raíz con cera o pinzas para mantener activo el bulbo folicular.'
      }
    ]
  },
  ipl: {
    whatIsBody: 'El IPL (Luz Pulsada Intensa) es una terapia lumínica versátil encargada de acompañar la unificación general del tono del rostro y cuerpo. Trabaja emitiendo un espectro amplio de longitudes de onda capaces de atenuar de forma selectiva enrojecimientos superficiales y acumulaciones irregulares de pigmento (manchas solares), además de incentivar la luminosidad de la piel.',
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
    whatIsBody: 'El Blanqueamiento Dental Estético consiste en un protocolo destinado a aclarar de forma segura la tonalidad de las piezas dentales. Empleamos geles aclaradores certificados que actúan diluyendo manchas superficiales y pigmentaciones acumuladas en el esmalte sin desgastar ni alterar la estructura dental.',
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
    whatIsBody: 'La Limpieza Dental Estética es un protocolo de mantenimiento e higiene profunda. Consiste en la remoción de placa y sarro acumulados para recuperar un esmalte limpio, pulido y fresco mediante instrumental ultrasónico suave y copas de pulido estético.',
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
    whatIsBody: 'El Tratamiento Capilar es un protocolo avanzado de bioestimulación y nutrición del cuero cabelludo. Ofrece la aplicación e infusión de péptidos enriquecedores, aminoácidos estructurales y nutrientes en la raíz folicular para fortalecer el bulbo capilar y atenuar la fragilidad y pérdida progresiva de densidad del cabello.',
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
        answer: 'Utilizamos aplicadores superficiales de precisión que realizan micro-aperturas sumamente tolerables y cómodas, sin dolor ni sangrado.'
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
    ]
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

