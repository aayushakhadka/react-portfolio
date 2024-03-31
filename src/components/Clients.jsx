import React from "react";
import { clients } from "./js/Data";
import "./feature.css";

export const Clients = () => {
  return (
    <div id="client">
      <div
        className="flex flex-col justify-center font-display pb-[5rem]"
        
      >
        <h1 className="text-red-700 mt-[5rem] tracking-widest text-lg">
          POPULAR CLIENTS
        </h1>
        <h1 className="text-[3rem] font-bold ">AWESOME CLIENTS</h1>
        <div className="flex gap-14 items-center">
          <div className=" flex items-center flex-col justify-center gap-6 py-[2rem] h-[22rem] bg-gradient-to-t from-gray-300 to-gray-400 w-[28rem] rounded-md mt-[2rem] static">
            <h1 className="text-xl">Javascript</h1>
            <h1 className="text-xl">Product Design</h1>
            <h1 className="text-xl">Wordpress</h1>
            <h1 className="text-xl">HTML to React</h1>
            <h1 className="text-xl">React to Laravel</h1>
            <h1 className="text-xl">Python</h1>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-[1rem]">
            {clients.map((content, index) => {
              return (
                <div
                  key={index}
                  className=" flex flex-col items-center justify-center h-[10rem] w-[15rem] rounded-xl bg-gray-300 gap-4 hover"
                >
                  <img className=" h-[3rem]" src={content?.img} />
                  <hr className="height-[1px] bg-black border-gray-400 w-[100%]"></hr>
                  <h1>{content?.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
