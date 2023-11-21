import UseTitle from "../../Hooks/UseTitle";
import "./dealsZone.css";
import titleImage from "../../assets/images/titleImage.png";

const DealZone = () => {
  return (
    <div
      className="px-12 py-16 match-bg lg:px-20 md:px-16 sm:px-12"
      id="services"
    >
      <div className="text-[#fff] lg:px-60 px-12 text-center">
        <UseTitle
          title={" Attention! "}
          colorTitle={"Deal Zone"}
          subTitle={
            "Rev Up Your Savings in the Ultimate Deal Zone! Explore Exclusive Offers on Premium Auto Parts and Accessories."
          }
          titleImg={titleImage}
        ></UseTitle>
      </div>

      <div className="grid gap-8 py-4 mt-4 lg:grid-cols-2">
        <div className="bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white">
          <div className="h-full">
            <img
              className="h-[170px]"
              src="https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-13-1.jpg"
              alt=""
            />
          </div>
          <div className="px-2 py-6">
            <h2 className="font-bold text-title">HONDA</h2>
            <p className="text-sm text-[#c6c6c6] py-2">
              Fantastic 12-Stroke Engine With A Power of 1991 hp
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <p className="text-[#1a79ff] text-title font-medium">
                PRICE : <span className="text-[#c6c6c6] ">$125,00</span>
              </p>
              <p className="bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#1a79ff] hover:text-[#262626] hover:border-transparent duration-300">
                SHOP
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white">
          <div className="h-full">
            <img
              className="h-[170px]"
              src="https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-14-1.jpg"
              alt=""
            />
          </div>
          <div className="px-2 py-6">
            <h2 className="font-bold text-title">TOYOTA</h2>
            <p className="text-sm text-[#c6c6c6] py-2">
              Set of Four 19 Inch Spiked Tires
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <p className="text-[#1a79ff] text-title font-medium">
                PRICE : <span className="text-[#c6c6c6] ">$125,00</span>
              </p>
              <p className="bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#1a79ff] hover:text-[#262626] hover:border-transparent duration-300">
                SHOP
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white">
          <div className="h-full">
            <img
              className="h-[170px]"
              src="https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-15-1.jpg"
              alt=""
            />
          </div>
          <div className="px-2 py-6">
            <h2 className="font-bold text-title">HONDA</h2>
            <p className="text-sm text-[#c6c6c6] py-2">
              40 Megawatt Low Beam Lamp
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <p className="text-[#1a79ff] text-title font-medium">
                PRICE : <span className="text-[#c6c6c6] ">$125,00</span>
              </p>
              <p className="bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#1a79ff] hover:text-[#262626] hover:border-transparent duration-300">
                SHOP
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white">
          <div className="h-full">
            <img
              className="h-[170px]"
              src="https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-16-1.jpg"
              alt=""
            />
          </div>
          <div className="px-2 py-6">
            <h2 className="font-bold text-title">SUZUKI</h2>
            <p className="text-sm text-[#c6c6c6] py-2">Brandix Driver's seat</p>
            <div className="flex items-center space-x-4 text-sm">
              <p className="text-[#1a79ff] text-title font-medium">
                PRICE : <span className="text-[#c6c6c6] ">$125,00</span>
              </p>
              <p className="bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#1a79ff] hover:text-[#262626] hover:border-transparent duration-300">
                SHOP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealZone;
