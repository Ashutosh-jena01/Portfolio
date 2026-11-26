import { professionalProfile } from '../../data/professionalProfile'
import { ProfessionalHighlights } from './ProfessionalHighlights'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'

export function AboutSection() {
  return (
    <Section id="about" labelledBy="about-heading" className="about-section border-b border-white/10">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.7fr)] lg:gap-20">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cosmic-blue">01 / Beyond the Introduction</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 id="about-heading" className="mt-5 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.065em] text-lunar-white">Behind the Intelligence<span className="text-cosmic-blue">.</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={150} className="mt-8">
            <div className="space-y-1">
              <p className="font-display text-xl font-medium tracking-tight text-lunar-white sm:text-2xl">{professionalProfile.fullName}</p>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cosmic-blue">{professionalProfile.designation}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={220} stagger={110} className="mt-8 space-y-5 text-lg leading-8 text-secondary-text">
            <p>{professionalProfile.introduction}</p>
            <p>{professionalProfile.biography}</p>
          </ScrollReveal>
          {professionalProfile.resumeSrc ? <ScrollReveal delay={420} className="mt-8"><Button href={professionalProfile.resumeSrc} target="_blank" rel="noreferrer" trailingIcon="arrow-up-right">Download Résumé</Button></ScrollReveal> : null}
        </div>

        <ScrollReveal delay={180} className="lg:justify-self-end">
          <div className="about-portrait" role="img" aria-label={`Portrait placeholder for ${professionalProfile.fullName}`}>
            <div aria-hidden="true" className="about-portrait-orbit about-portrait-orbit-one" />
            <div aria-hidden="true" className="about-portrait-orbit about-portrait-orbit-two" />
            <div aria-hidden="true" className="about-portrait-mark">AJ</div>
            <p aria-hidden="true" className="absolute inset-x-0 bottom-6 text-center font-mono text-[0.68rem] uppercase tracking-[0.28em] text-titanium">Portrait pending</p>
          </div>
        </ScrollReveal>
      </div>
      <ProfessionalHighlights />
    </Section>
  )
}
