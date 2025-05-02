"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";

interface BlogSceneProps {
  title: string;
}

export function BlogScene({ title }: BlogSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center>
          <Text3D
            font="/fonts/Inter/static/Inter_18pt-Bold.ttf" // Updated to a valid font path
            size={0.35}
            height={0.2}
            curveSegments={12}
          >
            {title}
            <meshStandardMaterial color="#6366f1" />
          </Text3D>
        </Center>
      </Float>
    </Canvas>
  );
}