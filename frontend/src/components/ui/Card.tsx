import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'bordered' | 'elevated'; spacing?: 'compact' | 'comfortable' }

export function Card({ children, variant = 'default', spacing = 'comfortable', className = '', ...props }: CardProps) {
  const surfaces = { default: 'bg-graphite', bordered: 'border border-white/15 bg-graphite', elevated: 'bg-elevated-surface shadow-panel' }
  return <div className={`rounded-panel ${surfaces[variant]} ${spacing === 'compact' ? 'p-4' : 'p-6'} ${className}`} {...props}>{children}</div>
}
