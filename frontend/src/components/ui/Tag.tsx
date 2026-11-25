import type { HTMLAttributes } from 'react'

export function Tag({ children, className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-widest text-secondary-text ${className}`} {...props}>{children}</span>
}
