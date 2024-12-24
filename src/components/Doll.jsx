import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Doll(props) {
  const { nodes, materials } = useGLTF("/static/models/doll.glb");
  const groupRef = useRef();

  // Use useFrame to rotate the model on every frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.001; // Adjust the speed as needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[0, -54.713, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group position={[0, 0, 42.433]} scale={[97.129, 86.402, 76.792]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["BAYMAX_Material_#30_0"].geometry}
              material={materials.Material_30}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BAYMAX_WHITE_0.geometry}
              material={materials.WHITE}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// All code theil is create by a site https://Gltf.pmnd.rs
// Basicallyt its the mesh that contains shapers related info about the 3d model
