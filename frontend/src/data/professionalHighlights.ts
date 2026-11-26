import { siteConfig } from '../config/site'

export type ProfessionalHighlightIcon = 'signal' | 'path' | 'foundation' | 'cloud'

export type ProfessionalHighlight = {
  label: string
  title: string
  description: string
  icon: ProfessionalHighlightIcon
}

export const professionalHighlights: readonly ProfessionalHighlight[] = [
  {
    label: '01',
    title: 'AI / ML',
    description: `Confirmed professional designation: ${siteConfig.designation}.`,
    icon: 'signal',
  },
  { label: '02', title: 'Professional experience', description: 'Verified experience details are reserved for approved profile material.', icon: 'path' },
  { label: '03', title: 'Academic foundation', description: 'Verified academic details are reserved for approved profile material.', icon: 'foundation' },
  { label: '04', title: 'Cloud and DevOps', description: 'Verified capability details are reserved for approved profile material.', icon: 'cloud' },
]
