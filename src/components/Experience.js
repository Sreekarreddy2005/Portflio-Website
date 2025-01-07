import React from 'react';

const experiences = [
  {
    title: "JAVA DEVELOPER",
    company: "CodTech",
    duration: "Dec 2024 - Jan 2024",
  },
  {
    title: "CYBERSECURITY INTERN",
    company: "Cisco Networking Academy",
    duration: "May 2024 - July 2024",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experiences</h2>
      <div className="experience-content">
        <div className="experience-image">
          <img src="/ayla.jpg" alt="Experience" />
        </div>
        <div className="experience-boxes">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-box">
              <div className="experience-duration">{exp.duration}</div>
              <div className="experience-details">
                <h3>{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
