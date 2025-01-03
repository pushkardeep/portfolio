import { useContext, useLayoutEffect } from "react";

import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { loadingScreenContext } from "../../context/loading-screen.context";

const useLocoScroll = (start) => {
  const { isRemoved } = useContext(loadingScreenContext);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".App");

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(".App").style.transform
        ? "transform"
        : "fixed",
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.defaults({
      scroller:
        document.documentElement.classList.contains("has-scroll-smooth") &&
        scrollEl,
    });

    ScrollTrigger.addEventListener("refresh", lsUpdate);

    console.log("Loco-scroll initiated.");

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [start, isRemoved]);
};

export default useLocoScroll;
