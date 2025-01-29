import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section id="projects" className="section"
      initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1 }}
    >
      <h1>My Projects</h1>
      <p>Some of my coolest work in ML and Web Development.</p>
    </motion.section>
  );
};

export default Projects;
