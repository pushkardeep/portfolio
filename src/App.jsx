import React, { useRef } from "react";
import Landing from "./pages/landing";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
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
      <main
        data-scroll-container
        ref={containerRef}
        className=" main w-full relative overflow-hidden"
      >
        <Landing />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
