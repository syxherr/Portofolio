import './styles/globals.css';
import { useState,  } from "react";
import Header from './components/layout/Header/Header';
import Home from './components/sections/Home/Home';
// import Organization from './components/sections/Organization/Organization';
import Projects from './components/sections/Projects/ProjectCarousel';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import Landing from './components/sections/Landing/Landing';
import ScrollIndicator from './styles/Animation/ScrollIndicator';
// Ubah ke true kalau mau landing dihidupkan lagi
const SHOW_LANDING = false;

export default function App() {
  const [showLanding, setShowLanding] = useState(() => {
    return SHOW_LANDING && !localStorage.getItem('hasVisited');
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
      <Experience />
      {/* <Organization /> */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}