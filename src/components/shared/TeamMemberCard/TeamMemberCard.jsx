import React from 'react';
import MediaBlock from '../MediaBlock/MediaBlock';
import styles from './TeamMemberCard.module.css';

export default function TeamMemberCard({ member }) {
  if (!member) return null;

  if (member.status === 'comingSoon') {
    return (
      <article className={styles.card} style={{ height: '100%', minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className={styles.info} style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', height: '100%' }}>
          <h4 className={styles.name}>Nuevos especialistas próximamente</h4>
          <p className={styles.bio} style={{ fontSize: '13px', lineHeight: '1.6', color: '#4E4D4D' }}>
            DERMA.M continúa creciendo para ofrecerte una atención más completa, manteniendo el mismo estándar de cuidado, profesionalismo y atención personalizada.
          </p>
        </div>
        <div className={styles.vcardArea}>
          <a
            href="#founder-spotlight"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('founder-spotlight');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={styles.vcardButton}
          >
            Conocer a Nancy
          </a>
        </div>
      </article>
    );
  }

  const {
    name,
    role,
    specialty,
    licenses,
    shortBio,
    mediaType = 'image',
    mediaSrc,
    videoSrc,
    vcardUrl,
    vcardEnabled = false
  } = member;

  return (
    <article className={styles.card} id={`member-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={styles.mediaArea}>
        {mediaType === 'video' && videoSrc ? (
          <video
            src={videoSrc}
            className={styles.video}
            muted
            playsInline
            loop
            autoPlay
          />
        ) : (
          <MediaBlock
            src={mediaSrc}
            alt=""
            aspectRatio="4/5"
            variant="light"
            className={styles.mediaBlock}
          />
        )}
      </div>
      
      <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.role}>{role}</p>
        
        {specialty && (
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Especialidad</span>
            <span className={styles.metaValue}>{specialty}</span>
          </div>
        )}
        
        {licenses && (
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Licencia</span>
            <span className={styles.metaValue}>{licenses}</span>
          </div>
        )}
        
        {shortBio && <p className={styles.bio}>{shortBio}</p>}
      </div>

      <div className={styles.vcardArea}>
        {vcardEnabled && vcardUrl ? (
          <a
            href={vcardUrl}
            download
            className={styles.vcardButton}
          >
            DESCARGAR VCARD
          </a>
        ) : (
          <button
            type="button"
            className={styles.vcardButtonDisabled}
            disabled
          >
            VCARD PRÓXIMAMENTE
          </button>
        )}
      </div>
    </article>
  );
}
