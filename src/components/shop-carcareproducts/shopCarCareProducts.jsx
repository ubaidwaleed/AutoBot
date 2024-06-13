import UseTitle from "../../Hooks/UseTitle";
import "./shopCarCareProducts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCareProducts = ({ carCareProducts }) => {
  const navigate = useNavigate();

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
    <div className="px-12 py-16 lg:px-20 md:px-16 sm:px-12" id="products">
      <div className="px-12 text-center text-black lg:px-60">
        <UseTitle
          title={" Auto "}
          colorTitle={" Care Products"}
          subTitle={
            "Explore a Vast Selection of Premium Auto Care Products and Accessories for Your Vehicle"
          }
        ></UseTitle>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {carCareProducts.map((product, index) => (
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
                <h1 className="text-lg font-semibold capitalize select-none small-text ml-9 md:ml-0">
                  {product.brand}
                </h1>{" "}
                <h2 className="text-base font-medium text-title">
                  {product.description.length > 10
                    ? `${product.description.substring(0, 30)}`
                    : product.description}
                </h2>
                {/* Rest of your code */}
                <div className="flex items-center justify-between pt-2 text-[#1a79ff] font-bold">
                  <p>Rs. {product.price}</p>
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
