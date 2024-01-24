import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Import your CSS file for Cart styling
import Header from './Header';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="product-details">
                {item.name && <div className="product-name">{item.name}</div>}
                {item.size && <div className="product-size">Size: {item.size}</div>}
                {/* Add other relevant details */}
                {item.price && <div className="product-price">${item.price}</div>}
                <button className="remove-button" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
