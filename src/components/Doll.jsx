import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Doll(props) {
  const groupRef = useRef();
    const { scene } = useLoader(GLTFLoader, "/static/models/doll.glb");

  // Use useFrame to rotate the model on every frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.001; // Adjust the speed as needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
    </group>
  );
}