import React from "react";
import CardContent from "./CardContent";

function Medium() {
  return (
    <div className="relative w-full md:w-[50%] md:min-w-[500px] h-[20vh] min-h-[200px] sm:h-[30vh] sm:min-h-[300px] md:h-[50vh] lg:h-[55vh] md:min-h-[350px] rounded-xl overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="/static/images/backgrounds/notes.jpg"
        alt="image"
      />

      <CardContent name={"Paper Notes"} />
    </div>
  );
}

export default Medium;
