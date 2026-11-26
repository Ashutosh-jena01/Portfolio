import { useMemo } from 'react'
import { BackSide, SRGBColorSpace, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

const earthTextureUrl = new URL('../../assets/planet/earth-blue-marble-january.jpg', import.meta.url).href

const cloudVertex = /* glsl */ `
  varying vec3 vPosition;
  varying vec3 vNormal;
  void main() {
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const cloudFragment = /* glsl */ `
  varying vec3 vPosition;
  varying vec3 vNormal;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y), mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p = p * 2.0 + vec3(4.7, 1.3, 8.1);
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    float cloud = smoothstep(0.57, 0.72, fbm(vPosition * 3.4 + vec3(0.0, 1.8, 2.4)));
    float light = smoothstep(0.05, 0.72, dot(vNormal, normalize(vec3(-0.7, 0.55, 1.0))));
    float edge = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 1.8);
    gl_FragColor = vec4(vec3(0.88, 0.92, 0.94), cloud * light * 0.18 + edge * 0.025);
  }
`

const atmosphereVertex = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const atmosphereFragment = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    float rim = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 3.4);
    float light = smoothstep(0.0, 0.8, dot(vNormal, normalize(vec3(-0.7, 0.55, 1.0))));
    gl_FragColor = vec4(0.16, 0.4, 0.72, rim * light * 0.24);
  }
`

export function Planet() {
  const loadedTexture = useLoader(TextureLoader, earthTextureUrl)
  const earthTexture = useMemo(() => {
    const texture = loadedTexture.clone()
    texture.colorSpace = SRGBColorSpace
    texture.anisotropy = 4
    return texture
  }, [loadedTexture])
  const cloudUniforms = useMemo(() => ({}), [])
  const atmosphereUniforms = useMemo(() => ({}), [])

  return (
    <group rotation={[0.08, -0.42, 0.06]}>
      <mesh>
        <sphereGeometry args={[1.55, 96, 96]} />
        <meshStandardMaterial map={earthTexture} roughness={0.94} metalness={0} />
      </mesh>
      <mesh scale={1.012}>
        <sphereGeometry args={[1.55, 72, 72]} />
        <shaderMaterial uniforms={cloudUniforms} vertexShader={cloudVertex} fragmentShader={cloudFragment} transparent depthWrite={false} />
      </mesh>
      <mesh scale={1.045}>
        <sphereGeometry args={[1.55, 72, 72]} />
        <shaderMaterial uniforms={atmosphereUniforms} vertexShader={atmosphereVertex} fragmentShader={atmosphereFragment} transparent depthWrite={false} side={BackSide} />
      </mesh>
      <directionalLight position={[-3, 2.5, 4]} intensity={2.6} color="#F5F5F5" />
      <ambientLight intensity={0.06} color="#7695C9" />
    </group>
  )
}
