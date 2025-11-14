
import React from 'react';

function Hero() {
  return (
    <section className="hero fancy-hero-bg">
      <div className="hero-inner">
        <h1 className="slide-in">Hi, I'm <span className="gradient-name" >PAVAN KUMAR N</span></h1>
        <p className="slide-in" style={{ animationDelay: '0.2s' }}>
          Passionate Full Stack Developer &lt;/&gt;
        </p>
        <a href="#contact" className="btn main-cta slide-in" style={{ animationDelay: '0.4s' }}>
          Let's Connect
        </a>
      </div>
    </section>
  );
}

export default Hero;
