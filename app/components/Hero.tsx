// components/Hero.tsx
import MovingBackground from "./ui/MovingBackground";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {" "}
      {/* Make sure hero is full-screen */}
      <MovingBackground
        followSpeed={0.006}
        blueColor="rgba(59, 130, 246, 0.5)"
      />
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        {/* Your hero content here */}
        <h1>Your Hero Content</h1>
      </div>
    </section>
  );
};

export default Hero;
