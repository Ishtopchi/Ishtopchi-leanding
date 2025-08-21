import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default HomePage;