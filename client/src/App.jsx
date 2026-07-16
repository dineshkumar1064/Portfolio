import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Reveal from './components/Reveal';

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Reveal as="div" y={36}>
          <About />
        </Reveal>
        <Reveal as="div" y={36}>
          <Skills />
        </Reveal>
        <Reveal as="div" y={36}>
          <Experience />
        </Reveal>
        <Reveal as="div" y={36}>
          <Projects />
        </Reveal>
        <Reveal as="div" y={36}>
          <Certifications />
        </Reveal>
        <Reveal as="div" y={36}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
