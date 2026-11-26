import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Planet } from './Planet'
import { PlanetFallback } from './PlanetFallback'

export default function PlanetScene() {
  return (
    <div aria-hidden="true" className="planet-scene pointer-events-none" role="presentation">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 36 }}
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        fallback={<PlanetFallback />}
      >
        <Suspense fallback={null}>
          <Planet />
        </Suspense>
      </Canvas>
    </div>
  )
}
