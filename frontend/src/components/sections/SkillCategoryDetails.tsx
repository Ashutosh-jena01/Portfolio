import type { TechnicalSkillCategory, TechnicalSkillCategoryIcon } from '../../data/technicalSkills'

type SkillCategoryDetailsProps = { category: TechnicalSkillCategory; index: number; count: number; onPrevious: () => void; onNext: () => void }

export function SkillCategoryIcon({ icon }: { icon: TechnicalSkillCategoryIcon }) {
  const paths = {
    intelligence: <><circle cx="12" cy="12" r="3" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" /></>,
    code: <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 5-4 14" /></>,
    cloud: <><path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 11.5 3.25 3.25 0 0 0 7 18Z" /><path d="M12 10v6" /><path d="m9.5 13 2.5-3 2.5 3" /></>,
    data: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" /><path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" /></>,
    framework: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
    tools: <><path d="m14.7 6.3 3-3a4.2 4.2 0 0 1 3 5.7l-5.2 5.2" /><path d="m9.3 17.7-3 3a4.2 4.2 0 0 1-3-5.7l5.2-5.2" /><path d="m8 16 8-8" /></>,
  }
  return <svg aria-hidden="true" className="skills-category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{paths[icon]}</svg>
}

export function SkillCategoryDetails({ category, index, count, onPrevious, onNext }: SkillCategoryDetailsProps) {
  return <aside className="skills-detail-panel" aria-live="polite" aria-label="Selected technical category"><div className="flex items-start justify-between gap-4"><SkillCategoryIcon icon={category.icon} /><span className="font-mono text-xs tracking-[0.2em] text-muted-text">{String(category.order).padStart(2, '0')} / 06</span></div><h3 className="mt-8 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[-0.04em] text-lunar-white">{category.name}</h3><p className="mt-4 text-base leading-7 text-secondary-text">{category.description}</p>{category.skills.length > 0 ? <ul className="mt-8 flex flex-wrap gap-2">{[...category.skills].sort((a, b) => a.order - b.order).map((skill) => <li key={skill.id} className="skills-technology-tag">{skill.name}</li>)}</ul> : null}<div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5"><button type="button" className="skills-detail-control" onClick={onPrevious} aria-label="Previous technical category">Previous</button><span className="font-mono text-xs text-muted-text">{index + 1} / {count}</span><button type="button" className="skills-detail-control" onClick={onNext} aria-label="Next technical category">Next</button></div></aside>
}
