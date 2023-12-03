import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/market-place/footer";
import { useContext } from "react";
import CartContext from "../context/cart-context/cartContext";

function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  const {
    cartItems,
    addToCart,
    removeItem,
    setCartTotal,
    setCartSubTotal,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  // Replace the items fetched from localStorage with a dummy array
  const dummyItems = [
    {
      id: 1,
      title: "Dummy Product 1",
      image:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-8-1.jpg",
      category: "Dummy Category 1",
      price: 25,
      quantity: 2,
    },
    {
      id: 2,
      title: "Dummy Product 2",
      image:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-6-1.jpg",
      category: "Dummy Category 2",
      price: 30,
      quantity: 1,
    },
    {
      id: 3,
      title: "Dummy Product 2",
      image:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-6-1.jpg",
      category: "Dummy Category 2",
      price: 30,
      quantity: 1,
    },
    {
      id: 4,
      title: "Dummy Product 2",
      image:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-6-1.jpg",
      category: "Dummy Category 2",
      price: 30,
      quantity: 1,
    },
    {
      id: 5,
      title: "Dummy Product 1",
      image:
        "https://red-parts.react.themeforest.scompiler.ru/themes/blue/images/products/product-8-1.jpg",
      category: "Dummy Category 1",
      price: 25,
      quantity: 2,
    },
    // Add more dummy items as needed
  ];

  useEffect(() => {
    // Calculate total cost when cartItems change
    const calculateTotal = () => {
      let sum = 0;
      cartItems.forEach((cart) => {
        sum += cart.product.price * cart.quantity;
      });
      setTotal(sum);
      setCartSubTotal(sum);
    };

    calculateTotal(); // Calculate total initially
  }, [cartItems]);

  const increase = (index) => {
    incrementQuantity(index);
  };

  const decrease = (index) => {
    decrementQuantity(index);
  };

  const handleRemoveItem = (index) => {
    removeItem(index);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Sidebar />
        <div className="flex flex-col items-center justify-center relative h-[664px]">
          <h1 className="mb-8 text-4xl">Cart is Empty</h1>
          <div className="flex flex-col items-center">
            <Link
              to="/marketplace"
              className="inline-flex items-center px-4 py-2 font-semibold text-white uppercase bg-indigo-500 rounded-md text-md hover:bg-indigo-600"
            >
              <svg
                className="w-4 mr-2 text-gray-900 fill-current"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
        <div className="relative ml-16">
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <div className="relative ml-16 ">
        <div className="container mx-auto mt-16 mb-[188px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="col-span-2">
              <div className="max-w-5xl px-6 py-4 bg-white rounded md:shadow-lg ">
                <div className="max-w-5xl px-6 py-4 bg-white rounded-md">
                  <h1 className="pb-4 mb-10 text-4xl font-semibold">
                    Shopping Cart
                  </h1>
                  <h2 className="text-3xl font-semibold">
                    {cartItems.length} Items
                  </h2>
                </div>
                <div className="flex flex-wrap mt-10 mb-5">
                  <h3 className="w-2/5 text-sm font-semibold text-gray-600 uppercase ">
                    Product Details
                  </h3>

                  <h3 className="w-1/5 text-sm font-semibold text-center text-gray-600 uppercase">
                    Quantity
                  </h3>
                  <h3 className="w-1/5 text-sm font-semibold text-center text-gray-600 uppercase">
                    Price
                  </h3>
                  <h3 className="w-1/5 text-sm font-semibold text-center text-gray-600 uppercase">
                    Total
                  </h3>
                </div>
                <div
                  className="cart-items-container"
                  style={{ maxHeight: "600px", overflowY: "auto" }}
                >
                  {cartItems?.map((cart, i) => {
                    return (
                      <div
                        className="flex items-center justify-between px-6 py-5 hover:bg-gray-100 "
                        key={cart.id}
                      >
                        {" "}
                        <div className="flex w-2/5">
                          <div className="w-20">
                            <img
                              className="h-24"
                              src={cart?.product?.images[0]}
                              alt={cart?.product?.name}
                            />
                          </div>
                          <div className="flex flex-col justify-between flex-grow ml-4">
                            <span className="text-sm font-bold">
                              {cart?.product?.name}
                            </span>
                            <span className="text-xs text-red-500 capitalize">
                              {cart?.product?.category}
                            </span>
                            <div
                              className="text-xs font-semibold text-gray-500 cursor-pointer hover:text-red-500"
                              onClick={() => handleRemoveItem(i)}
                            >
                              Remove
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                          <svg
                            className="w-3 text-gray-600 cursor-pointer fill-current"
                            viewBox="0 0 448 512"
                            onClick={() => decrease(i)}
                          >
                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>

                          <input
                            className="w-8 mx-2 text-center border"
                            type="text"
                            value={cart?.quantity}
                            readOnly
                          />

                          <svg
                            className="w-3 text-gray-600 cursor-pointer fill-current"
                            onClick={() => increase(i)}
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>
                        </div>
                        <span className="w-1/5 text-sm font-semibold text-center">
                          ${cart?.product?.price}
                        </span>
                        <span className="w-1/5 text-sm font-semibold text-center">
                          ${(cart?.product?.price * cart?.quantity).toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="max-w-3xl px-6 py-4 mt-5 bg-white rounded md:shadow-lg">
                <h1 className="pb-4 text-4xl font-semibold">Order Summary</h1>
                <div className="flex justify-between mt-8">
                  <span className="text-sm font-semibold uppercase">
                    Items : {cartItems?.length}
                  </span>
                  <span className="text-sm font-semibold">
                    ${total?.toFixed(2)}
                  </span>
                </div>

                <div className="mt-8 border-t">
                  <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                    <span>Total cost</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Link
                    to="/checkout"
                    className="block w-full py-3 text-sm font-semibold text-center text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    to="/products"
                    className="block w-full py-2 mt-4 text-sm font-semibold text-center text-gray-900 hover:text-indigo-500"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ml-16 ">
        <Footer />
      </div>
    </>
  );
}

export default Cart;
