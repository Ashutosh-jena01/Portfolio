import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'

type PlaceholderSectionProps = {
  id: string
  index: string
  title: string
  description: string
}

export function PlaceholderSection({ id, index, title, description }: PlaceholderSectionProps) {
  const headingId = `${id}-heading`

  return (
    <Section id={id} labelledBy={headingId} className="border-b border-white/10">
      <ScrollReveal className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]" stagger={90}>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cosmic-blue">{index} / Reserved section</p>
          <h2 id={headingId} className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.04em]">{title}</h2>
        </div>
        <div className="flex items-start lg:justify-end">
          <p className="max-w-xl text-lg leading-8 text-secondary-text">{description}</p>
        </div>
      </ScrollReveal>
    </Section>
  )
}
