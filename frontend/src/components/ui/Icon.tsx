export type IconName = 'arrow-right' | 'arrow-up-right' | 'arrow-down' | 'menu' | 'close' | 'check' | 'external-link' | 'mail' | 'chevron' | 'loader'

type IconProps = { name: IconName; size?: number; className?: string; decorative?: boolean }

export function Icon({ name, size = 18, className = '', decorative = true }: IconProps) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className, 'aria-hidden': decorative ? true : undefined }
  const paths: Record<IconName, React.ReactNode> = {
    'arrow-right': <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    'arrow-up-right': <><path d="M5 19 19 5" /><path d="M9 5h10v10" /></>,
    'arrow-down': <><path d="M12 4v15" /><path d="m6 13 6 6 6-6" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    'external-link': <><path d="M14 5h5v5" /><path d="M19 5 10 14" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    loader: <path d="M12 3a9 9 0 1 1-6.36 2.64" />,
  }
  return <svg {...common} role={decorative ? undefined : 'img'}>{paths[name]}</svg>
}
