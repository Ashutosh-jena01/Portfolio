import { Container } from './Container'

type SectionProps = {
  children: React.ReactNode
  id: string
  className?: string
  fullWidth?: boolean
  labelledBy?: string
}

export function Section({ children, id, className = '', fullWidth = false, labelledBy }: SectionProps) {
  const content = fullWidth ? children : <Container>{children}</Container>

  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-[clamp(6rem,12vw,8rem)] py-[clamp(5rem,10vw,7rem)] ${className}`}>
      {content}
    </section>
  )
}
