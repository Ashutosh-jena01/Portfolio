import { Section } from '../layout/Section'
import { siteConfig } from '../../config/site'

export function HeroSection() {
  return (
    <Section id="home" className="flex min-h-[70vh] items-center border-b border-white/10" labelledBy="hero-heading">
      <div className="max-w-4xl space-y-8">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cosmic-blue">{siteConfig.projectName} / Portfolio</p>
        <div className="space-y-5">
          <h1 id="hero-heading" className="font-display text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.92] tracking-[-0.07em]">{siteConfig.ownerName}</h1>
          <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-titanium">{siteConfig.designation}</p>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-secondary-text">{siteConfig.tagline}</p>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-text">Structural foundation / Phase 02</p>
      </div>
    </Section>
  )
}
