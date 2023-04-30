import { BrowserRouter, Routes, Route } from "react-router-dom"; /* 多個分頁 */
import React, { useEffect, useState } from "react";
import Home from "./HomePage/Home";
import Product from "./ProductPage/Product";
import About from "./AboutPage/About";
import Contact from "./ContactPage/Contact";
import Login from "./LoginPage/Login";
import Register from "./RegisterPage/Register";

function App() {
  return (
    <>
      {/* Muti-Page*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
