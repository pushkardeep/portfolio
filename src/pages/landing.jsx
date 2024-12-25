import React, { useRef, useState } from "react";
import SliderMenu from "../components/sliderMenu";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Hero from "../components/Hero";

function Landing() {
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      {isMenu && <SliderMenu setMenu={setMenu} />}
      <div
        data-scroll-section
        id="container"
        className="min-w-[300px] relative"
      >
        {/* Index  */}
        <div className="w-full h-screen min-h-fit flex flex-col justify-between items-center overflow-hidden py-10 sm:py-12 px-8 sm:px-16 md:px-20 lg:px-24">
          <Nav setMenu={setMenu} />
          <Hero />
          <Footer />
        </div>

        {/* projects  */}
        {/* <div className="w-full h-screen min-h-fit flex flex-col items-center overflow-hidden py-10 sm:py-12 px-8 sm:px-16 md:px-20 lg:px-24">
          <p className="project-para mx-auto w-full h-fit text-right font-['gil_med'] text-lg leading-4 min-[300px]:text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[3.3vw] min-[300px]:leading-[5.5vw] sm:leading-[4vw] md:leading-[3.85vw] lg:leading-[3.2vw]">
            Passion
            <span className=" inline-block aspect-square w-[25px] min-[300px]:w-[9vw] sm:w-[6vw] lg:w-[4vw] mx-[1vw] sm:mx-[.5vw] lg:mx-[.3vw] -mb-[1.8vw] sm:-mb-[1.5vw] lg:-mb-[.8vw] ">
              <img
                className="w-full aspect-square object-cover"
                src="/static/images/icons/fuel.png"
                alt="fuel"
              />
            </span>
            my approach to crafting websites, driving every pixel and detail to
            ensure each site is a unique and engaging experience.
          </p>

          <div className="w-full text-black font-['gil_sem'] text-[50px] min-[300px]:text-[17.5vw] min-[1310px]:text-[18vw] flex justify-center items-center gap-4 -mt-[4.5vw] sm:-mt-[5.5vw]">
            <h1>PROJECTS</h1>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Landing;
