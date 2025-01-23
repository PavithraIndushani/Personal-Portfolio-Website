import React, { useState } from 'react';
import './Pages.css';
import IT from '../assets/IT-Assets.png';
import car from '../assets/car service.png';
import lms from '../assets/lms.png';

const projects = [
  {
    category: 'Web Development',
    title: 'IT Assets Management System',
    description:
      'IT Assets Management System Web Application for BCI Campus to streamline asset tracking and management processes.',
    techStack: ['PHP', 'HTML5', 'CSS', 'Javascript', 'MySQL'],
    imageUrl: IT,
    link: 'https://github.com/PavithraIndushani/IT-Assets-Management-System-Group-Project-',
  },
  {
    category: 'Web Development',
    title: 'Prime Pulse Auto: Car Service Center',
    description:
      'Car Service Center Management System Web Application to manage inventory, billing, and service records.',
    techStack: ['PHP', 'HTML5', 'CSS', 'Javascript', 'MySQL'],
    imageUrl: car,
    link: '#',
  },
  {
    category: 'Desktop Apps',
    title: 'Library Management System',
    description:
      'Library Management System Desktop Application for managing library operations including book issuance, return management, and new book registration.',
    techStack: ['C#', '.Net'],
    imageUrl: lms,
    link: 'https://github.com/PavithraIndushani/Library-Management-System-Desktop-Application-',
  },
  {
    category: 'UI/UX Designs',
    title: 'IT Asset Mangement System UI/UX Desingn ',
    description:
      'A comprehensive UI/UX design project for a IT Asset Management System',
    techStack: ['Figma'],
    imageUrl: IT, 
    link: '#',
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <div className="portfolio-container">
      <div className="tabs">
        <span
          className={`tab ${activeTab === 'Web Development' ? 'active' : ''}`}
          onClick={() => setActiveTab('Web Development')}
        >
          Web Development
        </span>
        <span
          className={`tab ${activeTab === 'UI/UX Designs' ? 'active' : ''}`}
          onClick={() => setActiveTab('UI/UX Designs')}
        >
          UI/UX Designs
        </span>
        <span
          className={`tab ${activeTab === 'Desktop Apps' ? 'active' : ''}`}
          onClick={() => setActiveTab('Desktop Apps')}
        >
          Desktop Apps
        </span>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span className="tech-badge" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="find-out-more">
                Find out more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
