
import React from 'react';

function Contact() {
  return (
    <section className="contact fancy-section" id="contact">
      <h2>Contact Me</h2>
      <form className="fancy-contact-form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn main-cta">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
