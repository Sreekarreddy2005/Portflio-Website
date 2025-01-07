import React from 'react';

const projects = [
  {
    title: "Analog To Digital Voice Decoder",
    description: (
      <div>
        <p>This A/D voice decoder project pushes the boundaries of audio signal processing by not only translating spoken words into text but also seamlessly converting raw analog signals into their digital equivalents. I meticulously implemented advanced noise reduction and echo cancellation algorithms, resulting in a significant improvement in signal-to-noise ratio (SNR) by an average of 15dB compared to unprocessed signals.</p>
        <p>Furthermore, I explored both uniform and non-uniform quantization techniques, achieving a bitrate reduction of 32% while maintaining high audio fidelity. This project serves as a testament to my ability to design and implement sophisticated signal processing pipelines that effectively handle real-world audio challenges.</p>
        <p>Technologies Required: Python programming, Digital signal processing, Audio engineering, NumPy, SciPy, LibROSA</p>
      </div>
    ),
    imageUrl: "/ProjectPics/project pic 1.jpg",
    githubLink: "https://github.com/Sreekarreddy2005/Analog-To-Digital-VoiceDecoder"
  },
  {
    title: "ZipZap - File Sharing Website",
    description: (
      <div>
        <p>ZipZap is a secure and reliable file-sharing platform I developed that revolutionizes file transfer. Users can effortlessly upload files and share them with anyone by simply scanning a QR code or copying a unique downloadable link</p>
        <p>Built with a robust Flask backend and a sleek frontend crafted with HTML, CSS, and JavaScript, ZipZap ensures a seamless user experience. For enhanced security, user credentials are securely stored on Google Cloud, providing an extra layer of protection. This project demonstrates my proficiency in web development, from backend architecture to frontend design, and highlights my commitment to building user-friendly and secure online applications.</p>
        <p>Technologies Used: Flask, Python, WebSocket, HTML, CSS, JavaScript, Databases</p>
      </div>
    ),
    imageUrl: "/ProjectPics/project pic 2 new.jpg",
    githubLink: "https://github.com/Sreekarreddy2005/P2P-FileSharing-Web"
  },
  {
    title: "Weather Website",
    description: (
      <div>
        <p>Unleash the power of real-time weather information at your fingertips with my interactive web application! This website empowers you to explore your city and instantly retrieve up-to-date weather conditions.</p>
        <p>Built with the user in mind, it leverages HTML, CSS, and JavaScript to deliver a seamless browsing experience. By integrating a powerful weather API, this application provides you with the most recent weather data, keeping you informed and prepared for anything nature throws your way</p>
        <p>Technologies Used: HTML, CSS, JavaScript</p>
      </div>
    ),
    imageUrl: "/ProjectPics/project pic 3 new.jpg",
    githubLink: "https://github.com/Sreekarreddy2005/WeatherApp"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            {project.description}
            <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
