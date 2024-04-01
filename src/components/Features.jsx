import React from "react";
import { feature } from "./js/Data";
import "./feature.css";
import { FiArrowRight } from "react-icons/fi";

export const Features = () => {
  return (
    <div id="features">
      <div className="flex flex-col pb-[5rem] font-display">
        <h1 className="text-red-700 tracking-widest mt-[5rem]">FEATURES</h1>
        <h1 className="text-[4rem] font-semibold">What I Do </h1>
        <div className=" grid laptop:grid-cols-3 tablet:grid-cols-2 gap-7 mt-5">
          {feature.map((content, index) => {
            return (
              <div
                key={index}
                className=" contain group flex flex-col justify-center gap-4 p-6 bg-gray-100 rounded-md shadow-sm shadow-gray-800 group-hover:bg-red-700 group-hover:text-white duration-300"
              >
                <h1 className=" text-3xl font-display group ">
                  {content?.title}
                </h1>
                <p className=" text-left text-gray-600 text-lg group-hover:text-white">
                  {content?.description}
                </p>
                <span className="hidden group-hover:block group-hover:duration-300 ">
                  <FiArrowRight className="text-white" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
