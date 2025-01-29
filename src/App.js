import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
