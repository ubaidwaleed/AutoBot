import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/market-place/footer";

const products = [
  {
    id: 1,
    name: "Nike Air Max Pro 8888 - Super Light",
    size: "42EU - 8.5US",
    price: 138.99,
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Nike Air Max Pro 8888 - Super Light",
    size: "42EU - 8.5US",
    price: 138.99,
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Nike Air Max Pro 8888 - Super Light",
    size: "42EU - 8.5US",
    price: 138.99,
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Nike Air Max Pro 8888 - Super Light",
    size: "42EU - 8.5US",
    price: 138.99,
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Nike Air Max Pro 8888 - Super Light",
    size: "42EU - 8.5US",
    price: 138.99,
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  // Add more product items as needed...
];

const Checkout = () => {
  return (
    <>
      {" "}
      <Sidebar />
      <div className="relative mb-16 ml-16">
        {" "}
        {/* <div className="flex flex-col items-center py-4 bg-white border-b sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a href="#" className="text-2xl font-bold text-gray-800">
            sneekpeeks
          </a>
          <div className="py-2 mt-4 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div className="relative">
              <ul className="relative flex items-center justify-between w-full space-x-2 sm:space-x-4">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-emerald-200 text-emerald-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span className="font-semibold text-gray-900">Shop</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-600 rounded-full ring ring-gray-600 ring-offset-2"
                    href="#"
                  >
                    2
                  </a>
                  <span className="font-semibold text-gray-900">Shipping</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"
                    href="#"
                  >
                    3
                  </a>
                  <span className="font-semibold text-gray-500">Payment</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="grid mt-16 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items. And select a suitable Payment method.
            </p>
            <div
              className="px-2 py-4 mt-8 space-y-3 bg-white border rounded-lg sm:px-6"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              {/* Map over the products array */}
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col bg-white rounded-lg sm:flex-row"
                >
                  <img
                    className="object-cover object-center h-24 m-2 border rounded-md w-28"
                    src={product.image}
                    alt=""
                  />
                  <div className="flex flex-col w-full px-4 py-4">
                    <span className="font-semibold">{product.name}</span>
                    <span className="float-right text-gray-400">
                      {product.size}
                    </span>
                    <p className="text-lg font-bold">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg font-medium">Payment Methods</p>
            <form className="grid gap-6 mt-5">
              <div className="relative">
                <input
                  className="hidden peer"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 right-4 top-1/2"></span>
                <label
                  className="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                  for="radio_1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    id="delivery-van"
                    className="object-contain w-14"
                  >
                    <g data-name="Car delivery">
                      <path fill="#0075f6" d="M31 17h7.82l2.27 5H31v-5z"></path>
                      <path
                        fill="#0075f6"
                        d="M45 29a1 1 0 0 1 0-2h2a2 2 0 0 0-1.23-1.5L42 24H30a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7.91c-.42-.91-.77-2-2.2-2H3a2 2 0 0 0-2 2v12h2a1 1 0 0 1 0 2H1v4a2 2 0 0 0 2 2h1a6 6 0 0 1 12 0h13a6 6 0 0 1 12 0h4a2 2 0 0 0 2-2v-4Zm-29.3-6.29C13.56 24.86 13.55 25 13 25a1 1 0 0 1-.71-1.71l.3-.29H8a1 1 0 0 1 0-2h4.59l-.3-.29a1 1 0 0 1 1.42-1.42l2 2a1 1 0 0 1-.01 1.42Z"
                      ></path>
                      <circle cx="35" cy="35" r="4" fill="#3f3f44"></circle>
                      <circle cx="10" cy="35" r="4" fill="#3f3f44"></circle>
                      <path
                        fill="#3f3f44"
                        d="M22 11H10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zM6 11H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
                      ></path>
                    </g>
                  </svg>
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">COD</span>
                    <p className="text-sm leading-6 text-slate-500">
                      Cash on delivery
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="hidden peer"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 right-4 top-1/2"></span>
                <label
                  className="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                  for="radio_2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 347"
                    viewBox="0 0 51.88 49.1"
                    id="card-payment"
                    className="object-contain w-14"
                  >
                    <path
                      fill="#eb5e28"
                      d="m49.69 18.09-9-10.23-32.34 28.5 9 10.23a3.11 3.11 0 0 0 4.39.28l27.68-24.39a3.11 3.11 0 0 0 .27-4.39Zm-14.5 11.8L23.41 40.31a1.45 1.45 0 0 1-1 .38 1.48 1.48 0 0 1-1.12-.5 1.5 1.5 0 0 1 .12-2.12l11.79-10.4a1.505 1.505 0 1 1 2 2.25Zm-.51-28.84a3.13 3.13 0 0 0-4.4-.28L2.61 25.16a3.11 3.11 0 0 0-.28 4.39l2 2.3 32.34-28.5Z"
                    ></path>
                    <path
                      fill="#403d39"
                      d="M50.38 49.1H1.5a1.5 1.5 0 1 1 0-3h48.88a1.5 1.5 0 1 1 0 3Z"
                    ></path>
                  </svg>

                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Online payment</span>
                    <p className="text-sm leading-6 text-slate-500">
                      Payment via Card
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>
          <div className="px-4 pt-8 mt-10 bg-gray-50 lg:mt-0">
            <p className="text-xl font-medium">Shipping Details</p>
            <p className="text-gray-400">
              Complete your order by providing your shipping details.
            </p>
            <div className="">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label
                    for="firstName"
                    className="block mt-4 mb-2 text-sm font-medium"
                  >
                    First name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your first name here"
                    />
                    <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    for="lastName"
                    className="block mt-4 mb-2 text-sm font-medium"
                  >
                    Last name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your last name here"
                    />
                    <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <label
                for="address"
                className="block mt-4 mb-2 text-sm font-medium"
              >
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your address here"
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label
                    for="city"
                    className="block mt-4 mb-2 text-sm font-medium"
                  >
                    City
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your city here"
                    />
                    <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <label
                    for="zipCode"
                    className="block mt-4 mb-2 text-sm font-medium"
                  >
                    Zip Code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your zip code here"
                    />
                    <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <label
                for="email"
                className="block mt-4 mb-2 text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                for="phone"
                className="block mt-4 mb-2 text-sm font-medium"
              >
                Phone
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your phone number here"
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>

              {/* <label
              for="card-no"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative flex-shrink-0 w-7/12">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full px-2 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-full px-2 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                className="flex-shrink-0 w-1/6 px-2 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              for="billing-address"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                  <img
                    className="object-contain w-4 h-4"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div> */}

              <div className="py-2 mt-6 border-t border-b">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
              </div>
            </div>
            <button className="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div className="relative ml-16 ">
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
