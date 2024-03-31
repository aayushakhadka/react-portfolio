import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { SlSocialInstagram } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";

export const Home = () => {
  return (
    <div className="flex justify-between pb-[5rem]" id="home">
      <div className="flex flex-col gap-3 ">
        <h2 className="text-gray-700 tracking-[4px] mt-[5rem] font-display">
          WELCOME TO MY WORLD
        </h2>

        <h1 className="text-[3rem] font-bold ">
          Hi, I’m
          <span className="text-red-600 text-[3rem] font-bold font-display">
            Jone Lee a
          </span>
        </h1>

        <h1 className="text-[3rem] font-bold font-display ">
          Developer.Professional
        </h1>
        <p className="w-[35rem]  text-gray-600 font-display ">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <div className="flex">
          <div className="flex flex-col gap-4 ">
            <h1>FIND WITH ME</h1>
            <div className="flex gap-4">
              <span className="flex items-center justify-center h-[3rem] w-[3rem] bg-white shadow-md shadow-black rounded-md ">
                <FaFacebookF />
              </span>
              <span className="flex items-center justify-center h-[3rem] w-[3rem] bg-white shadow-md shadow-black rounded-md ">
                <BiLogoInstagram />
              </span>
              <span className="flex items-center justify-center h-[3rem] w-[3rem] bg-white shadow-md shadow-black rounded-md ">
                <FiLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-gradient-to-l from-gray-300 to-gray-400 w-[25rem] h-[30rem] rounded-md relative  ">
        <img
          src="https://rainbowit.net/html/inbio/assets/images/slider/banner-01.png"
          className=" absolute bottom-[1%]"
        />
      </div>
    </div>
  );
};
