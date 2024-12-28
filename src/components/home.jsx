import React, { useState } from "react";
import Nav from "./nav";
import Hero from "./Hero";
import Footer from "./footer";

function Home({setMenu}) {
  return (
    <div
      data-scroll-section
      className="landing w-full h-screen min-h-fit flex flex-col justify-between items-center overflow-hidden py-10 sm:py-12 px-8 sm:px-16 md:px-20 lg:px-24"
    >
      <Nav setMenu={setMenu} />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
