import { useState, useEffect, useRef } from "react";
import React from "react";
import Logo1 from "../assets/images/autobot-logo1.png";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex justify-center ">
      <div className="relative inline-block mb-20" ref={buttonRef}>
        <div
          className="relative  flex cursor-pointer items-center w-12 h-12 p-[2px] bg-white rounded-full focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            className="object-cover w-full h-full border-0 rounded-full"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="User Avatar"
          />
        </div>

        {isMenuOpen && (
          <div className="absolute right-0 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
            <a
              href="#"
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <img
                className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9 "
                src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                alt="jane avatar"
              />
              <div className="mx-1">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Jane Doe
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  janedoe@exampl.com
                </p>
              </div>
            </a>

            <hr className="border-gray-200 dark:border-gray-700" />

            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              View profile
            </a>

            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Settings
            </a>

            <hr className="border-gray-200 dark:border-gray-700" />

            <hr className="border-gray-200 dark:border-gray-700" />

            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Help
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Sign Out
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 z-40 flex w-full h-16 p-2 ml-16 bg-gray-200 shadow-lg">
      {/* Add your left-aligned item here */}
      <div>{/* Your left-aligned content */}</div>

      {/* Center spacer to push right item to the right */}
      <div className="flex items-center justify-center flex-1 invisible md:visible">
        <img src={Logo1} alt="Logo" className="w-auto h-10" />
      </div>
      {/* Add your right-aligned item here */}
      <div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
