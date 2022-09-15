import React from "react";
import "./app.css";
import { withBookstoreService } from "../hoc";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartPage, HomePage } from "../pages";
import ShopHeader from "../shop-header";


const App = () => {
  return (
   
    <main role="main" className="container">
    <BrowserRouter>
    <ShopHeader numItems={5} total={210}/>
    
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </BrowserRouter>
    </main>
   
  );
};

export default App;
