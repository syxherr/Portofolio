import './styles/globals.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Organization from './components/Organization/Organization';
// import Projects from './components/Projects/Projects';
import Projects from './components/Projects/ProjectCarousel';
import Tools from './components/Tools/Tools';
import Skills from './components/Skills/Skills';
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
      {/* <TargetCursor
        spinDuration={2}
        hideDefaultCursor={false}
        parallaxOn
        hoverDuration={0.2}
      /> */}

      <ScrollIndicator />
      <Header />
      <Home />
      <Education />
      <Organization />
      <Projects />
      {/* <Tools />
      <Skills /> */}
      <Contact />
      <Footer />
    </>
  );
}
