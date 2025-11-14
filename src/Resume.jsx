

import React from 'react';

function Resume() {
  return (
    <section className="resume fancy-section">
      <h2>Resume</h2>
      <div className="resume-fancy">
        <div>
          <b>Role:</b> Junior Full-stack Developer<br />
          <b>Experience:</b> Intern<br />
          <b>Tech:</b> React, Django, JS, Python, SQL, Bootstrap ,HTML ,CSS
        </div>
        <a href="cv.pavan.pdf" className="btn" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;

