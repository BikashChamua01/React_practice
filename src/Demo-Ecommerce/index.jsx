import React from "react";
import App from "./App";
import ProductContextProvider from "./contextProviders/ProductContext";
import "./index.css";
const DemoEcommerce = () => {
  return (
    <div>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </div>
  );
};

export default DemoEcommerce;
