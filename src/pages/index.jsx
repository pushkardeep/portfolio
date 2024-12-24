import React, { useRef } from "react";
import Home from "../components/Home";
import Projects from "../components/Projects";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function Index() {
  const containerRef = useRef(null);
  
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true, // Enable smooth scrolling on mobile
        smartphone: {
          smooth: true, // Additional mobile-specific configurations (if needed)
        },
        tablet: {
          smooth: true, // Additional tablet-specific configurations (if needed)
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        data-scroll-container
        ref={containerRef}
        className="main w-full h-fit relative overflow-hidden"
      >
        <Home />
        {/* <Projects /> */}
      </div>
    </LocomotiveScrollProvider>
  );
}

export default Index;
