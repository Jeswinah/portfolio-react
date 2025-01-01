import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="container-md mx-auto">

      <div className="w-full  " id="home">
        <Navbar />
        <Hero />
        <div id="about" className="pt-16"></div>
        <About />
        <div id="project" className="pt-16"></div>
        <Projects />

        <div id="skill" className="pt-24"></div>
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
