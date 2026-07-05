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
      benefits: found.benefits || [],
      ideal: found.ideal || '',
      image: found.image || `/assets/images/treatments/${getTreatmentAssetFolder(categoryKey)}/${slug}/hero.jpg`,
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
    whatIsBody: 'Hidrofacial es un tratamiento estético avanzado de limpieza, exfoliación e hidratación profunda simultáneas. Mediante un sistema de succión de vacío combinado con la infusión activa de sueros cargados de nutrientes, antioxidantes y ácido hialurónico, el protocolo limpia los poros de forma exhaustiva mientras satura la superficie celular.',
    problemContextHeadline: 'LA CONGESTIÓN DIARIA DISMINUYE LA LUMINOSIDAD DE TU ROSTRO',
    problemContextBody: 'El sebo acumulado, la exposición solar continua y la polución crean una película que obstruye los folículos y ralentiza el proceso de renovación de la piel. Esto da como resultado un rostro apagado, deshidratación profunda y una textura áspera que no responde a la rutina habitual de cuidado en casa.',
    duration: '45 - 60 min',
    application: 'Cabina / Tópica',
    anesthesia: 'No requiere',
    resultado: 'Revitalización y humectación inmediatas',
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
    whatIsBody: 'El microneedling con Dermapen es una terapia de inducción de colágeno altamente precisa. Consiste en realizar micro-perforaciones controladas en la epidermis utilizando agujas ultrafinas estériles de alta velocidad. Estos micro-canales activan las cascadas naturales de curación de la piel y maximizan la absorción de activos regeneradores aplicados durante la sesión.',
    problemContextHeadline: 'LA PERDIDA PROGRESIVA DE SOPORTE ESTRUCTURAL DE LA PIEL',
    problemContextBody: 'Con los años y el daño ambiental, la producción interna de colágeno disminuye, abriendo paso a poros dilatados, líneas finas visibles y marcas resistentes de acné. El microneedling despierta de forma mecánica la capacidad regenerativa de la dermis para restaurar la firmeza y suavizar imperfecciones de relieve.',
    duration: '45 - 60 min',
    application: 'Cabina / Facial',
    anesthesia: 'Anestesia tópica',
    resultado: 'Atuenuación de líneas y textura de forma progresiva',
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
        answer: 'Evitamos pasar las microagujas sobre brotes activos e inflamados para prevenir la propagación de imperfecciones, enfocándonos en las zonas sanas del rostro.'
      }
    ]
  },
  'hifu-facial': {
    whatIsBody: 'El HIFU Facial (Ultrasonido Focalizado de Alta Intensidad) es un método de soporte facial profundo de origen estético que trabaja mediante energía ultrasónica concentrada. Estimula las capas estructurales internas del rostro (incluido el SMAS, la capa tratada en cirugías estéticas) para generar calor controlado y promover la termogénesis de fibras de colágeno, logrando un efecto de soporte y firmeza.',
    problemContextHeadline: 'LA FLACIDEZ CUTÁNEA EN EL ÓVALO FACIAL Y CUELLO',
    problemContextBody: 'El envejecimiento de la piel debilita las fibras elásticas que sostienen las facciones del rostro, provocando descolgamiento visible en la línea mandibular, mejillas y cuello. HIFU actúa en zonas profundas sin dañar la superficie epidérmica, ideal para quienes buscan firmeza sin pasar por procesos quirúrgicos.',
    duration: '60 - 90 min',
    application: 'Cabina / Ultrasonido',
    anesthesia: 'Evaluación personalizada',
    resultado: 'Tensión cutánea y definición progresiva en 2 a 3 meses',
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
    whatIsBody: 'El peel coreano es un tratamiento de renovación celular selectiva que asocia exfoliación enzimática e infusión botánica avanzada. Inspirado en los altos estándares de luminosidad orientales, este protocolo favorece el desprendimiento suave del estrato córneo sin inducir descamación agresiva, protegiendo en todo momento la barrera de humedad cutánea.',
    problemContextHeadline: 'LA OPACIDAD FACIAL POR ACUMULACIÓN DE IMPUREZAS',
    problemContextBody: 'Muchos exfoliantes convencionales dañan el manto hidrolipídico natural, generando enrojecimiento y descamación molesta. El tratamiento de piel coreano ofrece una renovación controlada para devolver el aspecto fresco y el característico efecto de "piel de vidrio" (glass skin) sin agresión y con una recuperación inmediata.',
    duration: '45 - 60 min',
    application: 'Cabina / Tópico profesional',
    anesthesia: 'No requiere',
    resultado: 'Efecto luminoso inmediato',
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
    ]
  },
  'radiofrecuencia-facial': {
    whatIsBody: 'La Radiofrecuencia Facial es una tecnología de rejuvenecimiento térmico no invasivo. Emplea ondas electromagnéticas que calientan de manera segura y controlada las capas profundas de la dermis. Este incremento controlado del calor promueve la contracción inmediata de las fibras de colágeno existentes y estimula los fibroblastos para producir nuevas proteínas de sostén.',
    problemContextHeadline: 'CANSANCIO VISIBLE Y PÉRDIDA DE TONO EPIDÉRMICO',
    problemContextBody: 'La menor elasticidad debida al estrés cutáneo favorece que las líneas de expresión se marquen de manera fija y permanente en las zonas gesticulares del rostro. Mediante un aumento térmico preciso, estimulamos la microcirculación y elasticidad cutánea para suavizar facciones y atenuar el aspecto fatigado.',
    duration: '40 - 50 min',
    application: 'Cabina / Electromagnética',
    anesthesia: 'No requiere',
    resultado: 'Atuenuación de líneas y sensación turgente',
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
    whatIsBody: 'La Oxigenoterapia Facial es una bruma de hidratación y revitalización celular. El tratamiento consiste en la proyección a alta presión de oxígeno con un porcentaje de pureza superior combinado con principios activos nebulizados (vitaminas, péptidos y ácido hialurónico). Permite humectar la barrera protectora de la piel y devolverle frescura al rostro de forma inmediata.',
    problemContextHeadline: 'PIEL DESHIDRATADA Y ESTRESADA POR FACTORES URBANOS',
    problemContextBody: 'El aire acondicionado, la falta de descanso y los hábitos cotidianos saturan y asfixian las células de la piel, haciéndola lucir opaca, seca y reactiva. Este protocolo calma el rostro sensible, aporta oxigenación dérmica profunda y restaura un aspecto descansado y fresco al instante.',
    duration: '45 min',
    application: 'Cabina / Nebulización',
    anesthesia: 'No requiere',
    resultado: 'Suavidad y frescura tras finalizar el tratamiento',
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
    whatIsBody: 'El Rejuvenecimiento Facial en Derma.M es un protocolo integral personalizado concebido para mejorar la calidad global del rostro. Combina técnicas de vanguardia, como la bioestimulación de tejidos o la aparatología avanzada, para mejorar parámetros esenciales: elasticidad, textura, unificación del tono y soporte de la dermis.',
    problemContextHeadline: 'SIGNOS GLOBALES DE ENVEJECIMIENTO CRÓNICO Y SOLAR',
    problemContextBody: 'La combinación de fotoenvejecimiento y desgaste genético no afecta solo una zona del rostro, sino que se manifiesta en flacidez media, líneas finas extendidas y pérdida generalizada del brillo. Un enfoque integrado permite abordar múltiples necesidades simultáneamente para un rejuvenecimiento armónico y muy natural.',
    duration: '60 - 75 min',
    application: 'Cabina / Enfoque multi-técnico',
    anesthesia: 'Según protocolo elegido',
    resultado: 'Mejora progresiva de la calidad total de la piel',
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
    whatIsBody: 'El Tratamiento de Acné es un protocolo higiénico y calmante diseñado específicamente para equilibrar las pieles propensas a brotes o imperfecciones constantes. Integra agentes purificantes, activos seborreguladores y tecnologías de luz estimulante para limpiar en profundidad los poros obstruidos, bajar el aspecto irritado y prevenir marcas residuales.',
    problemContextHeadline: 'EL CICLO INFLAMATORIO Y CONGESTIÓN SEBÁCEA',
    problemContextBody: 'La sobreproducción de grasa natural, unida a la hiperqueratosis folicular, crea el entorno propicio para brotes recurrentes e inflamaciones cutáneas incómodas. Tratar la piel con delicadeza pero con gran precisión clínica ayuda a despejar impurezas, controlar el brillo graso y restaurar la claridad y confianza cutánea.',
    duration: '60 min',
    application: 'Cabina / Purificación',
    anesthesia: 'No requiere',
    resultado: 'Reducción de imperfecciones y piel equilibrada',
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
    whatIsBody: 'El tratamiento para Manchas y Cicatrices es un protocolo especializado que asocia terapias exfoliantes, activos despigmentantes y técnicas de bioestimulación de relieve. Su finalidad es unificar el tono cutáneo desvaído y atenuar la apariencia estética de las cicatrices por acné o traumatismos menores, apoyando la textura lisa original.',
    problemContextHeadline: 'DISCROMÍAS Y TEXTURA CRATERIFORME EN LA PIEL',
    problemContextBody: 'Las irregularidades debido al sol (manchas) o las marcas permanentes tras imperfecciones curadas alteran la refracción de luz sobre la cara, dando un aspecto irregular o cansado. Mediante una estimulación regeneradora puntual, apoyamos la renovación controlada y la uniformización gradual de la piel afectada.',
    duration: '50 - 60 min',
    application: 'Cabina / Focalizado',
    anesthesia: 'Según protocolo sugerido',
    resultado: 'Tono visiblemente más homogéneo y relieve suavizado',
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
    whatIsBody: 'La Dermabrasión Facial (o Microdermoabrasión con punta de diamante) consiste en una exfoliación física calibrada de las capas más superficiales de la epidermis. Remueve células muertas adheridas de forma precisa al tiempo que realiza una micro-succión que activa el flujo linfático local, favoreciendo suavidad dérmica y vitalidad profundas.',
    problemContextHeadline: 'LA CASTRACIÓN CUTÁNEA DE LAS CÉLULAS ENVEJECIDAS',
    problemContextBody: 'El proceso natural de recambio dérmico va perdiendo velocidad, lo que genera que las células muertas se apilen en la capa superficial, obstruyendo tratamientos y apagando el rostro. Un pulido mecánico controlado deja la superficie libre de asperezas y lista para asimilar nutrientes en plenitud.',
    duration: '45 min',
    application: 'Cabina / Mecánica dermoestética',
    anesthesia: 'No requiere',
    resultado: 'Suavidad y textura sedosa desde la primera sesión',
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
    whatIsBody: 'El Plasma Frío es un innovador protocolo que utiliza energía gaseosa ionizada a temperatura ambiente. Al entrar en contacto con el rostro, el plasma ejerce una potente acción purificante y desinfectante del tejido, al tiempo que abre microporos provisionales e impulsa la restauración celular de pieles sensibilizadas o con desequilibrios.',
    problemContextHeadline: 'SENSIBILIDAD, INFLAMACIÓN O BROTES RECURRENTES',
    problemContextBody: 'Muchas pieles reactivas no toleran las exfoliaciones ácidas fuertes o el calor de ciertos láseres, lo que dificulta tratar impurezas o acné. El plasma frío proporciona una alternativa libre de calor que equilibra, desinfecta y estimula la barrera protectora de la piel con total confort.',
    duration: '30 - 45 min',
    application: 'Cabina / Gas ionizado',
    anesthesia: 'No requiere',
    resultado: 'Alivio visible y purificación folicular calmada',
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
    whatIsBody: 'La Carboxiterapia Facial se basa en la aplicación estética controlada de dióxido de carbono medicinal (CO2). Este flujo genera un incremento súbito de oxígeno local (Efecto Bohr), aumentando la microcirculación tisular, eliminando toxinas retenidas e impulsando el soporte celular profundo.',
    problemContextHeadline: 'MICROCIRCULACIÓN DEFICIENTE Y ASPECTO CONGESTIONADO',
    problemContextBody: 'La mala oxigenación en áreas frágiles del rostro, como la órbita ocular u óvalo de la mandíbula, produce ojeras marcadas, retención de líquidos y pérdida de brillo saludable. La carboxiterapia estimula de forma activa la red vascular del cutis para un drenaje revitalizador inmediato.',
    duration: '30 - 40 min',
    application: 'Cabina / Oxigenación tisular',
    anesthesia: 'No requiere',
    resultado: 'Piel desinflamada y contornos revitalizados',
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
    whatIsBody: 'El protocolo estético de Lipo 360 en Derma.M es un sistema de acompañamiento y moldeo del contorno abdominal, costados y espalda. Combina terapias no invasivas diseñadas para mejorar la firmeza cutánea, potenciar el drenaje circulatorio e incentivar la correcta adhesión de los tejidos cutáneos.',
    problemContextHeadline: 'IRREGULARIDAD DE CONTORNOS Y PÉRDIDA DE ARMONÍA CORPORAL',
    problemContextBody: 'El cuerpo acumula de forma caprichosa ciertos volúmenes grasos o líquido intersticial difíciles de tratar solo con dieta. Un protocolo estético estructurado favorece la remodelación global del contorno para suavizar relieves y potenciar una silueta más equilibrada.',
    duration: '60 - 90 min',
    application: 'Cabina / Corporal',
    anesthesia: 'No requiere',
    resultado: 'Silueta más moldeada y contornos más definidos',
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
    whatIsBody: 'El Levantamiento de Glúteos consiste en un conjunto de técnicas manuales y aparatología estimulante enfocadas en reafirmar, tonificar y realzar la silueta glútea. Combina drenaje local, estimulación con copas dermoestéticas y corrientes reafirmantes para aportar turgencia y definición.',
    problemContextHeadline: 'PÉRDIDA DE VOLUMEN Y FLACIDEZ EN LA ZONA POSTERIOR',
    problemContextBody: 'Factores sedentarios o cambios de peso bruscos debilitan las fibras de sostén de los tejidos glúteos de forma progresiva. El tratamiento de glúteos ayuda a modelar la forma, activar la circulación muscular local y devolver un aspecto más elevado y tonificado.',
    duration: '60 min',
    application: 'Cabina / Aparatología y drenaje',
    anesthesia: 'No requiere',
    resultado: 'Sensación de firmeza y apariencia estilizada',
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
    whatIsBody: 'La Marcación Abdominal en Derma.M asocia tecnologías turgentes de alta frecuencia y técnicas de masaje estético para realzar visualmente la definición natural de las líneas del abdomen. Ideal para esculpir de forma localizada, potenciar la firmeza de la dermis y atenuar acúmulos grasos mínimos.',
    problemContextHeadline: 'DIFICULTAD PARA VISUALIZAR EL TONO RECTO ABDOMINAL',
    problemContextBody: 'Incluso manteniendo hábitos saludables y actividad física regular, una pequeña capa de líquido o grasa puede opacar la estética de las líneas abdominales. Ofrecemos asistencia no invasiva específica para desinflar la zona y realzar la silueta natural.',
    duration: '50 - 75 min',
    application: 'Cabina / Definición no invasiva',
    anesthesia: 'No requiere',
    resultado: 'Definición visual y firmeza en la zona tratada',
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
    whatIsBody: 'El HIFU Corporal utiliza ondas focalizadas de ultrasonido de alta intensidad direccionadas hacia las capas más profundas de la grasa y la dermis corporal. Provoca una contracción selectiva a nivel celular para modelar perímetros y regenerar el colágeno corporal, combatiendo la flacidez flácida estructural.',
    problemContextHeadline: 'FLACIDEZ INSTALADA EN ABDOMEN, MUSLOS O BRAZOS',
    problemContextBody: 'Las pérdidas repentinas de peso o la madurez de la piel suelen dejar tejidos corporales laxos y sin soporte, dando un aspecto irregular. El HIFU actúa específicamente donde es necesario aportar un tensado profundo desde adentro, sin reposo postoperatorio.',
    duration: '60 - 90 min',
    application: 'Cabina / Ultrasonido profundo',
    anesthesia: 'No requiere',
    resultado: 'Reducción de flacidez corporal progresiva',
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
    whatIsBody: 'El tratamiento de Corrientes Rusas emplea electroestimulación de frecuencia media regulable. Emite impulsos eléctricos controlados directo a la masa muscular profunda para generar una contracción involuntaria, tónica e isométrica. Esto asiste la definición del contorno, tonificación y drenaje del músculo.',
    problemContextHeadline: 'FALTA DE TONO MUSCULAR Y ASISTENCIA REAFIRMANTE',
    problemContextBody: 'La inactividad o debilidad en grupos musculares específicos, como glúteos o abdomen, complica obtener una apariencia tónica o firme mediante ejercicio regular únicamente. Las corrientes rusas incrementan el trabajo de la fibra muscular, complementando tu rutina.',
    duration: '45 min',
    application: 'Cabina / Electroestimulación',
    anesthesia: 'No requiere',
    resultado: 'Tonificación, drenaje y activación profunda',
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
    whatIsBody: 'Este protocolo multidimensional asocia aparatología térmica, masoterapia drenante y activos de renovación epidérmica. Diseñado con rigor dermoestético, combate de forma sinérgica la acumulación de adipocitos (celulitis) y estimula el relleno natural de colágeno en estrías cutáneas para restaurar una textura lisa.',
    problemContextHeadline: 'TEXTURA IRREGULAR Y MARCAS DE ESTIRAMIENTO DÉRMICO',
    problemContextBody: 'La acumulación localizada de toxinas o la rotura de fibras elásticas por cambios volumétricos dejan relieves con aspecto de piel de naranja o líneas cicatrizales finas (estrías). Abordar este desafío desde la circulación profunda y reestructuración dérmica es clave para alisar la zona.',
    duration: '60 min',
    application: 'Cabina / Enfoque combinado',
    anesthesia: 'No requiere',
    resultado: 'Suavizado progresivo de marcas y relieves corporales',
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
    whatIsBody: 'La Carboxiterapia Corporal utiliza micro-inyecciones de CO2 medicinal para tratar la piel de naranja, acumulación grasa localizada y flacidez corporal. Al mejorar intensamente la oxigenación y circulación capilar, asiste al cuerpo en sus procesos naturales de eliminación linfática adiposa.',
    problemContextHeadline: 'CONGESTIÓN EN TEJIDOS Y GRASA FOCALIZADA',
    problemContextBody: 'Una microcirculación deficiente favorece la retención de agua y entorpece la correcta eliminación de depósitos lipídicos en zonas Rebeldes. El suministro estético de CO2 reactiva de inmediato la microcirculación para oxigenar las fibras y alisar relieves.',
    duration: '35 - 50 min',
    application: 'Cabina / Estética de reflujo CO2',
    anesthesia: 'No requiere',
    resultado: 'Alisado de la piel de naranja y mejor microcirculación',
    faq: [
      {
        question: '¿Es peligroso que el gas de carboxiterapia quede en mi cuerpo?',
        answer: 'No. El gas CO2 de grado médico es inofensivo y se absorbe por completo de forma natural en un lapso de 1 a 3 horas, eliminándose al respirar.'
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
    whatIsBody: 'La maderoterapia corporal es una técnica manual depurada basada en masajes con instrumentos esculpidos en madera noble de pino u otras maderas terapéuticas. Trabaja a través de deslizamientos rítmicos controlados que ejercen presiones anatómicas capaces de movilizar toxinas acumuladas, drenar retención de líquidos y asistir al moldeo de contornos.',
    problemContextHeadline: 'RETENCIÓN DE LÍQUIDOS, TOXINAS Y TENSIÓN ACUMULADA',
    problemContextBody: 'La pesadez y las irregularidades en la textura del cuerpo derivan habitualmente de una acumulación excesiva de linfa obstruida o cansancio circulatorio. Los de estímulos anatómicos de madera liberan contracturas del tejido, dinamizan el flujo de drenaje corporal y aportan contornos fluidos.',
    duration: '50 - 60 min',
    application: 'Cabina / Manual / Maderas',
    anesthesia: 'No requiere',
    resultado: 'Drenaje inmediato, ligereza corporal y sensación relajante',
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
    whatIsBody: 'La Depilación Láser es un procedimiento de eliminación progresiva del vello corporal y facial fundado en el principio de fototermólisis selectiva. La luz emitida por el cabezal viaja canalizada por la melanina del vello hasta convertir su energía en calor, inhabilitando progresivamente el folículo piloso sin alterar la dermis sana circundante.',
    problemContextHeadline: 'EL DESAFÍO DEL VELLO CORPORAL NO DESEADO Y LA FOLICULITIS',
    problemContextBody: 'El afeitado tradicional o la cera convencional irritan repetidamente los poros, provocando vellos enconados (foliculitis), aspereza crónica y hiperpigmentación folicular molesta. El láser ofrece una vía definitiva que refina la textura de la piel volviéndola sedosa y libre de vello de forma gradual.',
    duration: '20 - 60 min (según zona)',
    application: 'Cabina / Tecnología láser de vanguardia',
    anesthesia: 'No requiere (incluye frío integrado)',
    resultado: 'Reducción notable del vello sesión tras sesión',
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
    whatIsBody: 'El IPL (Luz Pulsada Intensa) es una terapia lumínica versátil encargada de acompañar la unificación general del cutis y cuerpo. Trabaja emitiendo un espectro amplio de longitudes de onda capaces de atenuar de forma selectiva imperfecciones vasculares locales y acumulaciones irregulares de melanina (manchas solares), además de incentivar el rejuvenecimiento dérmico.',
    problemContextHeadline: 'DAÑO SOLAR, MANCHAS EN LA EDAD Y TONO DISCRÓMICO',
    problemContextBody: 'La acumulación acumulada de radiación UV da paso a pecas solares marcadas, enrojecimientos capilares finos y apagamiento visual crónico de la piel. El tratamiento por pulsación lumínica rompe los pigmentos focales oscuros y promueve una unificación global en pocas sesiones.',
    duration: '40 - 50 min',
    application: 'Cabina / Luz Pulsada de Alta Gama',
    anesthesia: 'No requiere',
    resultado: 'Piel más uniforme, luminosa y con menos pigmentaciones visibles',
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
  'co2-laser': {
    whatIsBody: 'El Láser CO2 Fraccionado es un estándar estético de primer nivel para la renovación profunda de la epidermis. Emplea un haz de luz infrarroja dividida en miles de puntos microscópicos que retiran de manera controlada una sección fraccional de la capa superficial cutánea, impulsando una regeneración acelerada de la barrera de colágeno subyacente.',
    problemContextHeadline: 'TEXTURA ALTAMENTE IRREGULAR, CICATRICES PROFUNDAS O LINEAS DE EDAD',
    problemContextBody: 'Tanto marcas cicatrizales atróficas como arrugas finas e irregularidades profundas no logran remediarse con exfoliaciones leves ordinarias. Un protocolo energético fraccionado asiste a la renovación celular profunda de forma idónea, mejorando drásticamente el tono y superficie.',
    duration: '45 - 60 min',
    application: 'Cabina / Láser fraccionado ablativo',
    anesthesia: 'Tópica o según indicación profesional',
    resultado: 'Efecto renovador notable con piel lisa a mediano plazo',
    faq: [
      {
        question: '¿Qué downtime o reposo requiere el láser CO2?',
        answer: 'Requiere de 3 a 5 días de enrojecimiento y descamación fina y seca. Debes evitar el maquillaje y mantener la piel altamente hidratada durante este periodo.'
      },
      {
        question: '¿Es doloroso el tratamiento de renovación profunda?',
        answer: 'Aplicamos previamente un gel de confort de alta potencia en la cabina para garantizar que la sesión sea sumamente tolerable y cómoda.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan para cicatrices?',
        answer: 'Se aconseja realizar de 1 a 3 sesiones al año, espaciadas cada 6 u 8 semanas, dependiendo de la profundidad de las marcas.'
      },
      {
        question: '¿Ayuda a tensar la piel flácida corporal?',
        answer: 'Sí. El haz fraccionado estimula una intensa regeneración de colágeno profundo, mejorando la firmeza y textura arrugada del abdomen o muslos.'
      },
      {
        question: '¿Cuándo se aprecian los resultados finales de textura?',
        answer: 'Notarás suavidad a partir del décimo día. El proceso de colágeno nuevo continuará mejorando el relieve y firmeza de la piel hasta por 90 días.'
      }
    ]
  },

  // --- DENTAL ESTÉTICO ---
  'blanqueamiento-dental': {
    whatIsBody: 'El Blanqueamiento Dental Estético en Derma.M consiste en un protocolo destinado a aclarar la tonalidad natural del esmalte dental de forma segura. Empleamos un agente aclarador certificado que se activa de forma idónea para diluir manchas intrínsecas e impregnaciones cromáticas de dientes sin desgastar ni alterar el esmalte.',
    problemContextHeadline: 'OPACIDAD Y PIGMENTACIÓN ADQUIRIDA EN LAS PIEZAS DENTALES',
    problemContextBody: 'El tabaco, café, té y ciertos pigmentos de alimentos naturales van creando una fina veladura opaca sobre el esmalte, oscureciendo tu sonrisa e influyendo en la percepción de frescura gesticular. El blanqueamiento te devuelve un tono más brillante, blanco y armónico compatible con tu simetría facial.',
    duration: '45 - 60 min',
    application: 'Cabina dermoestética dental',
    anesthesia: 'No requiere',
    resultado: 'Dientes visiblemente más claros y brillantes tras el tratamiento',
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
    ]
  },
  'limpieza-dental': {
    whatIsBody: 'La Limpieza Dental Estética es un protocolo de mantenimiento e higiene gesticular en profundidad. Consiste en la eliminación de cálculo duro (sarro acumulado) y biopelícula blanda para recuperar un esmalte limpio, pulido y fresco mediante instrumental de ultrasonido preciso y pulidores específicos.',
    problemContextHeadline: 'ACUMULO DE CÁLCULO E INFLAMACIÓN GINGIVAL DISCRETA',
    problemContextBody: 'El cepillado doméstico regular no logra retirar por completo el sarro duro calcificado en el cuello de las piezas dentales o entre espacios interproximales profundos. Una limpieza experta remueve acumulaciones, puliendo la sonrisa y regalando una profunda sensación de ligereza y frescor bucal.',
    duration: '45 min',
    application: 'Cabina dermoestética dental',
    anesthesia: 'No requiere',
    resultado: 'Sarro removido, esmalte pulido y frescura gingival total',
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
    ]
  },

  // --- CAPILAR ---
  'tratamiento-capilar': {
    whatIsBody: 'El Tratamiento Capilar enfocado de Derma.M es un protocolo dermoestético de bioestimulación y nutrición del cuero cabelludo. Ofrece una aplicación integral o infusión de péptidos enriquecedores, aminoácidos estructurales y estimulantes locales circulatorios en la raíz folicular para fortalecer visualmente el bulbo capilar y atenuar la fragilidad y pérdida progresiva de densidad del cabello.',
    problemContextHeadline: 'CABELLO DEBILITADO, CAÍDA ESTACIONAL Y PÉRDIDA DE VOLUMEN',
    problemContextBody: 'Tanto desequilibrios de estrés temporales como agentes ambientales agresivos fatigan al folículo piloso, haciendo que el pelo nazca más delgado, frágil o se desprenda prematuramente. El aporte localizado dermoestético nutre y oxigena en profundidad la base para prolongar la calidad y fase de anclaje de la hebra capilar.',
    duration: '45 - 60 min',
    application: 'Cabina / Estimulación dermo-capilar',
    anesthesia: 'No requiere o anestesia tópica mínima',
    resultado: 'Fragilidad disminuida y cabello fortalecido progresivamente',
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
      'ipl',
      'co2-laser'
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
        image,
        protocolImage: `${treatmentAssetBase}/protocol.jpg`,
        quickFacts,
        benefits,
        ideal,
        specs,
        faqHeadline: 'PREGUNTAS FRECUENTES',
        faq,
        related,
        whatIs: {
          eyebrow: 'EL PROTOCOLO',
          headline: `TRATAMIENTO DE ${title}`,
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
        }
      };
    });
  });

  return compiled;
};

export const treatmentPages = compileTreatments();

