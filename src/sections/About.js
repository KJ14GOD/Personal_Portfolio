import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section id="about" className="section"
      initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}
    >
      <h1>About Me</h1>
      <p>I’m a Computer Science major specializing in AI & Web Dev.</p>
    </motion.section>
  );
};

export default About;
