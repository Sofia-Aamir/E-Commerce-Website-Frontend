// Home.js

import React from "react";
import BannerBackground from "./images/home-banner-background.png";
import BannerImage from "./images/home-banner-image.png";
import Header from './Header';
import { FiArrowRight } from "react-icons/fi";
import './Home.css';
import FeaturedProduct1 from "./images/featuredproduct1.jpg";
import FeaturedProduct2 from "./images/featuredproduct2.jpeg";
import FeaturedProduct3 from "./images/featuredproduct3.jpeg";
import FeaturedProduct4 from "./images/featuredproduct4.jpeg";
import DiscountImage from './images/discout.jpg';
import Customer1 from './images/customer1.jpeg';
import Customer2 from './images/customer2.jpeg';
import Customer3 from './images/customer3.jpeg';
import Customer4 from './images/customer4.jpeg';
import Footer from "./Footer";
import { useCart } from './CartContext';
import { Link } from "react-router-dom";
import productData from './ProductData';
import DiscountData from "./DiscountData";
import { useProductContext } from './ProductContext';


const Home = () => {
  const { products, setProducts } = useProductContext();
 
  const { addToCart } = useCart();

  

  const handleAddToCartClick = (productName, price) => {
    addToCart({ name: productName, price });
  };
  const handleDeleteProductClick = (index) => {
    // Create a copy of the products array
    const updatedProducts = [...products];
  
    // Remove the product at the specified index
    updatedProducts.splice(index, 1);
  
    // Update the state with the new array without the deleted product
    setProducts(updatedProducts);
  };
  

  return (
    <div className="home-container">
      <Header />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Fashion Boutique - Elevate Your Wardrobe
          </h1>
          <p className="primary-text">
            Welcome to FashionFusionBoutique, your ultimate destination for style and elegance.
          </p>
          <Link to="/checkout" className="secondary-button" >
      Order Now <FiArrowRight />
    </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
          </div>

          <div className="row">
      <div className="col-md-3">
        <img src={FeaturedProduct1} alt="Featured Product 1" className="img-fluid" />
        <h3>Men's Yellow hoodie</h3>
        <p>$49.99</p>
        <button
          className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}
          onClick={() => handleAddToCartClick("Men's Yellow hoodie", 49.99)} // Pass the product name
        >
          Add to Cart
        </button>
      </div>
            <div className="col-md-3">
              <img src={FeaturedProduct2} alt="Featured Product 2" className="img-fluid" />
              <h3>Men's sweatshirt</h3>
              <p>$49.99</p>
              <button
          className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}
          onClick={() => handleAddToCartClick("Men's Yellow hoodie",49.99)} // Pass the product name
        >
          Add to Cart
        </button>
            </div>
            <div className="col-md-3">
              <img src={FeaturedProduct3} alt="Featured Product 3" className="img-fluid" />
              <h3>Men's sweatshirt</h3>
              <p>$49.99</p>
              <button
          className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}
          onClick={() => handleAddToCartClick("Men's Yellow hoodie",49.99)} // Pass the product name
        >
          Add to Cart
        </button>
            </div>

            <div className="col-md-3">
              <img src={FeaturedProduct4} alt="Featured Product 3" className="img-fluid" />
              <h3>Men's sweatshirt</h3>
              <p>$49.99</p>
              <button
          className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}
          onClick={() => handleAddToCartClick("Men's Yellow hoodie",49.99)} // Pass the product name
        >
          Add to Cart
        </button>
            </div>
          </div>
        </div>
      </section>

      <section className="new-section p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6">
            <img src={DiscountImage} alt="New Section Image" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>Glasses and Other Accessories.</h1>
            <h1>50% Discount on all Items.</h1>
            <p>Discover a wide range of stylish glasses and accessories with a special limited-time offer of 50% discount on all items. Elevate your style with our trendy collection and enjoy the exclusive discount today.</p>
            <Link to="/glass-and-lens">
              <button className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      <section className="new-arrival p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>New Arrival Products</h1>
              <p>Clothes for both Men and Women</p>
            </div>
          </div>

          <div className="row">
            {productData.map((product) => (
              <div className="col-md-3" key={product.id}>
                {/* Use Link to navigate to the product details page */}
                <Link to={{ pathname: `/product/${product.id}`, state: { productDetails: product } }} className="link-style">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="two-parts-section p-4">
  <div className="container-xxl">
    <div className="row">
      {DiscountData.map((discount) => (
        <div className="col-md-6" key={discount.id}>
          <img src={discount.image} alt={`Image ${discount.id + 1}`} className="img-fluid" />
          <div className="image-description">
            <h2>{discount.name}</h2>
            <p>{discount.description}</p>
            <p>${discount.price}</p>
            {/* Pass the relevant product data to the DiscountPage */}
            <Link to={{ pathname: `/discount/${discount.id}`, state: { productData: discount } }}>
              <button className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
                Learn more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="team p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>What our customer says...</h1>
              <p>Review from customers from every region</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src={Customer1} alt="Featured Product 1" className="img-fluid" />
             
              <p>Customer reviews are the lifeblood of any business, offering valuable insights into the experiences of those who have interacted with a product or service. These testimonials provide a genuine reflection of the quality, reliability, and overall satisfaction that customers derive from their interactions.</p>
             
              <button className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
              Learn more
              </button>
             
            </div>
            <div className="col-md-3">
              <img src={Customer2} alt="Featured Product 2" className="img-fluid" />
             
              <p>Customer reviews are the lifeblood of any business, offering valuable insights into the experiences of those who have interacted with a product or service. These testimonials provide a genuine reflection of the quality, reliability, and overall satisfaction that customers derive from their interactions.</p>
              <button className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
              Learn more
              </button>
            </div>
            <div className="col-md-3">
              <img src={Customer3} alt="Featured Product 3" className="img-fluid" />
             
              <p>Customer reviews are the lifeblood of any business, offering valuable insights into the experiences of those who have interacted with a product or service. These testimonials provide a genuine reflection of the quality, reliability, and overall satisfaction that customers derive from their interactions.</p>
              <button className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
              Learn more
              </button>
            </div>

            <div className="col-md-3">
              <img src={Customer4} alt="Featured Product 3" className="img-fluid" />
           
              <p>Customer reviews are the lifeblood of any business, offering valuable insights into the experiences of those who have interacted with a product or service. These testimonials provide a genuine reflection of the quality, reliability, and overall satisfaction that customers derive from their interactions.</p>
              <button className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
              Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="new-arrival p-4">
  <div className="container-xxl">
    <div className="row">
      {products.map((product, index) => (
        <div className="col-md-3" key={index}>
          {/* Render your product data */}
          <img src={product.image} alt={product.productName} className="img-fluid" />
          <h3>Product Name: {product.productName}</h3>
          <p>Product Price: ${product.price}</p>
          <p>Product Description: {product.description}</p>
          
          <button onClick={() => handleAddToCartClick(product)}  className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
            Add to Cart
          </button>

          <button onClick={() => handleDeleteProductClick(index)}  className="btn btn-primary red-button" style={{ backgroundColor: 'orange', color: 'black' }}>
            Delete
          </button>

          {/* Add to cart button or any other actions */}
        </div>
      ))}
    </div>
  </div>
</section>

<Footer/>

    </div>
  
  );
};

export default Home;
