import { useState } from "react";
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
import AddAccessories from "./pages/addAccessories";
import AddCarCareProducts from "./pages/addCarCareProducts";
import AddParts from "./pages/addParts";
import Orders from "./pages/orders";
import AddPartForm from "./components/add-parts/AddPartForm";
import AddAccessoriesForm from "./components/add-accessories/AddAccessoriesForm";
import AddCarCareProductsForm from "./components/add-car-car-products/AddCarCareProductsForm";
import UpdatePartForm from "./components/add-parts/UpdatePartForm";
import UpdateAccessoryForm from "./components/add-accessories/UpdateAccessoryForm";
import UpdateCarCareForm from "./components/add-car-car-products/UpdateCarCareForm";
import OrderDetails from "./components/orders/OrderDetails";
import OrderDetailsCustomer from "./components/orders/OrderDetailsCustomer";

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
        {token ? (
          <Route path="/orders" element={<Orders token={token} />} />
        ) : (
          <Route path="/orders" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/order-details"
            element={<OrderDetails token={token} />}
          />
        ) : (
          <Route path="/order-details" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/my-order-details"
            element={<OrderDetailsCustomer token={token} />}
          />
        ) : (
          <Route path="/order-details" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/parts" element={<AddParts token={token} />} />
        ) : (
          <Route path="/parts" element={<Page404 />} />
        )}
        {token ? (
          <Route path="/add-part" element={<AddPartForm token={token} />} />
        ) : (
          <Route path="/add-part" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/update-part"
            element={<UpdatePartForm token={token} />}
          />
        ) : (
          <Route path="/update-part" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/accessories"
            element={<AddAccessories token={token} />}
          />
        ) : (
          <Route path="/accessories" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/add-accessories"
            element={<AddAccessoriesForm token={token} />}
          />
        ) : (
          <Route path="/add-accessories" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/update-accessory"
            element={<UpdateAccessoryForm token={token} />}
          />
        ) : (
          <Route path="/accessories" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/car-care-products"
            element={<AddCarCareProducts token={token} />}
          />
        ) : (
          <Route path="/car-care-products" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/add-car-care-products"
            element={<AddCarCareProductsForm token={token} />}
          />
        ) : (
          <Route path="/add-car-care-products" element={<Page404 />} />
        )}
        {token ? (
          <Route
            path="/update-car-care-product"
            element={<UpdateCarCareForm token={token} />}
          />
        ) : (
          <Route path="/update-car-care-products" element={<Page404 />} />
        )}
      </Routes>
    </CartContextProvider>
  );
}

export default App;
