import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import { BiXCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function PartsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 9; // Number of items per page

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // clearCart();
  };

  // Calculate indexes for slicing the data array based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const partsData = [
    {
      id: 1,
      name: "Car bumper",
      type: "Bumper",
      brand: "Suzuki",
      price: "7878 PKR",
      quantity: "109979",
    },
  ];

  const handleEditButtonClick = (rowData) => {
    console.log("Edit clicked for row data:", rowData);
  };

  const handleDeleteButtonClick = (rowData) => {
    setShowModal(true);

    console.log("Delete clicked for row data:", rowData);
  };

  const currentItems = partsData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-8">
        <header className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h1 className="text-3xl font-semibold text-gray-800">Parts</h1>
          <div>
            <Link
              to="/add-part"
              className="px-4 py-2 text-xl font-semibold text-white bg-green-400 rounded-xl hover:bg-green-500"
            >
              Add +
            </Link>
          </div>
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-gray-800 table-auto">
              {/* Table header */}
              <thead className="text-xs text-gray-400 uppercase bg-opacity-50 rounded-sm bg-gray-50">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">ID</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Type</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Brand</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Price</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Quantity</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Actions</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-gray-100">
                {/* Row */}
                {currentItems.map((part, index) => (
                  <tr key={index}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800 ">{part.id}</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{part.name}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center ">{part.type}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center ">{part.brand}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-green-500">
                        {part.price}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center ">{part.quantity}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        <button
                          onClick={() => handleEditButtonClick(part)}
                          className="px-3 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteButtonClick(part)}
                          className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                        >
                          <FaTrash />
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
                disabled={indexOfLastItem >= partsData.length}
                className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        className="fixed top-0 left-0 flex items-center justify-center w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="flex items-center justify-center text-4xl font-bold text-gray-800">
            Delete Item
            <BiXCircle className="ml-2 text-4xl text-red-500" />{" "}
          </h1>
          <p className="mt-4 text-xl text-center text-gray-700">
            Are you sure you want to remove this item?
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="px-4 py-2 text-lg font-semibold text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600">
              Confirm
            </button>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 text-lg font-semibold text-gray-800 transition duration-300 border border-gray-400 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PartsTable;
