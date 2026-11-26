export type TechnicalSkill = {
  id: string
  name: string
  categoryId: string
  description?: string
  icon?: string
  documentationUrl?: string
  relatedProjectIds?: readonly string[]
  order: number
}

export type TechnicalSkillCategory = {
  id: string
  name: string
  description: string
  icon: TechnicalSkillCategoryIcon
  order: number
  skills: readonly TechnicalSkill[]
}

export type TechnicalSkillCategoryIcon = 'intelligence' | 'code' | 'cloud' | 'data' | 'framework' | 'tools'

export const technicalSkillCategories: readonly TechnicalSkillCategory[] = [
  { id: 'ai-ml', name: 'Artificial Intelligence & Machine Learning', description: 'Models, methods and intelligent systems.', icon: 'intelligence', order: 1, skills: [] },
  { id: 'programming', name: 'Programming & Development', description: 'Languages and development foundations.', icon: 'code', order: 2, skills: [] },
  { id: 'cloud-devops', name: 'Cloud & DevOps', description: 'Deployment, operations and infrastructure.', icon: 'cloud', order: 3, skills: [] },
  { id: 'data', name: 'Databases & Data Engineering', description: 'Data storage, processing and quality.', icon: 'data', order: 4, skills: [] },
  { id: 'frameworks', name: 'Frameworks & Libraries', description: 'Application frameworks and reusable libraries.', icon: 'framework', order: 5, skills: [] },
  { id: 'tools', name: 'Development Tools', description: 'Tools for building, testing and collaboration.', icon: 'tools', order: 6, skills: [] },
]
