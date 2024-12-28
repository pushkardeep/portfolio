import React, { useContext, useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { canvasLoadingContext } from "../context/canvas-loading.context";
import { loadingScreenContext } from "../context/loading-screen.context";
import gsap from "gsap";

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

export default function Doll() {
  const groupRef = useRef();
  const { scene } = useLoader(GLTFLoader, "/static/models/doll.glb");

  const { position, scale } = useResponsiveModelPosition();

  const { setIsLoading } = useContext(canvasLoadingContext);
  const { isRemoved } = useContext(loadingScreenContext);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.001;
    }
  });

  useEffect(() => {
    if (isRemoved && groupRef.current) {
      const animation = gsap.to(groupRef.current.position, {
        y: position[1],
        duration: 0.5,
        ease: "back.out(1.7)",
        onComplete: () => {
          animation.kill();
        },
      });
    }
  }, [isRemoved, position[1]]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <group
      ref={groupRef}
      scale={scale}
      position={[position[0], -10, position[2]]}
      rotation={[0, -100, 0]}
      dispose={null}
    >
      <primitive object={scene} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
    </group>
  );
}
