import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/admin";
import ProfilePage from "../pages/ProfilePage";
import ProductDetails from "../pages/ProductDetails";
import Header from "../components/Header";
import Example from "../components/Example"
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/header" element={<Header />} />

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/example" element={<Example/>}/>

      </Routes>
    </div>
  );
};

export default Routers;
