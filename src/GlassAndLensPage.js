// GlassAndLensPage.js

import React from 'react';
import Glass1Image from './images/glass1.jpg'; // Replace with the actual path to your images
import Glass2Image from './images/glass2.jpg';
import Glass3Image from './images/glass3.jpg';
import Glass4Image from './images/glass4.jpg';
import { useCart } from './CartContext';
import Glass5Image from './images/glass5.jpg'; // Replace with the actual path to your images
import Glass6Image from './images/glass6.jpg';
import Glass7Image from './images/glass7.jpeg';
import Glass8Image from './images/glass8.jpg';
import './GlassAndLens.css';
import Header from './Header';


const GlassAndLensPage = () => {
    const { addToCart } = useCart();

    const handleAddToCartClick = (productName, productPrice) => {
      addToCart({ name: productName, price: productPrice });
    };
  

  return (
    <div>
        <Header/>
    <section className="glass-and-lens-page p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Glasses and Lens Page</h1>
            <p>Explore our stylish collection of glasses and lenses. Enhance your look with the latest trends.</p>
          </div>
        </div>

        <div className="row">
       
          <div className="col-md-3">
            <img src={Glass1Image} alt="Glass 1" className="img-fluid glass-image" />
            <h3>Glass 1</h3>
            <p>Description for Glass 1</p>
            <p>$20.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 1", 20.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>
          
      
          <div className="col-md-3">
            <img src={Glass2Image} alt="Glass 2" className="img-fluid glass-image" />
            <h3>Glass 2</h3>
            <p>Description for Glass 2</p>
            <p>$24.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 2", 24.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>
      

          <div className="col-md-3">
            <img src={Glass3Image} alt="Glass 3" className="img-fluid glass-image" />
            <h3>Glass 3</h3>
            <p>Description for Glass 3</p>
            <p>$19.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 3", 19.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass4Image} alt="Glass 4" className="img-fluid glass-image" />
            <h3>Glass 4</h3>
            <p>Description for Glass 4</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 4", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass5Image} alt="Glass 5" className="img-fluid glass-image" />
            <h3>Glass 5</h3>
            <p>Description for Glass 5</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 5", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass6Image} alt="Glass 6" className="img-fluid glass-image" />
            <h3>Glass 6</h3>
            <p>Description for Glass 6</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 6", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass7Image} alt="Glass 7" className="img-fluid glass-image" />
            <h3>Glass 7</h3>
            <p>Description for Glass 7</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 7", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass8Image} alt="Glass 8" className="img-fluid glass-image" />
            <h3>Glass 8</h3>
            <p>Description for Glass 8</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 8", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass4Image} alt="Glass 9" className="img-fluid glass-image" />
            <h3>Glass 9</h3>
            <p>Description for Glass 9</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 9", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass3Image} alt="Glass 10" className="img-fluid glass-image" />
            <h3>Glass 10</h3>
            <p>Description for Glass 10</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 10", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass2Image} alt="Glass 11" className="img-fluid glass-image" />
            <h3>Glass 11</h3>
            <p>Description for Glass 11</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 11", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass2Image} alt="Glass 12" className="img-fluid glass-image" />
            <h3>Glass 12</h3>
            <p>Description for Glass 12</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 12", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass1Image} alt="Glass 13" className="img-fluid glass-image" />
            <h3>Glass 13</h3>
            <p>Description for Glass 13</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 13", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass4Image} alt="Glass 4" className="img-fluid glass-image" />
            <h3>Glass 4</h3>
            <p>Description for Glass 4</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 4", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass4Image} alt="Glass 4" className="img-fluid glass-image" />
            <h3>Glass 4</h3>
            <p>Description for Glass 4</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 4", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-md-3">
            <img src={Glass4Image} alt="Glass 4" className="img-fluid glass-image" />
            <h3>Glass 4</h3>
            <p>Description for Glass 4</p>
            <p>$22.99</p>
            <button
              className="btn btn-primary red-button"
              onClick={() => handleAddToCartClick("Glass 4", 22.99)}
              style={{ color: 'black' , background:'orange' }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
   
    </section>
    </div>
  );
};

export default GlassAndLensPage;
