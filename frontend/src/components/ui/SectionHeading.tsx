import type { ElementType, ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

type SectionHeadingProps = { title: string; level?: 1 | 2 | 3 | 4; number?: string; eyebrow?: string; description?: ReactNode; className?: string; id?: string }

export function SectionHeading({ title, level = 2, number, eyebrow, description, className = '', id }: SectionHeadingProps) {
  const Heading = `h${level}` as ElementType
  return <div className={`space-y-4 ${className}`}><Eyebrow number={number}>{eyebrow}</Eyebrow><Heading id={id} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.04em] text-lunar-white">{title}</Heading>{description ? <p className="max-w-xl text-lg leading-8 text-secondary-text">{description}</p> : null}</div>
}
