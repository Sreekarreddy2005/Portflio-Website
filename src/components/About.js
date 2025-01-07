import React from 'react';

const About = () => {
  const coderString = `
const coder = {
  name: 'Sreekar Reddy Pindi',
  skills: ['C', 'Java', 'Python', 'React', 'Node.js', 'SQL', 'Cybersecurity'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};
`;

  const coloredText = coderString.split(/(\s+|,|\(|\)|\{|\}|\[|\])/).map((word, index) => {
    let color = '#fff'; // default color

    if (word === 'const') color = '#EC4899';
    if (['Sreekar', 'Reddy', 'Pindi'].includes(word)) color = '#FCD34D';
    if (['C', 'Java', 'Python', 'React', 'Node.js', 'SQL', 'Cybersecurity'].includes(word.replace(/[^a-zA-Z.]/g, ''))) color = '#FCD34D'; // Remove special characters for comparison
    if (word === 'true') color = '#FFA500'; // Orange color for 'true'
    if (word === 'function') color = '#FFA500'; // Orange color for 'function'
    if (word === 'return') color = '#FFA500'; // Orange color for 'return'

    return (
      <span key={index} style={{ color }}>
        {word}
      </span>
    );
  });

  return (
    <section id="about">
      <div className="flex-container">
        <div className="flex-item">
          <h2>About Me</h2>
          <p className="about-description">Hello, This is <strong className="highlight">Sreekar Reddy Pindi</strong></p>
          <p className="about-description">Computer Science Student at Manipal Institute of Technology | Passionate about Computer Networking and Software Development | AI Enthusiast</p>

          <div className="social-icons">
            <a href="https://github.com/Sreekarreddy2005" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sreekar-reddy-p-8bb249287/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:sreekarreddypindi@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <a className="button1"href="/resume.pdf" target="_blank">
            <button>Resume</button>
          </a>
        </div>
        <div className="flex-item" style={{ marginLeft: "20px" }}>
          <pre style={{ backgroundColor: "rgba(78, 95, 180, 0.36)", padding: "20px", borderRadius: "10px", color: "#fff", overflow: "auto", fontSize: "1.08em" }}>
            {coloredText}
          </pre>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-item" style={{ marginRight: "20px" }}>
          <h5>Who I Am?</h5>
          <p className="other-description1">My name is Sreekar Reddy Pindi, a highly motivated and results-oriented B.Tech student with a strong and in-depth understanding of Java and C programming. I am passionate about software development, particularly in the domain of full-stack development and Artificial Intelligence. I possess excellent problem-solving and analytical skills, coupled with a strong work ethic and a keen desire to learn and grow within the dynamic field of software engineering. I am actively seeking challenging opportunities to apply my theoretical knowledge and contribute to innovative projects.</p>
        </div>
        <div className="flex-item">
          <img src="/Sreekar pc.jpg" alt="Sreekar Reddy Pindi" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
