import React from "react";
import "./skill.css"; 
import html from '../assets/pnghtml.png';
import css from '../assets/pngcss.png';
import js from '../assets/pngjs.png';
import php from '../assets/php.png';
import java from '../assets/pngjava.png';
import cplus from '../assets/cplus.png';
import cshap from '../assets/pngcc.png';
import python from '../assets/python.png';
import re from '../assets/react.png';
import mysql from '../assets/mysql.png';
import mssql from '../assets/mssql.png';

const skill = () => {
  return (
    <div className="containers">
      <h1 className="title">My <span className="highlight">Skills</span></h1>

      <div className="sections">
      <section>
          <h2 className="section-title">Web Development</h2>
          <div className="icons">
            {[
              { name: "HTML", icon: html },
              { name: "CSS", icon: css },
              { name: "Javascript", icon: js },
              { name: "PHP", icon: php },
              
            ].map((lang) => (
              <div key={lang.name} className="icon">
                <img src={lang.icon} alt={lang.name} />
              </div>
            ))}
          </div>
        </section>

        {/* Programming Languages */}
        <section>
          <h2 className="section-title">Programming Languages</h2>
          <div className="icons">
            {[
              { name: "Java", icon: java },
              { name: "C++", icon:  cplus },
              { name: "C#", icon: cshap },
              { name: "Python", icon: python },
              
            ].map((lang) => (
              <div key={lang.name} className="icon">
                <img src={lang.icon} alt={lang.name} />
              </div>
            ))}
          </div>
        </section>

        {/* Frameworks */}
        <section>
          <h2 className="section-title">Frameworks</h2>
          <div className="icons">
            {[
              { name: "React", icon: re },
            ].map((framework) => (
              <div key={framework.name} className="icon">
                <img src={framework.icon} alt={framework.name} />
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="section-title">Database</h2>
          <div className="icons">
            {[
              { name: "My SQL", icon: mysql },
              { name: "Ms SQL", icon: mssql },
            ].map((tool) => (
              <div key={tool.name} className="icon">
                <img src={tool.icon} alt={tool.name} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default skill;
