import React from "react";
import Hero from "./Hero";
import About from "./About";
import SelectedWork from "./SelectedWork";
import AISection from "./AISection";
import Experience from "./Experience";
import Stack from "./Stack";
import Services from "./Services";
import Recommendations from "./Recommendations";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <AISection />
      <Experience />
      <Stack />
      <Services />
      <Recommendations />
      <Contact />
    </>
  );
}

export default Home;
