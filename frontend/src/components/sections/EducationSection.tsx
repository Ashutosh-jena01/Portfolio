import type { EducationEntry } from '../../data/education'
import { educationEntries } from '../../data/education'
import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'

function EducationEntryView({ entry }: { entry: EducationEntry }) {
  return <div className="education-timeline-entry">
    <div className="education-timeline-date"><time dateTime={entry.startDate}>{entry.startDate}</time><span aria-hidden="true">—</span><time dateTime={entry.endDate}>{entry.endDate}</time></div>
    <div className="education-timeline-node" aria-hidden="true" />
    <article className="education-timeline-card"><p className="font-mono text-xs uppercase tracking-[0.2em] text-cosmic-blue">{entry.abbreviation ?? 'Academic record'}</p><h3 className="mt-4 font-display text-2xl tracking-tight text-lunar-white">{entry.qualification}</h3>{entry.institution ? <p className="mt-3 text-base text-secondary-text">{entry.institution}</p> : null}{entry.specialization ? <p className="mt-2 text-sm text-muted-text">{entry.specialization}</p> : null}{entry.description ? <p className="mt-5 max-w-2xl text-base leading-7 text-secondary-text">{entry.description}</p> : null}{entry.achievements?.length ? <ul className="mt-5 space-y-2 text-sm leading-6 text-secondary-text">{entry.achievements.map((achievement) => <li key={achievement}>• {achievement}</li>)}</ul> : null}</article>
  </div>
}

export function EducationSection() {
  const entries = [...educationEntries].sort((a, b) => a.order - b.order)

  return <Section id="education" labelledBy="education-heading" className="border-b border-white/10">
    <ScrollReveal><p className="font-mono text-xs uppercase tracking-[0.24em] text-cosmic-blue">04 / ACADEMIC JOURNEY</p><h2 id="education-heading" className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.065em] text-lunar-white">Where it all began<span className="text-cosmic-blue">.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-text">The academic foundation behind my engineering journey.</p></ScrollReveal>
    {entries.length > 0 ? <ol className="education-timeline mt-14">{entries.map((entry, index) => <li key={entry.id}><ScrollReveal delay={index * 100}><EducationEntryView entry={entry} /></ScrollReveal></li>)}</ol> : null}
  </Section>
}
