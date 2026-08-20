export default function Picture({ src, alt, className, style, loading, onLoad, onError, ...rest }) {
  const webpSrc = typeof src === 'string' ? src.replace(/\.jpe?g$/i, '.webp') : undefined;

  return (
    <picture>
      {webpSrc && webpSrc !== src && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        onLoad={onLoad}
        onError={onError}
        {...rest}
      />
    </picture>
  );
}
