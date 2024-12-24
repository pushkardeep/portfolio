import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// 3d model
import Doll from "../components/Doll";

function Model() {
  const [position, setPosition] = useState([0, 3.4, 0]);
  const [scale, setScale] = useState([0.14, 0.14, 0.14]);

  useEffect(() => {
    const handlePositioning = () => {
      window.innerWidth >= 1024
        ? (setPosition([0, 6, 0]), setScale([0.15, 0.15, 0.15]))
        : (setPosition([0, 3.4, 0]), setScale([0.14, 0.14, 0.14]));
    };
    handlePositioning();
    window.addEventListener("resize", handlePositioning);
  }, []);

  return (
    <>
      <div className="w-full h-[50%] sm:w-[600px] md:w-[800px] lg:w-[1000px] sm:h-[400px] absolute top-1/2 -translate-y-1/2 lg:top-[25%] lg:-translate-y-[25%] left-1/2 -translate-x-1/2 z-10">
        <Canvas camera={{ position: [0, -10, 5] }}>
          <directionalLight position={[15, 2, 15]} intensity={2} />
          <Environment preset="forest" />
          <ambientLight intensity={1} />
          <OrbitControls
            rotateSpeed={0.2}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={2.1}
            minPolarAngle={2.1}
          />
          <Doll scale={scale} position={position} rotation={[0, -100, 0]} />
        </Canvas>
      </div>
    </>
  );
}

export default Model;
