import React, { useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../../context/ProductContext';
import ProductDetailsDialog from '../dialogue/ProductDetailsDialog';
import { CartContext } from '../../context/CartContext';

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
  };


  return (
    <div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 mt-4 h-full">
          {filteredProducts.map(product => (
            <ProductCard  key={product.id} product={product} onClick={() => handleCardClick(product)} />
          ))}
        </div>
      ) : (
        <div className="mt-4 text-gray-600 text-center">No products found</div>
      )}
      {selectedProduct && (
        <ProductDetailsDialog
          isOpen={!!selectedProduct}
          product={selectedProduct}
          onClose={handleCloseDialog}
          addToCart={addToCart}          
        />
      )}
    </div>
  );
}

export default ProductList;
