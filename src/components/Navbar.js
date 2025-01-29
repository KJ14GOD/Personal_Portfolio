import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={600} className="nav-item">Home</Link></li>
        <li><Link to="about" smooth={true} duration={600} className="nav-item">About</Link></li>
        <li><Link to="projects" smooth={true} duration={600} className="nav-item">Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={600} className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
