import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Checkout2 from "./pages/Checkout2";
import Checkout3 from "./pages/Checkout3";
import Checkout4 from "./pages/Checkout4";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Searching from "./components/Searching";
import Hero from "./components/Hero";
import PopUpPrivacyPolicy from "./components/PopUpPrivacyPolicy";
import AsideCheckout from "./components/AsideCheckout";
import ArticleCheckout from "./components/ArticleCheckout";
import DescriptionProduct from "./pages/DescriptionProduct";
import Card, { Card2 } from "./components/Card";
import Category from "./pages/Category";
import { useEffect, useState } from "react";
import AdminDashBoard from "./pages/AdminDashBoard";
import Shop from "./pages/Shop";
import Loading from "./components/Loading";
import ConfirmacionPedido from "./pages/ConfirmacionPedido";
import { useDispatch } from "react-redux";
import { getPokemons } from "./redux/reducers/thunks";
import Paginacion from "./utils/Paginacion";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ESTAS RUTAS ESTAN PARA LA BARRA DE NAVEGACION, TIENEN QUE SER MODIFICADAS */}
        <Route path="/laptops" element={<Home />} />
        <Route path="/desktop" element={<Category />} />
        <Route path="/tablets" element={<Home />} />
        <Route path="/accessory" element={<Home />} />
        <Route path="/faqs" element={<Home />} />
        {/* ---------------------------------------------- */}
        {/* Seccion par el perfil del usuario*/}

        <Route path="profile" element={<Profile />} />

        {/* ---------------------------------------------- */}

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/DescriptionProduct" element={<DescriptionProduct />} />
        <Route path="/checkout3" element={<Checkout3 />} />
        <Route path="/checkout4" element={<Checkout4 />} />
        <Route path="/category" element={<Category />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/confirm" element={<ConfirmacionPedido />} />
        <Route path="/admin/dashboard" element={<AdminDashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
