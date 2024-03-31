import React from "react";
import { resume } from "./js/Data";
import "./feature.css";

export const Resume = () => {
  return (
    <div
      className="flex flex-col justify-center font-display pb-[5rem]"
      id="resume"
    >
      <h1 className="text-red-700 mt-[5rem] tracking-widest text-lg">
        +7 years of experiences
      </h1>
      <h1 className="text-[3rem] font-bold ">My Resume</h1>
      <div className="flex items-center justify-center w-[95%] bg-gradient-to-l from-gray-300 to-gray-400 h-[5rem] rounded-md mt-[3rem] gap-[8rem]">
        <h1 className="text-2xl ">Education</h1>
        <h1 className="text-2xl ">Professional Skills </h1>
        <h1 className="text-2xl">Experience</h1>
        <h1 className="text-2xl ">Interview</h1>
      </div>

      <div className=" grid grid-cols-2 mt-[3rem] gap-5  ">
        <div>
          <h1>2007-2010</h1>
          <h1 className="text-2xl font-medium">Education Quality</h1>
        </div>
        <div>
          <h1>2007-2010</h1>
          <h1 className="text-2xl font-medium">Job Experience</h1>
        </div>
        {resume.map((content, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-8 p-[2rem] bg-gray-200 rounded-md contain duration-500"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-black ">{content?.title}</h1>

                  <h1>{content?.uni}</h1>
                </div>
                <button className="h-[2rem] w-[5rem] rounded-md text-red-500 bg-white group-hover:bg-red-600 group-hover:text-white duration-500">
                  {content?.rate}
                </button>
              </div>
              <div className="h-[1px] bg-gray-300 group-hover:bg-white"></div>
              <p className="text-lg">{content?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
