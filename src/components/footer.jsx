import React, { useContext, useEffect } from "react";
import { loadingScreenContext } from "../context/loading-screen.context";
import gsap from "gsap";

function Footer() {
  const { isRemoved } = useContext(loadingScreenContext);

  useEffect(() => {
    if (isRemoved) {
      const animation = gsap.to(".footer", {
        bottom: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        onComplete: () => {
          animation.kill();
        },
      });
    }
  }, [isRemoved]);
  return (
    <footer className="footer w-full h-fit flex justify-between items-end font-['gil_med'] tracking-[1px] text-[.7rem] text-black relative bottom-[-100%] z-50">
      <div className="text-left w-[100px] leading-[13px]">
        MERN Stack Developer
      </div>
      <div className="text-right w-[110px] leading-[13px]">
        Improving myself with REACT Native
      </div>
    </footer>
  );
}

export default Footer;
