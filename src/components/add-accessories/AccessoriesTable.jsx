import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { BiXCircle } from "react-icons/bi";
import { toast } from "react-toastify";

function AccessoriesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const navigate = useNavigate();

  const itemsPerPage = 9; // Number of items per page

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAccessory(null); // Clear selected part when modal is closed
  };

  const handleEditButtonClick = (rowData) => {
    console.log("Edit clicked for row data:", rowData);

    navigate("/update-accessory", { state: { rowData: rowData } });
  };

  const handleDeleteButtonClick = (rowData) => {
    setShowModal(true);
    setSelectedAccessory(rowData); // Set the selected part
  };

  const handleDeleteConfirm = async () => {
    const toastDelete = toast.loading("Deleting accessory...", {
      autoClose: false,
    });

    try {
      const response = await fetch("http://localhost:3000/deleteaccessories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessory_id: selectedAccessory.accessory_id }),
      });
      if (!response.ok) {
        toast.update(toastDelete, {
          type: toast.TYPE.ERROR,
          render: "Network response was not ok",
          autoClose: 5000, // Adjust the time or set it to 0 for manual close
          isLoading: false,
        });
        throw new Error("Network response was not ok.");
      }

      const responseBody = await response.json();
      console.log(responseBody);

      toast.update(toastDelete, {
        type: toast.TYPE.SUCCESS,
        render: "Accessory Deleted!",
        autoClose: 3000, // Adjust the time or set it to 0 for manual close
        isLoading: false,
      });
      setAccessories(
        accessories.filter(
          (part) => part.accessory_id !== selectedAccessory.accessory_id
        )
      );

      handleCloseModal();
    } catch (error) {
      toast.update(toastDelete, {
        type: toast.TYPE.ERROR,
        render: error.message,
        autoClose: 5000, // Adjust the time or set it to 0 for manual close
        isLoading: false,
      });
      console.error("Error deleting part:", error);
    }
  };

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await fetch("http://localhost:3000/getaccessories"); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        if (
          data &&
          data.message === "Accessories found" &&
          data.data &&
          data.data.accessoriesdata &&
          data.data.accessoriesdata.length > 0
        ) {
          setAccessories(data.data.accessoriesdata);
          console.log("Accessories data", accessories);
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchParts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Update the condition for Next button to check against the total number of items
  const hasNextPage = indexOfLastItem < accessories.length;

  // Update the condition for Previous button to check if currentPage is greater than 1
  const hasPreviousPage = currentPage > 1;

  const currentItems = accessories.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-8">
        <header className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h1 className="text-3xl font-semibold text-gray-800">Accessories</h1>
          <div>
            <Link
              to="/add-accessories"
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
                {currentItems.map((accessories, index) => (
                  <tr key={index}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800 ">
                          {accessories.accessory_id}
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">
                        {accessories.name.split(" ").slice(0, 6).join(" ")}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center ">{accessories.type}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center ">{accessories.brand}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-green-500">
                        {accessories.price}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center ">{accessories.quantity}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">
                        <button
                          onClick={() => handleEditButtonClick(accessories)}
                          className="px-3 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteButtonClick(accessories)}
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
                disabled={!hasPreviousPage}
                className="px-2 py-1 mr-2 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
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
            <button
              className="px-4 py-2 text-lg font-semibold text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600"
              onClick={handleDeleteConfirm}
            >
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

export default AccessoriesTable;
