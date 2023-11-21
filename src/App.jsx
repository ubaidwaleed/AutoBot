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

function App() {
  return (
    // <div className="flex">
    //   <Navbar />
    //   <Sidebar />
    // </div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/autobot" element={<AutoBot />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/single-product" element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
