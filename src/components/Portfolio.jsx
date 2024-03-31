import React from "react";
import { portfolio } from "./js/Data";
import { MdArrowOutward } from "react-icons/md";

export const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="flex flex-col items-center justify-center font-display pb-[5rem]">
        <h1 className="text-red-700 mt-[5rem]  tracking-widest text-lg">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h1>
        <h1 className="text-[3rem] font-bold ">My Portfolio</h1>
        <div className="grid grid-cols-3 gap-5 mt-[3rem]">
          {portfolio.map((content, index) => {
            return (
              <div
                key={index}
                className=" group flex flex-col justify-center rounded-3xl bg-gray-100 shadow-sm shadow-gray-800 group-hover:bg-red-700 duration-300 p-[1.5rem] overflow-hidden  "
              >
                <div className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={content?.img}
                    className="  scale-100 group-hover:scale-110 duration-500 rounded-3xl    "
                  />
                </div>
                <div className="flex justify-between p-2  mt-2">
                  <h1 className="text-red-500 font-medium">
                    {content?.tittle}
                  </h1>
                  <h1>{content?.no}</h1>
                </div>
                <p className=" group flex items-center justify-center p-2 text-xl font-medium hover:text-red-600 duration-500">
                  {content?.description}{" "}
                  <MdArrowOutward className=" group-hover:text-red-600 text-white" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
