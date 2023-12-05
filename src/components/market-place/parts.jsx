import UseTitle from "../../Hooks/UseTitle";
import "./accessories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import titleImage from "../../assets/images/titleImage.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const productsData = [
  {
    title: "Glossy Gray 19' Aluminium Wheel AR-19",
    price: 24.99,
    name: "Wheel",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-4-1.jpg",
  },
  {
    title: "Sunset Brake Kit",
    price: 14.95,
    name: "Brake",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-21-1.jpg",
  },
  {
    title: "Twin Exhaust Pipe From Brandix Z54",
    price: 39.99,
    name: "Exhaust",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-5-1.jpg",
  },

  {
    title: "Brandix Clutch Discs Z175",
    price: 9.99,
    name: "Clutch",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-8-1.jpg",
  },

  {
    title: "Left Headlight Of Brandix Z54",
    price: 29.99,
    name: "Headlight",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-3-1.jpg",
  },
];

const Parts = () => {
  const [parts, setParts] = useState([]);
  const navigate = useNavigate();

  //Getting the parts data

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await fetch("http://localhost:3000/getparts"); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        if (
          data &&
          data.message === "parts found" &&
          data.data &&
          data.data.partsdata &&
          data.data.partsdata.length > 0
        ) {
          setParts(data.data.partsdata.slice(0, 5)); // Limiting to three items
          console.log("Parts data", parts);
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchParts();
  }, []);

  const handleShopNowClick = () => {
    navigate("/shop-parts"); // Redirects to the "/shop" route
  };

  const handlePartsClick = (clickedProduct) => {
    navigate(`/single-product`, { state: { productData: clickedProduct } });
  };

  return (
    <div className="px-12 py-16 lg:px-20 md:px-16 sm:px-12" id="products">
      <div className="px-12 text-center text-black lg:px-60">
        <UseTitle
          title={"PARTS  "}
          colorTitle={" CORNER"}
          subTitle={
            "Explore a Vast Selection of Premium Auto Products and Accessories for Your Vehicle"
          }
        ></UseTitle>
        <div>
          <button
            className="bg-[#1a79ff] text-white px-6 py-3 font-semibold banner-btn text-2xl"
            onClick={handleShopNowClick}
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {parts.map((part, index) => (
          <div
            className="px-2 card hover:shadow-md"
            key={index}
            onClick={() => handlePartsClick(part)}
          >
            <div className="">
              <div className="relative h-full">
                <img
                  className="w-full h-full"
                  src={part.images[0]}
                  alt={part.name}
                />
                <p className="px-4 py-2 bg-[#1a79ff] font-medium inline-block text-sm product-name text-white">
                  {part.name.split(" ").slice(0, 2).join(" ")}
                </p>
              </div>
              <div className="px-4 py-8 mt-2 text-black ">
                <h1 className="text-lg font-semibold capitalize select-none small-text ml-9 md:ml-0">
                  {part.brand}
                </h1>
                <h2 className="text-base font-medium text-title">
                  {part.description.length > 10
                    ? `${part.description.substring(0, 30)}`
                    : part.description}
                </h2>
                {/* Rest of your code */}
                <div className="flex items-center justify-between pt-2 text-[#1a79ff] font-bold">
                  <p>${part.price}</p>
                  <div className="shopping-icon rounded-3xl">
                    <p className="px-2 py-2 duration-300 cursor-pointer ">
                      <AiOutlineShoppingCart className="w-6 h-6" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
