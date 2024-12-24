import React from "react";
import Model from "./Model";

function Hero() {
  return (
    <div className="w-full min-h-[450px] relative overflow-hidden flex-1 flex flex-col justify-between py-14 sm:px-8 md:px-12 lg:px-24">
      <Model />
      {/* center  */}
      <div className="w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[25%] lg:-translate-y-[25%] text-center z-0 ">
        <div className="w-fi flex justify-center items-center tracking-[-6px]">
          <div className="text-stroke text-[7rem] md:text-[8rem] lg:text-[9rem] font-['gil_bol']">
            W
          </div>
          <div className="text-black font-['gil_med'] text-[7rem] md:text-[8rem] lg:text-[9rem]">
            E
          </div>
          <div className="text-stroke text-[7rem] md:text-[8rem] lg:text-[9rem] font-['gil_bol']">
            B
          </div>
        </div>
        <div className="font-['Zen'] text-[#444444] text-[1.3rem] md:text-[1.5rem] lg:text-[1.6rem] -mt-[44px] md:-mt-[50px] lg:-mt-[58px]">
          Development
        </div>
      </div>
      {/* my info  */}
      <div className="w-[220px] h-fit text-left relative z-50 pointer-events-none">
        <div className="font-['Zen'] text-[#444444] text-[1.4rem] md:text-[2rem]">
          PUSHKAR
        </div>
        <div className="font-['gil_reg'] text-[#636363] text-[.65rem] md:text-[.70rem] -mt-1 md:-mt-1.5 leading-3">
          Committed to creating modern, animated websites in a modular way, I am
          a MERN stack developer with expertise in game development and UI/UX
          design.
        </div>
      </div>
      <div className="w-[230px] h-fit text-right ml-auto relative z-50 pointer-events-none">
        <div className="font-['Zen'] text-[#444444] text-[1.4rem] md:text-[2rem]">
          SKILLS
        </div>
        <div className="font-['gil_reg'] text-[#636363] text-[.65rem] md:text-[.70rem] -mt-1 md:-mt-1.5 leading-3">
          Committed to modern, animated websites, I excel in MERN stack
          development, game development, and UI/UX design.
        </div>
      </div>
    </div>
  );
}

export default Hero;
