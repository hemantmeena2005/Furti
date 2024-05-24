import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Cart from "./components/Cart"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import BlogDetail from "./pages/BlogDetail";
import ShopDetail from "./pages/ShopDetail";
import productsData from "./data/prodata"
import Checkout from "./pages/Checkout"
import Complete from "./pages/Complete"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopDetail products={productsData} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path='/cart' element={<Cart  />} />
          <Route path="/checkout" element={<Checkout/>}  />
          <Route path="/complete" element={<Complete/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
