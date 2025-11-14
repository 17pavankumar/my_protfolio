

import React from 'react';

function About() {
  return (
    <section className="about fancy-section" id="about">
      <h2>About Me</h2>
      <div className="about-grid">
        <img src="/images/pavan2.JPG" alt="Profile" className="profile-fancy" />
        <div>
          <h3>Creative &amp; Reliable Full Stack Engineer</h3>
          <p>
            I am a junior developer learning modern web technologies.<br/>
            I love tackling coding challenges, building beautiful apps, and collaborating on open-source projects.
          </p>
          <ul className="info-list">
            <li><b>Location:</b> India</li>
            <li><b>Email:</b> 17pavankumarn@gmail.com</li>
            <li><b>Github:</b> github.com/17pavankumar</li>
            <li><b>Freelance:</b> Available</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
