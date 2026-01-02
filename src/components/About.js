import React, { useState, useEffect } from 'react';

const About = () => {
  const [role, setRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full-Stack Developer',
    'AI/ML Engineer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setRole(
        isDeleting
          ? fullText.substring(0, role.length - 1)
          : fullText.substring(0, role.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && role === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && role === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(ticker);
  }, [role, isDeleting, loopNum, typingSpeed, roles]);

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
    let color = '#fff';

    if (word === 'const') color = '#EC4899';
    if (['Sreekar', 'Reddy', 'Pindi'].includes(word)) color = '#FCD34D';
    if (['C', 'Java', 'Python', 'React', 'Node.js', 'SQL', 'Cybersecurity'].includes(word.replace(/[^a-zA-Z.]/g, ''))) color = '#FCD34D';
    if (word === 'true') color = '#FFA500';
    if (word === 'function') color = '#FFA500';
    if (word === 'return') color = '#FFA500';

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
          <p className="about-description">
            Hello, I am <strong className="highlight">{role}</strong>
            <span className="cursor blink">|</span>
          </p>
          <p className="about-description">
            Computer Science Student at Manipal Institute of Technology || Full-Stack Development || Python & ML Enthusiast || Building AI for Social Impact
          </p>

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
          <a className="button1" href="/Sreekar_Resume.pdf" target="_blank">
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
          <p className="other-description1">I am Sreekar Reddy Pindi, a software developer passionate about bringing ideas to life through code. Currently pursuing my B.Tech in Computer Science & AI, I thrive in the full-stack process—building seamless end-to-end applications using C, Java, and Python. My journey has evolved from traditional software development to the forefront of Artificial Intelligence, where I actively link deep learning models with strong engineering practices. Whether I am deploying intricate algorithms using TensorFlow or securing networks against vulnerabilities, I am dedicated to writing scalable code and tackling tricky problems with innovation.</p>
        </div>
        <div className="flex-item">
          <img src="/Sreekar pc.jpg" alt="Sreekar Reddy Pindi" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
