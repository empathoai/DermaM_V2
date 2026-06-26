import { useState, useEffect } from 'react'

export default function HeroMedia({ src, alt = '', className = '', onReady, style }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
  }, [src])

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

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc('/assets/images/global/og-default.jpg')
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="eager"
      onLoad={onReady}
      onError={handleError}
      className={className}
      style={combinedStyle}
    />
  )
}
