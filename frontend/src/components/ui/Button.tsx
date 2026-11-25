import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost'; size?: 'sm' | 'md' | 'lg'; leadingIcon?: IconName; trailingIcon?: IconName; loading?: boolean }

const variants = {
  primary: 'bg-cosmic-blue text-obsidian hover:bg-lunar-white',
  secondary: 'border border-white/20 bg-graphite text-lunar-white hover:border-white/40 hover:bg-elevated-surface',
  ghost: 'text-secondary-text hover:bg-white/10 hover:text-lunar-white',
}
const sizes = { sm: 'min-h-9 px-3 text-xs', md: 'min-h-11 px-4 text-sm', lg: 'min-h-12 px-5 text-sm' }

export function Button({ children, variant = 'primary', size = 'md', leadingIcon, trailingIcon, loading = false, disabled, className = '', ...props }: ButtonProps) {
  return <button disabled={disabled || loading} className={`inline-flex items-center justify-center gap-2 rounded-control font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lunar-white disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
    {loading ? <Icon name="loader" className="animate-spin" /> : leadingIcon ? <Icon name={leadingIcon} /> : null}
    <span>{children}</span>
    {!loading && trailingIcon ? <Icon name={trailingIcon} /> : null}
  </button>
}

export type ButtonContent = ReactNode
