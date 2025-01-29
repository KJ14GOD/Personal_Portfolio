import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section id="contact" className="section"
      initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 1 }}
    >
      <h1>Contact Me</h1>
      <p>Let’s get in touch! Reach out on LinkedIn or Email.</p>
    </motion.section>
  );
};

export default Contact;
