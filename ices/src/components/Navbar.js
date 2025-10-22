import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const goBack = () => navigate(-1);

  return (
    <nav className="navbar">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={goBack} title="Go Back">
        ←
      </div>

      <Link to="/" className="logo">ICES</Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Images</Link></li>
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
        <Link to="/gallery" onClick={toggleMenu}>Images</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/Department" onClick={toggleMenu}>Department</Link>
      </div>
    </nav>
  );
}
