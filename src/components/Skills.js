import React from 'react';

const skills = [
  { name: 'C', image: '/skill photos/c.svg' },
  { name: 'Java', image: '/skill photos/java.svg' },
  { name: 'Python', image: '/skill photos/python.svg' },
  { name: 'Django', image: '/skill photos/django.svg' },
  
  { name: 'Numpy', image: '/skill photos/numpy.svg' },
  
  { name: 'HTML', image: '/skill photos/html.svg' },
  { name: 'CSS', image: '/skill photos/css.svg' },
  { name: 'JavaScript', image: '/skill photos/javascript.svg' },
 
  { name: 'React.js', image: '/skill photos/react js.svg' },
  
  { name: 'Git', image: '/skill photos/git.svg' },
  {name: 'MySQL', image: '/skill photos/mysql.svg'},
 
  
  { name: 'SQLite', image: '/skill photos/sqlite.svg' },

];

const Skills = () => { 
  return (
     <section id="skills" className="skills-section"> 
     <h2>Skills</h2> 
     <div className="skills-container"> 
      <div className="skills-list">
         {skills.map((skill, index) => ( 
          <div key={index} className="skill-item">
             <div className="skill-icon-box"> 
              <img src={skill.image} alt={skill.name} className="skill-image" /> 
              </div> 
              <p className='skill-name'>{skill.name}</p> 
              </div> 
              ))} 
              </div>
               </div> 
               </section> 
               ); 
              };
              export default Skills