import React, { useState } from "react";
import "./starRating.css"; // Assuming you have a CSS file for styling
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const logSelectedStars = () => {
    console.log("Number of stars selected:", rating);
  };

  return (
    <>
      <div>
        {" "}
        <h3 className="mt-12 mb-0 ml-6 font-semibold capitalize select-none text-md small-text md:ml-0">
          How would you rate this product?{" "}
        </h3>
        <div className="review-container">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`star ${index < rating ? "active" : ""}`}
              onClick={() => handleStarClick(index)}
            >
              <span className="stararea">★</span>
            </button>
          ))}
          <button
            style={{ width: "150px" }}
            className={`flex items-center justify-center gap-3 p-2 font-semibold bg-[#f6d73b] hover:bg-[#d1b931] text-white cart-btn md:w-56 rounded-xl mt-4 md:ml-[370px] ml-28 transition-all duration-300`}
            onClick={logSelectedStars}
          >
            <FaStar /> {/* Use the FaStar icon here */}
          </button>
        </div>
      </div>
    </>
  );
};

export default StarRating;
