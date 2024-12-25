import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Footer() {
  useGSAP(() => {
    gsap.from(".footer", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);
  return (
    <footer className="footer w-full h-fit flex justify-between items-end font-['gil_med'] tracking-[1px] text-[.7rem] text-black relative z-50">
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
