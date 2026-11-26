import { useEffect, useRef } from 'react'

type ScrollRevealOptions = {
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>({ once = true }: ScrollRevealOptions = {}) {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-revealed')
          if (once) observer?.unobserve(element)
        } else if (!once) element.classList.remove('is-revealed')
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 })
      : undefined

    const updateMotionState = () => {
      if (reducedMotion.matches || !observer) {
        element.classList.remove('scroll-reveal-ready')
        element.classList.add('is-revealed')
      } else {
        element.classList.add('scroll-reveal-ready')
        observer?.observe(element)
      }
    }

    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        element.classList.remove('scroll-reveal-ready')
        element.classList.add('is-revealed')
      } else updateMotionState()
    }

    reducedMotion.addEventListener('change', handleMotionChange)
    updateMotionState()

    return () => {
      observer?.disconnect()
      reducedMotion.removeEventListener('change', handleMotionChange)
      element.classList.remove('scroll-reveal-ready', 'is-revealed')
    }
  }, [once])

  return elementRef
}
