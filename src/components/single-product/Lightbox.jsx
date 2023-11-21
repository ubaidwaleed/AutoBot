import Close from "./Close";
import Next from "./Next";
import Previous from "./Previous";

import { useState } from "react";

const Lightbox = ({
  showImg,
  setShowImg,
  showLightbox,
  setShowLightbox,
  image = [],
}) => {
  const [changeColor, setChangeColor] = useState(false);
  const [changeNext, setChangeNext] = useState(false);
  const [changePrevious, setChangePrevious] = useState(false);

  const [images] = useState(image);
  const data = images.map((image) => {
    return image.img;
  });

  const [active, setActive] = useState(0);

  const goNext = () => {
    if (active < data.length - 1) {
      setShowImg(data[active + 1]);
      setActive(active + 1);
    }
  };

  const goPrevious = () => {
    if (active > 0) {
      setShowImg(data[active - 1]);
      setActive(active - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setShowImg(data[index]);
    setActive(index);
  };

  const thumbnailClasses = (imgPath, index) => {
    return showImg === imgPath
      ? `thumb-cover${
          index + 1
        } rounded-xl w-16 h-16 overflow-hidden cursor-pointer`
      : `thumbnail-img${
          index + 1
        } rounded-xl w-16 h-16 overflow-hidden cursor-pointer`;
  };

  return (
    <div className="absolute z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-80">
      <div className="flex items-center justify-center w-full h-full col-span-1 overflow-hidden">
        <div className="relative mt-10">
          {/* Close Button */}
          <div
            className="absolute right-0 cursor-pointer -top-5"
            onClick={() => setShowLightbox(!showLightbox)}
          >
            <Close changeColor={changeColor} setChangeColor={setChangeColor} />
          </div>
          <div className="relative flex flex-col items-center">
            {/* Next and Previous Buttons */}
            <div
              onClick={goNext}
              className="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer top-1/2 -right-5"
            >
              <Next changeNext={changeNext} setChangeNext={setChangeNext} />
            </div>
            <div
              onClick={goPrevious}
              className="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer top-1/2 -left-5"
            >
              <Previous
                changePrevious={changePrevious}
                setChangePrevious={setChangePrevious}
              />
            </div>
            {/* Display Image */}
            <img
              className="self-center object-cover select-none md:w-full w-[500px] h-[500px] rounded-xl"
              src={showImg}
              alt="image1"
            />
          </div>
          <section className="flex justify-center w-full gap-4 mt-5">
            {/* Thumbnails */}
            {image.map((img, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={thumbnailClasses(img.img, index)}
              >
                <img
                  src={img.img} // Display the image using the src attribute
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
