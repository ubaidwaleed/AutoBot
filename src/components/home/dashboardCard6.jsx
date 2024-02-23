import { BsPersonFill } from "react-icons/bs"; // Importing Person icon from React Icons

function DashboardCard6() {
  const customers = [
    {
      id: "0",
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      location: "Lahore",
      spent: "$2,890.66",
    },
    {
      id: "1",
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      location: "Karachi",
      spent: "$2,767.04",
    },
    {
      id: "2",
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      location: "Islamabad",
      spent: "$2,996.00",
    },
    {
      id: "3",
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      location: "Lahore",
      spent: "$1,220.66",
    },
    {
      id: "4",
      name: "Burak Long",
      email: "longburak@gmail.com",
      location: "Lahore",
      spent: "$1,890.66",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-6">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Top Customers</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">City</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-2 shrink-0 sm:mr-3">
                          <BsPersonFill className="w-8 h-8 text-blue-500" />{" "}
                          {/* Replaced <img> with Person icon */}
                        </div>
                        <div className="font-medium text-gray-800">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{customer.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-left text-green-500">
                        {customer.spent}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center text-md">
                        {customer.location}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard6;
