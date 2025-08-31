// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
