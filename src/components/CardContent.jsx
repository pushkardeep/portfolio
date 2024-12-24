import React from "react";
import { Link } from "react-router-dom";

function CardContent({ name, live, github }) {
  return (
    <div className=" w-full h-full py-1.5 px-5 absolute top-0 left-0 flex flex-col justify-between">
      <h1 className="text-white font-['gil_sem'] text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] px-5 py-2 -ml-4">
        {name}
      </h1>

      <div className="w-full h-fit text-white flex flex-wrap justify-end items-center gap-1.5 mb-1 sm:mb-2">
        <Link
          to={live}
          className="w-fit h-fit text-[.7rem] sm:text-[.8rem] md:text-[.8.5rem] font-['gil_reg'] bg-[#000000]/25 backdrop-blur-md rounded-full px-7 md:px-8 py-2.5"
        >
          Live
        </Link>
        <Link
          to={github}
          className="w-fit h-fit text-[.7rem] sm:text-[.8rem] md:text-[.8.5rem] font-['gil_reg'] bg-[#000000]/25 backdrop-blur-md rounded-full px-7 md:px-8 py-2.5"
        >
          Github
        </Link>
      </div>
    </div>
  );
}

export default CardContent;
