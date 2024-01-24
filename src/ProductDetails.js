import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productData from './ProductData';
import './ProductDetails.css';
import Footer from './Footer';
import { useState } from 'react';
import { useCart } from './CartContext';
import Header from './Header';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData.find((p) => p.id === parseInt(productId, 10));
 
  const { addToCart } = useCart();

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <Header/>
    <div className="wrapper">
    <div className="product-details-container">
      <h2>Product Details</h2>
      {product ? (
        <div className="product-details-content">
        <div className="product-details-info">
  <div className="left-content">
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <p>{product.description}</p>
  </div>
  <img src={product.image} alt={product.name} className="product-details-image" />
</div>
        

          <div className="product-details-sizes">
            <h3 className="product-details-heading">Available Sizes:</h3>
            <div className="size-buttons">
            <button onClick={() => handleAddToCartClick({ ...product, size: 'Small' })}  style={{ color: 'black' }}>Small</button>
      <button onClick={() => handleAddToCartClick({ ...product, size: 'Medium' })}  style={{ color: 'black' }}>Medium</button>
      <button onClick={() => handleAddToCartClick({ ...product, size: 'Large' })}  style={{ color: 'black' }}>Large</button>
      <button onClick={() => handleAddToCartClick({ ...product, size: 'Extra Large' })}  style={{ color: 'black' }}>Extra Large</button>

            </div>
          </div>
        </div>
      ) : (
        <p>No product details available</p>
      )}
    </div>
    <Footer/>
    </div>
    </div>
  );
};

export default ProductDetails;
