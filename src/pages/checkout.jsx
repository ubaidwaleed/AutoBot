import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/market-place/footer";
import { useContext } from "react";
import CartContext from "../context/cart-context/cartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { GiConfirmed } from "react-icons/gi";

const Checkout = ({ token }) => {
  const { cartSubTotal, cartItems, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [shippingPrice, setShippingPrice] = useState(300);

  const [shippingAddress, setShippingAddress] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zip_code: "",
    email: "",
    phone: "",
  });

  console.log(cartItems);

  useEffect(() => {
    setShippingAddress({
      firstname,
      lastname,
      address,
      city,
      zip_code,
      email,
      phone,
    });
  }, [firstname, lastname, address, city, zip_code, email, phone]);

  const itemsArray = cartItems.map((item) => {
    let productId;
    if (item.product.accessory_id) {
      productId = item.product.accessory_id;
    } else if (item.product.part_id) {
      productId = item.product.part_id;
    }

    return {
      product_id: productId,
      category: item.product.category,
      product_name: item.product.name,
      quantity: item.quantity,
    };
  });

  const orderDetails = {
    items: itemsArray,
    sub_total_price: cartSubTotal,
    shipping_price: shippingPrice,
    total_price: cartSubTotal + shippingPrice,
    user_id: token.user.id,
    payment_method: "COD",
  };

  const payload = {
    order: orderDetails,
    shipping_address: shippingAddress,
  };

  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    address: false,
    city: false,
    zip_code: false,
    email: false,
    phone: false,
  });

  const validateForm = () => {
    const errors = {
      firstname: firstname === "",
      lastname: lastname === "",
      address: address === "",
      city: city === "",
      zip_code: zip_code === "",
      email: email === "",
      phone: phone === "",
    };
    setFormErrors(errors);
    return Object.values(errors).some((error) => error);
  };

  const handlePlaceOrder = () => {
    // const isEmptyField = Object.values(shippingAddress).some(
    //   (field) => field === ""
    // );

    // if (isEmptyField) {
    //   // If any field is empty, prevent placing the order
    //   alert("Please fill in all fields before placing the order.");
    //   return;
    // }

    const hasErrors = validateForm();

    if (!hasErrors) {
      // Mock URL for the API endpoint
      const apiUrl = "http://localhost:3000/createorder";

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send your payload here
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Handle the response from the server
          console.log("Order:", payload);

          console.log("Order placed:", data);
          setShowModal(true);
        })
        .catch((error) => {
          // Handle errors
          console.error("There was a problem placing the order:", error);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
  };

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
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-col bg-white rounded-lg sm:flex-row"
                >
                  <img
                    className="object-cover object-center h-24 m-2 border rounded-md w-28"
                    src={item.product.images[0]}
                    alt=""
                  />
                  <div className="flex flex-col w-full px-4 py-4">
                    <span className="font-semibold">{item.product.name}</span>
                    <span className="float-right text-gray-400">
                      {item.product.brand}
                    </span>
                    <p className="font-bold text-md">${item.product.price}</p>
                    {/* Display "Quanty" label and "10" below quantity */}
                  </div>

                  <div className="text-right">
                    <span className="float-right text-gray-400">
                      {" "}
                      x {item.quantity}
                    </span>
                    <span className="float-right text-lg font-bold">
                      {"$" + item.product.price * item.quantity}
                    </span>
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
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
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
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
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
                      value={zip_code}
                      onChange={(e) => setZipCode(e.target.value)}
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
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  <p className="font-semibold text-gray-900">${cartSubTotal}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">
                    To be calculated upon delivery
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${cartSubTotal}
                </p>
              </div>
            </div>
            <div className="mt-4 text-red-500">
              {Object.keys(formErrors).some((key) => formErrors[key]) && (
                <p>Please fill in all fields before placing the order.</p>
              )}
            </div>
            <button
              className="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div className="relative ml-16 ">
        <Footer />
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        className="fixed top-0 left-0 flex items-center justify-center w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="p-12 bg-white rounded-lg shadow-2xl">
          <h1 className="flex items-center justify-center text-4xl font-bold">
            Order Confirmed
            <GiConfirmed className="ml-2 text-4xl text-green-500" />{" "}
            {/* Change icon color to green */}
          </h1>
          <div className="mt-4">
            <Link
              to="/marketplace"
              className="block w-full px-4 py-2 mt-8 text-center text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleCloseModal}
            >
              Close
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Checkout;
