import { useState, useEffect } from "react";
function DashboardCard5() {
  const [parts, setParts] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [carCareProducts, setCarCareProducts] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    async function fetchData() {
      try {
        // Make API calls
        const [partsResponse, accessoriesResponse, carCareProductsResponse] =
          await Promise.all([
            fetch("http://localhost:3000/getparts"),
            fetch("http://localhost:3000/getaccessories"),
            fetch("http://localhost:3000/getcarcareproducts"),
          ]);

        const [partsData, accessoriesData, carCareProductsData] =
          await Promise.all([
            partsResponse.json(),
            accessoriesResponse.json(),
            carCareProductsResponse.json(),
          ]);

        setParts(partsData.data.partsdata);
        setAccessories(accessoriesData.data.accessoriesdata);
        setCarCareProducts(carCareProductsData.data.partsdata);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Combine all items into a single array
    const allProducts = [...parts, ...accessories, ...carCareProducts];

    allProducts.sort((a, b) => b.numberoforders - a.numberoforders);

    const top5Selling = allProducts.slice(0, 5);

    setTopSelling(top5Selling);
  }, [parts, accessories, carCareProducts]);

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-8">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Top Selling Products</h2>
      </header>
      {loading ? ( // Conditionally render loading indicator
        <div className="ml-[560px] pt-24 pb-24">
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
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-gray-800 table-auto">
              {/* Table header */}
              <thead className="text-xs text-gray-400 uppercase bg-opacity-50 rounded-sm bg-gray-50">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Type</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Price</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Sales</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Brand</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-gray-100">
                {topSelling.map((product) => (
                  <tr key={product.part_id || product.accessory_id}>
                    <td className="p-2">
                      <div className="text-left">
                        {product.name.split(" ").slice(0, 2).join(" ")}...
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{product.type}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{product.price}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        {product.numberoforders}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{product.brand}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardCard5;
