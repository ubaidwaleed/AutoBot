import Sidebar from "../components/Sidebar";
import AccessoriesHeader from "../components/add-accessories/AccessoriesHeader";
import AccessoriesTable from "../components/add-accessories/AccessoriesTable";

const AddAccessories = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />

          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <main>
              <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                <AccessoriesHeader />
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12">
                    <AccessoriesTable />
                  </div>{" "}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAccessories;
