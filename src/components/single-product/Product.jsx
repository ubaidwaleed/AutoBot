import React, { useState } from "react";
import Next from "./Next";
import Previous from "./Previous";

const Product = ({
  showLightbox,
  setShowLightbox,
  showImg,
  setShowImg,
  image = [],
  receivedProductData,
}) => {
  const [active, setActive] = useState(0);

  const handleThumbnailClick = (index) => {
    setShowImg(image[index].img);
    setActive(index);
  };

  const goNext = () => {
    if (active < image.length - 1) {
      setShowImg(image[active + 1].img);
      setActive(active + 1);
    }
  };

  const goPrevious = () => {
    if (active > 0) {
      setShowImg(image[active - 1].img);
      setActive(active - 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full col-span-1 md:overflow-hidden">
      <div className="mt-0 md:mt-10">
        <div className="relative">
          <span
            onClick={goPrevious}
            className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full md:hidden left-5 top-1/2"
          >
            <Previous />
          </span>
          <img
            onClick={() => setShowLightbox(!showLightbox)}
            className="object-cover w-full cursor-pointer md:w-[400px] md:h-[400px] md:rounded-xl"
            src={showImg}
            alt="image1"
            style={{ maxWidth: "100%" }}
          />
          <span
            onClick={goNext}
            className="absolute z-0 flex items-center justify-center w-10 h-10 bg-white rounded-full md:hidden right-5 top-1/2"
          >
            <Next />
          </span>
        </div>
        <section className="justify-between hidden w-full gap-2 mt-5 md:flex">
          {/* Thumbnails */}
          {image.map((imgData, index) => (
            <img
              key={index}
              src={imgData.img}
              alt={`thumbnail-${index}`}
              onClick={() => handleThumbnailClick(index)}
              className={`thumbnail ${
                active === index ? "active-thumbnail" : ""
              }`}
              style={{
                width: "80px", // Adjust the width as needed
                height: "auto", // Maintain aspect ratio
                cursor: "pointer",
                border: active === index ? "2px solid blue" : "none",
                marginRight: "5px", // Adjust spacing between thumbnails
                maxWidth: "100%", // Set maximum width to 100%
              }}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Product;
