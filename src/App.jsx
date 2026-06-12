import './styles/globals.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Organization from './components/Organization/Organization';
import Projects from './components/Projects/Projects';
import ProjectCarousel from './components/Projects/ProjectCarousel';
import Tools from './components/Tools/Tools';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Education />
      <Organization />
      <ProjectCarousel />
      <Projects />
      <Tools />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
