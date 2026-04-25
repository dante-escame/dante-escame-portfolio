"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EdgesGeometry, Group, LineBasicMaterial, LineSegments } from "three";
import * as THREE from "three";

type AvatarModelProps = {
  isInteracting: boolean;
};

function AvatarModel({ isInteracting }: AvatarModelProps) {
  const groupRef = useRef<Group>(null);
  const wireframeGroupRef = useRef<Group>(null);
  const { scene } = useGLTF("/base.glb");

  useEffect(() => {
    const wireframeGroup = wireframeGroupRef.current;
    if (!wireframeGroup) {
      return;
    }

    while (wireframeGroup.children.length > 0) {
      const child = wireframeGroup.children[0];
      wireframeGroup.remove(child);

      if (child instanceof LineSegments) {
        child.geometry.dispose();

        if (child.material instanceof LineBasicMaterial) {
          child.material.dispose();
        }
      }
    }

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh) || !child.geometry) {
        return;
      }

      const edges = new EdgesGeometry(child.geometry);
      const line = new LineSegments(
        edges,
        new LineBasicMaterial({
          color: "#df024a",
          transparent: true,
          opacity: 0.92,
        }),
      );

      wireframeGroup.add(line);
    });

    return () => {
      while (wireframeGroup.children.length > 0) {
        const child = wireframeGroup.children[0];
        wireframeGroup.remove(child);

        if (child instanceof LineSegments) {
          child.geometry.dispose();

          if (child.material instanceof LineBasicMaterial) {
            child.material.dispose();
          }
        }
      }
    };
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
      <group ref={wireframeGroupRef} />
    </group>
  );
}

useGLTF.preload("/base.glb");

export function IntroAvatarCanvas() {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <Canvas
      camera={{ position: [0, 0.2, 18], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.55} />
      <pointLight color="#df024a" intensity={18} position={[4, 6, 10]} />
      <pointLight color="#800080" intensity={14} position={[-6, 0, 8]} />
      <pointLight color="#0dcdcd" intensity={8} position={[0, -5, 6]} />
      <directionalLight color="#f6d8ff" intensity={0.8} position={[2, 7, 4]} />

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
        <AvatarModel isInteracting={isInteracting} />
      </Suspense>
    </Canvas>
  );
}
