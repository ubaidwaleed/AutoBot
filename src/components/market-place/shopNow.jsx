import "./shopNow.css";

import img2 from "../../assets/images/cta_icon.png";

const ShopNow = () => {
  const scrollToSection = () => {
    const yOffset = 3800; // Change this value to the desired Y-coordinate
    window.scrollTo({
      top: yOffset,
      behavior: "smooth",
    });
  };
  return (
    <div className="py-20 meet-bg">
      <div className="px-12 lg:px-20 md:px-16 sm:px-12">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <div>{/* <img src={img} alt="" /> */}</div>

          <div>
            <div className="flex flex-col items-center justify-center py-20 text-center lg:text-left lg:items-start">
              <img className="py-2" src={img2} alt="" />
              <h2 className="text-5xl font-extrabold text-white text-title">
                DISCOVER THE <span className="text-[#1a79ff]">REALM</span> OF
                AUTOMOTIVE EXCELLENCE
              </h2>
              <p className="py-4 text-[#c7c5c5]">
                Unleash the power of automotive innovation as you navigate
                through a world where strategies meet precision. Compete with
                100 players on a remote island for victory, overcoming
                challenges and seizing opportunities for your vehicle.
              </p>
              {/* <img className="py-2 pb-6" src={titleImg} alt="" /> */}
              <div className="py-2">
                <button
                  className="bg-[#1a79ff] text-[#1C1421] px-6 py-3 font-semibold banner-btn"
                  onClick={scrollToSection}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
