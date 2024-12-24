import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";

function Home() {
  return (
    <div
      data-scroll-section
      className="w-full min-h-screen flex flex-col justify-between items-center overflow-hidden py-10 sm:py-12 px-8 sm:px-16 md:px-20 lg:px-24"
    >
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
