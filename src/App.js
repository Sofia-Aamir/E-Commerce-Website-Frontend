// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Header from './Header';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import GlassAndLensPage from './GlassAndLensPage';
import DiscountPage from './DiscountPage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import AuthForm from './AuthForm';
import UserAccount from './UserAccount';
import AddProductForm from './AddProductForm.js';
import CheckOutPage from './CheckoutPage.js';

const AuthLayout = ({ children, loggedIn }) => (
  <div>
    {/* Render Header only if not in the /auth route */}
    {window.location.pathname.startsWith('/auth') ? null : (loggedIn && <Header />)}
    <Routes>{children}</Routes>
  </div>
);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/glass-and-lens" element={<GlassAndLensPage />} />
          <Route path="/discount/:discountId" element={<DiscountPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />

          {/* Use the AuthLayout for authentication-related routes */}
          <Route
            path="/auth/*"
            element={
              <AuthLayout loggedIn={loggedIn}>
                <Route
                  path="/"
                  element={<AuthForm onLogin={handleLogin} />}
                />
                {/* Add more authentication-related routes here */}
              </AuthLayout>
            }
          />

          <Route
            path="/useraccount"
            element={
              <UserAccount
                loggedIn={loggedIn}
                onLogout={handleLogout}
              />
            }
          />
            <Route
            path="/addproductform"
            element={
              <AuthLayout loggedIn={loggedIn}>
                {/* Add more vendor-related routes here */}
                <Route
                  path="/"
                  element={<AddProductForm />}
                />
              </AuthLayout>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
