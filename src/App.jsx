import React from 'react';
import NavBar from './components/NavBar';
import ReservationSection from './components/ReservationSection';
import HeroSection from './components/HeroSection';
import ImageGrid from './components/ImageGrid';
import FeatureSection from './components/FeatureSection';
import ImageSlider from './components/ImageSlider';
import Menu from './components/Menu';
import EventsSection from './components/EventsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ReservationSection />
      <ImageGrid />
      <FeatureSection />
      <ImageSlider />
      < Menu/>
      < EventsSection/>
      < Newsletter/>
      < Footer/>

    </div>
  );
};

export default App;
