import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaEye, FaSyncAlt } from "react-icons/fa";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const [orders, setOrders] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false); // Add a state variable to track data loading
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleViewOrderClick = (rowData) => {
    console.log("Edit clicked for row data:", rowData);

    navigate("/order-details", { state: { rowData: rowData } });
  };

  const handleUpdateStatusClick = (rowData) => {
    setShowModal(true);
    setSelectedOrder(rowData);
  };

  const handleUpdateStatusConfirm = async () => {
    const toastUpdate = toast.loading("Updating status...", {
      autoClose: false,
    });

    try {
      const response = await fetch("http://localhost:3000/changeorderstatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid: selectedOrder.order_id }),
      });

      if (!response.ok) {
        toast.update(toastUpdate, {
          type: toast.TYPE.ERROR,
          render: "Network response was not ok",
          autoClose: 5000,
          isLoading: false,
        });
        throw new Error("Network response was not ok.");
      }

      const responseBody = await response.json();
      console.log(responseBody);

      // Update order status in the state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.order_id === selectedOrder.order_id
            ? { ...order, status: order.status === "FALSE" ? "TRUE" : "FALSE" }
            : order
        )
      );

      toast.update(toastUpdate, {
        type: toast.TYPE.SUCCESS,
        render: "Status Updated!",
        autoClose: 3000,
        isLoading: false,
      });

      handleCloseModal();
    } catch (error) {
      toast.update(toastUpdate, {
        type: toast.TYPE.ERROR,
        render: error.message,
        autoClose: 5000,
        isLoading: false,
      });
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    const fetchOrdersHistory = async () => {
      try {
        const response = await fetch("http://localhost:3000/getorderhistory"); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        if (
          data &&
          data.message === "orderhistory found" &&
          data.data &&
          data.data.partsdata &&
          data.data.partsdata.length > 0
        ) {
          setOrders(data.data.partsdata);
          setDataLoaded(true);
          console.log("Orders data", orders);
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchOrdersHistory();
  }, []);

  console.log(orders);

  // Slice the data array to display only items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Update the condition for Next button to check against the total number of items
  const hasNextPage = indexOfLastItem < orders.length;

  // Update the condition for Previous button to check if currentPage is greater than 1
  const hasPreviousPage = currentPage > 1;

  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
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
                    <div className="font-semibold text-left">Order ID</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">
                      Customer Name
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Price</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">
                      Payment Method
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Status</div>
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
                {dataLoaded ? (
                  currentItems.map((order, index) => (
                    <tr key={index}>
                      <td className="p-2">
                        <div className="flex items-center">
                          <div className="text-slate-800 ">
                            {order.order_id}
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">
                          {order.firstname} {order.lastname}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-emerald-500">
                          {order.total_price} PKR
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center ">
                          {order.payment_method}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-semibold text-center">
                          <span
                            className={`inline-block px-2 py-1 rounded-full ${
                              order.status === "FALSE"
                                ? "bg-yellow-400 text-black"
                                : "bg-green-400 text-white"
                            }`}
                          >
                            {order.status === "FALSE" ? "Pending" : "Delivered"}
                          </span>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">{order.city}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-sky-500">
                          <button
                            onClick={() => handleViewOrderClick(order)}
                            className="px-3 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                          >
                            <FaEye /> {/* Icon for viewing order */}
                          </button>
                          <button
                            onClick={() => handleUpdateStatusClick(order)}
                            className="px-3 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                          >
                            <FaSyncAlt /> {/* Icon for updating status */}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="ml-[860px] pt-56 pb-56">
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
                )}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex justify-end mt-4">
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
            Update Status
            <AiOutlineCheckCircle className="ml-2 text-4xl text-green-500" />{" "}
          </h1>
          <p className="mt-4 text-xl text-center text-gray-700">
            Are you sure you want to update order status?
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <button
              className="px-4 py-2 text-lg font-semibold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600"
              onClick={handleUpdateStatusConfirm}
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

export default OrdersTable;
