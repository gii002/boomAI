import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Inno-Hub</Link>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Department">Department</Link></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/events" onClick={toggleMenu}>Events</Link>
        <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}
