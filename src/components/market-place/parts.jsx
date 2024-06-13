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
  const [loading, setLoading] = useState(true); // Add loading state

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
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchParts();
  }, []);

  const handleShopNowClick = () => {
    navigate("/shop-parts"); // Redirects to the "/shop" route
  };

  const handlePartsClick = (clickedProduct) => {
    console.log(clickedProduct);

    let id;
    if (clickedProduct.accessory_id) {
      id = clickedProduct.accessory_id;
    } else if (clickedProduct.carcareproduct_id) {
      id = clickedProduct.carcareproduct_id;
    } else if (clickedProduct.part_id) {
      id = clickedProduct.part_id;
    }

    navigate(`/single-product/${id}`, {
      state: { productData: clickedProduct },
    });
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
      {loading ? ( // Show loader if loading is true
        <div className="flex justify-center pt-24 pb-24">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
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
                  {/* <h1 className="text-lg font-semibold capitalize select-none small-text ml-9 md:ml-0">
                  {part.brand}
                </h1> */}
                  <h2 className="text-base font-medium text-title">
                    {part.description.length > 10
                      ? `${part.description.substring(0, 30)}`
                      : part.description}
                  </h2>
                  {/* Rest of your code */}
                  <div className="flex items-center justify-between pt-2 text-[#1a79ff] font-bold">
                    <p>Rs. {part.price}</p>
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
      )}
    </div>
  );
};

export default Parts;
