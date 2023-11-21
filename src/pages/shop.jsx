import Sidebar from "../components/Sidebar";
import Products from "../components/shop/products";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Footer from "../components/market-place/footer";

const PriceRangeSlider = ({ min, max, value, onChange }) => {
  return (
    <div className="mt-4 w-96">
      <div className="flex items-center justify-between">
        <p className="font-medium">Price Range</p>
        <p>{`$${value[0]} - $${value[1]}`}</p>
      </div>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
};

const Shop = () => {
  const [sortingOrder, setSortingOrder] = useState(""); // Initialize with an empty string for default order

  const handleSortingChange = (order) => {
    setSortingOrder(order);
  };

  const [priceRange, setPriceRange] = useState([0, 1000]); // Initial values, adjust as needed

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          {/* ...................image with dropdowns............. */}
          <div className="relative">
            <div className="relative w-full h-[400px] ">
              <img
                src="https://wallpapers.com/images/featured/carbon-fiber-11gbag3a3s3o1b3f.jpg"
                alt="Your Image"
                className="object-cover w-full h-full bg-[#ffffff19] "
              />
              <div className="absolute inset-0 ">
                <div className="flex items-center justify-center mt-20">
                  <div className="w-full p-5 bg-white rounded-lg shadow md:w-2/3">
                    <div className="relative">
                      <div className="absolute flex items-center h-full ml-2">
                        <svg
                          className="w-4 h-4 fill-current text-primary-gray-dark"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                        </svg>
                      </div>

                      <input
                        type="text"
                        placeholder="Search by name of part or accessory..."
                        className="w-full px-8 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                      />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="font-medium">Filters</p>
                      <div>
                        <button className="px-4 py-2 mr-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200">
                          Reset Filter
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white rounded-md bg-[#1a79ff] hover:bg-[#1352a9] ml-2">
                          Search
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 xl:grid-cols-4">
                        <select
                          className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                          defaultValue="" // Set an initial default value (empty string)
                        >
                          <option value="" disabled hidden>
                            Select a Category
                          </option>
                          <option value="for-rent">Accessories</option>
                          <option value="for-sale">Parts</option>
                        </select>

                        <select
                          className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                          defaultValue="" // Set an initial default value (empty string)
                        >
                          <option value="" disabled hidden>
                            Select Make
                          </option>
                          <option value="Toyota">Toyota</option>
                          <option value="Honda">Honda</option>
                          <option value="Ford">Ford</option>
                        </select>

                        <select
                          className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                          defaultValue="" // Set an initial default value (empty string)
                        >
                          <option value="" disabled hidden>
                            Select Model
                          </option>
                          <option value="Camry">Camry</option>
                          <option value="Civic">Civic</option>
                          <option value="F-150">F-150</option>
                        </select>

                        <select
                          className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                          defaultValue="" // Set an initial default value (empty string)
                        >
                          <option value="" disabled hidden>
                            Select Variant
                          </option>
                          <option value="LE">LE</option>
                          <option value="EX">EX</option>
                          <option value="Lariat">Lariat</option>
                        </select>

                        <PriceRangeSlider
                          min={0}
                          max={1000}
                          value={priceRange}
                          onChange={handlePriceRangeChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-10 ml-16 right-28">
        <div className="flex items-center mt-4">
          <p className="mr-1 font-medium">Sort By :</p>
          <div className="flex">
            <button
              onClick={() => handleSortingChange("lowToHigh")}
              className={`${
                sortingOrder === "lowToHigh" ? "bg-blue-500 text-white" : ""
              } px-4 py-2 mr-1 text-sm font-medium rounded-md hover:bg-gray-200`}
            >
              Low to High
            </button>
            <button
              onClick={() => handleSortingChange("highToLow")}
              className={`${
                sortingOrder === "highToLow" ? "bg-blue-500 text-white" : ""
              } px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-200`}
            >
              High to Low
            </button>
          </div>
        </div>
      </div>

      <div className="relative ml-16"></div>

      <div className="relative ml-16">
        <Products />
      </div>
      <div className="relative ml-16">
        <Footer />
      </div>
    </>
  );
};

export default Shop;
