import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type ButtonOptions = { variant?: 'primary' | 'secondary' | 'ghost'; size?: 'sm' | 'md' | 'lg'; leadingIcon?: IconName; trailingIcon?: IconName; loading?: boolean }
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonOptions
type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonOptions & { href: string }

const variants = {
  primary: 'bg-cosmic-blue text-obsidian hover:bg-lunar-white',
  secondary: 'border border-white/20 bg-graphite text-lunar-white hover:border-white/40 hover:bg-elevated-surface',
  ghost: 'text-secondary-text hover:bg-white/10 hover:text-lunar-white',
}
const sizes = { sm: 'min-h-9 px-3 text-xs', md: 'min-h-11 px-4 text-sm', lg: 'min-h-12 px-5 text-sm' }

export function Button(props: ButtonProps | ButtonLinkProps) {
  const { children, variant = 'primary', size = 'md', leadingIcon, trailingIcon, loading = false, className = '' } = props
  const buttonClassName = `inline-flex items-center justify-center gap-2 rounded-control font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lunar-white disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`
  const content = <>
    {loading ? <Icon name="loader" className="animate-spin" /> : leadingIcon ? <Icon name={leadingIcon} /> : null}
    <span>{children}</span>
    {!loading && trailingIcon ? <Icon name={trailingIcon} /> : null}
  </>

  if ('href' in props) {
    const linkProps = withoutButtonOptions(props)
    return <a className={buttonClassName} {...linkProps as AnchorHTMLAttributes<HTMLAnchorElement>}>{content}</a>
  }

  const buttonProps = withoutButtonOptions(props)
  return <button disabled={props.disabled || loading} className={buttonClassName} {...buttonProps as ButtonHTMLAttributes<HTMLButtonElement>}>{content}</button>
}

function withoutButtonOptions(props: ButtonProps | ButtonLinkProps) {
  const cleanProps = { ...props } as Record<string, unknown>
  for (const key of ['variant', 'size', 'leadingIcon', 'trailingIcon', 'loading', 'children']) delete cleanProps[key]
  return cleanProps
}

export type ButtonContent = ReactNode
