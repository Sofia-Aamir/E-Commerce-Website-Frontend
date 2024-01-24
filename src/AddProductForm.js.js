import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AddProductForm.css'; // Import your CSS file
import addproduct from './images/addproduct.jpeg';
import { useProductContext } from './ProductContext';

const AddProductForm = () => {
    const { addProduct } = useProductContext();

    const [productData, setProductData] = useState({
      productName: '',
      description: '',
      price: '',
      category: '',
      quantity: '',
      // Add more fields as needed
    });
  
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleInputChange = (e) => {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    };
  
    const handleAddProduct = () => {
      if (
        productData.productName &&
        productData.description &&
        productData.price &&
        productData.category &&
        productData.quantity &&
        selectedImage
      ) {
        const newProduct = { ...productData, image: selectedImage };
        addProduct(newProduct);
        console.log('Product added:', newProduct);
        setProductData({
          productName: '',
          description: '',
          price: '',
          category: '',
          quantity: '',
        });
        setSelectedImage(null);
        alert('Product added successfully');
      } else {
        alert('Fill the form');
      }
    };
  
    const handleSelectImage = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
  return (
    <div>
    <div className='addproductformpage'>
        <Header/>
    <div className="add-product-form-container">
    <img src={addproduct} alt="User Image" />
      <div className="add-product-form">
        <h2>Add Product</h2>
        <form>
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="text"
              name="quantity"
              value={productData.quantity}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Select Image:</label>
            <input type="file" accept="image/*" onChange={handleSelectImage} />
          </div>

          <button type="button" onClick={handleAddProduct}>
            Add to Home Page
          </button>
        </form>
      </div>
    </div>

    </div>
    <Footer/>
    </div>
  );
};

export default AddProductForm;
