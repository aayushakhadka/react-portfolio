import React, { useState } from "react";
import "./sidebar.css";
import { FaGripLines } from "react-icons/fa";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-200">
      <button className="open-btn" onClick={toggleSidebar}>
        {isOpen ? "" : <FaGripLines />}
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <button className="close-btn" onClick={toggleSidebar}>
            Close
          </button>
        )}
        <ul className="flex flex-col gap-4 items-center justify-center ">
          <div className=" gap-10 text-sm font-semibold items-center justify-center font-display flex flex-col duration-700">
            <a href="#home">HOME</a>
            <a href="#features">FEATURES</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#resume">RESUME</a>
            <a href="#client">CLIENTS</a>
            <a href="#price">PRICING</a>
            <a href="#blog">BLOG</a>
            <a href="#contact">CONTACT</a>
            <button className="h-[3rem] w-[8rem] rounded-md text-white font-bold bg-gradient-to-l from-gray-300 to-gray-400">
              Buy Now
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
