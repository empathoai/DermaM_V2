import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './FAQAccordion.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function FAQAccordion({
  headline,
  items,
  variant = 'light',
  layout = 'stacked'
}) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items || items.length === 0) return null;

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.faqWrapper} ${styles[variant]} ${styles[layout]}`}>
      {headline && (
        <div className={styles.headerRow}>
          <SectionHeader title={headline} variant="light" />
        </div>
      )}
      <div className={styles.accordionList}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
            >
              <button 
                className={styles.accordionButton} 
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <span className={styles.question}>{item.question}</span>
                <motion.span 
                  className={styles.icon}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isOpen ? '×' : '+'}
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    style={{ overflow: 'hidden' }}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.answer}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
