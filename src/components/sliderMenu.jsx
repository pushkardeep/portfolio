import React from "react";
import gsap from "gsap";
import { RiCloseLargeFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";

function SliderMenu({ setMenu }) {
  const unMount = () => {
    const ani1 = gsap.to(".sliderChild", {
      y: "-100%",
      duration: 0.2,
      onComplete: () => {
        const ani2 = gsap.to(".slider", {
          duration: 0.15,
          backgroundColor: "transparent",
          onComplete: () => {
            setMenu(false);
            ani1.kill();
            ani2.kill();
          },
        });
      },
    });
  };

  useGSAP(() => {
    gsap.from(".slider", {
      y: "-100%",
      duration: 0.2,
      onComplete: () => {
        gsap.to(".slider", {
          duration: 0.15,
          backgroundColor: "#00000057",
        });
      },
    });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#container"
      className="slider sm:hidden w-full min-h-screen fixed top-0 left-0 z-[999999]"
    >
      <div className="sliderChild w-full min-h-fit bg-white rounded-b-lg  flex flex-col justify-center items-center gap-0.5 text-[#404040] font-['gil_med'] text-2xl py-4 px-4">
        <div
          onClick={unMount}
          className="cursor-pointer w-full flex justify-end items-center gap-1"
          aria-label="Close Menu"
        >
          <span className="text-[18px]">close</span>
          <RiCloseLargeFill className="w-6 h-6 text-black aspect-square rounded-full" />
        </div>
        <a className="mt-5" href="#" aria-label="Instagram">
          Instagram
        </a>
        <hr className="w-[50%] border-[#b6b6b6] mx-auto" />
        <a
          href="https://www.linkedin.com/in/pushkardeep-khattri-0b0024312"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <hr className="w-[50%] border-[#b6b6b6] mx-auto" />
        <a href="#" aria-label="Github">
          Github
        </a>
        <hr className="w-[50%] border-[#b6b6b6] mx-auto" />
        <a href="mailto:just.puskardeep@gmail.com" aria-label="Email">
          Email
        </a>
      </div>
    </div>
  );
}

export default SliderMenu;
