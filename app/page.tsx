// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Work } from "./components/Work";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQ";
import AnimatedGradientCard from "./components/ui/AnimatedGradient";
import MovingBackground from "./components/ui/MovingBackground";
import Reasons from "./components/Reasons";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="relative">
        <MovingBackground />

        <About />
        <Projects />
        <Work />
        <Testimonials />
        <FAQSection />
        <Reasons />
        <AnimatedGradientCard />
      </div>
    </div>
  );
};

export default Home;
