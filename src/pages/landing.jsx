import React, { useRef } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center overflow-hidden py-10 sm:py-12 px-8 sm:px-16 md:px-20 lg:px-24">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default Landing;
