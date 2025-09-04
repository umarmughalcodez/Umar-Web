// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Work } from "./components/Work";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQ";
import AnimatedGradientCard from "./components/ui/AnimatedGradient";
import MovingBackground from "./components/ui/MovingBackground";

const Home = () => {
  return (
    <div>
      {/* Hero with its Aurora background */}
      <Hero />

      {/* Wrap all sections except Hero in a container */}
      <div className="relative">
        <MovingBackground />

        <About />
        <Projects />
        <Work />
        <Testimonials />
        <FAQSection />
        <AnimatedGradientCard />
      </div>
    </div>
  );
};

export default Home;
