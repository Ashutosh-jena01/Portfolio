import type { HTMLAttributes, ReactNode } from 'react'

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & { number?: string; children?: ReactNode }

export function Eyebrow({ number, children, className = '', ...props }: EyebrowProps) {
  return <p className={`font-mono text-xs uppercase tracking-widest text-cosmic-blue ${className}`} {...props}>{number ? `${number} / ` : null}{children}</p>
}
