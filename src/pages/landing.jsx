import React, { forwardRef, useContext, useState } from "react";
import SliderMenu from "../components/sliderMenu";
import LoadingScreen from "../components/loadingScreen";
import { loadingScreenContext } from "../context/loading-screen.context";
import Home from "../components/home";
import Projects from "../components/projects";
import useLocoScroll from "../components/hooks/useLocoScroll";
import EndFooter from "../components/endFooter";

const Landing = () => {
  useLocoScroll(true);
  const { isRemoved } = useContext(loadingScreenContext);
  const [isMenu, setMenu] = useState(false);

  return (
    <>
      {/* Show loading screen if isRemoved is false */}
      {!isRemoved && <LoadingScreen />}

      {/* Show menu if isMenu is true */}
      {isMenu && <SliderMenu setMenu={setMenu} />}

      <div
        data-scroll-container
        id="container"
        className="App min-w-[300px] overflow-hidden relative"
      >
        {/* Show only the Home component while isRemoved is false */}
        <Home setMenu={setMenu} />

        {/* Only show Projects after isRemoved becomes true */}
        {isRemoved && <Projects />}
        {isRemoved && <EndFooter />}
      </div>
    </>
  );
};

export default Landing;
