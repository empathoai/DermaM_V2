import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function BookingPolicy() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dermamskinhealth.com';
  
  const sections = [
    {
      id: "scheduling",
      shortTitle: "Programación",
      title: "Programación y Confirmación de Citas / Appointment Scheduling & Confirmation",
      content: (
        <>
          <p>
            Las solicitudes de citas para DERMA.M se gestionan mediante nuestros canales de contacto móvil autorizados, nuestro portal de reserva integrado en línea, o mediante llamada de atención directa. Una solicitud preliminar de espacio no garantiza la reserva del mismo en el sistema activo de nuestra clínica estética hasta la debida liquidación del depósito financiero requerido y la validación final por parte de coordinación.
          </p>
        </>
      )
    },
    {
      id: "deposits",
      shortTitle: "Depósitos",
      title: "Depósitos de Reserva / Booking Deposits",
      content: (
        <>
          <p>
            Para asegurar la disponibilidad y profesionalismo de las horas asignadas, se requiere la realización de un depósito bancario o de tarjeta por cada espacio programado.
          </p>
          <div className="p-4 border border-[#363633]/20 bg-[#EFEFEB] text-xs space-y-2 font-mono">
            <span className="font-semibold block">[OPERATIONAL PLACEHOLDER / DATO A DETERMINAR POR DERMA.M]:</span>
            <p>Monto de Depósito Requerido: <strong>[INSERT DEPOSIT AMOUNT OR POLICY / EJ: $50 USD O DEPÓSITO SEGÚN TRATAMIENTO ESPECÍFICO]</strong></p>
            <p>Este pago se acreditará de forma directa al balance final del importe total de sus servicios seleccionados el día de su visita presencial.</p>
          </div>
        </>
      )
    },
    {
      id: "cancellations",
      shortTitle: "Cancelación y Cambio",
      title: "Cancelación y Reprogramación de Visitas / Cancellations & Rescheduling",
      content: (
        <>
          <p>
            Comprendemos que eventos de fuerza mayor o compromisos imprevistos pueden alterar su agenda de actividades semanales. No obstante, al apartar un turno especial, impedimos que otros pacientes reciban atención profesional.
          </p>
          <div className="p-4 border border-[#363633]/20 bg-[#EFEFEB] text-xs space-y-2 font-mono my-2">
            <span className="font-semibold block">[OPERATIONAL PLACEHOLDER / DATO DE VENTANA OPERATIVA]:</span>
            <p>Ventana de Cancelación / Reprogramación Estándar: <strong>[INSERT CANCELLATION WINDOW / EJ: EXIGE ANUNCIO DE AL MENOS 24 O 48 HORAS DE ANTICIPACIÓN]</strong></p>
            <p>Cualquier cancelación o cambio recibido fuera de esta ventana temporal incurrirá de modo automático en la retención total o parcial del depósito constituido, según criterio de administración.</p>
          </div>
        </>
      )
    },
    {
      id: "no-shows",
      shortTitle: "Incomparecencia",
      title: "Incomparecencias Directas y Tardanzas / No-Shows & Late Arrivals",
      content: (
        <>
          <h4 className="font-semibold mt-4 text-[#141313]">A. Incomparecencia Directa (No-Show):</h4>
          <p>
            De no asistir a su sesión reservada sin previo aviso por los canales autorizados de DERMA.M, LLC, se considerará una incomparecencia irresponsable y se aplicará la penalización preestablecida:
          </p>
          <div className="p-4 border border-[#363633]/15 bg-[#EFEFEB] text-xs font-mono mb-4">
            <span className="font-semibold block">[OPERATIONAL PLACEHOLDER / DATO DE PENALIZACIÓN]:</span>
            <p>Cargo por No-Show: <strong>[INSERT NO-SHOW POLICY / EJ: PÉRDIDA COMPLETA DEL DEPÓSITO DE RESERVA O PENALIDAD DE CARGO ESPECÍFICO]</strong></p>
          </div>

          <h4 className="font-semibold mt-6 text-[#141313]">B. Tolerancia de Llegadas Tardías (Late Arrivals):</h4>
          <p>
            A fin de respetar los horarios asignados de los clientes posteriores, se contemplará un margen máximo de cortesía:
          </p>
          <div className="p-4 border border-[#363633]/15 bg-[#EFEFEB] text-xs font-mono my-2">
            <span className="font-semibold block">[OPERATIONAL PLACEHOLDER / TOLERANCIA ESTÁNDAR]:</span>
            <p>Margen de Tolerancia de Tardanza: <strong>[INSERT LATE ARRIVAL POLICY / EJ: TIEMPO MÁXIMO DE CORTESÍA DE 10 O 15 MINUTOS]</strong></p>
            <p>De superarse este margen temporal, DERMA.M, LLC se reserva el derecho de acortar proporcionalmente la duración del tratamiento o cancelar y posponer el turno, cobrando la penalidad aplicable como incomparecencia tardía.</p>
          </div>
        </>
      )
    },
    {
      id: "contraindications",
      shortTitle: "Seguridad Clínica",
      title: "Cláusula de Cancelación por Contraindicación del Terapeuta / Safety Contraindication Friendly Clause",
      content: (
        <>
          <p>
            Priorizamos la integridad dermatológica y la salud general sobre los beneficios estéticos inmediatos de los tratamientos corporales y faciales. Por ello, se implementa la siguiente directriz protectora:
          </p>
          <div className="p-5 border border-[#363633]/20 bg-[#EFEFEB] text-xs space-y-4 my-4 font-sans leading-relaxed">
            <p className="font-bold uppercase tracking-wider text-[#141313]">[SPANISH CLAUSE / CLÁUSULA EN ESPAÑOL]:</p>
            <p className="italic font-medium text-[#141313]">
              "Si un servicio programado no puede realizarse porque DERMA.M identifica una consideración de seguridad o contraindicación durante la evaluación, DERMA.M podrá recomendar reprogramar la cita, modificar el plan de tratamiento o aplicar la cita a un servicio alternativo más seguro."
            </p>
            <p className="border-t border-[#363633]/10 pt-4 font-bold uppercase tracking-wider text-[#141313]">[ENGLISH CLAUSE / CLÁUSULA EN INGLÉS]:</p>
            <p className="italic font-medium text-[#141313]">
              "If a scheduled service cannot be performed because DERMA.M identifies a safety concern or contraindication during evaluation, DERMA.M may recommend rescheduling, modifying the treatment plan, or applying the appointment toward a safer alternative service."
            </p>
          </div>
          <p>
            En estos casos específicos, el depósito previandose no se perderá por penalidad de cancelación tardía, sino que se mantendrá íntegro a favor del balance de su nueva cita o plan alterado.
          </p>
        </>
      )
    },
    {
      id: "refunds",
      shortTitle: "Reembolsos",
      title: "Reembolsos de Servicios Realizados / Refund Policy for Performed Services",
      content: (
        <>
          <p>
            Los tratamientos de bienestar general y cosmetología de <strong>DERMA.M, LLC</strong> se comercializan bajo el principio de prestación y consumo inmediato una vez dispensados de forma clínica presencial en la cabina. Por lo tanto, <strong>no se otorgarán reembolsos financieros o devoluciones de importe bajo concepto alguno por tratamientos clínicos o estéticos ya ejecutados</strong> de forma completa por nuestro personal.
          </p>
          <p>
            Cualquier inconformidad técnica estética individual de resultados del tratamiento debe ser comunicada directamente a la directiva o enviada de manera respetuosa por escrito a la casilla de atención para una posterior evaluación diagnóstica de seguimiento.
          </p>
        </>
      )
    },
    {
      id: "packages",
      shortTitle: "Paquetes",
      title: "Términos de Paquetes, Sesiones Prepagadas y Promociones / Multi-session Packages & Gift Cards",
      content: (
        <>
          <h4 className="font-semibold text-[#141313]">A. Paquetes y Tárjetas Multi-sesión:</h4>
          <p>
            Los paquetes multisesión de tratamiento adquiridos de forma adelantada son personales e intransferibles:
          </p>
          <div className="p-4 border border-[#363633]/15 bg-[#EFEFEB] text-xs font-mono mb-4">
            <span className="font-semibold block">[OPERATIONAL PLACEHOLDER / DATO DE CADUCIDAD]:</span>
            <p>Vigencia y Expiración del Paquete: <strong>[INSERT PACKAGE EXPIRATION POLICY / EJ: CADUCAN DE FORMA AUTOMÁTICA EN UN PLAZO DE 6 O 12 MESES DESDE LA COMPRA]</strong></p>
          </div>

          <h4 className="font-semibold mt-6 text-[#141313]">B. Tarjetas de Regalo (Gift Cards) y Promociones:</h4>
          <p>
            Las tarjetas de regalo expedidas por DERMA.M no pueden ser canjeadas por efectivo metálico o de balances de terceros:
          </p>
          <div className="p-4 border border-[#363633]/15 bg-[#EFEFEB] text-xs font-mono my-2">
            <span className="font-semibold block">[OPERATIONAL PLACEHOLDER / CONDICIONES DE TARJETAS DE REGALO]:</span>
            <p>Condiciones de Tarjetas y Descuentos: <strong>[INSERT GIFT CARD TERMS / EJ: NO SON REEMBOLSABLES, NO SE PUEDEN ACUMULAR CON OTRAS CAMPAÑAS PROMOCIONALES ACTIVAS Y TIENEN FECHA DE VENCIMIENTO EXPLICITADA EN EL REVERSO]</strong></p>
          </div>
        </>
      )
    },
    {
      id: "products",
      shortTitle: "Productos",
      title: "Políticas de Retorno de Productos Dermo-estéticos / Product Returns",
      content: (
        <>
          <p>
            Para garantizar la más estricta esterilidad e inocuidad de las fórmulas cosméticas y de tratamiento tópico expedidas en el mostrador físico de DERMA.M, LLC, se aplican las siguientes reglas:
          </p>
          <div className="p-4 border border-[#363633]/20 bg-[#EFEFEB] text-xs space-y-2 font-mono my-2">
            <span className="font-semibold block">[OPERATIONAL PLACEHOLDER / RETORNO DE COSMÉTICOS]:</span>
            <p>Política de Devolución de Productos: <strong>[INSERT PRODUCT RETURN POLICY / EJ: EXIGE QUE LOS PRODUCTOS SE ENCUENTREN TOTALMENTE SELLADOS DE FÁBRICA EN SU CAJA ORIGINAL Y DEVOLVER EN UN PLAZO MÁXIMO DE 7 DÍAS NATURALES. NO SE ADMITEN DEVOLUCIONES DE COSMÉTICOS YA ABIERTOS O USADOS]</strong></p>
          </div>
        </>
      )
    },
    {
      id: "platforms",
      shortTitle: "Plataformas",
      title: "Plataformas e Integración de Terceros / E-Commerce Booking Providers",
      content: (
        <>
          <p>
            El procesamiento financiero de fiducias y asignación de franjas horarias a través de nuestro sitio web se gestiona mediante software especializado de terceros (como Square Sessions u otra pasarela de pago autorizada). 
          </p>
          <p>
            <strong>DERMA.M, LLC</strong> no manipula ni almacena de forma local los números completos de su tarjeta de crédito o débito; dicha información es transmitida con cifrados de seguridad industrial y gobernada de forma absoluta por las políticas de cumplimiento bancario de dichos procesadores externos.
          </p>
        </>
      )
    },
    {
      id: "contact",
      shortTitle: "Contacto",
      title: "Contacto para Modificaciones Clínicas o Solicitudes de Agenda",
      content: (
        <>
          <p>
            Para reprogramar o registrar dudas respecto de cancelaciones inmediatas antes de las horas pactadas, contáctenos de urgencia a:
          </p>
          <div className="p-5 border border-[#363633]/10 bg-[#EFEFEB] text-xs mt-4">
            <p className="font-semibold uppercase text-[#141313] mb-2">DERMA.M, LLC</p>
            <p className="mb-1"><strong>Atención e Inquietudes de Agenda:</strong> 5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
            <p className="mb-1"><strong>Contacto / WhatsApp Directo:</strong> +1 561 253 5384</p>
            <p className="mb-1"><strong>Correo Administrativo:</strong> info@dermamskinhealth.com</p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0F1] selection:bg-[#CCC9C1]">
      <Helmet>
        <title>Política de Reserva y Cancelación | DERMA.M LLC Florida</title>
        <meta name="description" content="Términos de reserva, depósitos financieros, políticas de tardanzas y reprogramación por contraindicaciones en el centro estético DERMA.M, LLC." />
        {siteUrl && <link rel="canonical" href={`${siteUrl}/booking-cancellation-refund-policy`} />}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <LegalPageLayout
          title="Política de Reservas, Cancelación y Reembolsos"
          subtitle="Términos, fiducias de depósitos bancarios, incomparecencias operativas y marcos de retorno aplicados en el centro dermatológico DERMA.M."
          effectiveDate="10 de Octubre de 2021"
          lastUpdated="17 de Junio de 2026"
          attorneyReviewRequired={true}
          attorneyCalloutText="[REVISIÓN LEGAL REQUERIDA: Un especialista contractual de Florida debe validar las cláusulas de retención de depósitos de seña por incomparecencia y plazos de caducidad para garantizar pleno cumplimiento de las disposiciones de protección al consumidor estatal.]"
          sections={sections}
        />
      </main>
      
      <Footer />
    </div>
  );
}
