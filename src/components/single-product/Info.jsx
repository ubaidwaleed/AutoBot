// import { ReactComponent as Minus } from "../../assets/icon-minus.svg";
// import { ReactComponent as Plus } from "../../assets/icon-plus.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

import { useState } from "react";

const Info = ({ Cart, quantity, setQuantity, setOrders, setCount }) => {
  const [error, setError] = useState("");

  const addItem = () => {
    const product = [
      {
        id: 1,
        image: "/images/image-product-1-thumbnail.jpg",
        edition: "Fall Limited Edition Sneakers",
        count: 125,
      },
    ];
    if (quantity < 1) {
      setError("Cannot add 0 quantity");
      setInterval(() => {
        setError("");
      }, 3000);
    } else {
      setOrders(product);
      setCount(quantity);
    }
  };

  return (
    <div className="flex justify-center col-span-1">
      <div className="mt-5 md:mt-20">
        <h3 className="text-sm font-semibold select-none small-text ml-9 md:ml-0">
          Brandix
        </h3>
        <h1 className="mt-5 text-3xl font-bold select-none titles md:text-4xl md:w-3/4 ml-9 md:ml-0">
          Brandix Clutch Discs Z175
        </h1>
        <p className="w-3/4 mt-10 font-normal select-none md:text-justify nav-btns ml-9 md:ml-0">
          The Brandix Clutch Disk Z175 is a premium automotive component known
          for its durability and reliability. Engineered with high-quality
          materials, it ensures smooth power transmission and consistent
          performance in various vehicles. Designed for easy installation and
          compatibility, it offers enhanced frictional properties for seamless
          engagement and disengagement of the transmission. Upgrade your
          vehicle's transmission system with the Brandix Clutch Disk Z175 to
          experience improved control and a reliable driving experience on the
          road.
        </p>

        <div className="select-none mt-7 ml-9 md:ml-0">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold titles">$125.00</span>
              <span className="w-12 font-bold text-center rounded-md small-text discount">
                50%
              </span>
            </div>
            <del className="font-bold before-price md:hidden mr-9">$250.00</del>
          </div>
          <del className="hidden font-bold before-price md:block">$250.00</del>
        </div>
        <div className="relative flex flex-col items-center h-32 gap-4 mt-10 md:flex-row md:h-auto">
          <div className="flex items-center justify-between w-4/5 p-2 md:w-32 qty-btn rounded-xl">
            <AiOutlineMinus
              onClick={
                quantity > 0
                  ? () => setQuantity(quantity - 1)
                  : () => setQuantity(quantity)
              }
              className="cursor-pointer"
            />
            <span className="font-bold select-none titles">
              {quantity >= 0 ? quantity : 0}
            </span>
            <AiOutlinePlus
              onClick={() => setQuantity(quantity + 1)}
              className="cursor-pointer"
            />
          </div>
          <p className="absolute bottom-0 text-red-500 md:-bottom-5 md:left-0 md:text-sm">
            {error}
          </p>
          <button
            onClick={addItem}
            className="flex items-center justify-center w-4/5 gap-3 p-2 font-semibold bg-[#3b82f6] text-white cart-btn md:w-56 rounded-xl"
          >
            {" "}
            <FaCartPlus />
            <span className="select-none ">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
