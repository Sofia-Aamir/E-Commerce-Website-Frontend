// DiscountPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import DiscountData from './DiscountData';
import './DiscountPage.css';
import Footer from './Footer';
import { useCart } from './CartContext';
import Header from './Header';

const DiscountPage = () => {
  const { discountId } = useParams();
  const discount = DiscountData.find((d) => d.id === parseInt(discountId, 10));

  const { addToCart } = useCart();

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <Header/>
    <div className="wrapper">
      <div className="discount-details-container">
        <h2>Discount Details</h2>
        {discount ? (
          <div className="discount-details-content">
            <div className="discount-details-info">
              <div className="left-content">
                <h3>{discount.name}</h3>
                <p>${discount.price}</p>
                <p>{discount.description}</p>
              </div>
              <img src={discount.image} alt={discount.name} className="discount-details-image" />
            </div>

            <div className="discount-details-sizes">
              <h3 className="discount-details-heading">Available Sizes:</h3>
              <div className="size-buttons">
                <button onClick={() => handleAddToCartClick({ ...discount, size: 'Small' })}   style={{ color: 'black'}}>Small</button>
                <button onClick={() => handleAddToCartClick({ ...discount, size: 'Medium' })} style={{ color: 'black'}}>Medium</button>
                <button onClick={() => handleAddToCartClick({ ...discount, size: 'Large' })} style={{ color: 'black'}}>Large</button>
                <button onClick={() => handleAddToCartClick({ ...discount, size: 'Extra Large' })} style={{ color: 'black'}}>Extra Large</button>
              </div>
            </div>
          </div>
        ) : (
          <p>No discount details available</p>
        )}
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default DiscountPage;
