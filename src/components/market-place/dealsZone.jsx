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
  const [loading, setLoading] = useState(true); // Add loading state

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
      } finally {
        setLoading(false); // Set loading to false after fetching data
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
      } finally {
        setLoading(false); // Set loading to false after fetching data
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
      } finally {
        setLoading(false); // Set loading to false after fetching data
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
      )}
    </div>
  );
};

export default DealZone;
