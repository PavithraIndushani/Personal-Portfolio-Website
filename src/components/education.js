import React from "react";
import "./EducationSection.css"; // Import the CSS file

const education = () => {
  const educationData = [
    {
      year: "2022 - Present",
      institution: "Benedict XIV Catholic Institute (BCI Campus) - Negombo, Sri Lanka",
      details: [
        "Level 3 Semester 2",
        "BSc(Hons). in Information Technology (Reading)",
      ],
      icon: "🎓",
    },
    {
      year: "2021",
      institution: "Distric Vocational Traning Center",
      details: [
        "NVQ Level 4",
      ],
      icon: "📖",
    },
    
    {
      year: "2019",
      institution: "Mayurapada Central College, Narammala",
      details: [
        "G.C.E. Advanced Level Examination",
        "S S S (Physical Stream)",
      ],
      icon: "📖",
    },
    {
        year: "2016 ",
        institution: "St/ Bernadeth College",
        details: [
          "G.C.E. Ordinary Level Examination",
          "5A's 1B and 3C's",
        ],
        icon: "📖",
      },
      
  ];

  return (
    <div className="education-section">
      <h1 className="section-titleE">Education</h1>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-content">
              <h2 className="timeline-year">{item.year}</h2>
              <h3 className="timeline-institution">{item.institution}</h3>
              <ul className="timeline-details">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="timeline-icon">{item.icon}</div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </div>
  );
};

export default education;
