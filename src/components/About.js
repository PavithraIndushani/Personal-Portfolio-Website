// App.js
import React from "react";
import "./about.css";
import proimg from '../assets/my1-img.jpg';

function About() {
  return (
    <div className="containerA">
  <div className="image-containerA">
    <img
      src={proimg}
      alt="Person working on a laptop"
      className="profile-imageA"
    />
  </div>
  <div className="text-container">
    <h1 className="title">
      Who am <span className="highlight">I </span>?
    </h1>
    <p className="description">
    I am a dedicated undergraduate at BCI Campus, pursuing a Bachelor of Science Honors in Information Technology (BSc.IT).
     With a strong foundation in technical skills, including React.js, HTML, CSS, JavaScript, PHP, and Python, I aim to contribute to 
     innovative and impactful solutions in the IT field. My commitment to excellence, adaptability, and continuous learning drives me 
     to deliver results while fostering my professional growth.
    </p>
  </div>
</div>

  );
}

export default About;
