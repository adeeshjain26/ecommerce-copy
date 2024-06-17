import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link , useLocation} from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="sticky top-0 bg-slate-700 p-4 flex items-center justify-between z-50 h-3">
      <Link to="/" className="text-white text-lg font-bold">E Cart</Link>
      <div className="flex space-x-4">
      <Link to="/" className={`text-white ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>Home</Link>
      <Link to="/shop" className={`text-white ${location.pathname === '/shop' ? 'text-yell' : ''}`}>Shop</Link>
      <Link to="/about" className={`text-white ${location.pathname === '/about' ? 'text-yell' : ''}`}>About Us</Link>
    </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="px-2 py-1 rounded" />
        <Link to="/cart"><FaShoppingCart className="text-white" /></Link>
        <Link to="/admin"><FaUser className="text-white" /></Link>
      </div>
    </nav>
  );
}

export default Navbar;
