import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "https://drive.google.com/file/d/1_vU7H5qLYnK3qmdzbwL4TKXzZTKV2RGl/view?usp=sharing" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer>
      {/* Navigation Links */}
      <nav>
        {links.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Footer Bottom */}
      <p>© {new Date().getFullYear()} Pavithra Indushani. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
