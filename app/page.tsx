// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";

const Home = () => {
  return (
    <div>
      <Hero /> {/* This has the moving background */}
      <About /> {/* This is a normal section */}
    </div>
  );
};

export default Home;
