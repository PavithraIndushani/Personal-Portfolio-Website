import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="https://drive.google.com/file/d/1_vU7H5qLYnK3qmdzbwL4TKXzZTKV2RGl/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/hire-me" className="hireme-btn">Hire Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
