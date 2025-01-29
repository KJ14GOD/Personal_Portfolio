
import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const frameworks = [
  { name: "HTML", logo: "/assets/html.png" },
  { name: "JavaScript", logo: "/assets/javascript.png" },
  { name: "CSS", logo: "/assets/css.png" },
  { name: "React", logo: "/assets/react.png" },
  { name: "Java", logo: "/assets/java.png" },
  { name: "Python", logo: "/assets/python.png" },
  { name: "MongoDB", logo: "/assets/mongodb.png" },
  { name: "C++", logo: "/assets/C++.png" },
  { name: "node.js", logo: "/assets/nodejs.png" },
  { name: "Scikit", logo: "/assets/scikit.png" }
];

const About = () => {
  return (
    <motion.section id="about" className="about-section"
      initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}
    >
      <div className="about-container">
        {/* Left Side: About Me */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I'm Kartik, a Computer Science major specializing in AI and Web Development. 
            Passionate about building intelligent systems and crafting seamless digital experiences.
            My expertise lies in full-stack development, machine learning, and AI-driven applications.
            When I’m not coding, I enjoy reading, fitness, and exploring new technologies.
          </p>
        </div>

        {/* Right Side: Frameworks Grid */}
        <div className="frameworks-grid">
          {frameworks.map((fw, index) => (
            <div key={index} className="framework-card">
              <div className="framework-icon">
                <img src={fw.logo} alt={fw.name} className="framework-logo" />
              </div>
              <p className="framework-name">{fw.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
