import Icon from "../../assets/icon-home2.svg";
import { BsBoxSeam } from "react-icons/bs";

function DashboardCard02() {
  return (
    <div className="flex flex-col bg-white border rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 02" /> */}
          <button
            type="button"
            style={{
              color: "rgb(255, 244, 229)",
              backgroundColor: "rgb(254, 201, 15)",
            }}
            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
          >
            <BsBoxSeam />
          </button>
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">
          Product Insights
        </h2>
        <div className="mb-1 text-xs font-semibold uppercase text-slate-400">
          Products
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-slate-800">489</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
            -14%
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;
