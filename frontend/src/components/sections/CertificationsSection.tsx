import type { Certification, CertificationCategory } from '../../data/certifications'
import { certifications } from '../../data/certifications'
import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'

function CredentialIcon({ category }: { category: CertificationCategory }) {
  const paths = {
    'data-science': <><path d="M4 18V9" /><path d="M10 18V5" /><path d="M16 18v-7" /><path d="M22 18V3" /></>,
    'prompt-engineering': <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 5-4 14" /></>,
    'cloud-devops': <><path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 11.5 3.25 3.25 0 0 0 7 18Z" /><path d="M12 10v6" /><path d="m9.5 13 2.5-3 2.5 3" /></>,
    other: <><path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  }

  return <svg aria-hidden="true" className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{paths[category]}</svg>
}

function CredentialActions({ credential }: { credential: Certification }) {
  return <div className="credential-actions">{credential.certificateAsset ? <a className="credential-action" href={credential.certificateAsset} target="_blank" rel="noreferrer">View Certificate</a> : null}{credential.verificationUrl ? <a className="credential-action credential-action-primary" href={credential.verificationUrl} target="_blank" rel="noreferrer">Verify Credential</a> : null}</div>
}

function CredentialCard({ credential }: { credential: Certification }) {
  return <div className="credential-card"><CredentialIcon category={credential.category} /><div className="credential-content"><p className="font-mono text-xs uppercase tracking-[0.2em] text-cosmic-blue">{credential.type.replaceAll('-', ' ')}</p><h3 className="mt-3 font-display text-2xl tracking-tight text-lunar-white">{credential.title}</h3><p className="mt-2 text-base text-secondary-text">{credential.organization}</p>{credential.description ? <p className="mt-4 max-w-2xl text-sm leading-6 text-secondary-text">{credential.description}</p> : null}<div className="credential-meta">{credential.issueDate ? <span>Issued {credential.issueDate}</span> : null}{credential.expiryDate ? <span>Expires {credential.expiryDate}</span> : null}{credential.credentialId ? <span>ID {credential.credentialId}</span> : null}</div></div><CredentialActions credential={credential} /></div>
}

export function CertificationsSection() {
  const entries = [...certifications].sort((a, b) => a.order - b.order)

  return <Section id="certifications" labelledBy="certifications-heading" className="border-b border-white/10">
    <ScrollReveal><p className="font-mono text-xs uppercase tracking-[0.24em] text-cosmic-blue">05 / PROFESSIONAL CREDENTIALS</p><h2 id="certifications-heading" className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.065em] text-lunar-white">Always evolving<span className="text-cosmic-blue">.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-text">Continuous learning beyond the classroom.</p></ScrollReveal>
    {entries.length > 0 ? <ol className="credential-list mt-14">{entries.map((credential, index) => <li key={credential.id}><ScrollReveal delay={index * 90}><CredentialCard credential={credential} /></ScrollReveal></li>)}</ol> : null}
  </Section>
}
