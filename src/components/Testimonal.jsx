import React from "react";
import { testimonal } from "./js/Data";

export const Testimonal = () => {
  return (
    <div className="flex flex-col justify-center font-display pb-[5rem]">
      <h1 className="text-red-700 mt-[5rem] tracking-widest text-lg">
        WHAT CLIENT SAYS
      </h1>
      <h1 className="text-[3rem] font-bold ">Testimonal</h1>
      <div className="flex tablet:flex-row mobileS:flex-col items-center gap-5 mt-[2rem] ">
        <div className="group flex flex-col justify-center rounded-3xl gap-3 bg-gray-100 shadow-sm shadow-gray-800 group-hover:bg-red-700 duration-300 p-[1.5rem]  w-[20rem] overflow-hidden  ">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png"
            className=" rounded-3xl group-hover:translate-2 w-[20rem]   "
          />
          <h1 className="text-red-600 text-sm">RAINBOW-THEMES</h1>
          <div>
            <h1 className="">Nevine Acotanza</h1>
            <h1 className="text-sm text-gray-700">Chief operating officer</h1>
          </div>
        </div>

        {testimonal.map((content, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-8 p-[2rem] max-w-[50rem] bg-gray-200 rounded-md bg-gradient-to-t from-gray-300 to-gray-400 duration-500"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-black ">{content?.title}</h1>

                  <h1>{content?.uni}</h1>
                </div>
                <button className="h-[2rem] w-[5rem] rounded-md text-red-500 bg-white  duration-500">
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
