export const legalUiCopy = {
  complianceLabel: 'DERMA.M, LLC • DOCUMENTACIÓN DE CUMPLIMIENTO / COMPLIANCE DOCUMENTATION',
  effectiveDateLabel: 'Fecha de entrada en vigor / Effective date:',
  lastUpdatedLabel: 'Última actualización / Last updated:',
  contentsLabel: 'Contenido / Sections',
  sectionLabel: 'Sección',
  legalReviewLabel: 'Requiere revisión legal / Legal review required',
  defaultLegalReviewText: 'Este documento requiere validación final del asesor legal y del equipo de operaciones de DERMA.M, LLC antes de su publicación.'
};

const privacyContact = [
  'DERMA.M, LLC',
  '5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405',
  'Email: info@dermamskinhealth.com',
  'Teléfono / WhatsApp: +1 561 253 5384'
];

export const privacyPolicyData = {
  title: 'Política de Privacidad',
  subtitle: 'Cómo recopilamos, usamos, protegemos y compartimos información en los canales digitales de DERMA.M.',
  effectiveDate: '2 de julio de 2026',
  lastUpdated: '2 de julio de 2026',
  meta: {
    title: 'Política de Privacidad | DERMA.M Florida',
    description: 'Conoce cómo DERMA.M recopila, utiliza y protege información en su sitio web y canales de contacto en Florida.'
  },
  sections: [
    {
      id: 'introduccion',
      shortTitle: 'Introducción',
      title: '1. Introducción / Introduction',
      es: [
        { type: 'p', text: 'DERMA.M, LLC respeta tu privacidad. Esta Política explica qué información podemos procesar cuando visitas dermamskinhealth.com, te comunicas con nosotros por teléfono, email, SMS o WhatsApp, o reservas mediante Square.' },
        { type: 'p', text: 'La mayor parte del sitio puede consultarse sin proporcionar información que te identifique directamente. Esta Política se refiere a nuestros canales digitales públicos y no sustituye los avisos o consentimientos que puedan aplicar a un expediente creado por un profesional autorizado.' }
      ],
      en: [
        { type: 'p', text: 'DERMA.M, LLC respects your privacy. This Policy explains what information we may process when you visit dermamskinhealth.com, contact us by phone, email, SMS, or WhatsApp, or book through Square.' },
        { type: 'p', text: 'Most of the website can be viewed without directly identifying yourself. This Policy covers our public digital channels and does not replace notices or consents that may apply to a record created by a licensed professional.' }
      ]
    },
    {
      id: 'responsable',
      shortTitle: 'Responsable',
      title: '2. Responsable de la información / Information controller',
      es: [
        { type: 'p', text: 'La entidad responsable de este sitio y de la información de contacto recibida directamente por sus canales es DERMA.M, LLC, una Florida Limited Liability Company, documento L21000435735.' },
        { type: 'list', items: privacyContact }
      ],
      en: [
        { type: 'p', text: 'The entity responsible for this website and contact information received directly through its channels is DERMA.M, LLC, a Florida Limited Liability Company, document number L21000435735.' },
        { type: 'list', items: privacyContact }
      ]
    },
    {
      id: 'informacion-recopilada',
      shortTitle: 'Información',
      title: '3. Información que procesamos / Information we process',
      es: [
        { type: 'p', text: 'Podemos procesar la información que decides proporcionar para solicitar información o coordinar una cita:' },
        { type: 'list', items: ['Nombre y apellidos.', 'Número de teléfono.', 'Dirección de email.', 'Servicio o tratamiento de interés.', 'Preferencia de contacto.', 'Contenido de tu consulta o mensaje.', 'Registro de consentimiento o revocación de comunicaciones, cuando corresponda.'] },
        { type: 'p', text: 'El proveedor de alojamiento puede procesar registros técnicos necesarios para entregar y proteger el sitio, como dirección IP, fecha y hora de acceso, recurso solicitado, tipo de navegador y eventos de seguridad.' },
        { type: 'p', text: 'Si eliges reservar mediante el enlace directo de Square, abandonarás este sitio y proporcionarás información en la plataforma de Square. Según la configuración de la reserva, Square puede solicitar nombre, apellidos, teléfono, email, servicio, ubicación, profesional, fecha y hora, campos opcionales del perfil y, si se exige un depósito o prepago, información de pago. DERMA.M recibe los datos de la cita y del cliente que Square pone a disposición del comercio para gestionar la reserva.' },
        { type: 'notice', title: 'No envíes información médica sensible', text: 'No incluyas diagnósticos, resultados, fotografías clínicas íntimas, números de seguro, información de medicación ni información urgente por email, SMS, WhatsApp o al reservar.' }
      ],
      en: [
        { type: 'p', text: 'We may process information you choose to provide when requesting information or coordinating an appointment:' },
        { type: 'list', items: ['First and last name.', 'Phone number.', 'Email address.', 'Service or treatment of interest.', 'Contact preference.', 'The content of your inquiry or message.', 'A record of communication consent or withdrawal, when applicable.'] },
        { type: 'p', text: 'Our hosting provider may process technical logs needed to deliver and protect the website, such as IP address, access date and time, requested resource, browser type, and security events.' },
        { type: 'p', text: 'If you choose the direct Square booking link, you will leave this website and provide information through Square. Depending on the booking configuration, Square may request your first and last name, phone number, email, service, location, professional, date and time, optional profile fields, and payment information if a deposit or prepayment is required. DERMA.M receives the appointment and customer details Square makes available to the seller to manage the booking.' },
        { type: 'notice', title: 'Do not send sensitive medical information', text: 'Do not include diagnoses, test results, intimate clinical images, insurance numbers, medication information, or urgent information by email, SMS, WhatsApp, or when booking.' }
      ]
    },
    {
      id: 'uso-informacion',
      shortTitle: 'Uso',
      title: '4. Cómo usamos la información / How we use information',
      es: [
        { type: 'list', items: ['Responder consultas y proporcionar la información solicitada.', 'Coordinar, confirmar, reprogramar o cancelar citas.', 'Comunicarnos por el canal que seleccionaste.', 'Mantener la seguridad, disponibilidad e integridad del sitio.', 'Prevenir fraude, abuso, spam o incidentes técnicos.', 'Documentar consentimientos, revocaciones y cumplimiento legal.', 'Cumplir obligaciones legales y proteger derechos legítimos.'] },
        { type: 'p', text: 'Las comunicaciones promocionales se enviarán únicamente conforme a la sección de marketing de esta Política.' }
      ],
      en: [
        { type: 'list', items: ['Respond to inquiries and provide requested information.', 'Coordinate, confirm, reschedule, or cancel appointments.', 'Communicate through the channel you selected.', 'Maintain website security, availability, and integrity.', 'Prevent fraud, abuse, spam, or technical incidents.', 'Document consent, withdrawal, and legal compliance.', 'Comply with legal duties and protect legitimate rights.'] },
        { type: 'p', text: 'Promotional communications will only be sent as described in the marketing section of this Policy.' }
      ]
    },
    {
      id: 'comunicaciones',
      shortTitle: 'Comunicaciones',
      title: '5. WhatsApp, SMS, llamadas y email / Communications',
      es: [
        { type: 'p', text: 'Si inicias una conversación o solicitas una cita, podremos usar el número o email proporcionado para responder, coordinar, confirmar o reprogramar la cita y enviar información de servicio relacionada. Esa solicitud no constituye autorización ilimitada para campañas promocionales.' },
        { type: 'p', text: 'Solo enviaremos promociones por teléfono, SMS o WhatsApp cuando exista un consentimiento previo, claro y documentado que identifique a DERMA.M, el número autorizado y el tipo de mensajes. El consentimiento promocional es opcional y no es condición de compra.' },
        { type: 'p', text: 'Puedes retirar el consentimiento promocional en cualquier momento respondiendo STOP o PARAR, o escribiendo a info@dermamskinhealth.com. Aplicaremos la solicitud a futuras comunicaciones promocionales dentro de los plazos legales.' },
        { type: 'p', text: 'Cuando enviemos email comercial, identificaremos claramente a DERMA.M, utilizaremos encabezados y asuntos veraces, incluiremos nuestra dirección postal y proporcionaremos un mecanismo visible de baja conforme a CAN-SPAM.' }
      ],
      en: [
        { type: 'p', text: 'If you start a conversation or request an appointment, we may use the phone number or email provided to respond, coordinate, confirm, or reschedule the appointment and send related service information. That request is not unlimited authorization for promotional campaigns.' },
        { type: 'p', text: 'We will send promotions by phone, SMS, or WhatsApp only when we have clear, documented prior consent identifying DERMA.M, the authorized number, and the type of messages. Promotional consent is optional and is not a condition of purchase.' },
        { type: 'p', text: 'You may withdraw promotional consent at any time by replying STOP or PARAR, or by emailing info@dermamskinhealth.com. We will apply the request to future promotional communications within legally required timeframes.' },
        { type: 'p', text: 'Commercial email will clearly identify DERMA.M, use accurate headers and subject lines, include our postal address, and provide a visible unsubscribe method consistent with CAN-SPAM.' }
      ]
    },
    {
      id: 'informacion-salud',
      shortTitle: 'Datos de salud',
      title: '6. Información de salud y expedientes / Health information and records',
      es: [
        { type: 'p', text: 'Los canales digitales públicos están destinados a consultas generales y coordinación de citas. No sustituyen una evaluación profesional ni deben utilizarse para emergencias. Si existe una emergencia, llama al 911.' },
        { type: 'p', text: 'Cuando un profesional autorizado cree o mantenga un expediente durante la prestación de servicios, su confidencialidad, acceso y divulgación se regirán por la ley de Florida aplicable, incluida Fla. Stat. § 456.057.' },
        { type: 'p', text: 'Si DERMA.M o el profesional responsable actúa como entidad cubierta o asociado comercial bajo HIPAA, la información protegida también se manejará conforme a 45 C.F.R. Parts 160 y 164 y se facilitará el Aviso de Prácticas de Privacidad aplicable.' }
      ],
      en: [
        { type: 'p', text: 'Public digital channels are intended for general inquiries and appointment coordination. They do not replace a professional evaluation and must not be used for emergencies. Call 911 in an emergency.' },
        { type: 'p', text: 'When an authorized professional creates or maintains a record while providing services, confidentiality, access, and disclosure are governed by applicable Florida law, including Fla. Stat. § 456.057.' },
        { type: 'p', text: 'If DERMA.M or the responsible professional acts as a HIPAA covered entity or business associate, protected information will also be handled under 45 C.F.R. Parts 160 and 164, and the applicable Notice of Privacy Practices will be provided.' }
      ]
    },
    {
      id: 'cookies',
      shortTitle: 'Cookies',
      title: '7. Cookies y tecnologías similares / Cookies and similar technologies',
      es: [
        { type: 'p', text: 'El sitio utiliza Google Analytics 4 (identificador G-9272VHFT03) para medir el uso de forma agregada: páginas vistas, origen aproximado de la visita y tipo de dispositivo. No lo utilizamos para publicidad comportamental, remarketing ni perfiles publicitarios. Los servicios externos enlazados pueden aplicar sus propias tecnologías cuando decides visitarlos.' },
        { type: 'p', text: 'Puedes limitar o bloquear esta medición desde la configuración de cookies de tu navegador o instalando el complemento de inhabilitación de Google Analytics (https://tools.google.com/dlpage/gaoptout).' },
        { type: 'p', text: 'Si en el futuro incorporamos publicidad basada en seguimiento u otra analítica no esencial, actualizaremos esta Política e implementaremos los mecanismos de aviso o consentimiento que correspondan antes de activarlas.' }
      ],
      en: [
        { type: 'p', text: 'The website uses Google Analytics 4 (identifier G-9272VHFT03) to measure usage in aggregate: pages viewed, approximate visit origin, and device type. We do not use it for behavioral advertising, remarketing, or advertising profiles. Linked external services may use their own technologies when you choose to visit them.' },
        { type: 'p', text: "You can limit or block this measurement through your browser's cookie settings or by installing the Google Analytics opt-out add-on (https://tools.google.com/dlpage/gaoptout)." },
        { type: 'p', text: 'If we later add tracking-based advertising or other non-essential analytics, we will update this Policy and implement applicable notice or consent mechanisms before activation.' }
      ]
    },
    {
      id: 'proveedores',
      shortTitle: 'Proveedores',
      title: '8. Proveedores y divulgación / Service providers and disclosure',
      es: [
        { type: 'p', text: 'Puedes solicitar una reserva por WhatsApp o utilizar el enlace directo a Square Appointments. En WhatsApp, Meta procesa los datos técnicos y el contenido de la comunicación conforme a sus propios términos. DERMA.M utiliza el mensaje para responder y coordinar la cita solicitada.' },
        { type: 'p', text: 'En Square, Block, Inc. procesa datos del cliente para habilitar la reserva, las confirmaciones, los recordatorios, la prevención de fraude y, cuando corresponda, el depósito o prepago. Square puede procesar información de identificación, contacto, dispositivo, uso, transacción y pago tanto para prestar servicios a DERMA.M como para sus propias finalidades descritas en sus avisos.' },
        { type: 'p', text: 'Los datos de tarjeta se introducen y procesan directamente en Square, no en dermamskinhealth.com. DERMA.M puede recibir el estado, importe, método y referencias limitadas de la transacción que Square pone a disposición del comercio, además de los datos necesarios para administrar la cita.' },
        { type: 'externalLink', before: 'Antes de reservar, consulta el ', label: 'Aviso de Privacidad de Square para usuarios sin cuenta', href: 'https://squareup.com/us/en/legal/general/privacy-no-account', after: '.' },
        { type: 'externalLink', before: 'Si utilizas una cuenta o función de comprador, consulta también el ', label: 'Aviso de Privacidad para Buyer Features y Square Pay', href: 'https://squareup.com/us/en/legal/general/buyer-features', after: '.' },
        { type: 'p', text: 'También podemos comunicar información estrictamente necesaria a proveedores que nos ayudan a alojar y proteger el sitio. No vendemos ni alquilamos información personal y limitamos el acceso de proveedores a las funciones necesarias para el servicio.' },
        { type: 'p', text: 'Podemos conservar o divulgar información cuando sea razonablemente necesario para cumplir una obligación legal, proteger derechos o investigar fraude o incidentes de seguridad.' }
      ],
      en: [
        { type: 'p', text: 'You may request a booking through WhatsApp or use the direct Square Appointments link. On WhatsApp, Meta processes technical data and communication content under its own terms. DERMA.M uses the message to respond and coordinate the requested appointment.' },
        { type: 'p', text: 'On Square, Block, Inc. processes customer data to enable bookings, confirmations, reminders, fraud prevention, and any applicable deposit or prepayment. Square may process identification, contact, device, usage, transaction, and payment information both to provide services to DERMA.M and for its own purposes described in its notices.' },
        { type: 'p', text: 'Card data is entered and processed directly by Square, not by dermamskinhealth.com. DERMA.M may receive the transaction status, amount, method, and limited references Square makes available to the seller, along with information needed to manage the appointment.' },
        { type: 'externalLink', before: 'Before booking, review the ', label: 'Square Privacy Notice for users without an account', href: 'https://squareup.com/us/en/legal/general/privacy-no-account', after: '.' },
        { type: 'externalLink', before: 'If you use a buyer account or buyer feature, also review the ', label: 'Privacy Notice for Buyer Features and Square Pay', href: 'https://squareup.com/us/en/legal/general/buyer-features', after: '.' },
        { type: 'p', text: 'We may also disclose information strictly needed to providers that help us host and protect the website. We do not sell or rent personal information, and provider access is limited to functions needed for the service.' },
        { type: 'p', text: 'We may retain or disclose information when reasonably necessary to comply with law, protect rights, or investigate fraud or security incidents.' }
      ]
    },
    {
      id: 'retencion',
      shortTitle: 'Retención',
      title: '9. Retención y eliminación / Retention and deletion',
      es: [
        { type: 'p', text: 'Conservamos consultas generales durante el tiempo necesario para responder, coordinar el servicio, documentar preferencias y cumplir obligaciones legales. Los registros de consentimiento y revocación se conservan mientras sean necesarios para demostrar y respetar esas preferencias.' },
        { type: 'p', text: 'Los expedientes creados por profesionales se conservan conforme a las reglas aplicables y no están sujetos a eliminación inmediata por una solicitud general. Al vencer el periodo aplicable, eliminaremos, anonimizaremos o aislaremos la información de forma segura, salvo respaldos sujetos a ciclos ordinarios o conservación legal.' }
      ],
      en: [
        { type: 'p', text: 'We retain general inquiries as needed to respond, coordinate services, document preferences, and meet legal obligations. Consent and withdrawal records are retained as needed to demonstrate and respect those preferences.' },
        { type: 'p', text: 'Records created by professionals are retained under applicable rules and are not subject to immediate deletion through a general request. When the applicable period expires, information will be securely deleted, deidentified, or isolated, except for backups subject to ordinary deletion cycles or legal holds.' }
      ]
    },
    {
      id: 'seguridad',
      shortTitle: 'Seguridad',
      title: '10. Seguridad y brechas / Security and breaches',
      es: [
        { type: 'p', text: 'Aplicamos medidas administrativas, técnicas y físicas razonables y proporcionales a la naturaleza de la información bajo nuestro control. Restringimos el acceso al personal y proveedores que lo necesitan para desempeñar funciones autorizadas.' },
        { type: 'p', text: 'Si determinamos que ocurrió una brecha sujeta a la Florida Information Protection Act, investigaremos, documentaremos y enviaremos las notificaciones exigidas por Fla. Stat. § 501.171 dentro de los plazos legales.' },
        { type: 'p', text: 'Ningún método de transmisión o almacenamiento es completamente seguro. Por ello, evita enviar información especialmente sensible a través de canales digitales públicos.' }
      ],
      en: [
        { type: 'p', text: 'We use reasonable administrative, technical, and physical measures proportionate to the information under our control. Access is limited to personnel and providers who need it for authorized functions.' },
        { type: 'p', text: 'If we determine that a breach is subject to the Florida Information Protection Act, we will investigate, document, and provide notices required by Fla. Stat. § 501.171 within applicable deadlines.' },
        { type: 'p', text: 'No transmission or storage method is completely secure. Avoid sending especially sensitive information through public digital channels.' }
      ]
    },
    {
      id: 'solicitudes',
      shortTitle: 'Solicitudes',
      title: '11. Solicitudes de privacidad / Privacy requests',
      es: [
        { type: 'p', text: 'Puedes pedirnos que confirmemos qué información de contacto mantenemos, corregirla, solicitar su eliminación cuando no exista un deber de conservarla o retirar una autorización promocional.' },
        { type: 'p', text: 'Verificaremos razonablemente la identidad antes de responder. Estas opciones son compromisos de privacidad de DERMA.M y no limitan derechos adicionales que una ley aplicable pueda otorgarte. Envía la solicitud a info@dermamskinhealth.com.' }
      ],
      en: [
        { type: 'p', text: 'You may ask us to confirm what contact information we maintain, correct it, request deletion when no retention duty applies, or withdraw promotional authorization.' },
        { type: 'p', text: 'We will reasonably verify identity before responding. These options are DERMA.M privacy commitments and do not limit additional rights granted by applicable law. Send requests to info@dermamskinhealth.com.' }
      ]
    },
    {
      id: 'menores',
      shortTitle: 'Menores',
      title: '12. Privacidad de menores / Children’s privacy',
      es: [
        { type: 'p', text: 'El sitio no está dirigido a menores de 13 años y no recopilamos intencionalmente información personal de niños menores de 13 años mediante estos canales públicos. Si crees que un menor nos envió información sin autorización apropiada, comunícate con nosotros para que podamos revisarla y eliminarla cuando corresponda.' },
        { type: 'p', text: 'La atención de una persona menor de edad, si se ofrece, está sujeta a evaluación profesional, alcance de práctica y consentimiento del padre, madre o representante legal conforme a la ley aplicable.' }
      ],
      en: [
        { type: 'p', text: 'The website is not directed to children under 13, and we do not knowingly collect personal information from children under 13 through these public channels. If you believe a child submitted information without appropriate authorization, contact us so we can review and delete it when appropriate.' },
        { type: 'p', text: 'Services for a minor, if offered, are subject to professional evaluation, scope-of-practice rules, and consent from a parent or legal representative under applicable law.' }
      ]
    },
    {
      id: 'internacional',
      shortTitle: 'Internacional',
      title: '13. Usuarios internacionales / International users',
      es: [
        { type: 'p', text: 'DERMA.M opera en Florida y dirige este sitio principalmente a personas que buscan servicios en West Palm Beach. No ofrecemos ni monitoreamos intencionalmente servicios dirigidos al Espacio Económico Europeo mediante este sitio.' },
        { type: 'p', text: 'Si nuestras actividades cambian y comenzamos a dirigir servicios o monitoreo a personas en otras jurisdicciones, evaluaremos y aplicaremos los avisos, bases jurídicas y mecanismos internacionales que correspondan.' }
      ],
      en: [
        { type: 'p', text: 'DERMA.M operates in Florida and primarily directs this website to people seeking services in West Palm Beach. We do not intentionally offer or monitor services directed to the European Economic Area through this website.' },
        { type: 'p', text: 'If our activities change and we begin directing services or monitoring to people in other jurisdictions, we will assess and implement applicable notices, legal bases, and international mechanisms.' }
      ]
    },
    {
      id: 'cambios',
      shortTitle: 'Cambios',
      title: '14. Cambios a esta Política / Changes to this Policy',
      es: [
        { type: 'p', text: 'Podemos actualizar esta Política para reflejar cambios legales, técnicos u operativos. Publicaremos la fecha de actualización y aplicaremos los cambios de forma prospectiva. Cuando un cambio sea material y tengamos un canal apropiado, proporcionaremos un aviso adicional.' }
      ],
      en: [
        { type: 'p', text: 'We may update this Policy to reflect legal, technical, or operational changes. We will publish the updated date and apply changes prospectively. When a change is material and we have an appropriate channel, we will provide additional notice.' }
      ]
    },
    {
      id: 'contacto',
      shortTitle: 'Contacto',
      title: '15. Contacto / Contact',
      es: [
        { type: 'p', text: 'Para preguntas o solicitudes relacionadas con esta Política, comunícate con:' },
        { type: 'list', items: privacyContact }
      ],
      en: [
        { type: 'p', text: 'For questions or requests related to this Policy, contact:' },
        { type: 'list', items: privacyContact }
      ]
    }
  ]
};

export const termsOfUseData = {
  title: 'Términos de Uso',
  subtitle: 'Condiciones aplicables al acceso y uso del sitio web y los canales digitales públicos de DERMA.M.',
  effectiveDate: '2 de julio de 2026',
  lastUpdated: '2 de julio de 2026',
  meta: {
    title: 'Términos de Uso | DERMA.M Florida',
    description: 'Consulta las condiciones para utilizar el sitio web, solicitar citas y acceder a información de DERMA.M en Florida.'
  },
  sections: [
    {
      id: 'aceptacion', shortTitle: 'Aceptación', title: '1. Aceptación / Acceptance',
      es: [{ type: 'p', text: 'Al acceder o utilizar este sitio aceptas estos Términos. Si no estás de acuerdo, no utilices el sitio ni sus funciones. Estos Términos regulan el uso del sitio y no sustituyen contratos, consentimientos informados o políticas específicas aplicables a una cita o tratamiento.' }],
      en: [{ type: 'p', text: 'By accessing or using this website, you accept these Terms. If you do not agree, do not use the website or its features. These Terms govern website use and do not replace contracts, informed consents, or specific policies applicable to an appointment or treatment.' }]
    },
    {
      id: 'identidad', shortTitle: 'Identidad', title: '2. Identidad del operador / Operator identity',
      es: [{ type: 'p', text: 'Este sitio es operado por DERMA.M, LLC, una Florida Limited Liability Company, documento L21000435735.' }, { type: 'list', items: privacyContact }],
      en: [{ type: 'p', text: 'This website is operated by DERMA.M, LLC, a Florida Limited Liability Company, document number L21000435735.' }, { type: 'list', items: privacyContact }]
    },
    {
      id: 'informacion-general', shortTitle: 'Información general', title: '3. Información general y ausencia de relación profesional / Informational use',
      es: [
        { type: 'p', text: 'El contenido del sitio es informativo y no constituye diagnóstico, prescripción, consejo médico ni promesa de idoneidad. No sustituye una evaluación individual por un profesional autorizado.' },
        { type: 'p', text: 'Escribir por WhatsApp o solicitar una cita no crea por sí solo una relación profesional. Esa relación solo puede comenzar después de que un profesional autorizado acepte atenderte y realice la evaluación o los consentimientos que correspondan.' },
        { type: 'notice', title: 'Emergencias', text: 'No utilices este sitio, email, SMS o WhatsApp para una emergencia. Llama al 911.' }
      ],
      en: [
        { type: 'p', text: 'Website content is informational and is not a diagnosis, prescription, medical advice, or promise of suitability. It does not replace an individual evaluation by an authorized professional.' },
        { type: 'p', text: 'Writing on WhatsApp or requesting an appointment does not by itself create a professional relationship. Such a relationship may begin only after an authorized professional accepts your care and completes the applicable evaluation or consents.' },
        { type: 'notice', title: 'Emergencies', text: 'Do not use this website, email, SMS, or WhatsApp for an emergency. Call 911.' }
      ]
    },
    {
      id: 'citas', shortTitle: 'Citas', title: '4. Solicitudes, reservas y disponibilidad / Appointments',
      es: [
        { type: 'p', text: 'Puedes solicitar una cita por WhatsApp o iniciar la reserva mediante el enlace externo de Square Appointments. Una conversación por WhatsApp es una solicitud de coordinación; una selección en Square se rige además por el flujo de confirmación mostrado en esa plataforma.' },
        { type: 'p', text: 'Toda solicitud está sujeta a disponibilidad y, cuando el servicio lo requiera, a evaluación por un profesional debidamente autorizado dentro de su alcance de práctica. No se considera confirmada hasta que DERMA.M o Square, actuando como plataforma de reservas de DERMA.M, emita la confirmación correspondiente y se cumplan los requisitos de reserva informados antes del pago.' },
        { type: 'p', text: 'Si Square solicita una tarjeta, depósito o prepago, los datos financieros se introducen y procesan directamente en Square. DERMA.M recibe la información de la reserva y referencias limitadas de la transacción necesarias para administrar la cita, pero dermamskinhealth.com no procesa directamente los datos completos de la tarjeta.' },
        { type: 'externalLink', before: 'El uso de la plataforma de reservas está sujeto a los ', label: 'Términos de la Cuenta de Comprador de Square', href: 'https://squareup.com/us/es/legal/general/buyer-account-terms', after: ' cuando esas funciones resulten aplicables.' },
        { type: 'p', text: 'DERMA.M podrá rechazar o reprogramar una cita por razones de seguridad, contraindicación identificada por el profesional responsable, falta de información necesaria, incumplimiento de políticas o cuando el servicio solicitado no esté dentro del alcance legal o profesional disponible.' },
        { type: 'link', before: 'Los depósitos, reprogramaciones, cancelaciones y reembolsos se rigen por nuestra ', label: 'Política de Reservas, Cancelaciones y Reembolsos', to: '/booking-cancellation-refund-policy', after: '.' }
      ],
      en: [
        { type: 'p', text: 'You may request an appointment through WhatsApp or begin booking through the external Square Appointments link. A WhatsApp conversation is a coordination request; a selection made through Square is also governed by the confirmation flow displayed on that platform.' },
        { type: 'p', text: 'Every request is subject to availability and, when required, evaluation by a duly authorized professional acting within the applicable scope of practice. It is not confirmed until DERMA.M or Square, acting as DERMA.M’s booking platform, issues the applicable confirmation and disclosed booking requirements are satisfied.' },
        { type: 'p', text: 'If Square requests a card, deposit, or prepayment, financial data is entered and processed directly by Square. DERMA.M receives booking information and limited transaction references needed to manage the appointment, but dermamskinhealth.com does not directly process complete card details.' },
        { type: 'externalLink', before: 'Use of applicable buyer features is subject to the ', label: 'Square Buyer Account Terms of Use', href: 'https://squareup.com/us/en/legal/general/buyer-account-terms', after: '.' },
        { type: 'p', text: 'DERMA.M may decline or reschedule an appointment for safety reasons, a contraindication identified by the responsible professional, missing necessary information, policy violations, or when the requested service is outside the legal or professional scope available.' },
        { type: 'link', before: 'Deposits, rescheduling, cancellations, and refunds are governed by our ', label: 'Booking, Cancellation and Refund Policy', to: '/booking-cancellation-refund-policy', after: '.' }
      ]
    },
    {
      id: 'profesionales', shortTitle: 'Profesionales', title: '5. Profesionales, licencias y alcance / Professionals and scope',
      es: [
        { type: 'p', text: 'Los servicios se prestan únicamente por profesionales que cuentan con la licencia, capacitación y autoridad requeridas para el procedimiento concreto, y bajo la supervisión o protocolo que exija la ley de Florida.' },
        { type: 'p', text: 'La disponibilidad de un servicio en el sitio no significa que todas las personas del equipo puedan realizarlo. Cuando corresponda, antes del tratamiento recibirás la identidad del profesional responsable, información relevante sobre riesgos y alternativas, y el consentimiento aplicable.' }
      ],
      en: [
        { type: 'p', text: 'Services are provided only by professionals who have the license, training, and authority required for the specific procedure, under any supervision or protocol required by Florida law.' },
        { type: 'p', text: 'Listing a service does not mean every team member may perform it. When applicable, before treatment you will receive the identity of the responsible professional, relevant risk and alternative information, and the applicable consent.' }
      ]
    },
    {
      id: 'responsabilidades', shortTitle: 'Uso permitido', title: '6. Responsabilidades del usuario / User responsibilities',
      es: [{ type: 'p', text: 'Debes utilizar el sitio de manera lícita y proporcionar información exacta cuando solicites contacto o una cita.' }, { type: 'list', items: ['No intentes acceder sin autorización a sistemas o cuentas.', 'No transmitas malware, spam, contenido ilícito o material que vulnere derechos de terceros.', 'No suplantes identidades ni utilices datos de otra persona sin autorización.', 'No extraigas contenido o datos de manera automatizada que afecte la operación del sitio o infrinja derechos.', 'No utilices los canales públicos para información médica urgente o especialmente sensible.'] }],
      en: [{ type: 'p', text: 'You must use the website lawfully and provide accurate information when requesting contact or an appointment.' }, { type: 'list', items: ['Do not attempt unauthorized access to systems or accounts.', 'Do not transmit malware, spam, unlawful content, or material that infringes third-party rights.', 'Do not impersonate others or use another person’s data without authorization.', 'Do not extract content or data through automation that disrupts the website or infringes rights.', 'Do not use public channels for urgent or especially sensitive medical information.'] }]
    },
    {
      id: 'propiedad', shortTitle: 'Propiedad intelectual', title: '7. Propiedad intelectual / Intellectual property',
      es: [{ type: 'p', text: 'Los textos, diseños, marcas, fotografías, videos, gráficos y código del sitio pertenecen a DERMA.M o se utilizan con autorización. Puedes visualizar el contenido para uso personal y no comercial. No puedes reproducirlo, modificarlo, distribuirlo o explotarlo sin autorización previa, salvo lo permitido expresamente por ley.' }],
      en: [{ type: 'p', text: 'Website text, design, marks, photographs, videos, graphics, and code belong to DERMA.M or are used with permission. You may view content for personal, non-commercial use. You may not reproduce, modify, distribute, or exploit it without prior permission except as expressly permitted by law.' }]
    },
    {
      id: 'resultados', shortTitle: 'Resultados', title: '8. Tratamientos, imágenes y resultados / Treatments and results',
      es: [
        { type: 'p', text: 'Las fotografías y testimonios, cuando se publiquen, corresponden a material auténtico utilizado con autorización. Reflejan experiencias individuales y no garantizan que otra persona obtenga el mismo resultado.' },
        { type: 'p', text: 'Los posibles resultados, riesgos, recuperación y número de sesiones dependen de factores individuales y deben analizarse durante una evaluación apropiada. Ningún contenido del sitio garantiza resultados.' }
      ],
      en: [
        { type: 'p', text: 'Photographs and testimonials, when published, are authentic materials used with permission. They reflect individual experiences and do not guarantee the same outcome for another person.' },
        { type: 'p', text: 'Potential outcomes, risks, recovery, and number of sessions depend on individual factors and should be discussed during an appropriate evaluation. Website content does not guarantee results.' }
      ]
    },
    {
      id: 'terceros', shortTitle: 'Terceros', title: '9. Servicios de terceros / Third-party services',
      es: [{ type: 'p', text: 'El sitio enlaza a servicios independientes, como WhatsApp/Meta, Google Maps y Square. Sus términos y avisos de privacidad rigen la información que entregas directamente en esas plataformas. Square puede compartir con DERMA.M los datos de cliente, cita y transacción necesarios para prestar el servicio solicitado.' }, { type: 'p', text: 'DERMA.M no controla interrupciones ajenas ni los tratamientos independientes que esas plataformas realizan para sus propias finalidades. DERMA.M sigue siendo responsable de sus decisiones, configuraciones y obligaciones legales respecto de los proveedores que contrate.' }, { type: 'externalLink', before: 'Consulta el ', label: 'Aviso de Privacidad de Square para usuarios sin cuenta', href: 'https://squareup.com/us/en/legal/general/privacy-no-account', after: '.' }],
      en: [{ type: 'p', text: 'The website links to independent services such as WhatsApp/Meta, Google Maps, and Square. Their terms and privacy notices govern information you provide directly to those platforms. Square may share customer, appointment, and transaction data with DERMA.M as needed to provide the requested service.' }, { type: 'p', text: 'DERMA.M does not control third-party outages or processing those platforms perform for their own purposes. DERMA.M remains responsible for its decisions, configurations, and legal obligations regarding providers it engages.' }, { type: 'externalLink', before: 'Review the ', label: 'Square Privacy Notice for users without an account', href: 'https://squareup.com/us/en/legal/general/privacy-no-account', after: '.' }]
    },
    {
      id: 'responsabilidad', shortTitle: 'Responsabilidad', title: '10. Limitación de responsabilidad / Limitation of liability',
      es: [{ type: 'p', text: 'En la máxima medida permitida por la ley, DERMA.M no será responsable por pérdidas indirectas o consecuenciales derivadas exclusivamente del uso informativo del sitio o de interrupciones fuera de su control razonable.' }, { type: 'p', text: 'Nada en estos Términos excluye responsabilidad que no pueda limitarse legalmente, ni limita derechos del consumidor, obligaciones de privacidad, responsabilidad por conducta intencional o gravemente negligente, ni deberes profesionales aplicables a servicios efectivamente prestados. Esta sección se limita al uso del sitio.' }],
      en: [{ type: 'p', text: 'To the maximum extent permitted by law, DERMA.M will not be liable for indirect or consequential losses arising solely from informational website use or disruptions outside its reasonable control.' }, { type: 'p', text: 'Nothing in these Terms excludes liability that cannot legally be limited or restricts consumer rights, privacy obligations, liability for intentional or grossly negligent conduct, or professional duties applicable to services actually provided. This section is limited to website use.' }]
    },
    {
      id: 'ley', shortTitle: 'Ley aplicable', title: '11. Ley aplicable y foro / Governing law and venue',
      es: [{ type: 'p', text: 'Estos Términos se rigen por las leyes de Florida, sin perjuicio de normas obligatorias aplicables. Salvo que una ley permita o exija otro foro, las controversias relacionadas exclusivamente con el uso del sitio se someterán a los tribunales competentes de Palm Beach County, Florida. Esta cláusula no obliga a renunciar a derechos o foros que legalmente no puedan renunciarse.' }],
      en: [{ type: 'p', text: 'These Terms are governed by Florida law, subject to applicable mandatory rules. Unless law permits or requires another forum, disputes relating exclusively to website use will be submitted to courts of competent jurisdiction in Palm Beach County, Florida. This clause does not waive rights or forums that cannot legally be waived.' }]
    },
    {
      id: 'cambios', shortTitle: 'Cambios', title: '12. Cambios a los Términos / Changes to the Terms',
      es: [{ type: 'p', text: 'Podemos actualizar estos Términos para reflejar cambios legales, técnicos u operativos. Publicaremos la fecha de actualización y los cambios se aplicarán prospectivamente. Cuando sean materiales y tengamos un canal apropiado, proporcionaremos aviso adicional. Los términos vigentes al momento de una reserva o transacción seguirán rigiendo esa operación salvo que la ley exija otra cosa.' }],
      en: [{ type: 'p', text: 'We may update these Terms to reflect legal, technical, or operational changes. We will publish the updated date, and changes will apply prospectively. When changes are material and we have an appropriate channel, we will provide additional notice. Terms in effect when a booking or transaction occurs will continue to govern that transaction unless law requires otherwise.' }]
    },
    {
      id: 'contacto', shortTitle: 'Contacto', title: '13. Contacto / Contact',
      es: [{ type: 'p', text: 'Para preguntas relacionadas con estos Términos, comunícate con:' }, { type: 'list', items: privacyContact }],
      en: [{ type: 'p', text: 'For questions related to these Terms, contact:' }, { type: 'list', items: privacyContact }]
    }
  ]
};

export const bookingPolicyData = {
  title: 'Política de Reservas, Cancelaciones y Reembolsos',
  subtitle: 'Condiciones aplicables a solicitudes de citas, depósitos, cambios, incomparecencias, paquetes, productos y pagos procesados mediante Square.',
  effectiveDate: '2 de julio de 2026',
  lastUpdated: '2 de julio de 2026',
  meta: {
    title: 'Reservas, Cancelaciones y Reembolsos | DERMA.M',
    description: 'Consulta cómo funcionan las reservas, depósitos, cancelaciones, tardanzas y reembolsos de DERMA.M en Florida.'
  },
  sections: [
    {
      id: 'alcance', shortTitle: 'Alcance', title: '1. Alcance y aceptación / Scope and acceptance',
      es: [
        { type: 'p', text: 'Esta Política se aplica a las citas y compras realizadas directamente con DERMA.M, LLC en Florida. Las condiciones específicas mostradas antes de confirmar una reserva —incluidos precio, depósito, plazo para cancelar y cualquier cargo aplicable— forman parte de la reserva.' },
        { type: 'p', text: 'Antes de confirmar o pagar, revisa la información presentada por DERMA.M o Square. La confirmación electrónica, el pago o la aceptación afirmativa de esas condiciones constituye tu acuerdo con la versión que se mostró en ese momento, conforme a la Florida Uniform Electronic Transaction Act, Fla. Stat. § 668.50.' },
        { type: 'notice', title: 'Sin cargos ocultos', text: 'DERMA.M no aplicará automáticamente un depósito, cargo de cancelación, no-show o tardanza que no haya sido informado de forma clara antes de confirmar la reserva.' }
      ],
      en: [
        { type: 'p', text: 'This Policy applies to appointments and purchases made directly with DERMA.M, LLC in Florida. Specific terms shown before a booking is confirmed—including price, deposit, cancellation deadline, and any applicable fee—become part of that booking.' },
        { type: 'p', text: 'Before confirming or paying, review the information presented by DERMA.M or Square. Electronic confirmation, payment, or affirmative acceptance of those terms constitutes agreement to the version shown at that time under the Florida Uniform Electronic Transaction Act, Fla. Stat. § 668.50.' },
        { type: 'notice', title: 'No hidden charges', text: 'DERMA.M will not automatically impose a deposit, cancellation, no-show, or late-arrival fee that was not clearly disclosed before the booking was confirmed.' }
      ]
    },
    {
      id: 'canales-confirmacion', shortTitle: 'Confirmación', title: '2. Canales y confirmación de citas / Booking channels and confirmation',
      es: [
        { type: 'p', text: 'Puedes solicitar una cita por WhatsApp, teléfono o mediante el enlace externo de Square Appointments. Un mensaje o selección de horario constituye una solicitud hasta que DERMA.M o Square, actuando como plataforma de reservas de DERMA.M, emita una confirmación.' },
        { type: 'p', text: 'La confirmación indicará el servicio, sede, fecha, hora y, cuando corresponda, profesional seleccionado, precio estimado, depósito y reglas de modificación. Si existe una diferencia, prevalecen las condiciones específicas mostradas y aceptadas para esa reserva, salvo que contradigan una ley obligatoria.' },
        { type: 'p', text: 'Las confirmaciones y recordatorios de Square pueden enviarse por email o mensaje de texto según las preferencias y configuración de la reserva. Los mensajes de servicio no constituyen consentimiento para promociones.' }
      ],
      en: [
        { type: 'p', text: 'You may request an appointment through WhatsApp, phone, or the external Square Appointments link. A message or selected time remains a request until DERMA.M or Square, acting as DERMA.M’s booking platform, issues confirmation.' },
        { type: 'p', text: 'The confirmation will identify the service, location, date, time, and, when applicable, selected professional, estimated price, deposit, and modification rules. If terms differ, the specific terms shown and accepted for that booking control unless they conflict with mandatory law.' },
        { type: 'p', text: 'Square confirmations and reminders may be sent by email or text based on booking preferences and settings. Service messages do not constitute consent to marketing.' }
      ]
    },
    {
      id: 'precios-depositos', shortTitle: 'Precios y depósitos', title: '3. Precios, estimados y depósitos / Prices, estimates and deposits',
      es: [
        { type: 'p', text: 'El precio o estimado disponible al reservar se basa en el servicio seleccionado y la información conocida en ese momento. Cuando una evaluación profesional pueda modificar el plan, DERMA.M explicará el cambio y solicitará tu autorización antes de prestar o cobrar servicios adicionales.' },
        { type: 'p', text: 'Cuando se requiera un depósito, Square o el personal de DERMA.M mostrará su importe antes de confirmar. El depósito se acredita al precio final del servicio y es no reembolsable, pero puede transferirse una vez a una nueva fecha cuando solicites la reprogramación con al menos 72 horas de anticipación. Esta regla no limita devoluciones exigidas por ley ni los casos en que DERMA.M cancela o no presta el servicio.' },
        { type: 'p', text: 'Puedes solicitar antes del servicio un estimado razonable y, después del cobro, una explicación o comprobante desglosado de los cargos aplicables. Esta disposición preserva los derechos que correspondan bajo la Florida Patient’s Bill of Rights, Fla. Stat. § 381.026, cuando el servicio y proveedor estén cubiertos por esa norma.' }
      ],
      en: [
        { type: 'p', text: 'A price or estimate shown when booking is based on the selected service and information known at that time. If a professional evaluation may change the plan, DERMA.M will explain the change and request authorization before providing or charging for additional services.' },
        { type: 'p', text: 'When a deposit is required, Square or DERMA.M staff will display the amount before confirmation. The deposit is credited toward the final service price and is non-refundable, but it may be transferred once to a new date when rescheduling is requested at least 72 hours in advance. This rule does not limit refunds required by law or cases in which DERMA.M cancels or does not provide the service.' },
        { type: 'p', text: 'Before service, you may request a reasonable estimate and, after a charge, an explanation or itemized receipt of applicable charges. This preserves any rights available under the Florida Patient’s Bill of Rights, Fla. Stat. § 381.026, when the service and provider are covered by that law.' }
      ]
    },
    {
      id: 'cancelacion-reprogramacion', shortTitle: 'Cambios', title: '4. Cancelación y reprogramación / Cancellation and rescheduling',
      es: [
        { type: 'p', text: 'Para conservar el depósito como crédito, debes solicitar la reprogramación con al menos 72 horas de anticipación por el canal original de reserva, WhatsApp, teléfono o email. El depósito podrá transferirse una sola vez a una nueva fecha disponible y no se devolverá en efectivo.' },
        { type: 'p', text: 'Las cancelaciones o solicitudes de cambio recibidas con menos de 72 horas de anticipación causan la pérdida del depósito. Para reservar otra fecha se requerirá un nuevo depósito. No se cobrará una penalidad adicional que no haya sido mostrada y aceptada antes de la confirmación.' },
        { type: 'p', text: 'DERMA.M podrá revisar de buena fe una emergencia documentada o circunstancia extraordinaria, sin que ello garantice una excepción. Esta política de 72 horas es una condición contractual de DERMA.M y no se presenta como un plazo impuesto por la ley de Florida.' }
      ],
      en: [
        { type: 'p', text: 'To preserve the deposit as a credit, you must request rescheduling at least 72 hours in advance through the original booking channel, WhatsApp, phone, or email. The deposit may be transferred once to a new available date and will not be refunded in cash.' },
        { type: 'p', text: 'Cancellations or change requests received less than 72 hours in advance result in forfeiture of the deposit. A new deposit is required to book another date. No additional penalty will be charged unless it was shown and accepted before confirmation.' },
        { type: 'p', text: 'DERMA.M may review a documented emergency or extraordinary circumstance in good faith, without guaranteeing an exception. This 72-hour policy is a DERMA.M contractual term and is not represented as a deadline imposed by Florida law.' }
      ]
    },
    {
      id: 'no-show-tardanza', shortTitle: 'No-show y tardanza', title: '5. Incomparecencias y llegadas tardías / No-shows and late arrivals',
      es: [
        { type: 'p', text: 'Una incomparecencia ocurre cuando no asistes y no notificas por un canal autorizado antes de la hora confirmada. En caso de no-show, el depósito se pierde y no se emite reembolso ni crédito. Para reservar nuevamente se requerirá un nuevo depósito.' },
        { type: 'p', text: 'Si llegas tarde, DERMA.M evaluará si el servicio puede realizarse de forma segura y completa sin afectar a otras citas. Podremos reducir únicamente componentes no esenciales con tu acuerdo, ofrecer reprogramación o cancelar el turno si no existe tiempo suficiente para prestar el servicio responsablemente.' },
        { type: 'p', text: 'Si la tardanza impide prestar el servicio de forma segura o dentro del tiempo disponible, la cita podrá tratarse como cancelación tardía y el depósito podrá perderse, pero solo cuando esta consecuencia haya sido mostrada y aceptada antes de reservar. Comunícate con nosotros si anticipas una demora.' }
      ],
      en: [
        { type: 'p', text: 'A no-show occurs when you do not attend and do not notify us through an authorized channel before the confirmed time. In a no-show, the deposit is forfeited and no refund or credit is issued. A new deposit is required to book again.' },
        { type: 'p', text: 'If you arrive late, DERMA.M will determine whether the service can be performed safely and completely without disrupting other appointments. We may reduce only non-essential components with your agreement, offer rescheduling, or cancel when there is not enough time to provide the service responsibly.' },
        { type: 'p', text: 'If a late arrival prevents the service from being performed safely or within the available time, the appointment may be treated as a late cancellation and the deposit may be forfeited, but only when this consequence was shown and accepted before booking. Contact us if you expect a delay.' }
      ]
    },
    {
      id: 'cancelacion-dermam', shortTitle: 'Cancelación de DERMA.M', title: '6. Cancelación por DERMA.M o seguridad / Cancellation by DERMA.M or safety',
      es: [
        { type: 'p', text: 'DERMA.M puede reprogramar o cancelar por indisponibilidad del profesional o equipo, emergencia, cierre, problema técnico, condición de seguridad o contraindicación identificada por el profesional autorizado.' },
        { type: 'p', text: 'Si DERMA.M cancela antes de prestar el servicio, podrás elegir entre reprogramar, aplicar íntegramente el depósito a otro servicio aceptado o recibir el reembolso del importe pagado por el servicio no prestado al método original, salvo que la ley o el emisor del pago exija otro procedimiento.' },
        { type: 'p', text: 'Una recomendación de servicio alternativo requiere tu aceptación. No se sustituirá ni cobrará un tratamiento diferente sin informarte y obtener tu autorización.' }
      ],
      en: [
        { type: 'p', text: 'DERMA.M may reschedule or cancel due to professional or equipment unavailability, emergency, closure, technical issue, safety concern, or a contraindication identified by an authorized professional.' },
        { type: 'p', text: 'If DERMA.M cancels before providing the service, you may choose to reschedule, apply the entire deposit to another accepted service, or receive a refund to the original payment method for the unprovided service, unless law or the payment issuer requires another process.' },
        { type: 'p', text: 'An alternative service recommendation requires your acceptance. A different treatment will not be substituted or charged without disclosure and authorization.' }
      ]
    },
    {
      id: 'reembolsos-servicios', shortTitle: 'Reembolsos', title: '7. Reembolsos y servicios prestados / Refunds and performed services',
      es: [
        { type: 'p', text: 'Debido a su naturaleza, un servicio completado generalmente no es retornable ni reembolsable únicamente porque el resultado individual difiera de una expectativa, siempre que el servicio autorizado haya sido efectivamente prestado.' },
        { type: 'p', text: 'Esta regla no limita derechos relacionados con servicios no prestados, cargos no autorizados, errores de facturación, una diferencia material respecto de lo acordado, obligaciones profesionales o cualquier reembolso exigido por ley.' },
        { type: 'p', text: 'Comunica cualquier inquietud a info@dermamskinhealth.com o al +1 561 253 5384. Revisaremos el servicio, consentimiento, cargo y circunstancias concretas y responderemos de forma razonable. Puedes solicitar un comprobante o explicación de cargos.' }
      ],
      en: [
        { type: 'p', text: 'Because of its nature, a completed service is generally not returnable or refundable solely because an individual result differs from an expectation, when the authorized service was actually provided.' },
        { type: 'p', text: 'This rule does not limit rights involving unprovided services, unauthorized charges, billing errors, a material difference from what was agreed, professional obligations, or any refund required by law.' },
        { type: 'p', text: 'Report concerns to info@dermamskinhealth.com or +1 561 253 5384. We will review the service, consent, charge, and specific circumstances and respond reasonably. You may request a receipt or explanation of charges.' }
      ]
    },
    {
      id: 'paquetes-membresias', shortTitle: 'Paquetes', title: '8. Paquetes, sesiones y renovaciones / Packages and renewals',
      es: [
        { type: 'p', text: 'Antes de comprar un paquete o serie de sesiones, recibirás por escrito su precio, número y tipo de sesiones, reglas de uso, transferibilidad, periodo para utilizarlas y condiciones de cancelación o reembolso. No se aplicará una caducidad o pérdida de valor que no se haya informado claramente antes de la compra.' },
        { type: 'p', text: 'Si un contrato incluye renovación automática, esa condición, frecuencia, precio y procedimiento de cancelación se divulgarán claramente antes de la aceptación. Cuando aplique Fla. Stat. § 501.165, DERMA.M enviará el aviso previo exigido para renovaciones de contratos de duración cubierta.' },
        { type: 'p', text: 'La imposibilidad de continuar por una contraindicación debe evaluarse individualmente. DERMA.M ofrecerá las opciones requeridas por el contrato aceptado y la ley, que pueden incluir reprogramación, crédito, sustitución aceptada o reembolso de la parte no prestada.' }
      ],
      en: [
        { type: 'p', text: 'Before purchasing a package or session series, you will receive written terms stating price, number and type of sessions, use rules, transferability, use period, and cancellation or refund conditions. No expiration or value forfeiture will apply unless clearly disclosed before purchase.' },
        { type: 'p', text: 'If a contract includes automatic renewal, the renewal term, frequency, price, and cancellation method will be clearly disclosed before acceptance. When Fla. Stat. § 501.165 applies, DERMA.M will provide the required advance notice for covered contract renewals.' },
        { type: 'p', text: 'An inability to continue because of a contraindication will be reviewed individually. DERMA.M will provide options required by the accepted contract and law, which may include rescheduling, credit, an accepted substitute, or refund of the unprovided portion.' }
      ]
    },
    {
      id: 'gift-cards', shortTitle: 'Gift cards', title: '9. Tarjetas de regalo y promociones / Gift cards and promotions',
      es: [
        { type: 'p', text: 'Una tarjeta de regalo comprada por valor monetario en Florida no tendrá fecha de vencimiento ni cargos posteriores a la venta, de conformidad con Fla. Stat. § 501.95, salvo una excepción legal aplicable.' },
        { type: 'p', text: 'Un certificado promocional entregado sin un cargo identificable separado puede tener condiciones o vencimiento cuando la ley lo permita, siempre que se informen claramente al entregarlo. Las tarjetas no se canjean por efectivo excepto cuando la ley lo exija.' },
        { type: 'p', text: 'Las restricciones para combinar promociones deben aparecer en la oferta. Ninguna promoción modifica por sí sola los requisitos de evaluación, seguridad o alcance profesional.' }
      ],
      en: [
        { type: 'p', text: 'A gift certificate purchased for monetary value in Florida will not expire or incur post-sale fees under Fla. Stat. § 501.95 unless a statutory exception applies.' },
        { type: 'p', text: 'A promotional certificate provided without a separate identifiable charge may include conditions or an expiration when permitted by law, provided they are clearly disclosed when issued. Gift cards are not redeemable for cash except when required by law.' },
        { type: 'p', text: 'Restrictions on combining promotions must appear in the offer. A promotion does not change evaluation, safety, or professional-scope requirements.' }
      ]
    },
    {
      id: 'productos', shortTitle: 'Productos', title: '10. Devoluciones de productos / Product returns',
      es: [
        { type: 'p', text: 'Para productos físicos vendidos por DERMA.M, la política aplicable estará disponible en el punto de venta. Un producto sin abrir, sin usar y en su empaque original podrá devolverse con comprobante dentro de los 7 días siguientes a la compra, salvo que se haya informado claramente una política más favorable.' },
        { type: 'p', text: 'Por razones de higiene y seguridad, los cosméticos abiertos o usados no son retornables cuando no puedan revenderse legal o razonablemente. Esta exclusión no limita reclamaciones por producto defectuoso, incorrecto, alterado o no conforme con la venta.' },
        { type: 'p', text: 'Cuando DERMA.M no ofrezca devolución, crédito o cambio de mercancía, exhibirá el aviso requerido en el punto de venta conforme a Fla. Stat. § 501.142.' }
      ],
      en: [
        { type: 'p', text: 'For physical products sold by DERMA.M, the applicable policy will be available at the point of sale. An unopened, unused product in its original packaging may be returned with proof of purchase within 7 days unless a more favorable policy was clearly disclosed.' },
        { type: 'p', text: 'For hygiene and safety reasons, opened or used cosmetics are not returnable when they cannot legally or reasonably be resold. This exclusion does not limit claims involving defective, incorrect, altered, or nonconforming products.' },
        { type: 'p', text: 'When DERMA.M offers no merchandise refund, credit, or exchange, the notice required by Fla. Stat. § 501.142 will be displayed at the point of sale.' }
      ]
    },
    {
      id: 'square-pagos', shortTitle: 'Square y pagos', title: '11. Square, pagos y privacidad / Square, payments and privacy',
      es: [
        { type: 'p', text: 'Square Appointments es una plataforma externa operada por Block, Inc. Si reservas o pagas allí, los datos de tarjeta se introducen y procesan directamente en Square, no en dermamskinhealth.com.' },
        { type: 'p', text: 'DERMA.M recibe los datos de cita y cliente necesarios para administrar la reserva y puede recibir el estado, importe, método y referencias limitadas de la transacción que Square pone a disposición del comercio. Las devoluciones aprobadas se procesarán al método original cuando sea técnicamente posible; el tiempo de acreditación depende de Square, la red de pago y la institución financiera.' },
        { type: 'p', text: 'Nada en esta Política elimina derechos legales frente a cargos no autorizados o errores de facturación. Para una resolución más rápida, comunícate primero con DERMA.M, sin perjuicio de los derechos disponibles con el emisor del método de pago.' },
        { type: 'externalLink', before: 'Consulta el ', label: 'Aviso de Privacidad de Square para usuarios sin cuenta', href: 'https://squareup.com/us/en/legal/general/privacy-no-account', after: '.' },
        { type: 'externalLink', before: 'Las funciones de comprador pueden estar sujetas a los ', label: 'Términos de la Cuenta de Comprador de Square', href: 'https://squareup.com/us/es/legal/general/buyer-account-terms', after: '.' }
      ],
      en: [
        { type: 'p', text: 'Square Appointments is an external platform operated by Block, Inc. If you book or pay there, card data is entered and processed directly by Square, not by dermamskinhealth.com.' },
        { type: 'p', text: 'DERMA.M receives appointment and customer data needed to manage the booking and may receive transaction status, amount, method, and limited references Square makes available to the seller. Approved refunds will be returned to the original method when technically possible; posting time depends on Square, the payment network, and the financial institution.' },
        { type: 'p', text: 'Nothing in this Policy eliminates legal rights involving unauthorized charges or billing errors. For faster resolution, contact DERMA.M first without waiving rights available through the payment-method issuer.' },
        { type: 'externalLink', before: 'Review the ', label: 'Square Privacy Notice for users without an account', href: 'https://squareup.com/us/en/legal/general/privacy-no-account', after: '.' },
        { type: 'externalLink', before: 'Buyer features may be subject to the ', label: 'Square Buyer Account Terms of Use', href: 'https://squareup.com/us/en/legal/general/buyer-account-terms', after: '.' }
      ]
    },
    {
      id: 'promociones-salud', shortTitle: 'Promociones clínicas', title: '12. Servicios gratuitos o con descuento / Free or discounted services',
      es: [
        { type: 'p', text: 'Cuando una publicidad de un profesional de salud sujeto a Fla. Stat. § 456.062 ofrezca un servicio, examen o tratamiento gratuito o con tarifa reducida, DERMA.M incluirá el aviso en mayúsculas exigido por esa norma. La aplicabilidad depende del profesional, servicio y publicidad concreta.' },
        { type: 'notice', title: 'Aviso requerido cuando aplique Fla. Stat. § 456.062', text: 'EL PACIENTE Y CUALQUIER OTRA PERSONA RESPONSABLE DEL PAGO TIENEN DERECHO A NEGARSE A PAGAR, CANCELAR EL PAGO O RECIBIR UN REEMBOLSO POR CUALQUIER OTRO SERVICIO, EXAMEN O TRATAMIENTO REALIZADO COMO RESULTADO Y DENTRO DE LAS 72 HORAS DE RESPONDER AL ANUNCIO DEL SERVICIO, EXAMEN O TRATAMIENTO GRATUITO, CON DESCUENTO O CON TARIFA REDUCIDA.' }
      ],
      en: [
        { type: 'p', text: 'When an advertisement by a health care practitioner subject to Fla. Stat. § 456.062 offers a free or reduced-fee service, examination, or treatment, DERMA.M will include the capitalized notice required by that statute. Applicability depends on the particular professional, service, and advertisement.' },
        { type: 'notice', title: 'Notice required when Fla. Stat. § 456.062 applies', text: 'THE PATIENT AND ANY OTHER PERSON RESPONSIBLE FOR PAYMENT HAS A RIGHT TO REFUSE TO PAY, CANCEL PAYMENT, OR BE REIMBURSED FOR PAYMENT FOR ANY OTHER SERVICE, EXAMINATION, OR TREATMENT THAT IS PERFORMED AS A RESULT OF AND WITHIN 72 HOURS OF RESPONDING TO THE ADVERTISEMENT FOR THE FREE, DISCOUNTED FEE, OR REDUCED FEE SERVICE, EXAMINATION, OR TREATMENT.' }
      ]
    },
    {
      id: 'contacto', shortTitle: 'Contacto', title: '13. Contacto y reclamaciones / Contact and concerns',
      es: [
        { type: 'p', text: 'Para cancelar, reprogramar, solicitar un reembolso o plantear una inquietud sobre un cargo, comunícate con DERMA.M tan pronto como sea posible e incluye tu nombre, fecha de cita y referencia de reserva. No envíes datos completos de tarjeta por email o WhatsApp.' },
        { type: 'list', items: privacyContact },
        { type: 'p', text: 'Revisaremos la solicitud según las condiciones aceptadas para la reserva y la ley aplicable. Si una reclamación se relaciona con servicios de un profesional sanitario, también podrás solicitar información sobre el procedimiento de quejas y la agencia de licencias correspondiente cuando Fla. Stat. § 381.0261 resulte aplicable.' }
      ],
      en: [
        { type: 'p', text: 'To cancel, reschedule, request a refund, or raise a charge concern, contact DERMA.M as soon as possible and include your name, appointment date, and booking reference. Do not send complete card details by email or WhatsApp.' },
        { type: 'list', items: privacyContact },
        { type: 'p', text: 'We will review the request under the terms accepted for the booking and applicable law. If a concern relates to services of a health care professional, you may also request information about the complaint process and relevant licensing agency when Fla. Stat. § 381.0261 applies.' }
      ]
    }
  ]
};
