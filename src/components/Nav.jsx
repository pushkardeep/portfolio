import React from "react";

function Nav() {
  return (
    <nav className="w-full f-fit cursor-pointer flex justify-between items-center sm:items-start font-['gil_med'] tracking-[1px] text-[.8rem] text-black relative z-50">
      <a href="#">Home</a>
      <a href="#">PU.</a>
      <span className="material-symbols-outlined sm:hidden text-white w-fit h-fit bg-[#333333] py-1 px-3 rounded-full">
        drag_handle
      </span>
      <div className="hidden w-fit h-fit sm:flex flex-col justify-center items-start leading-[14.8px]">
        <a href="#">Instagram</a>
        <a href="https://www.linkedin.com/in/pushkardeep-khattri-0b0024312">Linkdin</a>
        <a href="#">Github</a>
        <a href="mailto:just.puskardeep@gmail.com">Email</a>
      </div>
    </nav>
  );
}

export default Nav;
