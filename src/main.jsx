import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import HomePage from './landing/home/HomePage'
import AboutPage from './landing/about/AboutPage'
import PricingPage from './landing/pricing/PricingPage'
import ProductPage from './landing/product/ProductPage'
import SupportPage from './landing/support/SupportPage'
import Signup from './landing/users/Signup'
import Login from './landing/users/Login'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./landing/Navbar"
import Footer from "./landing/Footer"
import NotFound from "./landing/NotFound"

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Navbar></Navbar>

    <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/signup" element={<Signup />} ></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/about" element={<AboutPage />} ></Route>
      <Route path="/product" element={<ProductPage />} ></Route>
      <Route path="/pricing" element={<PricingPage />} ></Route>
      <Route path="/support" element={<SupportPage />} ></Route>
      <Route path="*" element={<NotFound />} ></Route>
    </Routes>

    <Footer></Footer>

  </BrowserRouter>



)
