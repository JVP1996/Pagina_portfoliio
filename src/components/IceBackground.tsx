"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingIceDust() {
  const count = 350;
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, stepRates] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const steps = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const seed = (i * 9301 + 49297) % 233280;
      pos[i * 3] = (seed / 233280 - 0.5) * 20;
      pos[i * 3 + 1] = (((seed * 17) % 233280) / 233280 - 0.5) * 20;
      pos[i * 3 + 2] = (((seed * 31) % 233280) / 233280 - 0.5) * 15;
      steps[i] = 0.002 + (((seed * 47) % 233280) / 233280) * 0.005;
    }
    return [pos, steps];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const positionsAttr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      let y = positionsAttr.getY(i) - stepRates[i];
      if (y < -10) y = 10;
      positionsAttr.setY(i, y);
    }
    positionsAttr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#38bdf8"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function IceBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#050811]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <FloatingIceDust />
      </Canvas>
    </div>
  );
}
