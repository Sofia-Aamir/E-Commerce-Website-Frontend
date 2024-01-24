import React from "react";
import Login from './images/login.jpg';
import './AuthForm.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthForm = ({ onLogin }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSignup = () => {
      // Save user information in localStorage
      localStorage.setItem("user", JSON.stringify(formData));
      console.log("User registered:", formData);
      // Optionally, you may want to log in the user after signup
      onLogin();
      // Redirect to the home page
      navigate("/home");
    };
    
    
    const handleLogin = () => {
      // Retrieve user information from localStorage
      const storedUser = localStorage.getItem("user");
      const storedUserData = storedUser ? JSON.parse(storedUser) : null;
    
      if (storedUserData && storedUserData.email === formData.email && storedUserData.password === formData.password) {
        console.log("Login successful");
    
        // Store email in localStorage for consistency (optional)
        localStorage.setItem("user", JSON.stringify({ ...storedUserData, email: formData.email }));
    
        // Log in the user
        onLogin();
        // Redirect to the home page
        navigate("/home");
      } else {
        console.error("Login failed");
      }
    };
    
  
  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img src={Login} alt="" />
          <div className="text">
            <span className="text-1">Every new friend is a <br /> new adventure</span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
        <div className="back">
          {/* <img className="backImg" src="images/backImg.jpg" alt="" /> */}
          <div className="text">
            <span className="text-1">Complete miles of journey <br /> with one step</span>
            <span className="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="text"><a href="#">Forgot password?</a></div>
                <div className="button input-box">
                <input
        type="submit"
        value="Submit"
        onClick={handleSignup}
        // or onClick={handleLogin} based on your use case
      />
                </div>
                <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Signup now</label></div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
