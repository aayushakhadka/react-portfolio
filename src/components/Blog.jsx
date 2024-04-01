import React from "react";
import { blog } from "./js/Data";
import "./feature.css";

export const Blog = () => {
  return (
    <div id="blog">
      <div className="flex flex-col justify-center font-display pb-[5rem]">
        <h1 className="text-red-700 mt-[5rem] tracking-widest text-lg">
          VISIT MY BLOG AND KEEP YOUR FEEDBACK
        </h1>
        <h1 className="text-[3rem] font-bold ">My Blog</h1>
        <div className="grid laptop1:grid-cols-3 tablet:grid-cols-2 gap-5 mt-[3rem]">
          {blog.map((content, index) => {
            return (
              <div
                key={index}
                className="hover group flex flex-col justify-center rounded-3xl bg-gray-100 shadow-sm shadow-gray-800 duration-300 p-[1.5rem] overflow-hidden "
              >
                <div className=" group relative overflow-hidden rounded-3xl  ">
                  <img
                    src={content?.img}
                    className=" scale-100 group-hover:scale-110 duration-500 rounded-3xl   "
                  />
                </div>
                <div className="flex justify-between p-2  mt-2">
                  <h1 className="text-red-500 font-medium">
                    {content?.tittle}
                  </h1>
                  <h1>{content?.no}</h1>
                </div>
                <p className="p-2 text-xl font-medium">
                  {content?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
