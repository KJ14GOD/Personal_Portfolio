import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section id="home" className="section"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Scroll down to explore my work.</p>
    </motion.section>
  );
};

export default Home;
