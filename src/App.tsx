import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="grid-bg"></div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
