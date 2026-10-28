import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Certificates />
      <Footer />
    </main>
  );
}