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
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {token ? <Route path={"/home"} element={<Home token={token} />} /> : ""}
        {token ? <Route path="/marketplace" element={<Marketplace />} /> : ""}
        {token ? <Route path="/autobot" element={<AutoBot />} /> : ""}
        {token ? <Route path="/shop" element={<Shop />} /> : ""}
        {token ? (
          <Route path="/shop-accessories" element={<ShopAccessories />} />
        ) : (
          ""
        )}
        {token ? <Route path="/shop-parts" element={<ShopParts />} /> : ""}
        {token ? (
          <Route
            path="/shop-interiorexterior"
            element={<ShopInteriorExterior />}
          />
        ) : (
          ""
        )}
        {token ? (
          <Route path="/single-product" element={<SingleProduct />} />
        ) : (
          ""
        )}
        {token ? <Route path="/cart" element={<Cart />} /> : ""}
        {token ? (
          <Route path="/checkout" element={<Checkout token={token} />} />
        ) : (
          ""
        )}
      </Routes>
    </CartContextProvider>
  );
}

export default App;
