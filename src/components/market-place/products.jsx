import UseTitle from "../../Hooks/UseTitle";
import "./products.css";
import titleImage from "../../assets/images/titleImage.png";

import { AiOutlineShopping } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const products = [
  {
    title: "Vehicle Parts",
    image_url:
      "https://www.championusedautopartsmd.com/wp-content/uploads/sites/463/2022/12/auto-parts.jpg",
  },
  {
    title: "Vehicle Accessories",
    image_url:
      "https://autoupgrade.org/wp-content/uploads/2023/08/8-Essential-Car-Accessories-That-Every-Car-Owner-Should-Have.webp",
  },
  {
    title: "Vehicle Care Products",
    image_url:
      "https://vader-prod.s3.amazonaws.com/1677510971-meguiar-s-1677510947.jpg",
  },
  {
    title: "Interior/Exterior",
    image_url:
      "https://thenewswheel.com/wp-content/uploads/2018/04/Steampunk-car-vehicle-modification-style-paint-ideas-tips-accessory-cabin-interior-exterior-Victorian-fantasy.jpg",
  },
];

const Products = () => {
  return (
    <div className="px-12 py-20 lg:px-20 md:px-16 sm:px-12" id="game">
      <div className="text-[#262626] lg:px-60 px-12 text-center">
        <UseTitle
          title={"EXPLORE OUR "}
          colorTitle={"CATEGORIES"}
          subTitle={
            "Discover Excellence in Every Category! From Essential Vehicle Parts to Stylish Accessories, Unleash a World of Choices for Your Auto Upgrades"
          }
          titleImg={titleImage}
        ></UseTitle>
      </div>

      <div className="py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {products.map((item, index) => (
            <div key={index} className="relative mx-2 cursor-pointer card-full">
              <div className="lg:h-[50vh] h-full ">
                <img className="w-full h-full " src={item.image_url} alt="" />
              </div>
              <div className="absolute px-4 py-4 text-white bottom-6 left-8 down-text">
                <h2 className="text-4xl font-bold text-title">{item.title}</h2>
                {/* <p className="flex items-center font-medium py-1 text-[12px] text-[#e0dfdf]">
                  <FaBell></FaBell>
                  <span className="px-1">PLAYSTATION 5 , XBOX</span>
                </p> */}
              </div>

              <div className="z-10 flex flex-col items-center w-full px-4 py-4 text-center text-white hover-text">
                <h2 className="relative z-10 text-5xl font-bold cursor-pointer text-title">
                  Shop <span className="text-black">Now</span>
                </h2>
                <p className="flex items-center font-medium py-1 text-[12px] text-[#e0dfdf] relative z-10">
                  <AiOutlineShopping className="h-[30px] w-[30px]" />
                  <span className="px-1 text-lg">{item.title}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
