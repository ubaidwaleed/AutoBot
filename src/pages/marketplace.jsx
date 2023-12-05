import React from "react";
import Sidebar from "../components/Sidebar";
import ProductsSlider from "../components/market-place/productsSlider";
import DealZone from "../components/market-place/dealsZone";
import Products from "../components/market-place/products";
import ShopNow from "../components/market-place/shopNow";
import Accessories from "../components/market-place/accessories";
import Parts from "../components/market-place/parts";
import Footer from "../components/market-place/footer";
import GoToTop from "../Hooks/GoToTop";

function FeatureCard({ iconSrc, title, description }) {
  return (
    <div className="flex items-center justify-center gap-3 px-3 py-6 rounded-sm border-primary">
      <img src={iconSrc} alt={title} className="object-contain w-12 h-12" />
      <div>
        <h4 className="text-lg font-medium capitalize">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function Marketplace() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          {/* ...................image with dropdowns............. */}
          <div className="relative">
            <div className="relative w-full h-[600px]">
              <img
                src="src/assets/images/warehouse.jpg"
                alt="Your Image"
                className="object-cover w-full h-full opacity-30"
              />
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute text-6xl text-center text-white transform -translate-y-1/2 top-[160px] hidden sm:block">
                  Find Parts For Your Vehicle
                </div>
                <div className="absolute text-2xl text-center text-white transform -translate-y-1/2 top-[220px] hidden sm:block">
                  Over hundreds of brands and tens of thousands of parts
                </div>
              </div>
            </div>

            <div className="absolute flex flex-col items-center space-y-2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:flex-row sm:space-x-2">
              <div className="relative">
                <select
                  className="mt-3 p-3 m-1 bg-white border border-gray-300 rounded w-[320px] h-[50px]" // Increased width and height
                >
                  <option value="" disabled selected hidden>
                    Select Make
                  </option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Ford">Ford</option>
                </select>
              </div>
              <div className="relative">
                <select
                  className="p-3 m-1 bg-white border border-gray-300 rounded w-[320px] h-[50px]" // Increased width and height
                >
                  <option value="" disabled selected hidden>
                    Select Model
                  </option>
                  <option value="Camry">Camry</option>
                  <option value="Civic">Civic</option>
                  <option value="F-150">F-150</option>
                </select>
              </div>
              <div className="relative">
                <select
                  className="p-3 m-1 bg-white border border-gray-300 rounded w-[320px] h-[50px]" // Increased width and height
                >
                  <option value="" disabled selected hidden>
                    Select Variant
                  </option>
                  <option value="LE">LE</option>
                  <option value="EX">EX</option>
                  <option value="Lariat">Lariat</option>
                </select>
              </div>
              <button className="py-2 text-white mr-2 bg-blue-500 rounded w-[120px] h-[50px]">
                Search
              </button>
            </div>
          </div>
          {/* ...................features............. */}
          <div className="relative flex justify-center w-full">
            {" "}
            {/* Centered and full-width */}
            <div className="container py-8 ">
              <div className="grid w-full grid-cols-1 gap-6 mx-auto border-b-2 md:grid-cols-4">
                <FeatureCard
                  iconSrc="src/assets/images/icons/delivery-van.svg"
                  title="Free Shipping"
                  description="Order over $200"
                />
                <FeatureCard
                  iconSrc="src/assets/images/icons/money-back.svg"
                  title="Money Returns"
                  description="30 days money returns"
                />
                <FeatureCard
                  iconSrc="src/assets/images/icons/phone.svg"
                  title="24/7 Support"
                  description="Customer support"
                />
                <FeatureCard
                  iconSrc="src/assets/images/icons/sale.svg"
                  title="Hot Offers"
                  description="Discount upto 80%"
                />
              </div>
            </div>
          </div>
          {/* <div className="relative">
            <ProductsCarousel />
          </div> */}
        </div>
      </div>
      <div className="relative ml-16">
        <ProductsSlider />
      </div>
      <div className="relative ml-16">
        <ShopNow />
      </div>
      <div className="relative ml-16">
        <Products />
      </div>
      <div className="relative ml-16">
        <DealZone />
      </div>
      <div className="relative ml-16">
        <Accessories />
      </div>
      <div className="relative ml-16">
        <Parts />
      </div>
      <div className="relative ml-16">
        <Footer />
      </div>
      <GoToTop />
    </>
  );
}

export default Marketplace;
