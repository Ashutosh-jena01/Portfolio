export type EducationEntry = {
  id: string
  qualification: string
  abbreviation?: string
  institution?: string
  specialization?: string
  startDate: string
  endDate: string
  description?: string
  achievements?: readonly string[]
  order: number
}

// Public education records remain empty until the proposed qualifications are verified.
export const educationEntries: readonly EducationEntry[] = []
