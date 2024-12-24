import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import { RiLoaderLine } from "react-icons/ri";

const useResponsiveModelPosition = () => {
  const [position, setPosition] = useState([-1.5, -4.5, 1]);

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth >= 1024) {
        setPosition([-1.5, -3, 1]);
      } else {
        setPosition([-1.5, -4.5, 1]);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return { position };
};

function CanvasLoader() {
  const { proress } = useProgress();
  const { position } = useResponsiveModelPosition();
  return (
    <Html
      position={position}
      className="text-xs text-nowrap font-['gil_med'] flex flex-col justify-between items-center"
    >
      <RiLoaderLine className="w-3.5 h-3.5 animate-spin" />
      <h1>Loading modal {proress || 0}%</h1>
    </Html>
  );
}

export default CanvasLoader;
