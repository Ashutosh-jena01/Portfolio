import { HeroSection } from '../sections/HeroSection'
import { PlaceholderSection } from '../sections/PlaceholderSection'

export function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <PlaceholderSection id="about" index="01" title="Beyond the Resume" description="A dedicated space for approved professional context, education and certifications. Content will be added only when verified and approved." />
      <PlaceholderSection id="skills" index="02" title="Technical Orbit" description="The future skills experience will present approved technical capabilities without inventing expertise or outcomes." />
      <PlaceholderSection id="projects" index="03" title="Mission Archives" description="A structured home for approved project case studies. No project details or metrics are fabricated at this stage." />
      <PlaceholderSection id="experience" index="04" title="Flight Path" description="Professional experience, education and certifications will be organized here after their approved content is available." />
      <PlaceholderSection id="contact" index="05" title="Let’s Connect" description="Contact functionality is reserved for a later approved step. No unverified contact details or social links are presented." />
    </>
  )
}
