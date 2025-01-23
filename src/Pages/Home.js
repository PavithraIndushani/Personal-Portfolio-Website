import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skill from "../components/skill";
import Education from "../components/education";

import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <About/>
      <Skill/>
      <Education/>
    </div>
  );
};

export default Home;
