import React, { useState, useEffect } from 'react';
import '../App.css';
import proimg from '../assets/my-img.png';

const Header = () => {
  const roles = ["IT Undergraduate", "Full-Stack Developer", "UI/UX Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cycle through roles
        setFade(true); // Start fading in
      }, 500); // Allow fade-out animation to complete
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [roles.length]);

  return (
    <div className="header">
      <div className="header-left">
        <h1>Hello,</h1>
        <h2>
          I'm <span className="highlight">Pavithra Indushani</span>
        </h2>
        <p className={`fade-effect ${fade ? 'fade-in' : 'fade-out'}`}>
          {roles[currentIndex]}
        </p>
        
        <div className="social-icons">
          <a href="https://www.facebook.com/share/12DssHdbEjA/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/PavithraIndushani" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pavithra-indushani-0669152ba/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="header-right">
        <img
          src={proimg} 
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Header;
