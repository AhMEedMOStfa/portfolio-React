import React from "react";
import NavbarComponent from "./navbar";
import About from "./about";
import Counter from "./counter";
import Home from "./home";
import Products from "./shop/products/Products";
import Product from './shop/product/Product'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Components = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/product/:id" element={<Product/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Components;
