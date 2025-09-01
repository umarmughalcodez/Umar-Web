// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Work } from "./components/Work";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Work />
    </div>
  );
};

export default Home;
