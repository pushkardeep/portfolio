import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { projectList } from "../../utils/project-list.utils";

gsap.registerPlugin(ScrollTrigger);

function ProjectList() {
  const playAni = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-list-item-group",
        start: "bottom bottom",
        end: "bottom top",
        onComplete: () => {
          gsap.killTweensOf(".project-list-item-group");
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      },
    });

    tl.from(".project-list-item-group", {
      x: "-100%",
      duration: 1,
      stagger: 0.2,
    })
      .from(
        ".project-list-item-group h1",
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
        },
        "-=0.3"
      )
      .from(
        ".project-list-item-group a",
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
        },
        "-=0.3"
      );
  };

  useEffect(() => {
    playAni();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".project-list-item");
    };
  }, []);

  return (
    <div className="projects-list w-full h-fit flex flex-col justify-center items-center gap-1 sm:gap-3 mt-5 lg:mt-10 overflow-hidden">
      {projectList.map((e, i) => (
        <div
          key={i}
          className="project-list-item-group w-full h-fit pt-4 sm:pt-6 px-2 sm:px-4 text-[#000000] flex flex-col items-center hover:bg-[#ededed]"
        >
          <div className="w-full h-fit flex justify-between items-center">
            <a href={e.live}>
              <h1 className="inline-block cursor-pointer font-['gil_med'] text-xl sm:text-4xl">
                <span className="before:content-['•'] before:text-black before:text-xl before:mr-2 sm:before:text-[2rem] sm:before:mr-[10px] tracking-tighter">
                  {e.name}
                </span>
              </h1>
            </a>
            <a className="inline-block cursor-pointer" href={e.github}>
              <FaGithub className="w-6 h-6 sm:w-9 sm:h-9" />
            </a>
          </div>
          <hr className="project-list-hr w-full border-b-2 border-[#222] rounded-full" />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
