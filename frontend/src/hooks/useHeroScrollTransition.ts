import { useEffect } from 'react'

const TRANSITION_VARS = [
  '--hero-scroll-y', '--hero-scroll-opacity-distant', '--hero-scroll-opacity-mid',
  '--hero-scroll-opacity-near', '--hero-scroll-opacity-primary', '--hero-scroll-opacity-secondary', '--hero-scroll-opacity-cloud',
  '--hero-twinkle-play-state',
]

function clamp(value: number) { return Math.max(0, Math.min(1, value)) }

export function useHeroScrollTransition(heroId: string) {
  useEffect(() => {
    const hero = document.getElementById(heroId)
    if (!hero) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let pageVisible = !document.hidden
    let frame = 0
    let progress = 0
    let scrollListening = false

    const reset = () => {
      TRANSITION_VARS.forEach((variable) => hero.style.removeProperty(variable))
    }
    const write = () => {
      const fade = 1 - progress * 0.42
      hero.style.setProperty('--hero-scroll-y', `${progress * -16}px`)
      hero.style.setProperty('--hero-scroll-opacity-distant', `${0.42 * fade}`)
      hero.style.setProperty('--hero-scroll-opacity-mid', `${0.46 * fade}`)
      hero.style.setProperty('--hero-scroll-opacity-near', `${0.62 * fade}`)
      hero.style.setProperty('--hero-scroll-opacity-primary', `${0.2 * fade}`)
      hero.style.setProperty('--hero-scroll-opacity-secondary', `${0.065 * fade}`)
      hero.style.setProperty('--hero-scroll-opacity-cloud', `${0.09 * fade}`)
    }
    const update = () => {
      frame = 0
      if (!visible || !pageVisible || reducedMotion.matches) return
      const bounds = hero.getBoundingClientRect()
      progress = clamp(-bounds.top / Math.max(bounds.height * 0.72, 1))
      write()
    }
    const schedule = () => {
      if (!frame && visible && pageVisible && !reducedMotion.matches) frame = requestAnimationFrame(update)
    }
    const handleScroll = () => schedule()
    const setScrollListening = (listening: boolean) => {
      if (listening === scrollListening) return
      scrollListening = listening
      if (listening) window.addEventListener('scroll', handleScroll, { passive: true })
      else window.removeEventListener('scroll', handleScroll)
    }
    const handleVisibilityChange = () => {
      pageVisible = !document.hidden
      if (!pageVisible) {
        if (frame) cancelAnimationFrame(frame)
        frame = 0
        hero.style.setProperty('--hero-twinkle-play-state', 'paused')
      } else {
        hero.style.setProperty('--hero-twinkle-play-state', 'running')
        schedule()
      }
    }
    const handleMotionChange = () => {
      if (reducedMotion.matches) { if (frame) cancelAnimationFrame(frame); frame = 0; reset() }
      else {
        hero.style.setProperty('--hero-twinkle-play-state', 'running')
        schedule()
      }
    }
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        setScrollListening(visible)
        hero.style.setProperty('--hero-twinkle-play-state', visible && pageVisible && !reducedMotion.matches ? 'running' : 'paused')
        if (visible) schedule()
      }, { threshold: 0 })
      : undefined

    document.addEventListener('visibilitychange', handleVisibilityChange)
    reducedMotion.addEventListener('change', handleMotionChange)
    observer?.observe(hero)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      setScrollListening(false)
      observer?.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      reducedMotion.removeEventListener('change', handleMotionChange)
      reset()
    }
  }, [heroId])
}
