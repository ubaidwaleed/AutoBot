import DoughnutChart from "../../charts/doughnutChart";
import { useEffect, useState } from "react";

function DashboardCard9({ email }) {
  const [orders, setOrders] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false); // Add a state variable to track data loading

  useEffect(() => {
    async function fetchData() {
      try {
        // Make API calls
        const response = await fetch("http://localhost:3000/getorderhistory");
        const data = await response.json();
        const filteredOrders = data.data.partsdata.filter(
          (order) => order.email === email
        );
        const completedOrders = filteredOrders.filter(
          (order) => order.status === "TRUE"
        );
        const PendingOrders = filteredOrders.filter(
          (order) => order.status === "FALSE"
        );
        setCompleted(completedOrders.length);
        setPending(PendingOrders.length);

        setOrders(filteredOrders);

        setDataLoaded(true); // Update dataLoaded state to true after fetching data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  console.log(completed, pending);

  const chartData = {
    labels: ["Completed\u00A0\u00A0", "Pending\u00A0\u00A0"],
    datasets: [
      {
        label: "Orders Status",
        data: [completed, pending],
        backgroundColor: [
          "#10B981", // Green color for completed orders
          "#F59E0B", // Yellow color for pending orders
        ],
        hoverBackgroundColor: [
          "#047857", // Darker green on hover
          "#D97706", // Darker yellow on hover
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Order Status</h2>
      </header>
      {dataLoaded ? ( // Render the chart only when dataLoaded is true
        <DoughnutChart data={chartData} width={389} height={260} />
      ) : (
        <div className="ml-[260px] pt-24 pb-24">
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
      )}{" "}
    </div>
  );
}

export default DashboardCard9;
