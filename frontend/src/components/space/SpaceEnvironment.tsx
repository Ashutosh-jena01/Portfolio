import { AtmosphericGlow } from './AtmosphericGlow'
import { Starfield } from './Starfield'

export function SpaceEnvironment() {
  return (
    <div aria-hidden="true" className="hero-entrance hero-entrance-atmosphere absolute inset-0 isolate overflow-hidden bg-obsidian pointer-events-none" role="presentation">
      <AtmosphericGlow />
      <Starfield />
      <div className="space-cloud" />
      <div className="space-horizon" />
    </div>
  )
}
