import React from "react";
import { BoxReveal } from "./magicui/box-reveal";

const About = () => {
  return (
    <div className="space-y-2">
      <div className="font-bold text-lg">/About</div>
      <BoxReveal>
        <div className="text-muted-foreground font-semibold text-sm">
          Hey, I'm a full-stack web developer and a student who's passionate
          about building things with code — especially when AI is involved. I
          mostly work with React, Next.js, and I've been experimenting a lot
          with machine learning using PyTorch. Lately, I've also been exploring
          React Native and building apps that use the OpenAI API to do some
          pretty cool stuff. What really excites me is creating AI-powered tools
          that actually help people — whether it’s saving time, boosting
          productivity, or just making everyday tasks easier. My goal is to take
          the projects I build and make them useful for a wider audience, not
          just tech folks. Still early in my journey, but I’m constantly
          learning, building, and pushing myself to turn ideas into real,
          working products.
        </div>
      </BoxReveal>
    </div>
  );
};

export default About;
