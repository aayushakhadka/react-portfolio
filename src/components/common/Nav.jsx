import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between bg-gray-200  z-30 sticky top-0 left-0 right-0 w-full">
      <div className="flex gap-6 ">
        <img
          src="https://rainbowit.net/html/inbio/assets/images/logo/logo-dark.png"
          className=" h-[5rem]"
        />
      </div>

      <div className=" gap-10 text-sm font-semibold items-center justify-center font-display flex duration-700 ">
        <a href="#home">HOME</a>
        <a href="#features">FEATURES</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#resume">RESUME</a>
        <a href="#client">CLIENTS</a>
        <a href="#price">PRICING</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
        <button className="h-[3rem] w-[8rem] rounded-md text-white font-bold bg-gradient-to-l from-gray-300 to-gray-400 ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Nav;
