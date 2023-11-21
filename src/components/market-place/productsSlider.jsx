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

const productsData = [
  {
    title: "Glossy Gray 19' Aluminium Wheel AR-19",
    price: 24.99,
    name: "Wheel",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-4-1.jpg",
  },
  {
    title: "Twin Exhaust Pipe From Brandix Z54",
    price: 39.99,
    name: "Exhaust",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-5-1.jpg",
  },
  {
    title: "Motor Oil Level 5",
    price: 14.95,
    name: "Oil",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-6-1.jpg",
  },

  {
    title: "Brandix Clutch Discs Z175",
    price: 9.99,
    name: "Clutch",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-8-1.jpg",
  },
  {
    title: "Brandix Engine Block Z4",
    price: 49.99,
    name: "Engine",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-7-1.jpg",
  },
  {
    title: "Brandix Spark Plug Kit ASR-400",
    price: 29.99,
    name: "Plug",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-1-1.jpg",
  },
  {
    title: "Brandix Brake Kit BDX-750Z370-S",
    price: 29.99,
    name: "Brake",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-2-1.jpg",
  },
  {
    title: "Left Headlight Of Brandix Z54",
    price: 29.99,
    name: "Headlight",
    image_url:
      "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-3-1.jpg",
  },
];

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
          {productsData.map((product, index) => (
            <div className="px-2 card hover:shadow-md" key={product.index}>
              <div className="">
                <div className="relative h-full">
                  <img
                    className="w-full h-full"
                    src={product.image_url}
                    alt=""
                  />
                  <p className="px-4 py-2 bg-[#1a79ff] font-medium inline-block text-sm product-name text-white">
                    {product.name}
                  </p>
                </div>
                <div className="px-4 py-8 mt-2 text-black ">
                  <h2 className="text-base font-medium text-title">
                    {product.title}
                  </h2>
                  <div className="flex items-center justify-between pt-2 text-[#1a79ff] font-bold">
                    <p>${product.price}</p>
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
