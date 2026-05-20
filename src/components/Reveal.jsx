import { useReveal } from '../hooks/useReveal.js'

export function Reveal({ as: Tag = 'div', className = '', children, stagger = false, ...rest }) {
  const { ref, className: visible } = useReveal()
  const cls = ['c4-reveal', stagger ? 'c4-reveal-stagger' : '', visible, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
