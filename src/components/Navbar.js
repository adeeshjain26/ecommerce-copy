import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-slate-700 p-4 flex items-center justify-between z-50 h-12 ">
      <Link to="/" className="text-white text-lg font-bold">E Cart</Link>
      <div className="flex space-x-6">
        <Link to="/" className={`text-lg ${location.pathname === '/' ? 'text-yellow-500' : 'text-white'}`}>Home</Link>
        <Link to="/shop" className={`text-lg ${location.pathname === '/shop' ? 'text-yellow-500' : 'text-white'}`}>Shop</Link>
        <Link to="/about" className={`text-lg ${location.pathname === '/about' ? 'text-yellow-500' : 'text-white'}`}>About Us</Link>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="px-3 py-1 rounded" />
        <Link to="/cart">
          <FaShoppingCart className={`${location.pathname === '/cart' ? 'text-yellow-500' : 'text-white'} text-2xl`} />
        </Link>
        <Link to="/admin">
          <FaUser className={`${location.pathname === '/admin' ? 'text-yellow-500' : 'text-white'} text-2xl`} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
