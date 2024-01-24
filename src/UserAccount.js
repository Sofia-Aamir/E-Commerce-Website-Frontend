import React, { useState, useEffect } from "react";
import './UserAccount.css';
import useraccount from './images/useraccount.jpg';
import Header from "./Header";
import Footer from "./Footer";

const UserAccount = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Retrieve user information from localStorage on component mount
    const storedUser = localStorage.getItem("user");
    const storedUserData = storedUser ? JSON.parse(storedUser) : null;

    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    // Retrieve user information from localStorage to check for changes
    const storedUser = localStorage.getItem("user");
    const storedUserData = storedUser ? JSON.parse(storedUser) : null;

    // Check if email or password has been changed
    if (
      storedUserData &&
      (storedUserData.email !== userData.email || storedUserData.password !== userData.password)
    ) {
      // Update user information in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("User information updated:", userData);
      alert("Email and password updated successfully!");
    } else {
      // Alert if no changes are made
      alert("First update the email and password, then click Update Information.");
    }
  };

  return (
    <div>
    <div className="useraccountpage">
      <Header/>
    <div className="user-account-container">
      <img src={useraccount} alt="User Image" />
      <div className="user-info">
        <h1>User Account</h1>
        <div className="user-info">
          <label>Email:</label>
          <input type="text" name="email" value={userData.email} onChange={handleInputChange} />

          <label>Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
        </div>

        <button onClick={handleUpdate} className="useraccountbutton">Update Information</button>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UserAccount;
