import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { siteConfig } from '../../config/site'
import { SpaceEnvironment } from '../space/SpaceEnvironment'
import { Button } from '../ui'
import { useHeroParallax } from '../../hooks/useHeroParallax'
import { useHeroScrollTransition } from '../../hooks/useHeroScrollTransition'

export function HeroSection() {
  useHeroParallax('home')
  useHeroScrollTransition('home')

  return (
    <Section id="home" fullWidth className="relative isolate flex min-h-[max(42rem,100svh)] items-center overflow-hidden" labelledBy="hero-heading">
      <SpaceEnvironment />
      <Container className="relative z-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-1 lg:gap-16 xl:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
          <div className="max-w-3xl space-y-7 lg:pr-8 xl:max-w-[48rem]">
            <div className="hero-entrance hero-entrance-identity space-y-2">
              <p className="font-display text-xl font-medium tracking-tight text-lunar-white sm:text-2xl">{siteConfig.ownerName}</p>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cosmic-blue">{siteConfig.designation}</p>
            </div>
            <h1 id="hero-heading" className="hero-entrance hero-entrance-headline font-display text-[clamp(3.75rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.075em] text-lunar-white sm:text-[clamp(5rem,9vw,8rem)]"><span className="block">Beyond</span><span className="block whitespace-normal xl:whitespace-nowrap">the Cloud<span className="text-cosmic-blue">.</span></span></h1>
            <p className="hero-entrance hero-entrance-tagline max-w-xl text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed text-titanium">{siteConfig.tagline}</p>
            <div className="hero-entrance hero-entrance-cta flex flex-col items-stretch gap-3 pt-4 sm:flex-row sm:items-center">
              <Button href="#projects" size="lg" trailingIcon="arrow-right">Explore My Work</Button>
              <Button href="#contact" size="lg" variant="secondary">Let&apos;s Talk</Button>
            </div>
          </div>
          <div aria-hidden="true" className="hidden min-h-64 xl:block" />
        </div>
      </Container>
    </Section>
  )
}
