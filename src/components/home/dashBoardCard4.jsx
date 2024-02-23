import DoughnutChart from "../../charts/doughnutChart";

function DashboardCard4() {
  const chartData = {
    labels: [
      "Parts\u00A0\u00A0",
      "Accessories\u00A0\u00A0",
      "Care\u00A0Products\u00A0\u00A0",
    ],
    datasets: [
      {
        label: "Top Categories",
        data: [35, 30, 35],
        backgroundColor: [
          "#34D399", // Green color for parts
          "#3B82F6", // Blue color for accessories
          "#F59E0B", // Yellow color for care products
        ],
        hoverBackgroundColor: [
          "#059669", // Darker green on hover
          "#2563EB", // Darker blue on hover
          "#D97706", // Darker yellow on hover
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Top Categories</h2>
      </header>

      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard4;
