import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Full Stack Developer",
          "React Native Developer",
          "Node.js & NestJS Backend Developer",
          "Next.js & React Developer",
          "AI & LLM Integrations",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
