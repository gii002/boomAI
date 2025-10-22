import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Innovation In Civil Engineering (ICES)</h1>
          <p>
            A platform of innovation and creativity under the Civil Engineering Department.
            We focus on practical engineering solutions, research, and community-driven projects.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="primary">Explore Projects</Link>
            <Link to="/about" className="secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">Log</div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <div className="number">100++</div>
          <div className="label">Active Members</div>
        </div>
        <div className="stat-item">
          <div className="number">15</div>
          <div className="label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="number">10</div>
          <div className="label">Workshops Held</div>
        </div>
        <div className="stat-item">
          <div className="number">4</div>
          <div className="label">Awards Won</div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="featured">
        <h2>Featured Project</h2>
        <div className="project-card">
          <div className="project-image">Project Image</div>
          <div className="project-content">
            <h3>Smart Drainage System</h3>
            <p>
              A student-designed system that monitors and prevents flooding through smart sensors 
              and efficient channeling methods — integrating technology into civil infrastructure.
            </p>
            <Link to="/projects">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-section">
        <h2>Join Our Club</h2>
        <p>
          Be part of an innovative community shaping the future of Civil Engineering 
          through design, sustainability, and technology.
        </p>
        <Link to="/contact">Get Involved</Link>
      </section>
    </div>
  );
}
