import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FinalCTA.module.css';

export default function FinalCTA({
  eyebrow,
  title,
  body,
  backgroundImage,
  primaryCta,
  secondaryCta,
  disclaimer,
  variant = 'dark',
  primaryLink,
  secondaryLink
}) {
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappEnv = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappUrl = whatsappEnv ? `https://wa.me/${whatsappEnv.replace(/[^0-9]/g, '')}` : 'https://wa.link/z7i9vm';

  const href1 = primaryLink || bookingUrl;
  const href2 = secondaryLink || whatsappUrl;

  return (
    <section 
      className={`${styles.cta} ${styles[variant]}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          {eyebrow && (
            <div className={styles.eyebrowWrapper}>
              <div className={styles.line}></div>
              <span className={styles.eyebrow}>{eyebrow}</span>
            </div>
          )}
          {title && <h2 className={styles.headline}>{title}</h2>}
          {body && <p className={styles.body}>{body}</p>}
          
          <div className={styles.actions}>
            {primaryCta && (
              <a href={href1} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                {primaryCta}
              </a>
            )}
            {secondaryCta && (
              <a href={href2} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                {secondaryCta}
              </a>
            )}
          </div>

          {/* Contextual Booking & Cancellation Disclaimer */}
          <div className="mt-4 pt-1 text-[11px] leading-relaxed text-[#CCC9C1]/80 max-w-lg mx-auto font-light">
            Al reservar tu cita, aceptas nuestra{" "}
            <Link to="/booking-cancellation-refund-policy" className="underline hover:text-[#F2F0F1] transition-colors duration-200">
              Política de reserva y cancelación
            </Link>
            . Los depósitos, cancelaciones, reprogramaciones y ausencias están sujetos a esta misma.
          </div>
          
          {disclaimer && (
            <p className={styles.disclaimer}>{disclaimer}</p>
          )}
        </div>
      </div>
    </section>
  );
}
