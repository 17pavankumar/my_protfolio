

import React from 'react';

function Skills() {
  return (
    <section className="skills fancy-section">
      <h2>Skills</h2>
      <div className="skills-bar-group">
        <span>React</span>
        <div className="bar"><div className="bar-fill" style={{width: '85%'}} /></div>
        <span>Django</span>
        <div className="bar"><div className="bar-fill" style={{width: '75%'}} /></div>
        <span>JavaScript</span>
        <div className="bar"><div className="bar-fill" style={{width: '80%'}} /></div>
        <span>Python</span>
        <div className="bar"><div className="bar-fill" style={{width: '70%'}} /></div>
        <span>Bootstrap</span>
        <div className="bar"><div className="bar-fill" style={{width: '65%'}} /></div>
      </div>
    </section>
  );
}

export default Skills;

