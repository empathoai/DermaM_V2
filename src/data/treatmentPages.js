import { categoryPages } from './categoryPages';

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
      image: found.image || `/assets/images/treatments/${categoryKey === 'laserYLuz' ? 'laser-y-luz' : categoryKey}/${slug}/hero.jpg`,
      route: found.to || found.link || `/${categoryKey === 'laserYLuz' ? 'laser-y-luz' : categoryKey === 'dentalEstetico' ? 'dental-estetico' : categoryKey}/${slug}`,
      disclaimer: found.disclaimer || 'Requiere valoración previa para garantizar tu seguridad y resultados.'
    };
  }

  // Pure fallback if not found in categoryPages
  return {
    title: slug.replace(/-/g, ' ').toUpperCase(),
    description: 'Protocolo de cuidado estético profesional integral en Derma.M.',
    benefits: ['Cuidado profesional', 'Enfoque personalizado', 'Bienestar visible'],
    ideal: 'Ideal si buscas un cuidado personalizado y de alta calidad.',
    image: `/assets/images/treatments/${categoryKey === 'laserYLuz' ? 'laser-y-luz' : categoryKey}/${slug}/hero.jpg`,
    route: `/${categoryKey === 'laserYLuz' ? 'laser-y-luz' : categoryKey === 'dentalEstetico' ? 'dental-estetico' : categoryKey}/${slug}`,
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
    resultado: 'Revitalización y humectación inmediatas'
  },
  microneedling: {
    whatIsBody: 'El microneedling con Dermapen es una terapia de inducción de colágeno altamente precisa. Consiste en realizar micro-perforaciones controladas en la epidermis utilizando agujas ultrafinas estériles de alta velocidad. Estos micro-canales activan las cascadas naturales de curación de la piel y maximizan la absorción de activos regeneradores aplicados durante la sesión.',
    problemContextHeadline: 'LA PERDIDA PROGRESIVA DE SOPORTE ESTRUCTURAL DE LA PIEL',
    problemContextBody: 'Con los años y el daño ambiental, la producción interna de colágeno disminuye, abriendo paso a poros dilatados, líneas finas visibles y marcas resistentes de acné. El microneedling despierta de forma mecánica la capacidad regenerativa de la dermis para restaurar la firmeza y suavizar imperfecciones de relieve.',
    duration: '45 - 60 min',
    application: 'Cabina / Facial',
    anesthesia: 'Anestesia tópica',
    resultado: 'Atuenuación de líneas y textura de forma progresiva'
  },
  'hifu-facial': {
    whatIsBody: 'El HIFU Facial (Ultrasonido Focalizado de Alta Intensidad) es un método de soporte facial profundo de origen estético que trabaja mediante energía ultrasónica concentrada. Estimula las capas estructurales internas del rostro (incluido el SMAS, la capa tratada en cirugías estéticas) para generar calor controlado y promover la termogénesis de fibras de colágeno, logrando un efecto de soporte y firmeza.',
    problemContextHeadline: 'LA FLACIDEZ CUTÁNEA EN EL ÓVALO FACIAL Y CUELLO',
    problemContextBody: 'El envejecimiento de la piel debilita las fibras elásticas que sostienen las facciones del rostro, provocando descolgamiento visible en la línea mandibular, mejillas y cuello. HIFU actúa en zonas profundas sin dañar la superficie epidérmica, ideal para quienes buscan firmeza sin pasar por procesos quirúrgicos.',
    duration: '60 - 90 min',
    application: 'Cabina / Ultrasonido',
    anesthesia: 'Evaluación personalizada',
    resultado: 'Tensión cutánea y definición progresiva en 2 a 3 meses'
  },
  'peel-coreano': {
    whatIsBody: 'El peel coreano es un tratamiento de renovación celular selectiva que asocia exfoliación enzimática e infusión botánica avanzada. Inspirado en los altos estándares de luminosidad orientales, este protocolo favorece el desprendimiento suave del estrato córneo sin inducir descamación agresiva, protegiendo en todo momento la barrera de humedad cutánea.',
    problemContextHeadline: 'LA OPACIDAD FACIAL POR ACUMULACIÓN DE IMPUREZAS',
    problemContextBody: 'Muchos exfoliantes convencionales dañan el manto hidrolipídico natural, generando enrojecimiento y descamación molesta. El tratamiento de piel coreano ofrece una renovación controlada para devolver el aspecto fresco y el característico efecto de "piel de vidrio" (glass skin) sin agresión y con una recuperación inmediata.',
    duration: '45 - 60 min',
    application: 'Cabina / Tópico profesional',
    anesthesia: 'No requiere',
    resultado: 'Efecto luminoso inmediato'
  },
  'radiofrecuencia-facial': {
    whatIsBody: 'La Radiofrecuencia Facial es una tecnología de rejuvenecimiento térmico no invasivo. Emplea ondas electromagnéticas que calientan de manera segura y controlada las capas profundas de la dermis. Este incremento controlado del calor promueve la contracción inmediata de las fibras de colágeno existentes y estimula los fibroblastos para producir nuevas proteínas de sostén.',
    problemContextHeadline: 'CANSANCIO VISIBLE Y PÉRDIDA DE TONO EPIDÉRMICO',
    problemContextBody: 'La menor elasticidad debida al estrés cutáneo favorece que las líneas de expresión se marquen de manera fija y permanente en las zonas gesticulares del rostro. Mediante un aumento térmico preciso, estimulamos la microcirculación y elasticidad cutánea para suavizar facciones y atenuar el aspecto fatigado.',
    duration: '40 - 50 min',
    application: 'Cabina / Electromagnética',
    anesthesia: 'No requiere',
    resultado: 'Atuenuación de líneas y sensación turgente'
  },
  'oxigenoterapia-facial': {
    whatIsBody: 'La Oxigenoterapia Facial es una bruma de hidratación y revitalización celular. El tratamiento consiste en la proyección a alta presión de oxígeno con un porcentaje de pureza superior combinado con principios activos nebulizados (vitaminas, péptidos y ácido hialurónico). Permite humectar la barrera protectora de la piel y devolverle frescura al rostro de forma inmediata.',
    problemContextHeadline: 'PIEL DESHIDRATADA Y ESTRESADA POR FACTORES URBANOS',
    problemContextBody: 'El aire acondicionado, la falta de descanso y los hábitos cotidianos saturan y asfixian las células de la piel, haciéndola lucir opaca, seca y reactiva. Este protocolo calma el rostro sensible, aporta oxigenación dérmica profunda y restaura un aspecto descansado y fresco al instante.',
    duration: '45 min',
    application: 'Cabina / Nebulización',
    anesthesia: 'No requiere',
    resultado: 'Suavidad y frescura tras finalizar el tratamiento'
  },
  'rejuvenecimiento-facial': {
    whatIsBody: 'El Rejuvenecimiento Facial en Derma.M es un protocolo integral personalizado concebido para mejorar la calidad global del rostro. Combina técnicas de vanguardia, como la bioestimulación de tejidos o la aparatología avanzada, para mejorar parámetros esenciales: elasticidad, textura, unificación del tono y soporte de la dermis.',
    problemContextHeadline: 'SIGNOS GLOBALES DE ENVEJECIMIENTO CRÓNICO Y SOLAR',
    problemContextBody: 'La combinación de fotoenvejecimiento y desgaste genético no afecta solo una zona del rostro, sino que se manifiesta en flacidez media, líneas finas extendidas y pérdida generalizada del brillo. Un enfoque integrado permite abordar múltiples necesidades simultáneamente para un rejuvenecimiento armónico y muy natural.',
    duration: '60 - 75 min',
    application: 'Cabina / Enfoque multi-técnico',
    anesthesia: 'Según protocolo elegido',
    resultado: 'Mejora progresiva de la calidad total de la piel'
  },
  'tratamiento-acne': {
    whatIsBody: 'El Tratamiento de Acné es un protocolo higiénico y calmante diseñado específicamente para equilibrar las pieles propensas a brotes o imperfecciones constantes. Integra agentes purificantes, activos seborreguladores y tecnologías de luz estimulante para limpiar en profundidad los poros obstruidos, bajar el aspecto irritado y prevenir marcas residuales.',
    problemContextHeadline: 'EL CICLO INFLAMATORIO Y CONGESTIÓN SEBÁCEA',
    problemContextBody: 'La sobreproducción de grasa natural, unida a la hiperqueratosis folicular, crea el entorno propicio para brotes recurrentes e inflamaciones cutáneas incómodas. Tratar la piel con delicadeza pero con gran precisión clínica ayuda a despejar impurezas, controlar el brillo graso y restaurar la claridad y confianza cutánea.',
    duration: '60 min',
    application: 'Cabina / Purificación',
    anesthesia: 'No requiere',
    resultado: 'Reducción de imperfecciones y piel equilibrada'
  },
  'manchas-cicatrices': {
    whatIsBody: 'El tratamiento para Manchas y Cicatrices es un protocolo especializado que asocia terapias exfoliantes, activos despigmentantes y técnicas de bioestimulación de relieve. Su finalidad es unificar el tono cutáneo desvaído y atenuar la apariencia estética de las cicatrices por acné o traumatismos menores, apoyando la textura lisa original.',
    problemContextHeadline: 'DISCROMÍAS Y TEXTURA CRATERIFORME EN LA PIEL',
    problemContextBody: 'Las irregularidades debido al sol (manchas) o las marcas permanentes tras imperfecciones curadas alteran la refracción de luz sobre la cara, dando un aspecto irregular o cansado. Mediante una estimulación regeneradora puntual, apoyamos la renovación controlada y la uniformización gradual de la piel afectada.',
    duration: '50 - 60 min',
    application: 'Cabina / Focalizado',
    anesthesia: 'Según protocolo sugerido',
    resultado: 'Tono visiblemente más homogéneo y relieve suavizado'
  },
  'dermabracion-facial': {
    whatIsBody: 'La Dermabrasión Facial (o Microdermoabrasión con punta de diamante) consiste en una exfoliación física calibrada de las capas más superficiales de la epidermis. Remueve células muertas adheridas de forma precisa al tiempo que realiza una micro-succión que activa el flujo linfático local, favoreciendo suavidad dérmica y vitalidad profundas.',
    problemContextHeadline: 'LA CASTRACIÓN CUTÁNEA DE LAS CÉLULAS ENVEJECIDAS',
    problemContextBody: 'El proceso natural de recambio dérmico va perdiendo velocidad, lo que genera que las células muertas se apilen en la capa superficial, obstruyendo tratamientos y apagando el rostro. Un pulido mecánico controlado deja la superficie libre de asperezas y lista para asimilar nutrientes en plenitud.',
    duration: '45 min',
    application: 'Cabina / Mecánica dermoestética',
    anesthesia: 'No requiere',
    resultado: 'Suavidad y textura sedosa desde la primera sesión'
  },
  'plasma-frio': {
    whatIsBody: 'El Plasma Frío es un innovador protocolo que utiliza energía gaseosa ionizada a temperatura ambiente. Al entrar en contacto con el rostro, el plasma ejerce una potente acción purificante y desinfectante del tejido, al tiempo que abre microporos provisionales e impulsa la restauración celular de pieles sensibilizadas o con desequilibrios.',
    problemContextHeadline: 'SENSIBILIDAD, INFLAMACIÓN O BROTES RECURRENTES',
    problemContextBody: 'Muchas pieles reactivas no toleran las exfoliaciones ácidas fuertes o el calor de ciertos láseres, lo que dificulta tratar impurezas o acné. El plasma frío proporciona una alternativa libre de calor que equilibra, desinfecta y estimula la barrera protectora de la piel con total confort.',
    duration: '30 - 45 min',
    application: 'Cabina / Gas ionizado',
    anesthesia: 'No requiere',
    resultado: 'Alivio visible y purificación folicular calmada'
  },
  'carboxiterapia-facial': {
    whatIsBody: 'La Carboxiterapia Facial se basa en la aplicación estética controlada de dióxido de carbono medicinal (CO2). Este flujo genera un incremento súbito de oxígeno local (Efecto Bohr), aumentando la microcirculación tisular, eliminando toxinas retenidas e impulsando el soporte celular profundo.',
    problemContextHeadline: 'MICROCIRCULACIÓN DEFICIENTE Y ASPECTO CONGESTIONADO',
    problemContextBody: 'La mala oxigenación en áreas frágiles del rostro, como la órbita ocular u óvalo de la mandíbula, produce ojeras marcadas, retención de líquidos y pérdida de brillo saludable. La carboxiterapia estimula de forma activa la red vascular del cutis para un drenaje revitalizador inmediato.',
    duration: '30 - 40 min',
    application: 'Cabina / Oxigenación tisular',
    anesthesia: 'No requiere',
    resultado: 'Piel desinflamada y contornos revitalizados'
  },

  // --- CORPORALES ---
  'lipo-360': {
    whatIsBody: 'El protocolo estético de Lipo 360 en Derma.M es un sistema de acompañamiento y moldeo del contorno abdominal, costados y espalda. Combina terapias no invasivas diseñadas para mejorar la firmeza cutánea, potenciar el drenaje circulatorio e incentivar la correcta adhesión de los tejidos cutáneos.',
    problemContextHeadline: 'IRREGULARIDAD DE CONTORNOS Y PÉRDIDA DE ARMONÍA CORPORAL',
    problemContextBody: 'El cuerpo acumula de forma caprichosa ciertos volúmenes grasos o líquido intersticial difíciles de tratar solo con dieta. Un protocolo estético estructurado favorece la remodelación global del contorno para suavizar relieves y potenciar una silueta más equilibrada.',
    duration: '60 - 90 min',
    application: 'Cabina / Corporal',
    anesthesia: 'No requiere',
    resultado: 'Silueta más moldeada y contornos más definidos'
  },
  'levantamiento-gluteos': {
    whatIsBody: 'El Levantamiento de Glúteos consiste en un conjunto de técnicas manuales y aparatología estimulante enfocadas en reafirmar, tonificar y realzar la silueta glútea. Combina drenaje local, estimulación con copas dermoestéticas y corrientes reafirmantes para aportar turgencia y definición.',
    problemContextHeadline: 'PÉRDIDA DE VOLUMEN Y FLACIDEZ EN LA ZONA POSTERIOR',
    problemContextBody: 'Factores sedentarios o cambios de peso bruscos debilitan las fibras de sostén de los tejidos glúteos de forma progresiva. El tratamiento de glúteos ayuda a modelar la forma, activar la circulación muscular local y devolver un aspecto más elevado y tonificado.',
    duration: '60 min',
    application: 'Cabina / Aparatología y drenaje',
    anesthesia: 'No requiere',
    resultado: 'Sensación de firmeza y apariencia estilizada'
  },
  'marcacion-abdominal': {
    whatIsBody: 'La Marcación Abdominal en Derma.M asocia tecnologías turgentes de alta frecuencia y técnicas de masaje estético para realzar visualmente la definición natural de las líneas del abdomen. Ideal para esculpir de forma localizada, potenciar la firmeza de la dermis y atenuar acúmulos grasos mínimos.',
    problemContextHeadline: 'DIFICULTAD PARA VISUALIZAR EL TONO RECTO ABDOMINAL',
    problemContextBody: 'Incluso manteniendo hábitos saludables y actividad física regular, una pequeña capa de líquido o grasa puede opacar la estética de las líneas abdominales. Ofrecemos asistencia no invasiva específica para desinflar la zona y realzar la silueta natural.',
    duration: '50 - 75 min',
    application: 'Cabina / Definición no invasiva',
    anesthesia: 'No requiere',
    resultado: 'Definición visual y firmeza en la zona tratada'
  },
  'hifu-corporal': {
    whatIsBody: 'El HIFU Corporal utiliza ondas focalizadas de ultrasonido de alta intensidad direccionadas hacia las capas más profundas de la grasa y la dermis corporal. Provoca una contracción selectiva a nivel celular para modelar perímetros y regenerar el colágeno corporal, combatiendo la flacidez flácida estructural.',
    problemContextHeadline: 'FLACIDEZ INSTALADA EN ABDOMEN, MUSLOS O BRAZOS',
    problemContextBody: 'Las pérdidas repentinas de peso o la madurez de la piel suelen dejar tejidos corporales laxos y sin soporte, dando un aspecto irregular. El HIFU actúa específicamente donde es necesario aportar un tensado profundo desde adentro, sin reposo postoperatorio.',
    duration: '60 - 90 min',
    application: 'Cabina / Ultrasonido profundo',
    anesthesia: 'No requiere',
    resultado: 'Reducción de flacidez corporal progresiva'
  },
  'corrientes-rusas': {
    whatIsBody: 'El tratamiento de Corrientes Rusas emplea electroestimulación de frecuencia media regulable. Emite impulsos eléctricos controlados directo a la masa muscular profunda para generar una contracción involuntaria, tónica e isométrica. Esto asiste la definición del contorno, tonificación y drenaje del músculo.',
    problemContextHeadline: 'FALTA DE TONO MUSCULAR Y ASISTENCIA REAFIRMANTE',
    problemContextBody: 'La inactividad o debilidad en grupos musculares específicos, como glúteos o abdomen, complica obtener una apariencia tónica o firme mediante ejercicio regular únicamente. Las corrientes rusas incrementan el trabajo de la fibra muscular, complementando tu rutina.',
    duration: '45 min',
    application: 'Cabina / Electroestimulación',
    anesthesia: 'No requiere',
    resultado: 'Tonificación, drenaje y activación profunda'
  },
  'estrias-celulitis': {
    whatIsBody: 'Este protocolo multidimensional asocia aparatología térmica, masoterapia drenante y activos de renovación epidérmica. Diseñado con rigor dermoestético, combate de forma sinérgica la acumulación de adipocitos (celulitis) y estimula el relleno natural de colágeno en estrías cutáneas para restaurar una textura lisa.',
    problemContextHeadline: 'TEXTURA IRREGULAR Y MARCAS DE ESTIRAMIENTO DÉRMICO',
    problemContextBody: 'La acumulación localizada de toxinas o la rotura de fibras elásticas por cambios volumétricos dejan relieves con aspecto de piel de naranja o líneas cicatrizales finas (estrías). Abordar este desafío desde la circulación profunda y reestructuración dérmica es clave para alisar la zona.',
    duration: '60 min',
    application: 'Cabina / Enfoque combinado',
    anesthesia: 'No requiere',
    resultado: 'Suavizado progresivo de marcas y relieves corporales'
  },
  'carboxiterapia-corporal': {
    whatIsBody: 'La Carboxiterapia Corporal utiliza micro-inyecciones de CO2 medicinal para tratar la piel de naranja, acumulación grasa localizada y flacidez corporal. Al mejorar intensamente la oxigenación y circulación capilar, asiste al cuerpo en sus procesos naturales de eliminación linfática adiposa.',
    problemContextHeadline: 'CONGESTIÓN EN TEJIDOS Y GRASA FOCALIZADA',
    problemContextBody: 'Una microcirculación deficiente favorece la retención de agua y entorpece la correcta eliminación de depósitos lipídicos en zonas Rebeldes. El suministro estético de CO2 reactiva de inmediato la microcirculación para oxigenar las fibras y alisar relieves.',
    duration: '35 - 50 min',
    application: 'Cabina / Estética de reflujo CO2',
    anesthesia: 'No requiere',
    resultado: 'Alisado de la piel de naranja y mejor microcirculación'
  },
  'maderoterapia-corporal': {
    whatIsBody: 'La maderoterapia corporal es una técnica manual depurada basada en masajes con instrumentos esculpidos en madera noble de pino u otras maderas terapéuticas. Trabaja a través de deslizamientos rítmicos controlados que ejercen presiones anatómicas capaces de movilizar toxinas acumuladas, drenar retención de líquidos y asistir al moldeo de contornos.',
    problemContextHeadline: 'RETENCIÓN DE LÍQUIDOS, TOXINAS Y TENSIÓN ACUMULADA',
    problemContextBody: 'La pesadez y las irregularidades en la textura del cuerpo derivan habitualmente de una acumulación excesiva de linfa obstruida o cansancio circulatorio. Los estímulos anatómicos de madera liberan contracturas del tejido, dinamizan el flujo de drenaje corporal y aportan contornos fluidos.',
    duration: '50 - 60 min',
    application: 'Cabina / Manual / Maderas',
    anesthesia: 'No requiere',
    resultado: 'Drenaje inmediato, ligereza corporal y sensación relajante'
  },

  // --- LÁSER Y LUZ ---
  'depilacion-laser': {
    whatIsBody: 'La Depilación Láser es un procedimiento de eliminación progresiva del vello corporal y facial fundado en el principio de fototermólisis selectiva. La luz emitida por el cabezal viaja canalizada por la melanina del vello hasta convertir su energía en calor, inhabilitando progresivamente el folículo piloso sin alterar la dermis sana circundante.',
    problemContextHeadline: 'EL DESAFÍO DEL VELLO CORPORAL NO DESEADO Y LA FOLICULITIS',
    problemContextBody: 'El afeitado tradicional o la cera convencional irritan repetidamente los poros, provocando vellos enconados (foliculitis), aspereza crónica y hiperpigmentación folicular molesta. El láser ofrece una vía definitiva que refina la textura de la piel volviéndola sedosa y libre de vello de forma gradual.',
    duration: '20 - 60 min (según zona)',
    application: 'Cabina / Tecnología láser de vanguardia',
    anesthesia: 'No requiere (incluye frío integrado)',
    resultado: 'Reducción notable del vello sesión tras sesión'
  },
  ipl: {
    whatIsBody: 'El IPL (Luz Pulsada Intensa) es una terapia lumínica versátil encargada de acompañar la unificación general del cutis y cuerpo. Trabaja emitiendo un espectro amplio de longitudes de onda capaces de atenuar de forma selectiva imperfecciones vasculares locales y acumulaciones irregulares de melanina (manchas solares), además de incentivar el rejuvenecimiento dérmico.',
    problemContextHeadline: 'DAÑO SOLAR, MANCHAS EN LA EDAD Y TONO DISCRÓMICO',
    problemContextBody: 'La acumulación acumulada de radiación UV da paso a pecas solares marcadas, enrojecimientos capilares finos y apagamiento visual crónico de la piel. El tratamiento por pulsación lumínica rompe los pigmentos focales oscuros y promueve una unificación global en pocas sesiones.',
    duration: '40 - 50 min',
    application: 'Cabina / Luz Pulsada de Alta Gama',
    anesthesia: 'No requiere',
    resultado: 'Piel más uniforme, luminosa y con menos pigmentaciones visibles'
  },
  'co2-laser': {
    whatIsBody: 'El Láser CO2 Fraccionado es un estándar estético de primer nivel para la renovación profunda de la epidermis. Emplea un haz de luz infrarroja dividida en miles de puntos microscópicos que retiran de manera controlada una sección fraccional de la capa superficial cutánea, impulsando una regeneración acelerada de la barrera de colágeno subyacente.',
    problemContextHeadline: 'TEXTURA ALTAMENTE IRREGULAR, CICATRICES PROFUNDAS O LINEAS DE EDAD',
    problemContextBody: 'Tanto marcas cicatrizales atróficas como arrugas finas e irregularidades profundas no logran remediarse con exfoliaciones leves ordinarias. Un protocolo energético fraccionado asiste a la renovación celular profunda de forma idónea, mejorando drásticamente el tono y superficie.',
    duration: '45 - 60 min',
    application: 'Cabina / Láser fraccionado ablativo',
    anesthesia: 'Tópica o según indicación profesional',
    resultado: 'Efecto renovador notable con piel lisa a mediano plazo'
  },

  // --- DENTAL ESTÉTICO ---
  'blanqueamiento-dental': {
    whatIsBody: 'El Blanqueamiento Dental Estético en Derma.M consiste en un protocolo destinado a aclarar la tonalidad natural del esmalte dental de forma segura. Empleamos un agente aclarador certificado que se activa de forma idónea para diluir manchas intrínsecas e impregnaciones cromáticas de dientes sin desgastar ni alterar el esmalte.',
    problemContextHeadline: 'OPACIDAD Y PIGMENTACIÓN ADQUIRIDA EN LAS PIEZAS DENTALES',
    problemContextBody: 'El tabaco, café, té y ciertos pigmentos de alimentos naturales van creando una fina veladura opaca sobre el esmalte, oscureciendo tu sonrisa e influyendo en la percepción de frescura gesticular. El blanqueamiento te devuelve un tono más brillante, blanco y armónico compatible con tu simetría facial.',
    duration: '45 - 60 min',
    application: 'Cabina dermoestética dental',
    anesthesia: 'No requiere',
    resultado: 'Dientes visiblemente más claros y brillantes tras el tratamiento'
  },
  'limpieza-dental': {
    whatIsBody: 'La Limpieza Dental Estética es un protocolo de mantenimiento e higiene gesticular en profundidad. Consiste en la eliminación de cálculo duro (sarro acumulado) y biopelícula blanda para recuperar un esmalte limpio, pulido y fresco mediante instrumental de ultrasonido preciso y pulidores específicos.',
    problemContextHeadline: 'ACUMULO DE CÁLCULO E INFLAMACIÓN GINGIVAL DISCRETA',
    problemContextBody: 'El cepillado doméstico regular no logra retirar por completo el sarro duro calcificado en el cuello de las piezas dentales o entre espacios interproximales profundos. Una limpieza experta remueve acumulaciones, puliendo la sonrisa y regalando una profunda sensación de ligereza y frescor bucal.',
    duration: '45 min',
    application: 'Cabina dermoestética dental',
    anesthesia: 'No requiere',
    resultado: 'Sarro removido, esmalte pulido y frescura gingival total'
  },

  // --- CAPILAR ---
  'tratamiento-capilar': {
    whatIsBody: 'El Tratamiento Capilar enfocado de Derma.M es un protocolo dermoestético de bioestimulación y nutrición del cuero cabelludo. Ofrece una aplicación integral o infusión de péptidos enriquecedores, aminoácidos estructurales y estimulantes locales circulatorios en la raíz folicular para fortalecer visualmente el bulbo capilar y atenuar la fragilidad y pérdida progresiva de densidad del cabello.',
    problemContextHeadline: 'CABELLO DEBILITADO, CAÍDA ESTACIONAL Y PÉRDIDA DE VOLUMEN',
    problemContextBody: 'Tanto desequilibrios de estrés temporales como agentes ambientales agresivos fatigan al folículo piloso, haciendo que el pelo nazca más delgado, frágil o se desprenda prematuramente. El aporte localizado dermoestético nutre y oxigena en profundidad la base para prolongar la calidad y fase de anclaje de la hebra capilar.',
    duration: '45 - 60 min',
    application: 'Cabina / Estimulación dermo-capilar',
    anesthesia: 'No requiere o anestesia tópica mínima',
    resultado: 'Fragilidad disminuida y cabello fortalecido progresivamente'
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

      // Define standard or custom FAQ list
      const faq = [
        {
          question: `¿Este tratamiento es adecuado para todos?`,
          answer: 'No necesariamente. En Derma.M priorizamos la seguridad, por lo que este protocolo requiere una valoración profesional estricta previa para confirmar que no presentas contraindicaciones temporales y que se adapta completamente a tus objetivos personales.'
        },
        {
          question: '¿Cuántas sesiones se recomiendan para ver cambios notables?',
          answer: 'La cantidad exacta de sesiones se define en tu cita de valoración, donde se diseña un protocolo a tu medida. No obstante, muchos de nuestros tratamientos ofrecen mejoras visibles en la frescura y humectación de la zona de inmediato en la primera sesión.'
        },
        {
          question: '¿Hay algún dolor o molestia durante la aplicación?',
          answer: 'La mayoría de nuestros protocolos no invasivos e higiénicos son sumamente cómodos y bien tolerados, sintiéndose únicamente micro-presiones templadas o un cosquilleo fresco. Si una técnica requiere anestesia tópica o consideración especial, se te indicará y aplicará con total cuidado.'
        },
        {
          question: '¿Qué cuidados posteriores debo tener en cuenta?',
          answer: 'El cuidado posterior principal es el uso continuo de protector solar con FPS 50+, evitando la exposición directa prolongada al sol durante las primeras 48 horas, junto con rutinas higiénicas e hidratantes suaves que te indicaremos con todo detalle al finalizar tu sesión.'
        },
        {
          question: '¿Los resultados están garantizados?',
          answer: 'En el sector estético dermoepitelial, la dehidratación, el envejecimiento o la respuesta celular son intrínsecamente variables en cada persona. Por ello, no se pueden prometer cronogramas rígidos ni garantías absolutas; nuestro compromiso reside en brindarte el protocolo profesional con la mayor calidad.'
        }
      ];

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

      compiled[catKey][slug] = {
        category: catKey,
        categoryLabel: categoryLabels[catKey],
        slug,
        route,
        title,
        description,
        image,
        quickFacts,
        benefits,
        ideal,
        specs,
        faq,
        related,
        whatIs: {
          eyebrow: 'EL PROTOCOLO',
          headline: `TRATAMIENTO DE ${title}`,
          body: custom.whatIsBody || `El tratamiento de ${title} en Derma.M es un protocolo diseñado estratégicamente para abordar ${description.toLowerCase()} utilizando aparatología y activos avanzados. Buscamos restaurar la luminosidad, equilibrio y vitalidad de la zona mediante un cuidado integral.`,
          image: image
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
          backgroundImage: `/assets/images/treatments/${catKey === 'laserYLuz' ? 'laser-y-luz' : catKey === 'dentalEstetico' ? 'dental-estetico' : catKey}/${slug}/cta.jpg`
        }
      };
    });
  });

  return compiled;
};

export const treatmentPages = compileTreatments();
