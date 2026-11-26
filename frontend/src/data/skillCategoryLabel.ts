import type { TechnicalSkillCategory } from './technicalSkills'

const labels: Record<string, string> = { 'ai-ml': 'AI / ML', programming: 'Programming', 'cloud-devops': 'Cloud', data: 'Databases', frameworks: 'Frameworks', tools: 'Development Tools' }

export function getSkillCategoryLabel(category: TechnicalSkillCategory) {
  return labels[category.id] ?? category.name
}
