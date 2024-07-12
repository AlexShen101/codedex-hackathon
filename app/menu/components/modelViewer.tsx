"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CSSProperties } from "react";

interface ModelViewerProps {
  src: string;
  style?: CSSProperties;
}

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer(props: ModelViewerProps) {
  return (
    <Canvas
      style={{ width: "100%", height: "100%", ...props.style }}
      camera={{ position: [0, 3, -2], zoom: 1.5 }}
    >
      <Model url={props.src} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 3]} intensity={1.5} />
      <directionalLight position={[-5, 10, 3]} intensity={1.5} />
      <directionalLight position={[-5, -10, 3]} intensity={1.5} />
      <OrbitControls />
      <Environment preset="apartment" />
    </Canvas>
  );
}
