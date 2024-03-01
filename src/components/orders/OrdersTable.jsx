import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate indexes for slicing the data array based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const ordersData = [
    {
      id: 1,
      item: "Car bumper",
      customerName: "Ali",
      price: "$3,877",
      status: "Pending",
      orderID: "109979",
      location: "Lahore",
    },
    {
      id: 2,
      item: "Laptop",
      customerName: "John",
      price: "$1,200",
      status: "Delivered",
      orderID: "109980",
      location: "New York",
    },
    {
      id: 3,
      item: "Smartphone",
      customerName: "Emma",
      price: "$899",
      status: "Delivered",
      orderID: "109981",
      location: "Los Angeles",
    },
  ];

  const handleEditButtonClick = (rowData) => {
    console.log("Edit clicked for row data:", rowData);
  };

  // Slice the data array to display only items for the current page
  const currentItems = ordersData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-8">
      <header className="px-5 py-4 border-b border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800">Orders</h1>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-gray-800 table-auto">
            {/* Table header */}
            <thead className="text-xs text-gray-400 uppercase bg-opacity-50 rounded-sm bg-gray-50">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Item</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Customer Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Order ID</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Location</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {/* Row */}
              {currentItems.map((order, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800 ">{order.item}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{order.customerName}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-emerald-500">
                      {order.price}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="font-semibold text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded-full ${
                          order.status === "Pending"
                            ? "bg-yellow-400 text-black"
                            : order.status === "Delivered"
                            ? "bg-green-400 text-white"
                            : "bg-gray-300 text-black"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">
                      {order.orderID}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center ">{order.location}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">
                      <button
                        onClick={() => handleEditButtonClick(carCareProduct)}
                        className="px-3 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                      >
                        <FaEdit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-end mt-4">
            {/* Render pagination buttons */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 mr-2 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={indexOfLastItem >= ordersData.length}
              className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
