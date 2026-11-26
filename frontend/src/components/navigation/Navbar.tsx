import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../../config/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { Icon } from '../ui'

const sectionIds = siteConfig.sections.map((section) => section.id)

export function Navbar() {
  const activeSection = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navigationRef = useRef<HTMLElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    const handleOutsidePointer = (event: PointerEvent) => {
      if (menuOpen && navigationRef.current && !navigationRef.current.contains(event.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleResize)
    document.addEventListener('pointerdown', handleOutsidePointer)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('pointerdown', handleOutsidePointer)
    }
  }, [menuOpen])

  useEffect(() => {
    if (wasOpen.current && !menuOpen) menuButtonRef.current?.focus()
    wasOpen.current = menuOpen
  }, [menuOpen])

  return (
    <header className="hero-entrance hero-entrance-nav fixed inset-x-0 top-[max(1rem,env(safe-area-inset-top))] z-40 px-4 sm:top-[max(1.5rem,env(safe-area-inset-top))]">
      <nav ref={navigationRef} aria-label="Primary navigation" className="mx-auto w-fit max-w-full rounded-panel border border-white/15 bg-graphite/90 shadow-panel backdrop-blur-md supports-[backdrop-filter]:bg-graphite/70">
        <div className="flex items-center gap-3 px-3 py-2 sm:gap-6 sm:px-4">
          <a href="#home" className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-control px-2 py-2 font-display text-sm font-medium tracking-tight text-lunar-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lunar-white">AJ.</a>

          <div className="hidden items-center gap-1 md:flex">
            {siteConfig.sections.map((section) => <NavLink key={section.id} href={`#${section.id}`} label={section.navigationLabel} active={activeSection === section.id} accent={section.id === 'contact'} />)}
          </div>

          <button ref={menuButtonRef} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)} className="min-h-11 min-w-11 rounded-control p-2 text-lunar-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lunar-white md:hidden">
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>

        <div id="mobile-navigation" hidden={!menuOpen} className="border-t border-white/10 px-3 pb-3 md:hidden">
          <div className="grid gap-1 pt-2">
            {siteConfig.sections.map((section) => <NavLink key={section.id} href={`#${section.id}`} label={section.navigationLabel} active={activeSection === section.id} accent={section.id === 'contact'} onNavigate={() => setMenuOpen(false)} />)}
          </div>
        </div>
      </nav>
    </header>
  )
}

type NavLinkProps = { href: string; label: string; active: boolean; accent?: boolean; onNavigate?: () => void }

function NavLink({ href, label, active, accent = false, onNavigate }: NavLinkProps) {
  return <a href={href} onClick={onNavigate} aria-current={active ? 'location' : undefined} className={`inline-flex min-h-11 items-center rounded-control px-3 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lunar-white ${accent ? 'bg-cosmic-blue text-obsidian hover:bg-lunar-white' : active ? 'bg-white/10 text-lunar-white' : 'text-secondary-text hover:bg-white/10 hover:text-lunar-white'}`}>{label}</a>
}
