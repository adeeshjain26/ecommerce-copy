import React, { useState, useContext, Suspense, lazy, useEffect, useRef } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = lazy(() => import('./ProductCard'));

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState(30);
  const observerRef = useRef(null);
  const navigate = useNavigate();

  const handleCardClick = (product) => {
    console.log('Clicked Product ID:', product.id);
    navigate(`/product/${product.id}`);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-timberwolf">
      {filteredProducts.length > 0 ? (
        <>
          <div className="flex-grow">
            <Suspense fallback={<div className='text-xl text-center text-gray-900'>Loading...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-4 flex-grow">
                {filteredProducts.slice(0, visibleProducts).map(product => (
                  <ProductCard key={product.id} product={product} onClick={() => handleCardClick(product)} />
                ))}
              </div>
            </Suspense>
          </div>
          <div ref={observerRef} className="text-xl text-center text-gray-900 mt-4">
            {visibleProducts < filteredProducts.length && 'Loading...'}
          </div>
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center mt-4 text-gray-600 text-center">
          No products found
        </div>
      )}
    </div>
  );
};

export default ProductList;
