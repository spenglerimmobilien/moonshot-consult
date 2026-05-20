"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function MoonOrbit() {
  const group = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
    if (planetRef.current) {
      planetRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.04,
      );
    }
  });

  const crescentShape = new THREE.Shape();
  crescentShape.absarc(0, 0, 1.2, 0.3, Math.PI * 1.7, false);
  const hole = new THREE.Path();
  hole.absarc(0.35, 0, 1, 0, Math.PI * 2, true);
  crescentShape.holes.push(hole);

  return (
    <group ref={group} position={[1.5, 0, 0]}>
      <mesh>
        <shapeGeometry args={[crescentShape]} />
        <meshStandardMaterial color="#002B49" metalness={0.4} roughness={0.5} />
      </mesh>

      <mesh ref={planetRef} position={[0.8, 0.6, 0.2]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color="#00AEEF"
          emissive="#00AEEF"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh position={[0.8, 0.6, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.008, 8, 32]} />
        <meshBasicMaterial color="#00AEEF" transparent opacity={0.6} />
      </mesh>

      <mesh rotation={[0, 0, -0.4]} position={[-0.2, -0.3, 0]}>
        <torusGeometry args={[1.1, 0.01, 8, 32, Math.PI * 0.9]} />
        <meshBasicMaterial color="#00AEEF" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00AEEF" />
      <pointLight position={[-5, -3, 2]} intensity={0.4} color="#002B49" />
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <MoonOrbit />
      </Float>
      <Stars radius={80} depth={40} count={400} factor={3} fade speed={0.5} />
    </>
  );
}

export function MoonScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.2]}
        gl={{ antialias: false, alpha: true }}
        frameloop={active ? "always" : "demand"}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
