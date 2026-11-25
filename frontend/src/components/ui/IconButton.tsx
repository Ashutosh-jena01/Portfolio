import type { ButtonHTMLAttributes } from 'react'
import { Icon, type IconName } from './Icon'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { icon: IconName; label: string; size?: 'sm' | 'md' }

export function IconButton({ icon, label, size = 'md', className = '', ...props }: IconButtonProps) {
  return <button type="button" aria-label={label} className={`inline-flex items-center justify-center rounded-control text-lunar-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lunar-white disabled:cursor-not-allowed disabled:opacity-50 ${size === 'sm' ? 'min-h-9 min-w-9' : 'min-h-11 min-w-11'} ${className}`} {...props}><Icon name={icon} /></button>
}
