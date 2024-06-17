import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cart');
      setCart(response.data);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  const saveCartItem = async (item) => {
    try {
      await axios.post('http://localhost:5000/cart', item, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      fetchCart();
    } catch (error) {
      console.error("Failed to save cart item:", error);
    }
  };

  const updateCartItem = async (itemId, updatedItem) => {
    try {
      await axios.put(`http://localhost:5000/cart/${itemId}`, updatedItem, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      fetchCart();
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const addToCart = async (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      await updateCartItem(existingItem.id, { ...existingItem, quantity: existingItem.quantity + quantity });
    } else {
      const newItem = { id: uuidv4(), product, quantity };
      await saveCartItem(newItem);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${itemId}`);
      fetchCart();
    } catch (error) {
      console.error("Failed to delete cart item:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
