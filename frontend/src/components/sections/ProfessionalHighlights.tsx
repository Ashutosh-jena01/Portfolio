import type { ProfessionalHighlightIcon } from '../../data/professionalHighlights'
import { professionalHighlights } from '../../data/professionalHighlights'
import { ScrollReveal } from '../ui/ScrollReveal'

function HighlightIcon({ icon }: { icon: ProfessionalHighlightIcon }) {
  const paths = {
    signal: <><path d="M4 18V9" /><path d="M10 18V5" /><path d="M16 18v-7" /><path d="M22 18V3" /></>,
    path: <><path d="M4 17c3.5-7 6.5 2 10-5s5.5 1 8-5" /><path d="M18 7h4v4" /></>,
    foundation: <><path d="m4 8 8-4 8 4-8 4-8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 16 8 4 8-4" /></>,
    cloud: <><path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 11.5 3.25 3.25 0 0 0 7 18Z" /><path d="M12 10v6" /><path d="m9.5 13 2.5-3 2.5 3" /></>,
  }

  return <svg aria-hidden="true" className="professional-highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{paths[icon]}</svg>
}

export function ProfessionalHighlights() {
  return (
    <div className="mt-20 border-t border-white/10 pt-10">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cosmic-blue">02 / Professional Snapshot</p>
      </ScrollReveal>
      <ScrollReveal delay={80} stagger={90} className="professional-highlights-grid mt-6">
        {professionalHighlights.map((highlight) => <article key={highlight.label} className="professional-highlight-card">
          <div className="flex items-start justify-between gap-4">
            <HighlightIcon icon={highlight.icon} />
            <span className="font-mono text-[0.68rem] tracking-[0.2em] text-muted-text">{highlight.label}</span>
          </div>
          <h3 className="mt-8 font-display text-xl tracking-tight text-lunar-white">{highlight.title}</h3>
          <p className="mt-3 text-sm leading-6 text-secondary-text">{highlight.description}</p>
        </article>)}
      </ScrollReveal>
    </div>
  )
}
