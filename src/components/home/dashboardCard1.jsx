import Icon from "../../assets/icon-home1.svg";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { useState, useEffect } from "react";

function DashboardCard01() {
  const [totalOrders, setTotalOrders] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState([]);

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
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchOrdersHistory();
  }, []);

  useEffect(() => {
    const emails = totalOrders.map((customer) => customer.email);
    setTotalCustomers([...new Set(emails)]);
  }, [totalOrders]);

  return (
    <div className="flex flex-col bg-white border rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4 border-slate-200">
      <div className="px-5 pt-5 pb-3">
        <header className="flex items-start justify-between mb-2">
          <button
            type="button"
            style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
          >
            <MdOutlineSupervisorAccount />
          </button>
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">
          Customer Analytics
        </h2>
        <div className="mb-1 text-xs font-semibold uppercase text-slate-400">
          Customers
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-slate-800">
            {totalCustomers.length}
          </div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">
            +49%
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
