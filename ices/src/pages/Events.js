import React from "react";
import "./Home.css"; // reuse CSS

export default function Events() {
  return (
    <div className="home-container">
      <section className="featured" style={{ paddingTop: "80px" }}>
        <h2>Upcoming Events</h2>

        {/* Workshop */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1581091870622-1e7e9d5aeb90"
              alt="Workshop"
            />
          </div>
          <div className="project-content">
            <h3>Civil Engineering Workshop (D7)</h3>
            <p>
              Hands-on workshop on sustainable building techniques and 
              innovative design practices for students.
            </p>
          </div>
        </div>

        {/* Green Infrastructure Seminar */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e36a9d8e59b"
              alt="Seminar"
            />
          </div>
          <div className="project-content">
            <h3>Green Infrastructure Seminar</h3>
            <p>
              Seminar focusing on eco-friendly urban infrastructure solutions 
              and renewable energy integration.
            </p>
          </div>
        </div>

        {/* Design Competition */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Competition"
            />
          </div>
          <div className="project-content">
            <h3>Student Design Competition</h3>
            <p>
              Annual competition where students present innovative solutions for 
              real-world civil engineering challenges.
            </p>
          </div>
        </div>

        {/* Construction Site Visit */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1590080875839-745e3fc7432a"
              alt="Site Visit"
            />
          </div>
          <div className="project-content">
            <h3>Construction Site Visit</h3>
            <p>
              Field trip for students to explore live construction projects and 
              interact with professionals in the field.
            </p>
          </div>
        </div>

        {/* Career Talk */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Career Talk"
            />
          </div>
          <div className="project-content">
            <h3>Career Talk: Pathways in Civil Engineering</h3>
            <p>
              Guest speakers from various engineering firms discuss career paths 
              and skill development for aspiring civil engineers.
            </p>
          </div>
        </div>

        {/* Environmental Day */}
        <div className="project-card" style={{ marginBottom: "30px" }}>
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Environment Day"
            />
          </div>
          <div className="project-content">
            <h3>Environmental Awareness Day</h3>
            <p>
              Students and faculty join hands for community clean-up and 
              discussions on sustainable development goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
