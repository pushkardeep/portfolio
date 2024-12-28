import React, { useContext, useEffect } from "react";
import { canvasLoadingContext } from "../context/canvas-loading.context";
import { loadingScreenContext } from "../context/loading-screen.context";
import gsap from "gsap";

function LoadingScreen() {
  const { isLoading } = useContext(canvasLoadingContext);
  const { setIsRemoved } = useContext(loadingScreenContext);

  useEffect(() => {
    if (!isLoading) {
      const animation = gsap.to(".loading-screen", {
        opacity: 0,
        delay: 2,
        onComplete: () => {
          setIsRemoved(true);
          animation.kill();
        },
      });
    }
  }, [isLoading]);

  return (
    <div className="loading-screen fixed top-0 left-0 z-[99999999] w-screen h-screen bg-white text-white flex flex-col justify-center items-center gap-0.5">
      <img
        className="w-10 aspect-square rounded-md object-cover"
        src="/static/images/gifs/shinchan.gif"
        alt="Shinchan-gif"
      />
      <span className="text-xs text-[#1e1e1e] font-['gil_reg'] ml-1">
        Loading...
      </span>
    </div>
  );
}

export default LoadingScreen;
