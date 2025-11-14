

import React from 'react';

const projectList = [
  {
    title: 'ShopIT E-commerce',
    desc: 'Complete store platform using Django & React, featuring seamless UX and secure checkout.',
  },
  {
    title: 'Monsoon Tracker',
    desc: 'Weather & data visualization for monsoon trends in India, built in React.',
  },
  {
    title: 'Pet Adoption Portal',
    desc: 'Social web app for connecting pets and adopters, integrating APIs.',
  },
];

function Projects() {
  return (
    <section className="projects fancy-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((proj, i) => (
          <div className="project-card" key={i}>
            <h4>{proj.title}</h4>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
