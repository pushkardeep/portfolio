import React from "react";
import CardContent from "./CardContent";

function Large() {
  return (
    <div className="relative w-full md:w-[70%] md:min-w-[600px] h-[25vh] min-h-[250px] sm:h-[35vh] sm:min-h-[350px] md:h-[50vh] md:min-h-[350px] lg:h-[55vh]   rounded-xl overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="/static/images/backgrounds/Course Zilla.jpg"
        alt="image"
      />

      <CardContent name={"Course Zilla"} />
    </div>
  );
}

export default Large;
