import { HERO_LOCAL_TAG } from './siteMeta';

export const aboutPage = {
  hero: {
    eyebrow: "NOSOTROS",
    title: "CRITERIO, EXPERIENCIA Y ATENCIÓN PERSONAL",
    body: "En DERMA.M cada plan empieza por entender tus objetivos. Estética informada y acompañada, no improvisada.",
    localTag: HERO_LOCAL_TAG,
    primaryCta: "AGENDA TU VALORACIÓN",
    secondaryCta: "WHATSAPP",
    backgroundImage: "/assets/images/about/hero.jpg",
    variant: "default"
  },
  founderSpotlight: {
    eyebrow: "FUNDADORA Y DIRECTORA DE DERMA.M",
    name: "NANCY NIETO",
    subheadline: "Flebotomista certificada en Estados Unidos y especialista facial con licencia en Florida. Formación en Cosmetología, Cosmiatría y Dermocosmiatría en Ecuador.",
    body: "DERMA.M nació de su visión de una estética responsable, cercana y guiada por la formación continua.",
    image: "/assets/images/home/founder.jpg",
    imageAlt: "Nancy Nieto, fundadora y directora de DERMA.M"
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
      specialtyLabel: "Fundadora & CEO · Faciales",
      shortBio: "Flebotomista certificada en Estados Unidos y especialista facial con licencia en Florida. Formación en Cosmetología, Cosmiatría y Dermocosmiatría en Ecuador.",
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
      shortBio: "Responsable de la supervisión médica de los protocolos de IV Therapy en Derma.M.",
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
      shortBio: "Esteticista y Flebotomista licenciada en Florida. Responsable de recursos humanos, operaciones y la experiencia integral del equipo y los pacientes en Derma.M.",
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
    eyebrow: "RESEÑAS DE GOOGLE",
    headline: "EXPERIENCIAS COMPARTIDAS POR NUESTROS CLIENTES",
    body: "Testimonios de personas que eligieron a DERMA.M para acompañar sus objetivos de cuidado."
  },
  cta: {
    eyebrow: "TU PRIMER PASO",
    headline: "AGENDA UNA VALORACIÓN PERSONALIZADA",
    body: "Conversemos sobre tus objetivos y revisemos qué opciones pueden ajustarse a ti después de una valoración profesional.",
    primaryCta: "AGENDAR VALORACIÓN",
    secondaryCta: "CONSULTAR POR WHATSAPP",
    disclaimer: "La recomendación final depende de una valoración profesional. Los resultados y la respuesta a cada tratamiento pueden variar.",
    backgroundImage: "/assets/images/about/cta.jpg"
  }
};

export const founderPrimer = {
  eyebrow: 'FUNDADORA DE DERMA.M',
  name: 'NANCY NIETO',
  credentialLine: 'Flebotomista Certificada en EE.UU. y Especialista en Estética Facial con licencia del Estado de Florida.',
  relationalLine: 'Su forma de trabajar parte de escuchar, educar y acompañar a cada persona — porque detrás de cada piel hay una historia única.',
  linkLabel: 'Conoce a Nancy Nieto',
  linkTo: '/nosotros/nancy-nieto'
};

export const founderBioPage = {
  hero: {
    eyebrow: "FUNDADORA Y DIRECTORA DE DERMA.M",
    title: "NANCY NIETO",
    body: "DERMA.M nació del sueño y la pasión de Nancy Nieto por el cuidado de la piel, el bienestar y el servicio a los demás. Hoy dirige el medical spa en West Palm Beach con esa misma visión.",
    primaryCta: "AGENDA TU VALORACIÓN",
    secondaryCta: "WHATSAPP",
    backgroundImage: "/assets/images/about/hero.jpg",
    variant: "default"
  },
  historia: {
    eyebrow: "FORMACIÓN Y TRAYECTORIA",
    headline: "UNA PROFESIONAL FORMADA EN DOS PAÍSES",
    body: "Nancy es Flebotomista Certificada en los Estados Unidos y Especialista en Estética Facial con licencia aprobada por el Estado de Florida. Cuenta además con formación como Cosmetóloga, Cosmiatra y Dermocosmiatra en Ecuador, y complementa sus conocimientos con capacitación continua en tratamientos faciales avanzados, acné, manchas, cicatrices y rejuvenecimiento de la piel.",
    secondaryBody: "Más allá de sus títulos y certificaciones, Nancy se define como una profesional apasionada por transformar vidas a través del cuidado de la piel. Para ella, cada tratamiento es una oportunidad de ayudar a una persona a sentirse más segura, más feliz y más confiada."
  },
  filosofia: {
    eyebrow: "FILOSOFÍA",
    headline: "ESCUCHAR, EDUCAR Y ACOMPAÑAR",
    body: "Su forma de trabajar parte de escuchar, educar y acompañar a cada cliente de manera personalizada, entendiendo que detrás de cada piel existe una historia única.",
    secondaryBody: "Para Nancy, la estética va mucho más allá de la apariencia: se trata de bienestar, autoestima y calidad de vida."
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
    text: "Mi mayor satisfacción es saber que puedo servir, escuchar y acompañar a cada persona en su proceso. Cuando ayudamos a alguien a sentirse mejor consigo mismo, también estamos cambiando su día, su confianza y, muchas veces, una parte importante de su vida.",
    author: "Nancy Nieto",
    title: "Fundadora y Directora de DERMA.M"
  },
  cta: {
    eyebrow: "TU PRIMER PASO",
    headline: "AGENDA UNA VALORACIÓN PERSONALIZADA",
    body: "Conversemos sobre tus objetivos y revisemos qué opciones pueden ajustarse a ti después de una valoración profesional.",
    primaryCta: "AGENDAR VALORACIÓN",
    secondaryCta: "CONSULTAR POR WHATSAPP",
    disclaimer: "La recomendación final depende de una valoración profesional. Los resultados y la respuesta a cada tratamiento pueden variar.",
    backgroundImage: "/assets/images/about/cta.jpg"
  }
};
