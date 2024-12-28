import React, { forwardRef, useContext, useState } from "react";
import SliderMenu from "../components/sliderMenu";
import LoadingScreen from "../components/loadingScreen";
import { loadingScreenContext } from "../context/loading-screen.context";
import Home from "../components/home";
import Projects from "../components/projects";

const Landing = forwardRef((prop, ref) => {
  const { isRemoved } = useContext(loadingScreenContext);
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      {!isRemoved && <LoadingScreen />}
      {isMenu && <SliderMenu setMenu={setMenu} />}
      <div
        ref={ref}
        data-scroll-container
        id="container"
        className={`min-w-[300px] relative overflow-hidden ${
          isRemoved ? "h-fit" : "h-screen"
        }`}
      >
        <Home setMenu={setMenu} />
        <Projects />
      </div>
    </>
  );
});

export default Landing;
