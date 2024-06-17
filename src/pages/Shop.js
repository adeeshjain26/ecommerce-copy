// Shop.js
import React from "react";

import Categories from "../components/categories/Categories";
import ProductList from "../components/Product/ProductList";

const Shop = () => {

  return (
    <div className="flex flex-col h-full z-20">
 

    <div className="w-full bg-gray-200 p-2 fixed z-30">
      <Categories />
    </div>
    
    <div className="flex-grow p-2 h-full mt-10 overflow-y-auto">
    <ProductList/>
    </div>
  </div>
  
  );
};

export default Shop;
