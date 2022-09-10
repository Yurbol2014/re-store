import React from "react";
import "./app.css";
import { withBookstoreService } from "../hoc";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartPage, HomePage } from "../pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
