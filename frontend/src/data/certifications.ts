export type CertificationType = 'course' | 'training' | 'professional-certification'
export type CertificationCategory = 'data-science' | 'prompt-engineering' | 'cloud-devops' | 'other'

export type Certification = {
  id: string
  title: string
  organization: string
  category: CertificationCategory
  type: CertificationType
  issueDate?: string
  expiryDate?: string
  credentialId?: string
  certificateAsset?: string
  verificationUrl?: string
  description?: string
  order: number
}

// Public credential records remain empty until titles and source documents are verified.
export const certifications: readonly Certification[] = []
