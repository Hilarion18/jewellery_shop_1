import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingDiamond = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.002;
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <dodecahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#E0E0E0"
        distort={0.3}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
};

export default function Diamond3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      <RotatingDiamond />
    </Canvas>
  );
}
