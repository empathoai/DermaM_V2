import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import styles from './TeamBySpecialty.module.css';

export default function TeamBySpecialty({ members, header }) {
  const visible = (members || []).filter(
    (m) => m.status === 'active' || m.status === 'comingSoon'
  );
  if (visible.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="team-heading">
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <SectionHeader
            eyebrow={header?.eyebrow}
            title={header?.headline}
            support={header?.body}
            variant="light"
            align="left"
            titleId="team-heading"
          />
        </div>

        <div className={styles.grid}>
          {visible.map((member, idx) => (
            <div key={member.name || idx} className={styles.gridItem}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
