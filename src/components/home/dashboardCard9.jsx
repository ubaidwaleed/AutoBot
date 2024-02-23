import DoughnutChart from "../../charts/doughnutChart";

function DashboardCard9() {
  const chartData = {
    labels: ["Completed\u00A0\u00A0", "Pending\u00A0\u00A0"],
    datasets: [
      {
        label: "Top Categories",
        data: [35, 30],
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

      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard9;
