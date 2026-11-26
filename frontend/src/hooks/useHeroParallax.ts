import { useEffect } from 'react'

const PARALLAX_VARS = [
  '--parallax-distant-x', '--parallax-distant-y', '--parallax-mid-x', '--parallax-mid-y',
  '--parallax-near-x', '--parallax-near-y', '--parallax-glow-x', '--parallax-glow-y',
]

function clamp(value: number) { return Math.max(-1, Math.min(1, value)) }

export function useHeroParallax(heroId: string) {
  useEffect(() => {
    const hero = document.getElementById(heroId)
    if (!hero) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    let visible = false
    let pageVisible = !document.hidden
    let frame = 0
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const resetStyles = () => PARALLAX_VARS.forEach((variable) => hero.style.setProperty(variable, '0px'))
    const cancelFrame = () => { if (frame) cancelAnimationFrame(frame); frame = 0 }
    const writeStyles = () => {
      hero.style.setProperty('--parallax-distant-x', `${currentX * 2}px`)
      hero.style.setProperty('--parallax-distant-y', `${currentY * 2}px`)
      hero.style.setProperty('--parallax-mid-x', `${currentX * 5}px`)
      hero.style.setProperty('--parallax-mid-y', `${currentY * 5}px`)
      hero.style.setProperty('--parallax-near-x', `${currentX * 9}px`)
      hero.style.setProperty('--parallax-near-y', `${currentY * 9}px`)
      hero.style.setProperty('--parallax-glow-x', `${currentX * 7}px`)
      hero.style.setProperty('--parallax-glow-y', `${currentY * 5}px`)
    }
    const animate = () => {
      frame = 0
      if (!visible || !pageVisible || reducedMotion.matches || !finePointer.matches) {
        currentX = 0; currentY = 0; writeStyles(); return
      }
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      writeStyles()
      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) frame = requestAnimationFrame(animate)
    }
    const schedule = () => {
      if (!frame && visible && pageVisible && !reducedMotion.matches && finePointer.matches) frame = requestAnimationFrame(animate)
    }
    const handlePointerMove = (event: PointerEvent) => {
      if (!visible || reducedMotion.matches || !finePointer.matches) return
      const bounds = hero.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return
      targetX = clamp((event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2))
      targetY = clamp((event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2))
      schedule()
    }
    const handlePointerLeave = () => { targetX = 0; targetY = 0; schedule() }
    const handleVisibilityChange = () => {
      pageVisible = !document.hidden
      if (!pageVisible) {
        targetX = 0; targetY = 0; cancelFrame(); currentX = 0; currentY = 0; resetStyles()
      } else schedule()
    }
    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        targetX = 0; targetY = 0; cancelFrame(); currentX = 0; currentY = 0; resetStyles()
      }
    }
    const handlePointerCapabilityChange = () => {
      if (!finePointer.matches) {
        targetX = 0; targetY = 0; cancelFrame(); currentX = 0; currentY = 0; resetStyles()
      }
    }
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        if (!visible) { targetX = 0; targetY = 0; cancelFrame(); currentX = 0; currentY = 0; resetStyles() }
      }, { threshold: 0 })
      : undefined

    hero.addEventListener('pointermove', handlePointerMove)
    hero.addEventListener('pointerleave', handlePointerLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    reducedMotion.addEventListener('change', handleMotionChange)
    finePointer.addEventListener('change', handlePointerCapabilityChange)
    observer?.observe(hero)
    resetStyles()

    return () => {
      cancelFrame(); observer?.disconnect(); resetStyles()
      hero.removeEventListener('pointermove', handlePointerMove)
      hero.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      reducedMotion.removeEventListener('change', handleMotionChange)
      finePointer.removeEventListener('change', handlePointerCapabilityChange)
    }
  }, [heroId])
}
