import Icon from "../../assets/icon-home3.svg";
import { FiBarChart } from "react-icons/fi";
import { useState, useEffect } from "react";

function DashboardCard03() {
  const [totalSales, setTotalSales] = useState(0);

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
          // Calculate total sales
          const sum = data.data.partsdata.reduce(
            (total, order) => total + order.total_price,
            0
          );
          setTotalSales(sum);
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchOrdersHistory();
  }, []);

  return (
    <div className="flex flex-col bg-white border rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 03" /> */}
          <button
            type="button"
            style={{
              color: "rgb(228, 106, 118)",
              backgroundColor: "rgb(255, 244, 229)",
            }}
            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
          >
            <FiBarChart />
          </button>
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">
          Sales Overview
        </h2>
        <div className="mb-1 text-xs font-semibold uppercase text-slate-400">
          Sales
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-slate-800">
            PKR {totalSales.toFixed(2)}
          </div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">
            +49%
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard03;
