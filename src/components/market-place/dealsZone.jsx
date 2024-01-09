import UseTitle from "../../Hooks/UseTitle";
import "./dealsZone.css";
import titleImage from "../../assets/images/titleImage.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DealZone = () => {
  const products = [
    {
      imageSrc:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-13-1.jpg",
      title: "HONDA",
      description: "Fantastic 12-Stroke Engine With A Power of 1991 hp",
      price: "$125,00",
      buttonText: "SHOP",
    },
    {
      imageSrc:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-14-1.jpg",
      title: "TOYOTA",
      description: "Set of Four 19 Inch Spiked Tires",
      price: "$150,00",
      buttonText: "SHOP",
    },
    {
      imageSrc:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-15-1.jpg",
      title: "HONDA",
      description: "40 Megawatt Low Beam Lamp",
      price: "$100,00",
      buttonText: "SHOP",
    },
    {
      imageSrc:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-16-1.jpg",
      title: "SUZUKI",
      description: "Brandix Driver's seat",
      price: "$200,00",
      buttonText: "SHOP",
    },
    // Add more product objects as needed
  ];

  const [accessories, setAccessories] = useState([]);
  const [parts, setParts] = useState([]);
  const [carCareProducts, setCarCareProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3000/getaccessories/");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        if (
          data &&
          data.message === "Accessories found" &&
          data.data &&
          data.data.accessoriesdata
        ) {
          setAccessories(data.data.accessoriesdata);
        }
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchAccessories();
  }, []);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await fetch("http://localhost:3000/getparts");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        if (
          data &&
          data.message === "parts found" &&
          data.data &&
          data.data.partsdata
        ) {
          setParts(data.data.partsdata);
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchParts();
  }, []);

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
          setCarCareProducts(data.data.partsdata);
        }
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchCarCareProducts();
  }, []);

  // Combining states into a single state object
  const combinedData = {
    accessories,
    parts,
    carCareProducts,
  };

  const allItems = [
    ...combinedData.accessories,
    ...combinedData.parts,
    ...combinedData.carCareProducts,
  ];

  const sortedItems = allItems.sort(
    (a, b) => a.numberoforders - b.numberoforders
  );

  // Get the lowest 4 items with the lowest 'numberoforders'
  const lowest4Items = sortedItems.slice(0, 4);

  console.log("Lowest 4 items:", lowest4Items);

  const handleAccessoryClick = (clickedProduct) => {
    navigate(`/single-product`, { state: { productData: clickedProduct } });
  };

  return (
    <div
      className="px-12 py-16 match-bg lg:px-20 md:px-16 sm:px-12"
      id="services"
    >
      <div className="text-[#fff] lg:px-60 px-12 text-center">
        <UseTitle
          title={" Attention! "}
          colorTitle={"Deal Zone"}
          subTitle={
            "Rev Up Your Savings in the Ultimate Deal Zone! Explore Exclusive Offers on Premium Auto Parts and Accessories."
          }
          titleImg={titleImage}
        ></UseTitle>
      </div>

      <div className="grid gap-8 py-4 mt-4 lg:grid-cols-2">
        {lowest4Items.map((product, index) => (
          <div
            key={index}
            className="bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white"
            onClick={() => handleAccessoryClick(product)}
          >
            <div className="h-full">
              <img
                className="h-[170px]"
                src={product.images[0]}
                alt={product.name}
              />
            </div>
            <div className="px-2 py-6">
              <h2 className="font-bold text-title">
                {product.name.split(" ").slice(0, 2).join(" ")}
              </h2>
              <p className="text-sm text-[#c6c6c6] py-2">
                {product.description.length > 15
                  ? `${product.description.substring(0, 100)}`
                  : product.description}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <p className="text-[#1a79ff] text-title font-medium">
                  PRICE :{" "}
                  <span className="text-[#c6c6c6] ">Rs. {product.price}</span>
                </p>
                <p className="bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#1a79ff] hover:text-[#262626] hover:border-transparent duration-300">
                  SHOP
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealZone;
