import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AnimeCarousel from './AnimeCarousel';
import Categories from './Categories';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AnimeCarousel />
      <HeroSection />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
