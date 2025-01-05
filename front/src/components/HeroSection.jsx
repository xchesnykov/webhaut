import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Watch the Latest Anime & Movies</h2>
        <p className="hero-subtitle">Stream your favorite titles now!</p>
        <button className="hero-button">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;
