import { useState } from "react";
import Sidebar from "../Sidebar";
import UpdatePartFormHeader from "./UpdatePartFormHeader";
import { useNavigate, useLocation } from "react-router-dom";

const UpdatePartForm = () => {
  // State variables to hold form data
  const navigate = useNavigate();
  const location = useLocation();
  const { rowData } = location.state;

  const [formData, setFormData] = useState({
    name: rowData.name,
    description: rowData.description,
    category: rowData.category,
    brand: rowData.brand,
    price: rowData.price,
    quantity: rowData.quantity,
    images: rowData.images.join(","),
    compatibility: rowData.compatibility.join(","),
    type: rowData.type,
    subcategory: rowData.subcategory,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Split the images string into an array
    const imagesArray = formData.images.split(",").map((image) => image.trim());
    const compatibilityArray = formData.compatibility
      .split(",")
      .map((car) => car.trim());

    // Update the formData with the images as an array
    const updatedFormData = {
      ...formData,
      images: imagesArray,
      compatibility: compatibilityArray,
    };

    const requestData = {
      part_id: rowData.part_id,
      updatedfields: updatedFormData,
    };

    console.log(JSON.stringify(requestData));

    try {
      const response = await fetch("http://localhost:3000/updateparts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to update parts");
      }

      navigate("/parts"); // Example redirect
    } catch (error) {
      console.error("Error updating parts:", error);
    }
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <main>
              <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                <UpdatePartFormHeader />
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12">
                    <form
                      onSubmit={handleSubmit}
                      className="p-6 space-y-6 bg-white border border-gray-200 rounded-sm shadow-lg"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full h-24 p-2 mt-1 border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="category"
                          className="block font-medium text-gray-700"
                        >
                          Category
                        </label>
                        <input
                          type="text"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="brand"
                          className="block font-medium text-gray-700"
                        >
                          Brand
                        </label>
                        <input
                          type="text"
                          id="brand"
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block font-medium text-gray-700"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="quantity"
                          className="block font-medium text-gray-700"
                        >
                          Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="images"
                          className="block font-medium text-gray-700"
                        >
                          Images (comma-separated URLs)
                        </label>
                        <textarea
                          type="text"
                          id="images"
                          name="images"
                          value={formData.images}
                          onChange={handleChange}
                          className="w-full h-24 p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="compatibility"
                          className="block font-medium text-gray-700"
                        >
                          Compatibility (comma-separated car names)
                        </label>
                        <textarea
                          type="text"
                          id="compatibility"
                          name="compatibility"
                          value={formData.compatibility}
                          onChange={handleChange}
                          className="w-full h-20 p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="type"
                          className="block font-medium text-gray-700"
                        >
                          Type
                        </label>
                        <input
                          type="text"
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subcategory"
                          className="block font-medium text-gray-700"
                        >
                          Subcategory
                        </label>
                        <input
                          type="text"
                          id="subcategory"
                          name="subcategory"
                          value={formData.subcategory}
                          onChange={handleChange}
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="px-6 py-3 text-2xl text-white bg-indigo-500 rounded-xl hover:bg-indigo-600"
                        >
                          Update +
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePartForm;
