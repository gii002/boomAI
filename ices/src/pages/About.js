import React from "react";
import "./Home.css"; // reuse existing CSS

export default function About() {
  return (
    <div className="home-container">
      <section className="hero" style={{ padding: "100px 20px" }}>
        <div className="hero-text">
          <h1>About Inno-Hub</h1>
          <p>
            Inno-Hub is a student-led innovation hub within the Civil Engineering Department.
            Our mission is to foster creativity, sustainability, and real-world problem solving
            through student projects, workshops, and research initiatives.
          </p>
        </div>
        <div className="hero-image">About Image / Logo</div>
      </section>

      <section className="featured" style={{ marginTop: "40px" }}>
        <h2>Our Vision & Goals</h2>
        <div className="project-card">
          <div className="project-content">
            <h3>Vision</h3>
            <p>
              To become a leading hub for civil engineering innovation, promoting
              sustainable infrastructure solutions and impactful community projects.
            </p>

            <h3>Goals</h3>
            <ul style={{ marginTop: "10px", listStyle: "disc", paddingLeft: "20px" }}>
              <li>Encourage innovative student projects.</li>
              <li>Promote sustainable engineering practices.</li>
              <li>Host workshops, seminars, and competitions.</li>
              <li>Collaborate with industry and community stakeholders.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

