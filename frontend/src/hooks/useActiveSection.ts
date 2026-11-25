import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0.05, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))

    const handleScrollEnd = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? '')
      }
    }

    window.addEventListener('scroll', handleScrollEnd, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollEnd)
    }
  }, [sectionIds])

  return activeSection
}
