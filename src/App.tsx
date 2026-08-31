import './styles/globals.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
// import Organization from './components/Organization/Organization';
import Projects from './components/Projects/ProjectCarousel';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollIndicator from './styles/Animation/ScrollIndicator';
import Landing from './components/Landing/Landing';
import { useState } from 'react';

export default function App() {
  const [showLanding, setShowLanding] = useState(() => {
    return !localStorage.getItem('hasVisited');
  })

  const handleContinue = () => {
    localStorage.setItem('hasVisited', 'true');
    setShowLanding(false);
  };

  if (showLanding) {
    return <Landing onContinue={handleContinue} />;
  }

  return (
    <>
      <ScrollIndicator />
      <Header />
      <Home />
      <Education />
      <Experience />
      {/* <Organization /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}