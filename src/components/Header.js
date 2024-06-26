import React, { useContext, useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const location = useLocation();
  const { handleFilterChange } = useContext(ProductContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    handleFilterChange({ searchTerm: e.target.value });
  };

  return (
    <header className="bg-gunmetal sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Title */}
          <div className="text-timberwolf text-2xl font-bold">E-Cart</div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            {isSidebarOpen ? (
              <FaTimes
                className="text-timberwolf text-2xl cursor-pointer"
                onClick={toggleSidebar}
              />
            ) : (
              <FaBars
                className="text-timberwolf text-2xl cursor-pointer"
                onClick={toggleSidebar}
              />
            )}
          </div>

          {/* Sidebar Content */}
          <div
            className={`fixed top-0 right-0 w-64 bg-white h-screen z-50 transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } shadow-lg`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full px-3 py-1 rounded"
              />
              <FaTimes
                className="text-gray-700 text-2xl cursor-pointer ml-2"
                onClick={toggleSidebar}
              />
            </div>
            <nav className="p-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to="/"
                    className={`text-lg ${
                      location.pathname === "/"
                        ? "text-yellow-500"
                        : "text-gray-700"
                    }`}
                    onClick={toggleSidebar}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={`text-lg ${
                      location.pathname === "/shop"
                        ? "text-yellow-500"
                        : "text-gray-700"
                    }`}
                    onClick={toggleSidebar}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`text-lg ${
                      location.pathname === "/about"
                        ? "text-yellow-500"
                        : "text-gray-700"
                    }`}
                    onClick={toggleSidebar}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className={`text-lg ${
                      location.pathname === "/cart"
                        ? "text-yellow-500"
                        : "text-gray-700"
                    }`}
                    onClick={toggleSidebar}
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className={`text-lg ${
                      location.pathname === "/admin"
                        ? "text-yellow-500"
                        : "text-gray-700"
                    }`}
                    onClick={toggleSidebar}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-12 text-timberwolf text-2xl font-bold">
            <Link
              to="/"
              className={`text-lg ${
                location.pathname === "/"
                  ? "text-yellow-500"
                  : "text-timberwolf"
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-lg ${
                location.pathname === "/shop"
                  ? "text-yellow-500"
                  : "text-timberwolf"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`text-lg ${
                location.pathname === "/about"
                  ? "text-yellow-500"
                  : "text-timberwolf"
              }`}
            >
              About Us
            </Link>
          </div>

          {/* Search Bar, Cart, and Profile on Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-3 py-1 rounded"
            />
            <Link to="/cart" className="text-timberwolf">
              <FaShoppingCart className="text-2xl" />
            </Link>
            <Link to="/admin" className="text-timberwolf">
              <FaUser className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
