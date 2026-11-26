import { useState } from 'react'
import { technicalSkillCategories } from '../../data/technicalSkills'
import { getSkillCategoryLabel } from '../../data/skillCategoryLabel'
import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SkillCategoryDetails, SkillCategoryIcon } from './SkillCategoryDetails'
import { SkillsConstellation } from './SkillsConstellation'

export function SkillsSection() {
  const [selectedId, setSelectedId] = useState(technicalSkillCategories[0].id)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const selectedIndex = technicalSkillCategories.findIndex((category) => category.id === selectedId)
  const selectedCategory = technicalSkillCategories[selectedIndex] ?? technicalSkillCategories[0]
  const selectRelativeCategory = (direction: -1 | 1) => {
    const nextIndex = (selectedIndex + direction + technicalSkillCategories.length) % technicalSkillCategories.length
    setSelectedId(technicalSkillCategories[nextIndex].id)
  }

  return <Section id="skills" labelledBy="skills-heading" className="border-b border-white/10">
    <ScrollReveal><p className="font-mono text-xs uppercase tracking-[0.24em] text-cosmic-blue">03 / Technical Universe</p><h2 id="skills-heading" className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.065em] text-lunar-white">The tools behind the intelligence<span className="text-cosmic-blue">.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-text">Explore the interconnected world of technology.</p></ScrollReveal>
    <div className="skills-explorer-layout mt-12"><ScrollReveal><SkillsConstellation categories={technicalSkillCategories} selectedId={selectedId} hoveredId={hoveredId} onHover={setHoveredId} onSelect={setSelectedId} /></ScrollReveal><ScrollReveal delay={100}><SkillCategoryDetails category={selectedCategory} index={selectedIndex} count={technicalSkillCategories.length} onPrevious={() => selectRelativeCategory(-1)} onNext={() => selectRelativeCategory(1)} /></ScrollReveal></div>
    <ScrollReveal delay={180} stagger={70} className="skills-category-selector mt-8">{technicalSkillCategories.map((category) => <button key={category.id} type="button" className={`skills-category-button ${selectedId === category.id ? 'is-selected' : ''}`} aria-pressed={selectedId === category.id} onMouseEnter={() => setHoveredId(category.id)} onMouseLeave={() => setHoveredId(null)} onFocus={() => setHoveredId(category.id)} onBlur={() => setHoveredId(null)} onClick={() => setSelectedId(category.id)}><span className="skills-category-card-top"><SkillCategoryIcon icon={category.icon} /><span className="font-mono text-[0.68rem] tracking-[0.2em] text-muted-text">{String(category.order).padStart(2, '0')}</span></span><span>{getSkillCategoryLabel(category)}</span></button>)}</ScrollReveal>
  </Section>
}
