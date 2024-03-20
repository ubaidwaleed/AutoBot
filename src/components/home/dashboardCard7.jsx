import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";

function DashboardCard7() {
  const [totalOrders, setTotalOrders] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false); // Add a state variable to track data loading

  useEffect(() => {
    const fetchOrdersHistory = async () => {
      try {
        const response = await fetch("http://localhost:3000/getorderhistory");
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
          setTotalOrders(data.data.partsdata);
          setDataLoaded(true); // Update dataLoaded state to true after fetching data
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchOrdersHistory();
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-6">
      <header className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Latest Orders</h2>
      </header>
      {dataLoaded ? (
        <div className="p-3">
          <div>
            {/* <header className="p-2 text-xs font-semibold text-gray-500 uppercase rounded-sm bg-gray-50">
            Today
          </header> */}
            <ul className="my-1">
              {/* Mapping over ordersData array */}
              {totalOrders.slice(0, 6).map((order, index) => (
                <li className="flex px-2" key={index}>
                  <div className="my-2 mr-3 rounded-full w-9 h-9 shrink-0 bg-emerald-500">
                    <svg
                      className="fill-current w-9 h-9 text-emerald-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                    </svg>
                  </div>
                  <div className="flex items-center py-2 text-sm border-b border-gray-200 grow">
                    <div className="flex justify-between grow">
                      <div className="self-center">
                        <a
                          className="font-medium text-gray-800 hover:text-gray-900"
                          href="#0"
                        >
                          {order.firstname} {order.lastname}
                        </a>{" "}
                        {order.address}
                      </div>
                      <div className="self-start ml-2 shrink-0">
                        <span className="font-medium text-emerald-500">
                          +{order.total_price}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="ml-[380px] pt-40 pb-40">
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
    </div>
  );
}

export default DashboardCard7;
