import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import OrderDetailsHeader from "./OrderDetailsHeader";

const OrderDetails = () => {
  const location = useLocation();
  const { rowData } = location.state;

  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <main>
              <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                <OrderDetailsHeader />
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12">
                    <div className="p-6 space-y-6 bg-white border border-gray-200 rounded-sm shadow-lg">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Order ID
                            </label>
                            <input
                              type="text"
                              value={rowData.order_id}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              First Name
                            </label>
                            <input
                              type="text"
                              value={rowData.firstname}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Last Name
                            </label>
                            <input
                              type="text"
                              value={rowData.lastname}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Email
                            </label>
                            <input
                              type="text"
                              value={rowData.email}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Phone
                            </label>
                            <input
                              type="text"
                              value={rowData.phone}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Address
                            </label>
                            <input
                              type="text"
                              value={rowData.address}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              City
                            </label>
                            <input
                              type="text"
                              value={rowData.city}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Zip Code
                            </label>
                            <input
                              type="text"
                              value={rowData.zip_code}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Order Date
                            </label>
                            <input
                              type="text"
                              value={new Date(
                                rowData.order_date
                              ).toLocaleString()}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Payment Method
                            </label>
                            <input
                              type="text"
                              value={rowData.payment_method}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          {" "}
                          <div>
                            <label className="block font-medium text-gray-700">
                              Shipping Price
                            </label>
                            <input
                              type="text"
                              value={rowData.shipping_price}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Subtotal Price
                            </label>
                            <input
                              type="text"
                              value={rowData.sub_total_price}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Total Price
                            </label>
                            <input
                              type="text"
                              value={rowData.total_price}
                              readOnly
                              className="w-full p-2 m-3 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Status
                            </label>
                            <input
                              type="text"
                              value={
                                rowData.status === "TRUE"
                                  ? "Delivered"
                                  : "Pending"
                              }
                              readOnly
                              className={`w-full p-2 m-3 mt-1 border border-gray-300 rounded-md ${
                                rowData.status === "TRUE"
                                  ? "text-green-600"
                                  : "text-yellow-500"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <h2 className="mt-6 text-2xl font-semibold">Items</h2>
                      {rowData.items.map((item, index) => (
                        <div
                          key={index}
                          className="p-4 mt-4 border-2 border-gray-400 rounded"
                        >
                          <div>
                            <label className="block font-medium text-gray-700">
                              Product Name
                            </label>
                            <input
                              type="text"
                              value={item.product_name}
                              readOnly
                              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Product ID
                            </label>
                            <input
                              type="text"
                              value={item.product_id}
                              readOnly
                              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Category
                            </label>
                            <input
                              type="text"
                              value={item.category}
                              readOnly
                              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700">
                              Quantity
                            </label>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
