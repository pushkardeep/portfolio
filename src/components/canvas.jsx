import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Doll from "./Doll";

const ModalCanvas = () => {
  return (
    <div className="w-full h-[50%] sm:w-[600px] md:w-[800px] lg:w-[1000px] sm:h-[400px] absolute top-1/2 -translate-y-1/2 lg:top-[25%] lg:-translate-y-[25%] left-1/2 -translate-x-1/2 z-10">
      <Canvas camera={{ position: [0, -10, 5] }}>
        <directionalLight position={[15, 2, 15]} intensity={2} />
        <ambientLight intensity={1} />
        <Environment preset="forest" />

        <OrbitControls
          rotateSpeed={0.2}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={2.1}
          minPolarAngle={2.1}
        />
        <Doll />
      </Canvas>
    </div>
  );
};

export default ModalCanvas;
