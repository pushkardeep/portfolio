import React, { useRef } from "react";
import Landing from "./pages/landing";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Landing ref={containerRef} />
    </LocomotiveScrollProvider>
  );
}

export default App;
