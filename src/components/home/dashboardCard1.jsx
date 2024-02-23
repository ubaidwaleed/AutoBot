import Icon from "../../assets/icon-home1.svg";
import { MdOutlineSupervisorAccount } from "react-icons/md";

function DashboardCard01() {
  return (
    <div className="flex flex-col bg-white border rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4 border-slate-200">
      <div className="px-5 pt-5 pb-3">
        <header className="flex items-start justify-between mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
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
          <div className="mr-2 text-3xl font-bold text-slate-800">24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">
            +49%
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
