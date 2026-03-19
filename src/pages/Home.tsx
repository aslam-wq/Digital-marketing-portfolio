import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Quote from '../components/Quote';
import Skills from '../components/Skills';
import Impact from '../components/Impact';
import Services from '../components/Services';
import SkillProgress from '../components/SkillProgress';
import VisionMission from '../components/VisionMission';
import Blog from '../components/Blog';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Expertise from '../components/Expertise';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen selection:bg-[#ff7a2f] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quote />
        <Skills />
        <Impact />
        <Services />
        <SkillProgress />
        <VisionMission />
        <Blog />
        <Process />
        <Testimonials />
        <Expertise />
        <FAQ />
        <CTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
