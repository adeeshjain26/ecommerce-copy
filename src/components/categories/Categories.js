import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Categories = () => {
  const { handleFilterChange } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortOrder, setSortOrder] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const applyFilters = () => {
    // Ensure minPrice and maxPrice are parsed as numbers
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);
  
    // Create a copy of selectedCategories to avoid mutation issues
    const categories = selectedCategory ? [selectedCategory] : [];
  
    // Ensure sortOrder is a string or default to an empty string
    const order = sortOrder || "";
  
    // Call handleFilterChange with the correct parameters
    handleFilterChange({
      categories,
      priceRange: [min, max],
      sortOrder: order,
    });
  };
  

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md h-4">
      <div className="flex items-center">
        <div>
          <label className="font-bold mr-2">Category:</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border rounded"
          >
            <option value="">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Shoes">Shoes</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="font-bold mr-2">Price Range:</label>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="p-2 border rounded w-24 mr-2"
            min="500"
            max="5000"
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="p-2 border rounded w-24"
            min="500"
            max="5000"
          />
        </div>
        <div>
          <label className="font-bold mr-2">Sort by:</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="p-2 border rounded"
          >
            <option value="">None</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <button
        onClick={applyFilters}
        className="bg-slate-900 text-white p-2 rounded hover:bg-red-900"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Categories;
