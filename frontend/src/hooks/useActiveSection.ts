import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return
    const visibility = new Map<HTMLElement, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY <= 2) {
          setActiveSection(sectionIds[0] ?? '')
          return
        }
        entries.forEach((entry) => visibility.set(entry.target as HTMLElement, entry.isIntersecting ? entry.intersectionRatio : 0))
        const visible = [...visibility.entries()]
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1])

        if (visible[0]) setActiveSection(visible[0][0].id)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0.05, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))

    const handleScroll = () => {
      if (window.scrollY <= 2) setActiveSection(sectionIds[0] ?? '')
      else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) setActiveSection(sectionIds[sectionIds.length - 1] ?? '')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeSection
}
