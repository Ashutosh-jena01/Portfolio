import type { AnchorHTMLAttributes } from 'react'
import { Icon } from './Icon'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { direction?: 'right' | 'up-right' }

export function TextLink({ children, direction, className = '', target, rel, ...props }: TextLinkProps) {
  const external = target === '_blank'
  return <a target={target} rel={external ? rel ?? 'noopener noreferrer' : rel} className={`inline-flex items-center gap-1.5 text-sm text-lunar-white underline decoration-white/25 underline-offset-4 transition-colors hover:text-cosmic-blue hover:decoration-cosmic-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lunar-white ${className}`} {...props}>
    {children}{direction ? <Icon name={direction === 'right' ? 'arrow-right' : 'arrow-up-right'} size={15} /> : external ? <Icon name="external-link" size={15} /> : null}
  </a>
}
