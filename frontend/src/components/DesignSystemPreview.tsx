import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Button, Card, Divider, Eyebrow, IconButton, SectionHeading, StatusIndicator, Tag, TextLink } from './ui'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Status = 'checking' | 'connected' | 'failed'

const palette = [
  { name: 'Obsidian', value: '#08090B', className: 'bg-obsidian' },
  { name: 'Graphite', value: '#14161B', className: 'bg-graphite' },
  { name: 'Lunar White', value: '#F5F5F5', className: 'bg-lunar-white' },
  { name: 'Titanium', value: '#969DA8', className: 'bg-titanium' },
  { name: 'Cosmic Blue', value: '#7695C9', className: 'bg-cosmic-blue' },
]

export function DesignSystemPreview() {
  const reducedMotion = useReducedMotion()
  const [backend, setBackend] = useState<Status>('checking')
  const [database, setDatabase] = useState<Status>('checking')

  useEffect(() => {
    let active = true
    api.getBackendHealth().then((data) => { if (active) setBackend(data.status === 'healthy' ? 'connected' : 'failed') }).catch(() => { if (active) setBackend('failed') })
    api.getDatabaseHealth().then((data) => { if (active) setDatabase(data.database === 'connected' ? 'connected' : 'failed') }).catch(() => { if (active) setDatabase('failed') })
    return () => { active = false }
  }, [])

  const services = [
    { name: 'React Frontend', status: 'connected' as const },
    { name: 'FastAPI Backend', status: backend },
    { name: 'PostgreSQL Database', status: database },
  ]

  return (
    <div className="min-h-screen bg-obsidian py-12 text-lunar-white sm:py-20">
      <div className="design-container space-y-16">
        <header className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cosmic-blue">Phase 02 / Design system preview</p>
          <div className="space-y-4"><h1 className="font-display text-[clamp(2.75rem,8vw,6.75rem)] font-medium leading-[0.95] tracking-[-0.06em]">Beyond the Cloud</h1><p className="max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed text-titanium">Engineering intelligence. Building beyond boundaries.</p></div>
          <p className="max-w-2xl text-base leading-7 text-secondary-text">A professional, cinematic foundation for Ashutosh Jena, AI/ML Engineer. This temporary screen validates the global visual language before the application shell is built.</p>
        </header>
        <section aria-labelledby="type-heading" className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1fr_1.4fr]"><div><p className="font-mono text-xs uppercase tracking-widest text-cosmic-blue">01 / Typography</p><h2 id="type-heading" className="mt-3 font-display text-3xl tracking-tight">Editorial clarity, technical precision.</h2></div><div className="space-y-6"><div><p className="font-mono text-xs uppercase tracking-widest text-muted-text">Display / Satoshi</p><p className="mt-2 font-display text-4xl tracking-tight">Intelligence in orbit.</p></div><div><p className="font-mono text-xs uppercase tracking-widest text-muted-text">Body / Space Grotesk</p><p className="mt-2 max-w-xl leading-7 text-secondary-text">Generous spacing and considered contrast keep the interface premium, readable and grounded in professional communication.</p></div><div><p className="font-mono text-xs uppercase tracking-widest text-muted-text">Technical / JetBrains Mono</p><p className="mt-2 font-mono text-sm text-cosmic-blue">SYSTEM.STATUS // FOUNDATION_READY</p></div></div></section>
        <section aria-labelledby="palette-heading" className="space-y-6 border-t border-white/15 pt-8"><div><p className="font-mono text-xs uppercase tracking-widest text-cosmic-blue">02 / Palette</p><h2 id="palette-heading" className="mt-3 font-display text-3xl tracking-tight">A restrained lunar spectrum.</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{palette.map((color) => <div key={color.name} className="overflow-hidden rounded-control border border-white/10 bg-graphite"><div className={`h-20 ${color.className}`} /><div className="p-4"><p className="text-sm text-lunar-white">{color.name}</p><p className="mt-1 font-mono text-xs text-muted-text">{color.value}</p></div></div>)}</div></section>
        <section aria-labelledby="system-heading" className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-2"><div><p className="font-mono text-xs uppercase tracking-widest text-cosmic-blue">03 / System status</p><h2 id="system-heading" className="mt-3 font-display text-3xl tracking-tight">Foundation connectivity.</h2><p className="mt-4 max-w-md leading-7 text-secondary-text">Existing health checks remain active while the global design tokens are previewed across responsive layouts.</p></div><div className="space-y-3">{services.map((service) => <div key={service.name} className="flex items-center justify-between rounded-control border border-white/10 bg-graphite px-5 py-4"><span className="text-sm text-lunar-white">{service.name}</span><StatusIndicator status={service.status === 'connected' ? 'success' : service.status === 'failed' ? 'error' : 'checking'} label={service.status} /></div>)}</div></section>
        <section aria-labelledby="components-heading" className="space-y-8 border-t border-white/15 pt-8"><SectionHeading id="components-heading" number="04" eyebrow="Reusable primitives" title="Quietly consistent." description="A small component vocabulary for future sections, demonstrated without turning the portfolio into a component gallery." /><div className="grid gap-4 lg:grid-cols-2"><Card variant="bordered"><Eyebrow>Buttons and links</Eyebrow><div className="mt-4 flex flex-wrap items-center gap-3"><Button size="sm">Primary action</Button><Button size="sm" variant="secondary">Secondary</Button><Button size="sm" variant="ghost" trailingIcon="arrow-right">Ghost</Button><Button size="sm" loading>Loading</Button><IconButton icon="arrow-up-right" label="Open example action" size="sm" /></div><div className="mt-5 flex flex-wrap items-center gap-4"><TextLink href="#home" direction="right">Internal link</TextLink><TextLink href="https://example.com" target="_blank">External link</TextLink></div></Card><Card variant="elevated"><Eyebrow>Labels and status</Eyebrow><div className="mt-4 flex flex-wrap gap-2"><Tag>Python</Tag><Tag>Machine learning</Tag><Tag>Case study</Tag></div><Divider className="my-5" /><div className="flex flex-wrap gap-4"><StatusIndicator status="neutral" /><StatusIndicator status="success" /><StatusIndicator status="warning" /><StatusIndicator status="error" /></div></Card></div></section>
        <section aria-labelledby="motion-heading" className="space-y-8 border-t border-white/15 pt-8"><SectionHeading id="motion-heading" number="05" eyebrow="Motion foundations" title="Measured movement." description="Tokenized transitions are demonstrated here only; public placeholder sections remain intentionally static." /><Card variant="bordered"><div className="grid gap-4 sm:grid-cols-3"><div className="motion-demo-fast rounded-control border border-white/15 bg-graphite p-4 hover:bg-elevated-surface"><Eyebrow>Fast / 150ms</Eyebrow><p className="mt-3 text-sm text-secondary-text">Hover the surface</p></div><div className="motion-demo-normal rounded-control border border-white/15 bg-graphite p-4 hover:-translate-y-1"><Eyebrow>Normal / 200ms</Eyebrow><p className="mt-3 text-sm text-secondary-text">Hover the surface</p></div><div className="motion-demo-reveal rounded-control border border-white/15 bg-graphite p-4"><Eyebrow>Reveal / 600ms</Eyebrow><p className="mt-3 text-sm text-secondary-text">Reduced motion: {reducedMotion ? 'on' : 'off'}</p></div></div></Card></section>
        <footer className="border-t border-white/15 pt-6 font-mono text-xs uppercase tracking-widest text-muted-text">Beyond the Cloud / Step 2.1 / Global design system</footer>
      </div>
    </div>
  )
}
