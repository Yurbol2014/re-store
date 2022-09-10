import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Routes, BrowserRouter } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";

import store from "./store";
//import HomePage from "./components/pages/home-page";
//import CartPage from "./components/pages/cart-page";

const bookstoreService = new BookstoreService();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <App />
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);
