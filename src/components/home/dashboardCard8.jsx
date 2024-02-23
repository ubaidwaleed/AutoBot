import React, { useState } from "react";

function DashboardCard8() {
  // Define state variables
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate indexes for slicing the data array based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Your data array (replace it with your actual data)
  const data = [
    {
      name: "Product A",
      type: "1.2K",
      price: "$1,234",
      sales: "123",
      brand: "2.3%",
    },
    {
      name: "Product B",
      type: "3.5K",
      price: "$2,345",
      sales: "345",
      brand: "5.6%",
    },
    {
      name: "Product C",
      type: "2.8K",
      price: "$3,456",
      sales: "456",
      brand: "7.8%",
    },
    {
      name: "Product D",
      type: "4.1K",
      price: "$4,567",
      sales: "567",
      brand: "9.0%",
    },
    {
      name: "Product E",
      type: "1.9K",
      price: "$5,678",
      sales: "678",
      brand: "1.2%",
    },
    {
      name: "Product F",
      type: "2.3K",
      price: "$6,789",
      sales: "789",
      brand: "3.4%",
    },
    {
      name: "Product G",
      type: "3.7K",
      price: "$7,890",
      sales: "890",
      brand: "5.6%",
    },
    {
      name: "Product H",
      type: "2.5K",
      price: "$8,901",
      sales: "901",
      brand: "7.8%",
    },
    {
      name: "Product I",
      type: "3.9K",
      price: "$9,012",
      sales: "912",
      brand: "9.0%",
    },
    {
      name: "Product J",
      type: "1.6K",
      price: "$10,123",
      sales: "123",
      brand: "1.2%",
    },
    {
      name: "Product K",
      type: "2.2K",
      price: "$11,234",
      sales: "234",
      brand: "3.4%",
    },
    {
      name: "Product L",
      type: "3.3K",
      price: "$12,345",
      sales: "345",
      brand: "5.6%",
    },
  ];

  // Slice the data array to display only items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-8">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">My Orders</h2>
      </header>
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
              {/* Render rows for the current page */}
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800">{item.name}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{item.type}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-emerald-500">
                      {item.price}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{item.sales}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{item.brand}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-end mt-4">
          {/* Render pagination buttons */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 mr-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= data.length}
            className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard8;
