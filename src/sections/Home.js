import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import react-scroll
import ParticlesBackground from "../components/ParticlesBackground";
import "./Home.css";

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 15px rgba(255, 60, 0, 0.7)",
    transition: { yoyo: Infinity }
  }
};

const Home = () => {
  return (
    <section id="home" className="hero">
      <ParticlesBackground />

      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Hello, I'm <span className="highlight">Kartik.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="typing-text">
          AI | ML | Web Dev
        </span>
      </motion.p>

      {/* Use Link to scroll to About section */}
      <Link to="about" smooth={true} >
        <motion.a
          className="btn"
          variants={buttonVariants}
          whileHover="hover"
        >
          View My Work ↓
        </motion.a>
      </Link>
    </section>
  );
};

export default Home;
