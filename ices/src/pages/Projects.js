import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // reuse CSS

export default function Projects() {
  return (
    <div className="home-container">
      <section className="featured" style={{ paddingTop: "80px" }}>
        <h2>Our Projects</h2>

        {/* Example Project Cards */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">Project 1 Image</div>
          <div className="project-content">
            <h3>Smart Drainage System</h3>
            <p>
              A system using sensors to monitor and prevent flooding in urban areas,
              integrating technology and civil engineering for sustainable solutions.
            </p>
            <Link to="/projects">Learn More</Link>
          </div>
        </div>

        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">Project 2 Image</div>
          <div className="project-content">
            <h3>Modular Footbridge</h3>
            <p>
              A low-cost, prefabricated footbridge designed to connect rural communities.
              Easy to assemble with locally available materials.
            </p>
            <Link to="/projects">Learn More</Link>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">Project 3 Image</div>
          <div className="project-content">
            <h3>Green Building Model</h3>
            <p>
              Sustainable building design incorporating renewable energy, 
              rainwater harvesting, and energy-efficient construction techniques.
            </p>
            <Link to="/projects">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
