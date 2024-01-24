import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Header.css';

import { useCart } from './CartContext';

function Header() {
  const [nav, setNav] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { cartCount } = useCart();

  const handleNav = () => setNav(!nav);



  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className={nav ? 'logo dark' : 'logo'}>
        <h1 style={{ color: 'black' }}>E Commerce</h1>
      </div>
      <ul className="nav-menu">
        <Link to='/'><li>Home</li></Link>
        <Link to='/aboutus'><li>About us</li></Link>
        <Link to='/useraccount'><li>User Account</li></Link>
        <Link to='/addproductform'><li>Vendor Account</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
      <div className="nav-icons">
        <Link to='/auth'>
          <AiOutlineUser className='icon' />
        </Link>
        <Link to='/cart'>
          <AiOutlineShoppingCart className='icon' />
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className='icon' />
        ) : (
          <AiOutlineClose style={{ color: '#000' }} className='icon' />
        )}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
          <Link to='/'><li>Home</li></Link>
          <Link to='/aboutus'><li>About us</li></Link>
          <Link to='/useraccount'><li>User Account</li></Link>
          <Link to='/venderaccount'><li>Vendor Account</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitter className='icon' />
            <FaPinterest className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
