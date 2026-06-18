import { useState } from 'react'

export default function HeroMedia({ src, alt = '', className = '', onReady, style }) {
  const isVideo = src?.endsWith('.mp4')

  const defaultStyle = { objectFit: 'cover', width: '100%', height: '100%' }
  const combinedStyle = style ? { ...defaultStyle, ...style } : defaultStyle

  if (isVideo) {
    return (
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={src.replace('.mp4', '.jpg')}
        onLoadedData={onReady}
        className={className}
        style={combinedStyle}
      >
        <source src={src} type="video/mp4" />
      </video>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      onLoad={onReady}
      className={className}
      style={combinedStyle}
    />
  )
}
