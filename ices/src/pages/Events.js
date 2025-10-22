import React from "react";
import "./Home.css"; // reuse CSS

export default function Events() {
  return (
    <div className="home-container">
      <section className="featured" style={{ paddingTop: "80px" }}>
        <h2>Upcoming Events</h2>

        {/* Example Event Cards */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">Workshop Image</div>
          <div className="project-content">
            <h3>Civil Engineering Workshop</h3>
            <p>
              Hands-on workshop on sustainable building techniques and 
              innovative design practices for students.
            </p>
          </div>
        </div>

        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">Seminar Image</div>
          <div className="project-content">
            <h3>Green Infrastructure Seminar</h3>
            <p>
              Seminar focusing on eco-friendly urban infrastructure solutions 
              and renewable energy integration.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">Competition Image</div>
          <div className="project-content">
            <h3>Student Design Competition</h3>
            <p>
              Annual competition where students present innovative solutions for 
              real-world civil engineering challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
