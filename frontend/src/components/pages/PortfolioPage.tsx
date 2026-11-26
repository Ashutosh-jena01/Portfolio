import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { PlaceholderSection } from '../sections/PlaceholderSection'
import { SkillsSection } from '../sections/SkillsSection'
import { EducationSection } from '../sections/EducationSection'
import { CertificationsSection } from '../sections/CertificationsSection'

export function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <PlaceholderSection id="projects" index="06" title="Mission Archives" description="A structured home for approved project case studies. No project details or metrics are fabricated at this stage." />
      <PlaceholderSection id="experience" index="07" title="Flight Path" description="Professional experience will be organized here after its approved content is available." />
      <PlaceholderSection id="contact" index="08" title="Let’s Connect" description="Contact functionality is reserved for a later approved step. No unverified contact details or social links are presented." />
    </>
  )
}
