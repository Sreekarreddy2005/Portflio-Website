import React from 'react';

const projects = [
  {
    title: "Skill Mapper: Full-Stack AI Talent Acquisition Platform",
    description: (
      <div>
        <p>Skill Mapper is a scalable, full-stack platform designed to eliminate inefficiencies in manual resume screening by automating the extraction of structured data from unstructured formats like PDFs and DOCX. Built on an asynchronous architecture using React and FastAPI, the system supports over 500 concurrent users while delivering real-time analytics.</p>
        <p>The core of the application is a custom NLP pipeline engineered with spaCy and BERT, which achieved 95% extraction accuracy and an 0.81 F1-Score. By integrating a weighted scoring engine and a hybrid recommender system using the YouTube API, the platform improved candidate-job matching precision by 30% and successfully generates personalized learning roadmaps for users.</p>
        <p>Technologies Required: Python, Machine Learning, LLM, React.js, FastAPI, spaCy NLP, BERT, PyMuPDF, YouTube API</p>
      </div>
    ),
    imageUrl: "/ProjectPics/aiskill.png",
    githubLink: "https://github.com/Sreekarreddy2005/AI-SKILL-MAPPER"
  },
  {
    title: "AI-Powered Histopathologic Cancer Detection",
    description: (
      <div>
        <p>This project addresses the complex challenge of automating metastasis detection within a dataset of over 220,000 histopathologic images. The solution utilizes a Convolutional Neural Network (CNN) built on MobileNetV2 transfer learning, optimized with advanced data augmentation and a ReduceLROnPlateau scheduler to reduce validation loss by 18%.</p>
        <p>The model achieved exceptional performance metrics, including 96.3% validation accuracy and a 0.97 AUC score. To make the tool accessible for practical diagnostics, the model was deployed via a full-stack Streamlit web application, allowing for real-time image upload and immediate, confidence-scored predictions</p>
        <p>Technologies Used: Python, TensorFlow, Keras, Scikit-learn, Streamlit, Pandas, NumPy, Git</p>
      </div>
    ),
    imageUrl: "/ProjectPics/aicancer.jpg",
    githubLink: "https://github.com/Sreekarreddy2005/Cancer-Detection-App"
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
    imageUrl: "/ProjectPics/project pic 2 latest.png",
    githubLink: "https://github.com/Sreekarreddy2005/P2P-FileSharing-Web"
  },
  {
    title: "Cryptofolio",
    description: (
      <div>
        <p>Real-time price and marketcap tracking for a wide range of cryptocurrencies.</p>
        <p>Interactive graphs displaying historical price and marketcap data up to a year</p>
        <p>Advanced search and filter functionality to easily find specific coins</p>
        <p>Technologies Used: React.Js, CSS, JavaScript, API Devolopment</p>
      </div>
    ),
    imageUrl: "/ProjectPics/project pic 4.png",
    githubLink: "https://github.com/Sreekarreddy2005/CryptoFolio"
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
