import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import { HiMenuAlt4 } from "react-icons/hi";
import { loadingScreenContext } from "../context/loading-screen.context";

function Nav({ setMenu }) {
  const { isRemoved } = useContext(loadingScreenContext);
  useEffect(() => {
    if (isRemoved) {
      const animation = gsap.to(".nav", {
        top: "0%",
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
    <nav className="nav w-full h-fit cursor-pointer flex justify-between items-center sm:items-start font-['gil_med'] tracking-[1px] text-[.8rem] text-black relative top-[-100%] z-50">
      <a href="#">Home</a>
      <a href="#">PU.</a>
      <span
        onClick={() => {
          setMenu(true);
        }}
        className="sm:hidden text-white w-fit h-fit bg-[#333333] hover:bg-[#3d3d3d] py-1 px-3 rounded-full"
      >
        <HiMenuAlt4 className="w-6 h-6" />
      </span>
      <div className="hidden w-fit h-fit sm:flex flex-col justify-center items-start leading-[14.8px]">
        <a
          className="relative left-0 hover:left-3 transition-all duration-100"
          href="https://www.instagram.com/just_pushkardeep/"
        >
          Instagram
        </a>
        <a
          className="relative left-0 hover:left-3 transition-all duration-100"
          href="https://www.linkedin.com/in/pushkardeep-khattri-0b0024312"
        >
          Linkdin
        </a>
        <a
          className="relative left-0 hover:left-3 transition-all duration-100"
          href="https://github.com/Pushkardeep"
        >
          Github
        </a>
        <a
          className="relative left-0 hover:left-3 transition-all duration-100"
          href="mailto:just.pushkardeep@gmail.com"
        >
          Email
        </a>
      </div>
    </nav>
  );
}

export default Nav;
