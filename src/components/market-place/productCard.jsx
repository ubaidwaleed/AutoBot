import React from "react";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";

const ProductCard = () => {
  return (
    <>
      <section className="py-20">
        <h1 className="mb-12 font-sans text-5xl font-bold text-center text-gray-900">
          Business Accommodations<span className="text-blue-600">.</span>
        </h1>
        <article className="w-[300px] h-[400px]  p-3 bg-white shadow-md  hover:shadow-lg product-card">
          <a href="#">
            <div className="relative flex items-center justify-center h-[240px] overflow-hidden rounded-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKccWCC6CxOl1u361M_5W7JtVVb3uzQAwpCg&usqp=CAU"
                alt="Hotel Photo"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 inline-flex items-center">
                <img
                  className="w-[60px] h-[60px]"
                  src="src/assets/images/icons/saleProductCard.svg"
                />
              </div>
            </div>

            <div className="p-2 mt-6">
              <h2 className="text-2xl text-slate-700">The Hilton Hotel</h2>
              <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

              <div className="flex items-end justify-between mt-3">
                <p>
                  <span className="text-2xl font-bold text-blue-500">$850</span>
                </p>

                <div>
                  <AiOutlineShoppingCart className="inline-flex w-10 h-10 p-2 hover:text-white hover:bg-blue-500 cart-icon rounded-3xl" />
                </div>
              </div>
            </div>
          </a>
        </article>
      </section>
    </>
  );
};

export default ProductCard;
