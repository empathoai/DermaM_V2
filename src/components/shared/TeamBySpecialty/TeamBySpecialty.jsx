import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import styles from './TeamBySpecialty.module.css';

export default function TeamBySpecialty({ groups }) {
  if (!groups || groups.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="team-heading">
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <SectionHeader
            eyebrow="EQUIPO Y ESPECIALIDADES"
            title="PROFESIONALES POR ÁREA DE CUIDADO."
            support="Cada área de DERMA.M cuenta con profesionales preparados para acompañarte con criterio, sensibilidad y atención personalizada."
            variant="light"
            align="left"
          />
        </div>

        <div className={styles.groupsList}>
          {groups.map((group, groupIdx) => {
            // Filter out draft and archived members
            const visibleMembers = group.members.filter(
              (m) => m.status === 'active' || m.status === 'comingSoon'
            );

            // If empty (all draft/archived), inject a temporary comingSoon record
            const displayMembers = visibleMembers.length > 0 
              ? visibleMembers 
              : [{ name: "Próximamente", status: "comingSoon" }];

            return (
              <div key={groupIdx} className={styles.groupBlock}>
                <div className={styles.groupHeader}>
                  <h3 className={styles.groupTitle}>{group.specialty}</h3>
                  {group.support && (
                    <p className={styles.groupSupport}>{group.support}</p>
                  )}
                  <div className={styles.line}></div>
                </div>

                <div className={styles.grid}>
                  {displayMembers.map((member, memberIdx) => (
                    <div key={memberIdx} className={styles.gridItem}>
                      <TeamMemberCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
