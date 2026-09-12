import { HERO_LOCAL_TAG } from './siteMeta';

export const aboutPage = {
  hero: {
    eyebrow: "NOSOTROS",
    title: "CRITERIO, EXPERIENCIA Y ATENCIÓN PERSONAL",
    body: "En DERMA.M cada plan empieza por entender tus objetivos. Estética informada y acompañada, no improvisada.",
    localTag: HERO_LOCAL_TAG,
    primaryCta: "AGENDA TU VALORACIÓN",
    secondaryCta: "WHATSAPP",
    backgroundImage: "/assets/images/contact/hero.jpg",
    variant: "default"
  },
  founderSpotlight: {
    eyebrow: "FUNDADORA Y DIRECTORA DE DERMA.M",
    name: "NANCY NIETO",
    subheadline: "Flebotomista certificada en Estados Unidos y especialista en Estética Facial, con licencia otorgada por el Estado de Florida.",
    body: "Su filosofía de trabajo se basa en escuchar, educar y acompañar a cada persona, porque detrás de cada piel existe una historia única.",
    image: "/assets/images/about/nancy-nieto-fundadora.jpg",
    imageAlt: "Retrato de Nancy Nieto, fundadora y directora de DERMA.M"
  },
  enfoque: {
    eyebrow: "CÓMO TRABAJAMOS",
    headline: "TRES PASOS EN CADA PLAN DE CUIDADO",
    items: [
      {
        title: "VALORACIÓN",
        body: "Escuchamos tus objetivos y revisamos tus necesidades antes de recomendar una opción."
      },
      {
        title: "CRITERIO PROFESIONAL",
        body: "Aplicamos formación continua y protocolos definidos con atención a la seguridad y al contexto de cada persona."
      },
      {
        title: "ACOMPAÑAMIENTO",
        body: "Explicamos cada etapa con claridad y damos seguimiento para que te sientas orientada durante el proceso."
      }
    ]
  },
  teamHeader: {
    eyebrow: "EQUIPO Y ESPECIALIDADES",
    headline: "PROFESIONALES POR ÁREA DE CUIDADO",
    body: "Conoce a las profesionales que acompañan cada área de cuidado y la preparación que aportan a tu experiencia en DERMA.M."
  },
  team: [
    {
      name: "Nancy Nieto",
      role: "Fundadora y Directora",
      specialtyLabel: "Faciales",
      shortBio: "Flebotomista certificada en Estados Unidos y especialista en Estética Facial, con licencia otorgada por el Estado de Florida.",
      mediaType: "video",
      videoSrc: "/assets/images/about/team/nancy-nieto.mp4",
      mediaSrc: "/assets/images/about/team/nancy-nieto.jpg",
      mediaPosition: "center top",
      vcardEnabled: true,
      vcardUrl: "/team/vcards/nancy-nieto.vcf",
      status: "active"
    },
    {
      name: "Mikaela Guajardo",
      role: "Especialista Facial & Electróloga",
      specialtyLabel: "Faciales",
      shortBio: "Licenciada en Florida como Facial Specialist y Técnica en Electrólisis. Formación complementaria en enfermería aplicada al cuidado avanzado de piel.",
      mediaType: "video",
      videoSrc: "/assets/images/about/team/mikaela-guajardo.mp4",
      mediaSrc: "/assets/images/about/team/mikaela-guajardo.jpg",
      mediaPosition: "center 18%",
      vcardEnabled: true,
      vcardUrl: "/team/vcards/mikaela-guajardo.vcf",
      status: "active"
    },
    {
      name: "Daniela Parra",
      role: "Esteticista",
      specialtyLabel: "Faciales",
      shortBio: "+3 años en tratamiento de pieles acneicas, hiperpigmentadas, sensibles y envejecidas. Terapeuta de masajes certificada con enfoque de bienestar integral.",
      mediaType: "video",
      videoSrc: "/assets/images/about/team/daniela-parra.mp4",
      mediaSrc: "/assets/images/about/team/daniela-parra.jpg",
      mediaPosition: "center top",
      vcardEnabled: true,
      vcardUrl: "/team/vcards/daniela-parra.vcf",
      status: "active"
    },
    {
      name: "Elianne Trujillo",
      role: "Masajista Terapéutica",
      specialtyLabel: "Corporales & Postoperatorio",
      shortBio: "2 años de experiencia en postoperatorio, drenaje linfático y masaje descontracturante. Enfocada en recuperación, remodelación y bienestar del paciente.",
      mediaType: "video",
      videoSrc: "/assets/images/about/team/elianne-trujillo.mp4",
      mediaSrc: "/assets/images/about/team/elianne-trujillo.jpg",
      mediaPosition: "center 12%",
      vcardEnabled: true,
      vcardUrl: "/team/vcards/elianne-trujillo.vcf",
      status: "active"
    },
    {
      name: "Tony Díaz, DO",
      role: "Médico Director — Supervisión IV Therapy",
      specialtyLabel: "IV Therapy",
      shortBio: "Responsable de la supervisión médica de los protocolos de IV Therapy en DERMA.M.",
      mediaType: "video",
      videoSrc: "/assets/images/about/team/tony-diaz.mp4",
      mediaSrc: "/assets/images/about/team/tony-diaz.jpg",
      mediaPosition: "center 18%",
      vcardEnabled: true,
      vcardUrl: "/team/vcards/tony-diaz.vcf",
      status: "active"
    },
    {
      name: "Dr. Miguel Ramos",
      role: "Odontólogo Especialista en Ortodoncia, Rehabilitación Oral y Estética Dental",
      specialtyLabel: "Estética Dental",
      shortBio: "Más de 25 años de práctica clínica en ortodoncia, rehabilitación oral y blanqueamiento dental certificado, combinando conocimiento clínico con una visión estética centrada en el paciente.",
      mediaType: "video",
      videoSrc: "/assets/images/about/team/miguel-ramos.mp4",
      mediaSrc: "/assets/images/about/team/miguel-ramos.jpg",
      mediaPosition: "center 18%",
      vcardEnabled: true,
      vcardUrl: "/team/vcards/miguel-ramos.vcf",
      status: "active"
    },
    {
      name: "Melisa L. Ríos",
      role: "HR & Operations Manager",
      specialtyLabel: "Administración",
      shortBio: "Esteticista y Flebotomista licenciada en Florida. Responsable de recursos humanos, operaciones y la experiencia integral del equipo y los pacientes en DERMA.M.",
      mediaType: "video",
      videoSrc: "/assets/images/about/team/melisa-rios.mp4",
      mediaSrc: "/assets/images/about/team/melisa-rios.jpg",
      mediaPosition: "center 18%",
      vcardEnabled: true,
      vcardUrl: "/team/vcards/melisa-rios.vcf",
      status: "active"
    }
  ],
  quote: {
    text: "Mi mayor satisfacción es que cada persona se sienta escuchada, bien orientada y acompañada con honestidad. Esa confianza también forma parte del cuidado.",
    author: "Nancy Nieto",
    title: "Fundadora y Directora de DERMA.M"
  },
  testimonials: [
    {
      quote: "Realmente estoy muy agradecida con DERMA.M especialmente con Mikaela y Nancy, aunque todo el equipo de trabajo es una maravilla. Súper lindas, cariñosas, comprometidas con su trabajo.",
      author: "KARINA PÉREZ VAILLANT"
    },
    {
      quote: "Tengo dos años asistiendo a DERMA y estoy muy feliz con los cambios que ha tenido mi piel, Nancy y las muchachas son excelentes y muy profesionales.",
      author: "CECY GARCIA"
    },
    {
      quote: "Súper agradecida con Nancy. Tiene unas manos magníficas y un don especial para cuidar la piel. Llevo 6 años visitándola cada mes y mi piel ha cambiado.",
      author: "CARLA AFRICA GARUZ"
    }
  ],
  testimonialsHeader: {
    eyebrow: "GOOGLE REVIEWS",
    headline: "EXPERIENCIAS COMPARTIDAS POR NUESTROS CLIENTES",
    body: "Testimonios de personas que eligieron a DERMA.M para acompañar sus objetivos de cuidado."
  },
  cta: {
    eyebrow: "TU PRIMER PASO",
    headline: "AGENDA UNA VALORACIÓN PERSONALIZADA",
    body: "Conversemos sobre tus objetivos y revisemos qué opciones pueden ajustarse a ti después de una valoración profesional.",
    primaryCta: "AGENDA TU VALORACIÓN",
    secondaryCta: "WHATSAPP",
    disclaimer: "La recomendación final depende de una valoración profesional. Los resultados y la respuesta a cada tratamiento pueden variar.",
    backgroundImage: "/assets/images/about/cta.jpg"
  }
};

export const founderPrimer = {
  eyebrow: 'FUNDADORA Y DIRECTORA DE DERMA.M',
  name: 'NANCY NIETO',
  credentialLine: 'Flebotomista Certificada en EE.UU. y Especialista en Estética Facial con licencia del Estado de Florida.',
  relationalLine: 'Su forma de trabajar parte de escuchar, educar y acompañar a cada persona — porque detrás de cada piel hay una historia única.',
  linkLabel: 'Conoce a Nancy Nieto',
  linkTo: '/nosotros/nancy-nieto'
};

export const founderBioPage = {
  hero: {
    title: "NANCY NIETO",
    body: "Mi mayor satisfacción es observar cambios reales en la piel de mis clientes y acompañarlos durante todo su proceso.",
    attribution: "FUNDADORA Y DIRECTORA DE DERMA.M",
    backgroundImage: "/assets/images/about/nancy-nieto/nancy-nieto-hero.jpg",
    variant: "default"
  },
  historia: {
    eyebrow: "FORMACIÓN Y TRAYECTORIA",
    headline: "UNA TRAYECTORIA CONSTRUIDA EN VARIOS PAÍSES",
    credentials: [
      {
        region: "Estados Unidos",
        detail: "Flebotomista certificada y especialista en Estética Facial, con licencia otorgada por el Estado de Florida."
      },
      {
        region: "Ecuador",
        detail: "Formación profesional en Cosmetología, Cosmiatría y Dermatocosmiatría."
      },
      {
        region: "Argentina",
        detail: "Título profesional en Dermatocosmiatría."
      },
      {
        region: "Formación continua",
        detail: "Certificaciones y educación continua en tratamientos faciales avanzados, acné, manchas, cicatrices y rejuvenecimiento facial."
      }
    ],
    paragraphs: [
      "Más allá de sus títulos y certificaciones, Nancy se distingue por su pasión por aprender y mantenerse en constante actualización. Su propósito es lograr cambios reales y visibles en la piel de cada cliente mediante tratamientos personalizados, conocimiento y acompañamiento profesional.",
      "Hasta 2026, Nancy y su equipo han realizado más de 4,000 procedimientos estéticos, construyendo una trayectoria basada en la experiencia, la confianza y el compromiso con cada cliente.",
      "Como fundadora de DERMA.M, Nancy también se dedica a capacitar continuamente a su equipo, asegurándose de que cada profesional brinde un servicio de excelencia, con preparación, responsabilidad y un trato humano."
    ]
  },
  filosofia: {
    eyebrow: "FILOSOFÍA",
    headline: "ESCUCHAR, EDUCAR Y ACOMPAÑAR",
    body: "Su forma de trabajar comienza con una escucha cercana y una evaluación personalizada. Nancy considera que cada piel tiene necesidades diferentes y que comprender su historia es esencial para recomendar el tratamiento adecuado.",
    secondaryBody: "Para ella, la estética va más allá de la apariencia: significa cuidar la salud de la piel, fortalecer la confianza y contribuir al bienestar de cada cliente."
  },
  dermamYAcademy: {
    eyebrow: "DERMA.M Y DERMA.M ACADEMY",
    headline: "UN ESPACIO PARA CUIDAR Y UN PROYECTO PARA FORMAR",
    body: "Con esa visión, Nancy creó DERMA.M: un espacio donde la ciencia, la experiencia y la atención humana se unen para ofrecer tratamientos seguros, éticos y orientados a resultados reales. De su mano nació también DERMA.M Academy, un proyecto que refleja su compromiso con la excelencia, la educación continua y el crecimiento profesional dentro de la industria de la estética.",
    secondaryBody: "Hoy continúa preparándose con el mismo entusiasmo que la impulsó desde el primer día. Su meta es seguir haciendo crecer DERMA.M para generar oportunidades a otras mujeres profesionales e inspirarlas a creer en su potencial.",
    href: "https://dermamacademy.com",
    linkLabel: "Conoce DERMA.M Academy"
  },
  quote: {
    text: "Mi mayor satisfacción es observar cambios reales en la piel de mis clientes y acompañarlos durante todo su proceso. Cada resultado representa confianza, constancia y un trabajo realizado con conocimiento, dedicación y responsabilidad.",
    author: "Nancy Nieto",
    title: "Fundadora y Directora de DERMA.M"
  },
  cta: {
    eyebrow: "TU PRIMER PASO",
    headline: "AGENDA UNA VALORACIÓN PERSONALIZADA",
    body: "Conversemos sobre tus objetivos y revisemos qué opciones pueden ajustarse a ti después de una valoración profesional.",
    primaryCta: "AGENDA TU VALORACIÓN",
    secondaryCta: "WHATSAPP",
    disclaimer: "La recomendación final depende de una valoración profesional. Los resultados y la respuesta a cada tratamiento pueden variar.",
    backgroundImage: "/assets/images/about/cta.jpg"
  }
};
