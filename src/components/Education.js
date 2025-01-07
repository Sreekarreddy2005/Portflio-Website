// src/components/Education.js
import React from 'react';

const educations = [
  {
    title: "BACHELOR OF TECHNOLOGY",
    company: "MANIPAL INSTITUTE OF TECHNOLOGY",
    duration: "July 2023 - May 2027",
  },
  {
    title: "HIGHER SECONDARY EDUCATION",
    company: "FIITJEE JUNIOR COLLEGE",
    duration: "June 2021 - March 2023",
  },
  {
    title: "SECONDARY SCHOOL EDUCATION",
    company: "FIITJEE WORLD SCHOOL",
    duration: "June 2011 - June 2021",
  },
];

const Education = () => {
  return (
    <section id="education" className="eeducation-section">
      <h2>Education</h2>
      <div className="education-content">
        <div className="education-image">
          <img src="/education.jpg" alt="Education" />
        </div>
        <div className="education-boxes">
          {educations.map((exp, index) => (
            <div key={index} className="education-box">
              <div className="education-duration">{exp.duration}</div>
              <div className="education-details">
                <h3>{exp.title}</h3>
                <p className="education-company">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
