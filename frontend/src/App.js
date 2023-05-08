import { BrowserRouter, Routes, Route } from "react-router-dom"; /* 多個分頁 */
import Home from "./HomePage/Home";
import Product from "./ProductPage/Product";

import Contact from "./ContactPage/Contact";
import Login from "./LoginPage/Login";
import Register from "./RegisterPage/Register";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Muti-Page*/}
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>

            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
