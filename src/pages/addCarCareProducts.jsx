import Sidebar from "../components/Sidebar";
import CarCareProductsHeader from "../components/add-car-car-products/CarCareProductsHeader";
import CarCareProductsTable from "../components/add-car-car-products/CarCareProductsTable";

const AddCarCareProducts = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />

          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <main>
              <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                <CarCareProductsHeader />
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12">
                    <CarCareProductsTable />
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

export default AddCarCareProducts;
