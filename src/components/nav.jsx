import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HiMenuAlt4 } from "react-icons/hi";

function Nav() {
  useGSAP(() => {
    gsap.from(".nav", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <nav className="nav w-full f-fit cursor-pointer flex justify-between items-center sm:items-start font-['gil_med'] tracking-[1px] text-[.8rem] text-black relative z-50">
      <a href="#">Home</a>
      <a href="#">PU.</a>
      <span
        //   onClick={() => {
        //     setMenu(true);
        //   }}
        className="sm:hidden text-white w-fit h-fit bg-[#333333] py-1 px-3 rounded-full"
      >
        <HiMenuAlt4 className="w-6 h-6" />
      </span>
      <div className="hidden w-fit h-fit sm:flex flex-col justify-center items-start leading-[14.8px]">
        <a href="#">Instagram</a>
        <a href="https://www.linkedin.com/in/pushkardeep-khattri-0b0024312">
          Linkdin
        </a>
        <a href="#">Github</a>
        <a href="mailto:just.pushkardeep@gmail.com">Email</a>
      </div>
    </nav>
  );
}

export default Nav;
