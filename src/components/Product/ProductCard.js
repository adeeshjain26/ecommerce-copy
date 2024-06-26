import React from "react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product.id)}
      className="group block rounded-lg p-2 shadow-sm bg-white shadow-indigo-100 hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 max-w-xs"
    >
      <div className="w-full h-32 mb-2 overflow-hidden rounded-md">
        <img
          alt={product.name}
          src={product.image}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="mt-1">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-xl text-gray-900">{product.name}</h3>
          <p className="text-lg font-semibold text-gray-700">₹{product.price}</p>
        </div>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
