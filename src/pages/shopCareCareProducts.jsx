import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Footer from "../components/market-place/footer";
import CarCareProducts from "../components/shop-carcareproducts/shopcarcareproducts";

const PriceRangeSlider = ({ min, max, value, onChange }) => {
  return (
    <div className="mt-4 w-96">
      <div className="flex items-center justify-between">
        <p className="font-medium">Price Range</p>
        <p>{`Rs. ${value[0]} - Rs. ${value[1]}`}</p>
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

const ShopCarCareProducts = () => {
  const [sortingOrder, setSortingOrder] = useState(""); // Initialize with an empty string for default order

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedModel, setSelectedModel] = useState("All");
  const [loading, setLoading] = useState(true); // Add loading state

  const handleSortingChange = (order) => {
    setSortingOrder(order);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const [priceRange, setPriceRange] = useState([0, 100000]); // Initial values, adjust as needed

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const [carCareProducts, setCarCareProducts] = useState([]);

  //Getting the accessories data
  useEffect(() => {
    const fetchCarCareProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/getcarcareproducts"
        ); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log("Care care products data", data);
        if (
          data &&
          data.message === "parts found" &&
          data.data &&
          data.data.partsdata &&
          data.data.partsdata.length > 0
        ) {
          setCarCareProducts(data.data.partsdata);
        }
      } catch (error) {
        console.error("Error fetching accessories:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchCarCareProducts();
  }, []);

  const sortAccessories = (order) => {
    const sortedCarCareProducts = [...carCareProducts]; // Create a copy of the accessories array

    if (order === "lowToHigh") {
      sortedCarCareProducts.sort((a, b) => a.price - b.price); // Sort low to high based on price
    } else if (order === "highToLow") {
      sortedCarCareProducts.sort((a, b) => b.price - a.price); // Sort high to low based on price
    }

    setCarCareProducts(sortedCarCareProducts); // Update the state with sorted accessories
  };

  useEffect(() => {
    // Whenever the sortingOrder changes, trigger sorting
    if (sortingOrder !== "") {
      sortAccessories(sortingOrder);
    }
  }, [sortingOrder]);

  console.log(carCareProducts);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedMake("All");
    setSelectedModel("All");
    setPriceRange([0, 100000]); // Reset price range
    setSearchTerm(""); // Reset search term
  };

  var filteredCarCareProducts = [];

  if (carCareProducts) {
    const searchTerms = searchTerm.toLowerCase().split(" ");

    filteredCarCareProducts = carCareProducts.filter((val) => {
      const nameTenWords = val.name
        .split(" ")
        .slice(0, 20)
        .join(" ")
        .toLowerCase();

      return (
        (selectedCategory.toLowerCase() === "all" ||
          val.subcategory.toLowerCase() === selectedCategory.toLowerCase()) &&
        (selectedMake.toLowerCase() === "all" ||
          val.brand.toLowerCase() === selectedMake.toLowerCase()) &&
        (selectedModel.toLowerCase() === "all" ||
          val.compatibility.some(
            (item) => item.toLowerCase() === selectedModel.toLowerCase()
          )) &&
        val.price >= priceRange[0] &&
        val.price <= priceRange[1] &&
        searchTerms.every(
          (term) =>
            val.brand.toLowerCase().includes(term) ||
            val.compatibility.some((compatibilityItem) =>
              compatibilityItem.toLowerCase().includes(term)
            ) ||
            nameTenWords.includes(term) // Check if description's first ten words include search term
        )
      );
    });

    console.log(carCareProducts);
  }

  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          {/* ...................image with dropdowns............. */}
          <div className="relative">
            <div className="relative w-full h-[550px] lg:h-[430px]">
              <img
                src="src/assets/images/marketplace/carbon-fiber-background.jpg"
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
                        placeholder="Search by name, type, or brand..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full px-8 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                      />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="font-medium">Filters</p>
                      <div>
                        <button
                          onClick={resetFilters}
                          className="px-4 py-2 text-sm font-medium text-white rounded-md bg-[#1a79ff] hover:bg-[#1352a9] ml-2"
                        >
                          Reset Filters
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
                        <select
                          className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                        >
                          <option value="All">Select a Category</option>
                          {carCareProducts.map((part) => {
                            // Convert all categories to lowercase for comparison
                            const categoryLowerCase =
                              part.subcategory.toLowerCase();

                            // Check if any lowercase version of the category already exists in the rendered options
                            const isDuplicate =
                              carCareProducts
                                .map((p) => p.subcategory.toLowerCase())
                                .indexOf(categoryLowerCase) !==
                              carCareProducts.indexOf(part);

                            // Render the option only if it's not a duplicate
                            if (!isDuplicate) {
                              return (
                                <option key={part.id} value={part.subcategory}>
                                  {part.subcategory}
                                </option>
                              );
                            }

                            return null; // Return null for duplicates to skip rendering
                          })}
                        </select>

                        <select
                          className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                          value={selectedMake}
                          onChange={handleMakeChange}
                        >
                          <option value="All">Select Make</option>
                          {carCareProducts.map((part) => {
                            // Convert all categories to lowercase for comparison
                            const categoryLowerCase = part.brand.toLowerCase();

                            // Check if any lowercase version of the category already exists in the rendered options
                            const isDuplicate =
                              carCareProducts
                                .map((p) => p.brand.toLowerCase())
                                .indexOf(categoryLowerCase) !==
                              carCareProducts.indexOf(part);

                            // Render the option only if it's not a duplicate
                            if (!isDuplicate) {
                              return (
                                <option key={part.id} value={part.brand}>
                                  {part.brand}
                                </option>
                              );
                            }

                            return null; // Return null for duplicates to skip rendering
                          })}
                        </select>

                        <select
                          className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                          value={selectedModel}
                          onChange={handleModelChange}
                        >
                          <option value="All">Select Model</option>
                          {Array.from(
                            new Set(
                              carCareProducts
                                .flatMap((part) => part.compatibility) // Flatten compatibility arrays
                                .map((compatibilityItem) =>
                                  compatibilityItem.toLowerCase()
                                ) // Convert to lowercase for consistent comparison
                            )
                          ).map((uniqueCompatibilityItem, index) => (
                            <option key={index} value={uniqueCompatibilityItem}>
                              {uniqueCompatibilityItem.toUpperCase()}
                            </option>
                          ))}
                        </select>

                        <PriceRangeSlider
                          min={0}
                          max={100000}
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
        {loading ? ( // Show loader if loading is true
          <div className="flex justify-center pt-24 pb-24">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <CarCareProducts carCareProducts={filteredCarCareProducts} />
        )}
      </div>

      <div className="relative ml-16">
        <Footer />
      </div>
    </>
  );
};

export default ShopCarCareProducts;
