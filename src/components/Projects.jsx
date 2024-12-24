import React, { useRef } from "react";
import Large from "./Large";
import Medium from "./Medium";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Projects() {

  return (
    <div
      data-scroll-section
      className=" w-full min-h-screen overflow-hidden relative px-8 py-4 sm:py-6 sm:px-10 md:px-14 lg:px-24"
    >
      <p className="project-para mx-auto w-full h-fit text-right font-['gil_med'] text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[3.3vw] leading-[5.5vw] sm:leading-[4vw] md:leading-[3.85vw] lg:leading-[3.2vw]">
        Passion
        <span className=" inline-block aspect-square w-[9vw] sm:w-[6vw] lg:w-[4vw] mx-[1vw] sm:mx-[.5vw] lg:mx-[.3vw] -mb-[1.8vw] sm:-mb-[1.5vw] lg:-mb-[.8vw] ">
          <img
            className="w-full aspect-square object-cover"
            src="/static/images/icons/fuel.png"
            alt="fuel"
          />
        </span>
        my approach to crafting websites, driving every pixel and detail to
        ensure each site is a unique and engaging experience.
      </p>

      <div className="w-full text-black font-['gil_sem'] text-[17.5vw] min-[1310px]:text-[18vw] flex justify-center items-center gap-4 -mt-[4.5vw] sm:-mt-[5.5vw]">
        <h1>PROJECTS</h1>
      </div>
      {/* project cards  */}
      <div className="project-card w-full h-fit max-h-[80vh] md:min-h-[380px] -mt-[12.5vw] sm:-mt-[13vw] relative overflow-y-auto md:overflow-y-hidden md:overflow-x-auto flex flex-col justify-start items-center md:flex-row gap-2 lg:gap-3">
        {/* <Large />
        <Medium /> */}
      </div>
    </div>
  );
}

export default Projects;
