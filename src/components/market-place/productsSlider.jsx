import UseTitle from "../../Hooks/UseTitle";
import "./productsSlider.css";
// import titleImg from "../../assets/image/titleimg.png";
import ProductCard from "./productCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiShoppingCart } from "react-icons/hi";
import { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import titleImage from "../../assets/images/titleImage.png";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="card-arrow arrow-next" onClick={onClick}>
      <BsArrowRightShort></BsArrowRightShort>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="card-arrow arrow-prev" onClick={onClick}>
      <BsArrowLeftShort></BsArrowLeftShort>
    </div>
  );
}

const ProductsSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  // Sort items by 'numberoforders' in descending order
  const sortedItems = allItems.sort(
    (a, b) => b.numberoforders - a.numberoforders
  );

  // Get the top 10 items with highest 'numberoforders'
  const top10Items = sortedItems.slice(0, 10);

  console.log("Top 10 items:", top10Items);

  const handleAccessoryClick = (clickedProduct) => {
    navigate(`/single-product`, { state: { productData: clickedProduct } });
  };

  return (
    <div className="px-12 py-16 lg:px-20 md:px-16 sm:px-12" id="products">
      <div className="px-12 text-center text-black lg:px-60">
        <UseTitle
          title={"FEATURED PRODUCTS "}
          colorTitle={"CORNER"}
          subTitle={
            "Explore a Vast Selection of Premium Auto Parts and Accessories for Your Vehicle"
          }
          titleImg={titleImage}
        ></UseTitle>
      </div>

      <div className="mt-8">
        <Slider {...settings}>
          {top10Items.map((product, index) => (
            <div
              className="px-2 card hover:shadow-md"
              key={index}
              onClick={() => handleAccessoryClick(product)}
            >
              <div className="">
                <div className="relative h-full">
                  <img
                    className="w-full h-full"
                    src={product.images[0]}
                    alt={product.name}
                  />
                  <p className="px-4 py-2 bg-[#1a79ff] font-medium inline-block text-sm product-name text-white">
                    {product.name.split(" ").slice(0, 2).join(" ")}
                  </p>
                </div>
                <div className="px-4 py-8 mt-2 text-black ">
                  <h1 className="text-base font-medium text-title">
                    {product.brand}
                  </h1>
                  <h2 className="text-base font-medium text-title">
                    {product.description.length > 10
                      ? `${product.description.substring(0, 30)}`
                      : product.description}
                  </h2>
                  <div className="flex items-center justify-between pt-2 text-[#1a79ff] font-bold">
                    <p>Rs. {product.price}</p>
                    <div className="shopping-icon rounded-3xl">
                      <p className="px-2 py-2 duration-300 cursor-pointer ">
                        <AiOutlineShoppingCart className="w-6 h-6"></AiOutlineShoppingCart>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsSlider;
