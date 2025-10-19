// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import { Work } from "./components/Work";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQ";
import AnimatedGradientCard from "./components/ui/AnimatedGradient";
import Reasons from "./components/Reasons";
import StatsSection from "./components/StatsSection";
import CurvedLoop from "@/app/components/ui/CurvedLoopText";
import FrustrationsToSolutions from "./components/Solutions";
import OurCommitment from "./components/Passion";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="relative">
        <StatsSection />
        <About />
        <FrustrationsToSolutions />
        <div className="w-screen mt-10 mb-6">
          <CurvedLoop
            marqueeText="

✦ Your next client is just one click away ✦ Turn fur trims into full bookings ✦ Build a brand pets & Owners love ✦ Be the name every pet parent remembers ✦ Websites that make tails wag ✦ Transform your salon into a local legend ✦ Look premium, Book premium ✦ Stand out, Book out "
            speed={6}
            curveAmount={0}
            direction="left"
            interactive={true}
            className="text-black bg-red-500"
          />
        </div>
        <OurCommitment />
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
export const runtime = "edge";
export const dynamic = "force-static";
