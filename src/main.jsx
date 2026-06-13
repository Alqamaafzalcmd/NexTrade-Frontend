import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import HomePage from "./landing/home/HomePage";
import AboutPage from "./landing/about/AboutPage";
import PricingPage from "./landing/pricing/PricingPage";
import ProductPage from "./landing/product/ProductPage";
import SupportPage from "./landing/support/SupportPage";
import Signup from "./landing/users/Signup";
import Login from "./landing/users/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";
import NotFound from "./landing/NotFound";

// flash message with toaster
import { ToastContainer,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Flash from "./Flash";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar></Navbar>

    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />

    {/* <Flash></Flash> */}

    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

    <Footer></Footer>
  </BrowserRouter>,
);
