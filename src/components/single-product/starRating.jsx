import React, { useState } from "react";
import "./starRating.css"; // Assuming you have a CSS file for styling
import { FaStar } from "react-icons/fa";

const StarRating = ({ receivedProductData }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  // const logSelectedStars = () => {
  //   console.log("Number of stars selected:", rating);
  //   console.log("Recieved product: ", receivedProductData);
  // };

  const submitRating = async () => {
    // Determine the UUID from the available properties
    const uuid =
      receivedProductData?.part_id ||
      receivedProductData?.accessory_id ||
      receivedProductData?.carcarproduct_id;
    const productType = receivedProductData?.category;
    const myRating = rating;

    try {
      const response = await fetch("http://localhost:3000/setrating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: uuid,
          type: productType,
          rating: myRating,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Rating updated successfully:", data);
      console.log("Number of stars selected:", rating);
      console.log("Recieved product: ", receivedProductData);
      setRating(0);
    } catch (error) {
      console.error("Error setting rating:", error);
    }
  };

  return (
    <>
      <div>
        {" "}
        <h3 className="mt-12 mb-2 ml-6 font-semibold text-gray-700 select-none text-md small-text md:ml-0">
          We'd love to hear your thoughts! How would you rate this product from
          1 to 5?
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
            onClick={submitRating}
          >
            <FaStar />
          </button>
        </div>
      </div>
    </>
  );
};

export default StarRating;
