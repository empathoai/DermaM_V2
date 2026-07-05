import React, { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({
  eyebrow,
  headline,
  support,
  items,
  variant = 'warm',
  layout = 'split'
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionId = useId();
  const prefersReducedMotion = useReducedMotion();

  if (!items || items.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => currentIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <section
        className={`${styles.section} ${styles[variant]}`}
        aria-labelledby={headline ? `${sectionId}-heading` : undefined}
      >
        <div className={styles.container}>
          <div className={`${styles.faqWrapper} ${styles[layout]}`}>
            {headline && (
              <div className={styles.headerRow}>
                <SectionHeader
                  eyebrow={eyebrow}
                  title={headline}
                  titleId={`${sectionId}-heading`}
                  support={support}
                  variant="light"
                />
              </div>
            )}

            <div className={styles.accordionList}>
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                const buttonId = `${sectionId}-button-${index}`;
                const panelId = `${sectionId}-panel-${index}`;

                return (
                  <div
                    key={item.question}
                    className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                  >
                    <button
                      id={buttonId}
                      className={styles.accordionButton}
                      type="button"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className={styles.question}>{item.question}</span>
                      <motion.span
                        className={styles.icon}
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: 'easeOut' }}
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.3,
                            ease: [0.25, 1, 0.5, 1]
                          }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className={styles.answer}>{item.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
