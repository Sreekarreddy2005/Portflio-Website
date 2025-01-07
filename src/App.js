import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
