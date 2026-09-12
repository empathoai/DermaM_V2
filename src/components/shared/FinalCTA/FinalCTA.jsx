import React from 'react';
import { Link } from 'react-router-dom';
import { MEDICAL_VALUATION_NOTICE } from '../../../data/siteMeta';
import { buildWhatsAppUrl, GENERIC_WHATSAPP_MESSAGE, contextualWhatsAppMessage } from '../../../utils/whatsapp';
import { trackWhatsAppClick } from '../../../utils/whatsappTracking';
import styles from './FinalCTA.module.css';

export default function FinalCTA({
  eyebrow,
  title,
  body,
  backgroundImage,
  primaryCta,
  secondaryCta,
  whatsappTopic,
  disclaimer,
  variant = 'dark',
  primaryLink,
  secondaryLink,
  compactLegal = false
}) {
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappUrl = buildWhatsAppUrl(
    whatsappTopic ? contextualWhatsAppMessage(whatsappTopic) : GENERIC_WHATSAPP_MESSAGE
  );

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
          
          <div className={`${styles.actions} ${compactLegal ? styles.actionsCompact : ''}`}>
            {primaryCta && (
              <a href={href1} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                {primaryCta}
              </a>
            )}
            {secondaryCta && (
              <a href={href2} onClick={trackWhatsAppClick} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                {secondaryCta}
              </a>
            )}
          </div>

          <div className={compactLegal ? styles.legalCompact : styles.legal}>
            Reserva sujeta a{" "}
            <Link to="/booking-cancellation-refund-policy" className={styles.legalLink}>
              Política de reserva y cancelación
            </Link>
            .
          </div>
          
          {disclaimer && (
            <p className={styles.disclaimer}>
              {compactLegal
                ? `${MEDICAL_VALUATION_NOTICE} Resultados pueden variar.`
                : disclaimer}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
