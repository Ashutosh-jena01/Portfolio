import { Children, cloneElement, isValidElement, type CSSProperties, type ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

type RevealStyles = CSSProperties & {
  '--reveal-delay'?: string
  '--reveal-stagger'?: string
  '--reveal-child-delay'?: string
}

export function ScrollReveal({ children, className = '', delay = 0, stagger = 0, once = true }: ScrollRevealProps) {
  const elementRef = useScrollReveal<HTMLDivElement>({ once })
  const style: RevealStyles = { '--reveal-delay': `${delay}ms`, '--reveal-stagger': `${stagger}ms` }
  const staggeredChildren = Children.map(children, (child, index) => {
    if (!stagger || !isValidElement<{ style?: CSSProperties }>(child)) return child
    const childStyle: RevealStyles = { ...child.props.style, '--reveal-child-delay': `${index * stagger}ms` }
    return cloneElement(child, { style: childStyle })
  })

  return <div ref={elementRef} className={`scroll-reveal ${stagger ? 'scroll-reveal-stagger' : ''} ${className}`} style={style}>{staggeredChildren}</div>
}
