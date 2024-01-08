import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Shop from "./pages/shop";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import Home from "./pages/home";
import AutoBot from "./pages/autoBot";
import Marketplace from "./pages/marketplace";
import SingleProduct from "./pages/single-product";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ShopAccessories from "./pages/shopAccessories";
import ShopParts from "./pages/shopParts";
import ShopInteriorExterior from "./pages/shopInteriorExterior";
import { CartContextProvider } from "./context/cart-context/cartContext";
import { useEffect } from "react";
import UpdatePassword from "./pages/update-password";
import ShopCarCareProducts from "./pages/shopCareCareProducts";
import Page404 from "./pages/page404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <CartContextProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />

        {token ? (
          <Route path={"/home"} element={<Home token={token} />} />
        ) : (
          <Route path="/home" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/marketplace" element={<Marketplace />} />
        ) : (
          <Route path="/marketplace" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/autobot" element={<AutoBot />} />
        ) : (
          <Route path="/autobot" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/shop" element={<Shop />} />
        ) : (
          <Route path="/shop" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/shop-accessories" element={<ShopAccessories />} />
        ) : (
          <Route path="/shop-accessories" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/shop-parts" element={<ShopParts />} />
        ) : (
          <Route path="/shop-parts" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/shop-carcareproducts"
            element={<ShopCarCareProducts />}
          />
        ) : (
          <Route path="/shop-carcareproduct" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/shop-interiorexterior"
            element={<ShopInteriorExterior />}
          />
        ) : (
          <Route path="/shop-interiorexterior" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/single-product" element={<SingleProduct />} />
        ) : (
          <Route path="/single-product" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/cart" element={<Cart />} />
        ) : (
          <Route path="/cart" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/checkout" element={<Checkout token={token} />} />
        ) : (
          <Route path="/checkout" element={<Page404 />} />
        )}
      </Routes>
    </CartContextProvider>
  );
}

export default App;
