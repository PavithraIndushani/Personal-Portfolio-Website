import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Project";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import HireMe from "./Pages/HireMe";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire-me" element={<HireMe />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
