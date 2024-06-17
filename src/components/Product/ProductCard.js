import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="border p-4 bg-gray-200 rounded cursor-pointer" onClick={onClick}>
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4"/>
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.category}</p>
      <p className="font-bold">₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
