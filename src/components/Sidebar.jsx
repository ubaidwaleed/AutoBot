import React from "react";
import { FaFire } from "@react-icons/all-files/fa/FaFire";
import { FaPoo } from "@react-icons/all-files/fa/FaPoo";
import { BsFillLightningFill } from "@react-icons/all-files/bs/BsFillLightningFill";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import { RiSettings3Fill } from "@react-icons/all-files/ri/RiSettings3Fill";
import { AiOutlineRobot } from "@react-icons/all-files/ai/AiOutlineRobot";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaCar } from "@react-icons/all-files/fa/FaCar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FaShopify } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../context/cart-context/cartContext";

const SidebarIcon = ({ icon, text = "tooltip", onClick }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
const SidebarLine = () => (
  <div className="h-0.5 w-12 bg-gray-400 mx-auto my-2 rounded-full"></div>
);

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
    <div className="flex justify-center">
      <div className="relative inline-block" ref={buttonRef}>
        <div
          className="relative flex cursor-pointer items-center w-12 h-12 p-[2px] bg-white rounded-full focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring text-gray-900 dark:text-white dark:bg-gray-100 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            className="object-cover w-full h-full border-0 rounded-full"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="User Avatar"
          />
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl bottom-12 dark:bg-gray-100">
            <a
              href="#"
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform group dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600"
            >
              <img
                className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9 group-hover:filter group-hover:grayscale-100"
                src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                alt="jane avatar"
              />
              <div className="mx-1">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-900 group-hover:text-white">
                  Jane Doe
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-600 group-hover:text-white">
                  <a href="#" className="hover:text-white">
                    janedoe@example.com
                  </a>
                </p>
              </div>
            </a>

            <hr className="border-gray-400 dark:border-gray-400" />

            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
            >
              View profile
            </a>

            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
            >
              Settings
            </a>

            <hr className="border-gray-400 dark:border-gray-400" />

            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
            >
              Help
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
            >
              Sign Out
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);
  return (
    <div className="fixed top-0 left-0 z-50 flex flex-col w-16 h-screen m-0 text-white bg-gray-900 shadow-lg">
      <div className="mt-5" />
      <SidebarIcon
        icon={<FaCar size="28" />}
        text="Home"
        onClick={() => navigate("/home")}
      />
      <SidebarLine />
      <SidebarIcon icon={<BsPlus size="28" />} text="Add a new Server" />
      <SidebarIcon
        icon={<BsFillLightningFill size="28" />}
        text="Upgrade to Pro"
      />
      <SidebarIcon
        icon={<AiOutlineRobot size="28" />}
        text="Need help from AutoBot ?"
        onClick={() => navigate("/autobot")}
      />

      <SidebarIcon
        icon={<FaShopify size="28" />}
        text="Checkout our marketplace"
        onClick={() => navigate("/marketplace")}
      />
      <div className="flex-grow"></div>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Display the cart items count */}
        {cartItems.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "-10px", // Adjust this value to position the count properly
              left: "32px", // Adjust this value to position the count properly
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "1",
            }}
          >
            {cartItems.length}
          </div>
        )}

        {/* Render the shopping cart icon */}
        <SidebarIcon
          icon={<AiOutlineShoppingCart size="28" />}
          text="Your shopping cart"
          onClick={() => navigate("/cart")}
        />
      </div>

      <SidebarLine />
      <UserMenu />

      <SidebarIcon icon={<RiSettings3Fill size="28" />} text="Settings" />
      <div className="mb-5" />
    </div>
  );
};

export default Sidebar;
