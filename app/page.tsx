// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Work } from "./components/Work";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Work />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default Home;
