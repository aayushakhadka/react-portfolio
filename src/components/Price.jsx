import React from "react";
import { FaCheck } from "react-icons/fa";

export const Price = () => {
  return (
    <div
      className="flex laptop1:flex-row tablet:flex-col mobileS:flex-col tablet:items-center font-display laptop1:justify-between pb-[5rem]"
      id="price"
    >
      <div>
        <h1 className="text-red-700 mt-[5rem] tracking-widest text-lg">
          PRICING
        </h1>
        <h1 className="text-[3rem] font-bold ">My Pricing</h1>
      </div>
      <div className="flex flex-col mobileS:items-center mobileS:justify-center tablet:items-start tablet:justify-start hover bg-gray-200 p-[4rem] gap-8 mt-[3rem]">
        <div className="flex tablet:flex-row tablet:gap-[10rem] mobileS: gap-2  ">
          <h1 className="text-xl">Static</h1>
          <h1 className="text-xl">Standard</h1>
          <h1 className="text-xl">Premium</h1>
        </div>
        <div>
          <h1 className="text-lg font-bold">Design Make this Page</h1>
          <h3>Elementor</h3>
        </div>
        <p className="text-lg max-w-[35rem]">
          Making this the first true generator on the Internet. It uses a
          dictionary & plugin Development.
        </p>
        <div className="flex tablet:flex-row mobileS:flex-col gap-32">
          <div className="flex flex-col gap-4">
            <span className="flex gap-2 ">
              <FaCheck className="text-red-700" />
              <h1>multipage Elementorr</h1>
            </span>
            <span className="flex gap-2  ">
              <FaCheck className="text-red-700" />
              <h1>Design Figma</h1>
            </span>

            <span className="flex gap-2  ">
              <FaCheck className="text-red-700" /> <h1>MAintaine Design</h1>
            </span>

            <span className="flex gap-2  text-left ">
              <FaCheck className="text-red-700" />{" "}
              <h1 className="text-left">Content Upload</h1>
            </span>

            <span className="flex gap-2  text-left ">
              <FaCheck className="text-red-700" />
              <h1>Design With XD</h1>
            </span>

            <span className="flex gap-2  ">
              <FaCheck className="text-red-700" />
              <h1>8 Plugins/Extensions</h1>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="flex gap-2 ">
              <FaCheck className="text-red-700" />
              <h1>1 Page with Elementor</h1>
            </span>
            <span className="flex gap-2  ">
              <FaCheck className="text-red-700" />
              <h1>Design Customization</h1>
            </span>

            <span className="flex gap-2  ">
              <FaCheck className="text-red-700" /> <h1>Responsive Design</h1>
            </span>

            <span className="flex gap-2 ">
              <FaCheck className="text-red-700" />{" "}
              <h1 className="text-left">Content Upload</h1>
            </span>

            <span className="flex gap-2">
              <FaCheck className="text-red-700" />
              <h1>Design Customization</h1>
            </span>

            <span className="flex gap-2 ">
              <FaCheck className="text-red-700" />
              <h1>2 Plugins/Extensions</h1>
            </span>
          </div>
        </div>
        <button className="h-[3rem] bg-gray-300 rounded-md text-lg text-red-600">
          Order Now
        </button>
      </div>
    </div>
  );
};
