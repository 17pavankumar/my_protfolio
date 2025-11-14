import React from 'react';
import './App.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
    <div className="portfolio-fancy">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
