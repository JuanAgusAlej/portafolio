import { About } from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Experience from './components/Experience/Experience.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Skills } from './components/Skills/Skills.jsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
