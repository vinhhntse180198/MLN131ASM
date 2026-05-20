import { useReveal } from '../hooks/useReveal.js'

/** Khối nội dung: cuộn vào viewport thì các `.c4-scroll-reveal-item` lần lượt hiện */
export default function ScrollRevealSection({
  as: Tag = 'section',
  className = '',
  variant = 'up',
  children,
  ...rest
}) {
  const { ref, className: visible } = useReveal({
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  })

  const cls = [
    'c4-scroll-block',
    variant ? `c4-scroll-block--${variant}` : '',
    visible,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
