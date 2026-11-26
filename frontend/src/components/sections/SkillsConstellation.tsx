import type { KeyboardEvent } from 'react'
import type { TechnicalSkillCategory } from '../../data/technicalSkills'
import { getSkillCategoryLabel } from '../../data/skillCategoryLabel'

type SkillsConstellationProps = { categories: readonly TechnicalSkillCategory[]; selectedId: string; hoveredId: string | null; onHover: (categoryId: string | null) => void; onSelect: (categoryId: string) => void }
const positions = [{ x: 105, y: 76 }, { x: 286, y: 42 }, { x: 500, y: 88 }, { x: 520, y: 278 }, { x: 294, y: 330 }, { x: 92, y: 260 }]

function activateOnKeyboard(event: KeyboardEvent<SVGGElement>, categoryId: string, onSelect: (id: string) => void) {
  if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(categoryId) }
}

export function SkillsConstellation({ categories, selectedId, hoveredId, onHover, onSelect }: SkillsConstellationProps) {
  return <div className="skills-constellation-frame">
    <svg className="skills-constellation" viewBox="0 0 620 380" role="group" aria-label="Interactive technical skill categories">
      <g aria-hidden="true" className="skills-constellation-stars"><circle cx="42" cy="48" r="0.8" /><circle cx="86" cy="182" r="1.4" /><circle cx="138" cy="28" r="0.6" /><circle cx="178" cy="142" r="1.1" /><circle cx="226" cy="286" r="0.7" /><circle cx="266" cy="118" r="1.5" /><circle cx="318" cy="24" r="0.8" /><circle cx="356" cy="292" r="1.1" /><circle cx="388" cy="58" r="0.6" /><circle cx="432" cy="144" r="1.3" /><circle cx="478" cy="342" r="0.7" /><circle cx="522" cy="204" r="1.5" /><circle cx="578" cy="160" r="1" /><circle cx="590" cy="48" r="0.6" /><circle cx="40" cy="320" r="0.7" /><circle cx="124" cy="342" r="1.2" /><circle cx="202" cy="74" r="0.7" /><circle cx="344" cy="354" r="0.6" /><circle cx="430" cy="350" r="0.9" /><circle cx="548" cy="312" r="0.8" /></g>
      <g aria-hidden="true" className="skills-constellation-lines">
        {positions.map((position, index) => <line key={`central-${categories[index].id}`} className={selectedId === categories[index].id ? 'is-selected' : ''} x1="310" y1="190" x2={position.x} y2={position.y} />)}
        <line x1={positions[0].x} y1={positions[0].y} x2={positions[1].x} y2={positions[1].y} /><line x1={positions[2].x} y1={positions[2].y} x2={positions[3].x} y2={positions[3].y} /><line x1={positions[4].x} y1={positions[4].y} x2={positions[5].x} y2={positions[5].y} />
      </g>
      <g aria-hidden="true" className="skills-constellation-central"><circle cx="310" cy="190" r="39" className="skills-constellation-halo" /><circle cx="310" cy="190" r="30" className="skills-constellation-node" /><text x="310" y="190" textAnchor="middle" dominantBaseline="central"><tspan fill="var(--color-lunar-white)">AJ</tspan><tspan fill="var(--color-cosmic-blue)" dx="0.04em">.</tspan></text></g>
      {categories.map((category, index) => { const position = positions[index]; const active = selectedId === category.id || hoveredId === category.id; return <g key={category.id} className={`skills-constellation-category ${active ? 'is-active' : ''}`} transform={`translate(${position.x} ${position.y})`} role="button" tabIndex={0} aria-label={`Select ${category.name}`} aria-pressed={selectedId === category.id} onMouseEnter={() => onHover(category.id)} onMouseLeave={() => onHover(null)} onFocus={() => onHover(category.id)} onBlur={() => onHover(null)} onClick={() => onSelect(category.id)} onKeyDown={(event) => activateOnKeyboard(event, category.id, onSelect)}><circle r="24" className="skills-constellation-hit-area" /><circle r="10" className="skills-constellation-halo" /><circle r="3.5" className="skills-constellation-node" />{active ? <g aria-hidden="true" className="skills-constellation-starburst"><path d="M0 -15V15M-15 0H15M-10 -10L10 10M10 -10L-10 10" /></g> : null}<text y="32" textAnchor="middle">{getSkillCategoryLabel(category)}</text></g> })}
    </svg>
  </div>
}
