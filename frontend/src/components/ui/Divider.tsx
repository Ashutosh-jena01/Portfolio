import type { HTMLAttributes } from 'react'

export function Divider({ className = '', ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr role="separator" className={`border-0 border-t border-white/15 ${className}`} {...props} />
}
