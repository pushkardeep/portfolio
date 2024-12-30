import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectList from "./projectList";
import { IoIosArrowRoundForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    gsap.from(".passion-text", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".passion-text",
        top: "top top",
        end: "bottom top",
        onComplete: () => {
          gsap.killTweensOf(".passion-text");
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });

    gsap.from(".project-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-text",
        top: "top top",
        end: "bottom bottom",
        onComplete: () => {
          gsap.killTweensOf(".project-text");
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });

    gsap.from(".video", {
      scale: 1.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".video",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onComplete: () => {
          gsap.killTweensOf(".video");
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });

    gsap.from(".hr1", {
      width: "0%",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hr1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onComplete: () => {
          gsap.killTweensOf(".hr1");
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });

    gsap.from(".btn2", {
      y: "100%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".btn2",
        top: "top top",
        end: "bottom bottom",
        onComplete: () => {
          gsap.killTweensOf(".btn2");
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });

    gsap.to(".link-text-arrow", {
      rotateZ: 360,
      duration: 1,
      scrollTrigger: {
        trigger: ".link-text-1",
        top: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(".link-text-group-elem", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".link-text-group",
        top: "top top",
        end: "bottom top",
        onComplete: () => {
          gsap.killTweensOf(".link-text-group");
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });
  }, []);

  return (
    <div
      data-scroll-section
      className="projects w-full h-fit min-h-screen flex flex-col items-center py-10 sm:py-12 px-8 sm:px-16 md:px-20 lg:px-24"
    >
      <p className="passion-text project-para mx-auto w-full h-fit text-right font-['gil_med'] text-lg leading-4 min-[300px]:text-[6vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[3.3vw] min-[300px]:leading-[5.5vw] sm:leading-[4vw] md:leading-[3.85vw] lg:leading-[3.2vw]">
        Passion
        <span className="inline-block aspect-square w-[25px] min-[300px]:w-[9vw] sm:w-[6vw] lg:w-[4vw] mx-[1vw] sm:mx-[.5vw] lg:mx-[.3vw] -mb-[1.8vw] sm:-mb-[1.5vw] lg:-mb-[.8vw] ">
          <img
            className="w-full aspect-square object-cover"
            src="/static/images/icons/fuel.png"
            alt="fuel"
          />
        </span>
        my approach to crafting websites, driving every pixel and detail to
        ensure each site is a unique and engaging experience.
      </p>
      <div className="project-text w-full h-fit text-black font-['gil_sem'] text-[50px] min-[300px]:text-[17.5vw] min-[1310px]:text-[18vw] flex justify-center items-center -mt-[4.5vw] sm:-mt-[5.5vw] relative">
        <h1>PROJECTS</h1>
      </div>
      <video
        className="video w-full aspect-video rounded-md -mt-10 min-[300px]:mt-[-12vw]"
        autoPlay
        muted
        loop
        src="/static/videos/Chainsaw-man.mp4"
      ></video>

      {/* Links  */}

      <div className="btn2 w-fit h-fit mt-5 lg:mt-10">
        <a
          className="text-[0.7rem] font-['gil_med'] border border-black hover:text-white hover:bg-black rounded-full px-4 py-1.5 flex justify-center items-center tracking-tighter"
          href="https://github.com/Pushkardeep"
        >
          View Github
          <span>
            <IoIosArrowRoundForward className="text-lg" />
          </span>
        </a>
      </div>

      <hr className="hr1 w-[80%] mx-auto border-[1px] border-[#222] rounded-full mt-5 lg:mt-10" />

      <div className="link-text-group w-full h-fit mt-5 lg:mt-10">
        <div className="link-text-group-elem link-text-1 w-fit h-fit flex justify-center items-center gap-1">
          <h1 className="font-['gil_med'] text-3xl sm:text-5xl tracking-tighter">
            Links
          </h1>
          <div className="w-7 sm:w-10 aspect-square rounded-full border-[2px] sm:border-[3px] border-black flex justify-center items-center">
            <IoIosArrowRoundForward className="link-text-arrow text-lg sm:text-2xl rotate-[30deg] transition-all" />
          </div>
        </div>
        <p className="link-text-group-elem link-text-p-1 w-full max-w-[500px] font-['gil_med'] -mt-1 text-lg sm:text-3xl leading-[0.9rem] sm:leading-6 tracking-tighter">
          Each project is linked directly to its GitHub repository, where you
          can explore the code, documentation, and additional details.
        </p>
      </div>

      <ProjectList />
    </div>
  );
}

export default Projects;
