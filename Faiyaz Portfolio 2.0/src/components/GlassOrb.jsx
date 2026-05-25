import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function Orb({ position, scale, speed, distort, color, opacity }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.05}
          transparent
          opacity={opacity}
          envMapIntensity={0.5}
        />
      </Sphere>
    </Float>
  )
}

function SmallOrbs() {
  const orbs = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 2,
      ],
      scale: 0.08 + Math.random() * 0.12,
      speed: 0.5 + Math.random() * 1.5,
    }))
  , [])

  return (
    <>
      {orbs.map(orb => (
        <Float key={orb.id} speed={orb.speed} floatIntensity={1.5}>
          <Sphere args={[1, 16, 16]} position={orb.position} scale={orb.scale}>
            <meshStandardMaterial
              color="#8B0032"
              transparent
              opacity={0.15 + Math.random() * 0.1}
              roughness={0.2}
              metalness={0.1}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

export default function GlassOrb({ className = '' }) {
  return (
    <div className={`${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-3, 3, 3]} intensity={0.6} color="#8B0032" />
        <pointLight position={[3, -3, 2]} intensity={0.4} color="#C0004A" />

        <Orb
          position={[0, 0, 0]}
          scale={1.6}
          speed={0.6}
          distort={0.35}
          color="#8B0032"
          opacity={0.12}
        />
        <Orb
          position={[1.2, 0.8, -1]}
          scale={0.9}
          speed={0.9}
          distort={0.5}
          color="#A8003E"
          opacity={0.09}
        />
        <Orb
          position={[-1.4, -0.6, -0.5]}
          scale={0.65}
          speed={1.2}
          distort={0.6}
          color="#6B0026"
          opacity={0.08}
        />
        <SmallOrbs />
      </Canvas>
    </div>
  )
}
