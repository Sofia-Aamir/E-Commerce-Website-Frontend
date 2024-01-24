// AboutUsPage.js

import React from 'react';
// Import your styles
import Footer from './Footer';
import aboutus1 from './images/aboutus1.jpg';
import aboutus2 from './images/aboutus2.jpg';
import aboutus3 from './images/aboutus3.jpg';
import ourmission from './images/ourmission.jpg';
import vision from './images/vision.png';
import './AboutUsPage.css';
import Header from './Header';

const AboutUsPage = () => {
  return (
    <div>
      <Header/>
    <div className="about-us-container">
      <div className="our-story-section">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.
        </p>
      
        {/* More paragraphs go here */}
      </div>

      <div className="images-section">
    <img src={aboutus1} alt="Image 1" className="image" />
        <img src={aboutus2} alt="Image 2" className="image" />
        <img src={aboutus3} alt="Image 3" className="image" />
      </div>

      <div className="mission-section">
        <div className="mission-image">
          <img src={ourmission} alt="Mission Image" />
        </div>
        <div className="mission-paragraph">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.
           
          </p>
        </div>
      </div>

      <div className="vision-section">
        <div className="vision-paragraph">
          <h3>Our Vision</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className="vision-image">
          <img src={vision} alt="Vision Image" />
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default AboutUsPage;
