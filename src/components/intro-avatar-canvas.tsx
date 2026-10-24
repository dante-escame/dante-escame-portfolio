"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EdgesGeometry, Group, Mesh } from "three";

import { useThemeTokens } from "../lib/theme/context";

type AvatarModelProps = {
  isInteracting: boolean;
  wireframeColor: string;
};

function AvatarModel({ isInteracting, wireframeColor }: AvatarModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/base.glb");

  // Edge extraction is expensive, so it only depends on the model, never on the theme color.
  const edgeGeometries = useMemo(() => {
    const geometries: EdgesGeometry[] = [];

    scene.traverse((child) => {
      if (child instanceof Mesh && child.geometry) {
        geometries.push(new EdgesGeometry(child.geometry));
      }
    });

    return geometries;
  }, [scene]);

  useFrame((_, delta) => {
    if (isInteracting) {
      return;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, -3.9, 0]} scale={[4.7, 4.7, 4.7]}>
      {edgeGeometries.map((geometry, index) => (
        <lineSegments key={index} geometry={geometry}>
          <lineBasicMaterial color={wireframeColor} opacity={0.92} transparent />
        </lineSegments>
      ))}
    </group>
  );
}

useGLTF.preload("/base.glb");

export function IntroAvatarCanvas() {
  const [isInteracting, setIsInteracting] = useState(false);
  const { canvas } = useThemeTokens();

  return (
    <Canvas
      camera={{ position: [0, 0.2, 18], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.55} />
      <pointLight color={canvas.light1} intensity={18} position={[4, 6, 10]} />
      <pointLight color={canvas.light2} intensity={14} position={[-6, 0, 8]} />
      <pointLight color={canvas.light3} intensity={8} position={[0, -5, 6]} />
      <directionalLight color={canvas.ambient} intensity={0.8} position={[2, 7, 4]} />

      <OrbitControls
        enablePan={false}
        enableRotate
        enableZoom
        maxDistance={24}
        minDistance={15}
        onEnd={() => setIsInteracting(false)}
        onStart={() => setIsInteracting(true)}
      />

      <Suspense fallback={null}>
        <AvatarModel isInteracting={isInteracting} wireframeColor={canvas.wireframe} />
      </Suspense>
    </Canvas>
  );
}
