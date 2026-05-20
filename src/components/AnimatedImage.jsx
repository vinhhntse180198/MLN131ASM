import { useReveal } from '../hooks/useReveal.js'

/**
 * motion: 'ken-burns' | 'float' | 'zoom' | 'none'
 */
export default function AnimatedImage({
  src,
  alt = '',
  className = '',
  motion = 'ken-burns',
  caption,
  eager = false,
  /** true = cha `.c4-scroll-block` điều khiển hiện + ảnh động */
  deferReveal = false,
}) {
  const { ref, className: revealClass } = useReveal()

  if (!src) return null

  const motionClass =
    motion === 'ken-burns'
      ? 'c4-img-motion--ken-burns'
      : motion === 'float'
        ? 'c4-img-motion--float'
        : motion === 'zoom'
          ? 'c4-img-motion--zoom'
          : ''

  const cls = [
    'c4-img-motion',
    deferReveal ? 'c4-scroll-reveal-item' : 'c4-reveal',
    deferReveal ? '' : revealClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <figure ref={deferReveal ? undefined : ref} className={cls}>
      <div className={`c4-img-motion__frame ${motionClass}`}>
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
      {caption ? <figcaption className="c4-img-motion__cap">{caption}</figcaption> : null}
    </figure>
  )
}
