export function AtmosphericGlow() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none" role="presentation">
      <div className="space-glow space-glow-primary" />
      <div className="space-glow space-glow-secondary" />
      <div className="space-dust" />
    </div>
  )
}
