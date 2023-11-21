import React from "react";
// import ItemsContainer from "./ItemsContainer";
// import SocialIcons from "./SocialIcons";

import { BsFacebook, BsLink } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="mb-6 text-3xl font-semibold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5">
          <span className="text-[#1a79ff]">Rev Up</span> Your Ride – Explore Our
          Marketplace for Automotive Parts and Accessories!
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#1a79ff] hover:bg-[#1050c8] duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
            Get Started
          </button>
        </div>
      </div>
      {/* <ItemsContainer /> */}
      <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3 bg-[#ffffff19]">
        <span>© 2024 Fast. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="text-[#1a79ff]">
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#1a79ff]
          duration-300 "
          >
            <BsFacebook />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#1a79ff]
          duration-300 "
          >
            <BsTwitter />
          </span>{" "}
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#1a79ff]
          duration-300 "
          >
            <BsGithub />
          </span>{" "}
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#1a79ff]
          duration-300 "
          >
            <BsLinkedin />
          </span>{" "}
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#1a79ff]
          duration-300 "
          >
            <BsInstagram />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
