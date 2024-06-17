import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast';

const ProductDetailsDialog = ({ isOpen, product, onClose, addToCart }) => {
  const navigate = useNavigate();
  const [toast, setToast] = useState({ isVisible: false, message: '' });

  if (!isOpen) return null;

  const handleSeeDetails = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddtoCart = () => {
    addToCart(product);
   
    setToast({ isVisible: true, message: 'Item added to cart successfully!' });
    setTimeout(() => {
      setToast({ isVisible: false, message: '' });
    }, 3000);
    onClose();
  };

  return (
    <>
      {toast.isVisible && <Toast message={toast.message} onClose={() => setToast({ isVisible: false, message: '' })} />}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
          <button 
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
            onClick={onClose}
          >
            &#10005;
          </button>
          <div className="text-lg font-semibold mb-4">{product.name}</div>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <div className="text-gray-700">{product.description}</div>
          <div className="mt-4">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div className="mt-2">
            <span className="font-semibold">Price:</span> ₹{product.price}
          </div>
          <div className="mt-6 flex justify-between">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleAddtoCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={handleSeeDetails}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsDialog;
