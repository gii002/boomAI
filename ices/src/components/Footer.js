import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-column">
          <h3>Inno-Hub</h3>
          <p>A student-led innovation hub under Civil Engineering Department,
             focusing on sustainable projects, research, and community engagement.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link><br/>
          <Link to="/projects">Projects</Link><br/>
          <Link to="/events">Events</Link><br/>
          <Link to="/gallery">Gallery</Link><br/>
          <Link to="/contact">Contact</Link>
          <Link to="/department">Department</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:innohub@gmail.com">innohub@gmail.com</a></p>
          <p>Location: Civil Engineering Dept, MUBAS</p>
          <p>© {new Date().getFullYear()} Inno-Hub</p>
        </div>
      </div>
    </footer>
  );
}
