import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  connections,
  speciality,
  techStack,
} from "../../utils/endFooter-list.utils";

gsap.registerPlugin(ScrollTrigger);

function EndFooter() {
  const animationElems = (target) => {
    const ani = gsap.from(target, {
      duration: 1,
      opacity: 0,
      x: 100,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "bottom bottom",
        onComplete: () => {
          ani.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });
  };
  
  const animationGroups = (target) => {
    const ani = gsap.from(target, {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "bottom bottom",
        onComplete: () => {
          ani.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });
  };

  useEffect(() => {
    animationElems(".about-me-elems");
    animationGroups(".tech-stack-group li");
    animationGroups(".speciality-group li");
    animationGroups(".connection-group li");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".line-animation-group");
    };
  });

  return (
    <div
      data-scroll-section
      className="w-full h-fit overflow-hidden py-10 sm:py-12 px-8 sm:px-16 md:px-20 lg:px-24 bg-[#ececec]"
    >
      <div className="about-me w-full font-['gil_med'] max-w-[650px] h-fit ml-auto">
        <h1 className="about-me-elems text-right  text-3xl sm:text-5xl tracking-tighter">
          About Me
        </h1>

        <p className="about-me-elems w-full text-right -mt-1 text-lg sm:text-3xl leading-[0.9rem] sm:leading-6 tracking-tighter">
          I’m a web developer passionate about building modern, creative
          websites using the latest technologies. With expertise in frameworks
          like React, Vue, and Next.js, I focus on delivering fast, responsive,
          and visually engaging user experiences. I blend creativity with
          functionality to create seamless, high-performance websites that work
          beautifully across all devices.
        </p>
      </div>

      <div className="w-full flex flex-col min-[700px]:justify-between min-[700px]:flex-row items-start gap-y-5 mt-5 lg:mt-10">
        <div className="w-full min-[700px]:w-fit h-fit flex flex-wrap justify-between min-[700px]:justify-normal items-start gap-5 sm:gap-10">
          {/* tech stack  */}
          <div className="tech-stack w-fit">
            <h2 className="font-['gil_med'] text-3xl tracking-tighter whitespace-nowrap">
              Tech Stack
            </h2>
            <ul className="line-animation-group tech-stack-group font-['gil_med'] text-lg sm:text-xl leading-[0.9rem] sm:leading-4 tracking-tighter -mt-1 flex flex-col items-start justify-center">
              {techStack.map((e, i) => (
                <li key={i} className="relative cursor-pointer inline-block">
                  {e}
                  <div className="w-full overflow-hidden">
                    <hr className="block border border-black relative left-[-100%] transition-all" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* speciality  */}
          <div className="speciality w-fit">
            <h2 className="font-['gil_med'] text-3xl tracking-tighter">
              Specialties
            </h2>
            <ul className="font-['gil_med'] text-lg sm:text-xl leading-[0.9rem] sm:leading-4 tracking-tighter -mt-1 whitespace-nowrap">
              <ul className="line-animation-group speciality-group font-['gil_med'] text-lg sm:text-xl leading-[0.9rem] sm:leading-4 tracking-tighter -mt-1 flex flex-col items-start justify-center">
                {speciality.map((e, i) => (
                  <li key={i} className="relative cursor-pointer inline-block">
                    {e}
                    <div className="w-full overflow-hidden">
                      <hr className="block border border-black relative left-[-100%] transition-all" />
                    </div>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
        {/* connections  */}
        <div className="connections w-fit">
          <h2 className="min-[700px]:text-right font-['gil_med'] text-3xl tracking-tighter">
            Connections
          </h2>
          <ul className="line-animation-group connection-group min-[700px]:text-right font-['gil_med'] text-lg sm:text-xl leading-[0.9rem] sm:leading-4 tracking-tighter -mt-1 flex flex-col min-[700px]:items-end whitespace-nowrap">
            {connections.map((e, i) => (
              <li key={i} className="cursor-pointer max-w-fit ">
                <a href={e.link}>
                  <span className="flex justify-end items-center gap-0.5">
                    {e.name}
                    <span>
                      <IoIosArrowRoundForward className="border border-black rounded-full -rotate-45" />
                    </span>
                  </span>
                  <div className="w-full overflow-hidden">
                    <hr className="block border border-black relative left-[-100%] transition-all" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EndFooter;
