import React from "react";
import { TextRevealCard } from "./ui/Text-reveal-card";
import { LampContainer } from "./ui/lamp";

const Work = () => {
  return (
    <div>
      <LampContainer
        children={
          <p className="text-5xl font-semibold text-white">Hello World</p>
        }
      />
      Work
      <TextRevealCard
        text="Your know the business"
        revealText="We know the chemistry"
      />
    </div>
  );
};

export default Work;
