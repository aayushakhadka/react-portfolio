import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col justify-center font-display pb-[6rem]">
        <h1 className="text-red-700 mt-[5rem] tracking-widest text-lg">
          CONTACT
        </h1>
        <h1 className="text-[3rem] font-bold ">Contact With Me</h1>
        <div className="flex justify-evenly laptop1:flex-row tablet:flex-col mobileS:flex-col gap-10 mt-4">
          <div className="flex flex-col bg-gray-200 p-[2rem] hover gap-5 rounded-xl">
            <img
              className="rounded-[1rem]"
              src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
            />
            <h1 className="font-bold text-xl">Nevine Acotanza</h1>
            <h2>Chief Operating Officer</h2>
            <p className="max-w-[30rem]">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <div>
              <h1>Phone: +01234567890</h1>
              <h1>Email: admin@example.com</h1>
            </div>
            <h2>Find with Me</h2>
            <div className="flex  gap-4">
              <span className="flex items-center justify-center h-[3rem] w-[3rem] bg-gradient-to-b from-gray-200 to-gray-300 shadow-md shadow-black rounded-md ">
                <FaFacebookF />
              </span>
              <span className="flex items-center justify-center h-[3rem] w-[3rem] bg-gradient-to-b from-gray-200 to-gray-300 shadow-md shadow-black rounded-md ">
                <BiLogoInstagram />
              </span>
              <span className="flex items-center justify-center h-[3rem] w-[3rem] bg-gradient-to-b from-gray-200 to-gray-300 shadow-md shadow-black rounded-md  ">
                <FiLinkedin />
              </span>
            </div>
          </div>

          {/* contact form */}
          <div className="bg-gray-300 p-[2rem] flex flex-col gap-5 rounded-xl ">
            <div className="flex tablet:flex-row mobileS:flex-col gap-4 ">
              <div className="flex flex-col gap-4">
                <label for="name" className="text-sm text-gray-600">
                  YOUR NAME
                </label>
                <input
                  className="p-[1rem] max-w-[20rem] rounded-xl border-2 border-gray-400"
                  type="text"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label for="name" className="text-sm text-gray-600">
                  PHONE NUMBER
                </label>
                <input
                  className="p-[1rem] max-w-[20rem] rounded-xl border-2 border-gray-400"
                  type="text"
                  id="name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label for="email" className="text-sm text-gray-600">
                Email
              </label>
              <input
                className="p-[1rem] rounded-xl border-2 border-gray-400"
                type="text"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label for="subject" className="text-sm text-gray-600">
                SUBJECT
              </label>
              <input
                className="p-[1rem] rounded-xl border-2 border-gray-400"
                type="text"
                id="subject"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label for="message" className="text-sm text-gray-600">
                MESSAGE
              </label>
              <input
                className="py-[5rem] px-[1rem] rounded-xl border-2 border-gray-400"
                type="text"
                id="message"
              />
            </div>
            <button className=" bg-gradient-to-l from-gray-300 to-gray-400 h-[3rem] text-red-700 shadow-md shadow-gray-500 rounded-md">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] flex flex-col items-center justify-center font-display gap-5 pb-[5rem]">
        <img src="https://rainbowit.net/html/inbio/assets/images/logo/logo-vertical-dark.png" />
        <h1>© 2022. All rights reserved by Rainbow-Themes.</h1>
      </div>
    </div>
  );
};
