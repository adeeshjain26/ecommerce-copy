import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [500, 5000],
    sortOrder: "",
    searchTerm: "", // Add search term filter
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const applyFilters = () => {
    let filtered = products;

    if (filters.categories.length) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );
    }

    if (filters.sortOrder === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === "highToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    if (filters.searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const addProduct = async (newProduct) => {
    try {
      newProduct.id = uuidv4(); // Generate a new ID for the product
      const response = await axios.post(
        "http://localhost:5000/products",
        newProduct
      );
      const updatedProducts = [...products, response.data];
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const editProduct = async (productId, updatedProduct) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/products/${productId}`,
        updatedProduct
      );
      const updatedProducts = products.map((product) =>
        product.id === productId ? response.data : product
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const removeProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        handleFilterChange,
        addProduct,
        editProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
