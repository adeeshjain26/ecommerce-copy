// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';
import Routers from './routers/Routers';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (

    <ProductProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <ToastContainer/>
            <Routers />
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
