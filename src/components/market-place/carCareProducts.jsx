import UseTitle from "../../Hooks/UseTitle";
import "./carCareProducts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import titleImage from "../../assets/images/titleImage.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCareProducts = () => {
  const [carCareProducts, setCarCareProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarCareProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/getcarcareproducts"
        ); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log("Care care products data", data);
        if (
          data &&
          data.message === "parts found" &&
          data.data &&
          data.data.partsdata &&
          data.data.partsdata.length > 0
        ) {
          setCarCareProducts(data.data.partsdata.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchCarCareProducts();
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
          title={"Car Care Products  "}
          colorTitle={" CORNER"}
          subTitle={
            "Explore a Vast Selection of Premium Car Care Products for Your Vehicle"
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
        {carCareProducts.map((accessory, index) => (
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
                  <p>Rs. {accessory.price}</p>
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

export default CarCareProducts;
