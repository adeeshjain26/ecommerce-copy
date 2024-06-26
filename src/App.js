// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';
import Routers from './routers/Routers';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
              <ToastContainer/>
              <Routers />
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
