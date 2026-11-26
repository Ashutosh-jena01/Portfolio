import { siteConfig } from '../config/site'

export type ProfessionalProfile = {
  fullName: string
  designation: string
  introduction: string
  biography: string
  portraitSrc?: string
  resumeSrc?: string
}

export const professionalProfile: ProfessionalProfile = {
  fullName: siteConfig.ownerName,
  designation: siteConfig.designation,
  introduction: 'I am an AI/ML Engineer focused on engineering intelligence and building beyond boundaries.',
  biography: 'I am shaping this portfolio as a clear, thoughtful introduction to my professional direction.',
}
