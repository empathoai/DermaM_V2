import React, { useState } from 'react';
import styles from './MediaBlock.module.css';

export default function MediaBlock({
  src,
  alt = '',
  aspectRatio,
  variant = 'light',
  className = '',
  imagePosition,
}) {
  const [error, setError] = useState(false);

  const style = aspectRatio ? { aspectRatio } : {};

  if (!src || error) {
    return <div className={`${styles.fallback} ${styles[variant]} ${className}`} style={style} />;
  }

  return (
    <div className={`${styles.wrapper} ${className}`} style={style}>
      <img
        src={src}
        alt={alt ? alt : undefined}
        className={styles.image}
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
        onError={() => setError(true)}
      />
    </div>
  );
}
