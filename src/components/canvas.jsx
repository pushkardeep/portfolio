import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
// 3D model component
import Doll from "./doll";
import CanvasLoader from "./canvasLoader"; // Renamed for clarity

// Custom hook to handle responsive positioning and scaling
const useResponsiveModelPosition = () => {
  const [position, setPosition] = useState([0, 3.4, 0]);
  const [scale, setScale] = useState([0.14, 0.14, 0.14]);

  useEffect(() => {
    const updatePositionAndScale = () => {
      if (window.innerWidth >= 1024) {
        setPosition([0, 6, 0]);
        setScale([0.15, 0.15, 0.15]);
      } else {
        setPosition([0, 3.4, 0]);
        setScale([0.14, 0.14, 0.14]);
      }
    };

    updatePositionAndScale();
    window.addEventListener("resize", updatePositionAndScale);

    return () => {
      window.removeEventListener("resize", updatePositionAndScale);
    };
  }, []);

  return { position, scale };
};

const ModalCanvas = () => {
  const { position, scale } = useResponsiveModelPosition();

  return (
    <div className="w-full h-[50%] sm:w-[600px] md:w-[800px] lg:w-[1000px] sm:h-[400px] absolute top-1/2 -translate-y-1/2 lg:top-[25%] lg:-translate-y-[25%] left-1/2 -translate-x-1/2 z-10">
      <Canvas camera={{ position: [0, -10, 5] }}>
        {/* Lighting */}
        <directionalLight position={[15, 2, 15]} intensity={2} />
        <ambientLight intensity={1} />
        <Environment preset="forest" />

        {/* OrbitControls for interaction */}
        <OrbitControls
          rotateSpeed={0.2}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={2.1}
          minPolarAngle={2.1}
        />

        {/* Suspense for loading state */}
        <Suspense fallback={<CanvasLoader />}>
          <Doll scale={scale} position={position} rotation={[0, -100, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModalCanvas;
