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
    title: "Side View Mirror",
    price: 24.99,
    name: "Mirror",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-18-1.jpg",
  },
  {
    title: "Muffer Silencer Exaust",
    price: 39.99,
    name: "Exhaust",
    image_url:
      "https://biswasaccessories.com/wp-content/uploads/2021/01/a-300x300.jpg",
  },
  {
    title: "Motor Oil Level 5",
    price: 14.95,
    name: "Oil",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-6-1.jpg",
  },

  {
    title: "Bradix Car Door Lock",
    price: 9.99,
    name: "Door",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-19-1.jpg",
  },

  {
    title: "Mobile Brake Fluid",
    price: 29.99,
    name: "Brake",
    image_url:
      "https://biswasaccessories.com/wp-content/uploads/2021/10/MOBIL-BRAKE-FLUID-DOT-4-300x300.png",
  },
];

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate();

  //Getting the accessories data

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3000/getaccessories/"); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        if (
          data &&
          data.message === "Accessories found" &&
          data.data &&
          data.data.accessoriesdata &&
          data.data.accessoriesdata.length > 0
        ) {
          setAccessories(data.data.accessoriesdata.slice(0, 5)); // Limiting to three items
        }
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchAccessories();
  }, []);

  const handleShopNowClick = () => {
    navigate("/shop-accessories"); // Redirects to the "/shop" route
  };

  const handleAccessoryClick = (clickedProduct) => {
    navigate(`/single-product`, { state: { productData: clickedProduct } });
  };

  return (
    <div className="px-12 py-16 lg:px-20 md:px-16 sm:px-12" id="products">
      <div className="px-12 text-center text-black lg:px-60">
        <UseTitle
          title={"PRODUCTS / ACCESSORIES  "}
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
        {accessories.map((accessory, index) => (
          <div
            className="px-2 card hover:shadow-md"
            key={index}
            onClick={() => handleAccessoryClick(accessory)}
          >
            <div className="">
              <div className="relative h-full">
                <img
                  className="w-full h-full"
                  src={accessory.images[0]}
                  alt={accessory.name}
                />
                <p className="px-4 py-2 bg-[#1a79ff] font-medium inline-block text-sm product-name text-white">
                  {accessory.name.split(" ").slice(0, 2).join(" ")}
                </p>
              </div>
              <div className="px-4 py-8 mt-2 text-black ">
                <h1 className="text-lg font-semibold capitalize select-none small-text ml-9 md:ml-0">
                  {accessory.brand}
                </h1>
                <h2 className="text-base font-medium text-title">
                  {accessory.description.length > 10
                    ? `${accessory.description.substring(0, 30)}`
                    : accessory.description}
                </h2>
                {/* Rest of your code */}
                <div className="flex items-center justify-between pt-2 text-[#1a79ff] font-bold">
                  <p>${accessory.price}</p>
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

export default Accessories;
