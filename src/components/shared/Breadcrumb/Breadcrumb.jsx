import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.to}>{item.label}</Link>
          {index < items.length - 1 && <span>→</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
