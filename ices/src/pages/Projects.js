import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const projects = [
  {
    id: 1,
    title: "Smart Drainage System",
    image:
      "https://images.unsplash.com/photo-1613470207337-9d52a3ec0c53?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A system using sensors to monitor and prevent flooding in urban areas.",
  },
  {
    id: 2,
    title: "Modular Footbridge",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A low-cost, prefabricated footbridge designed to connect rural communities.",
  },
  {
    id: 3,
    title: "Green Building Model",
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61c?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "Sustainable building design incorporating renewable energy and rainwater harvesting.",
  },
  {
    id: 4,
    title: "Smart Irrigation Network",
    image:
      "https://images.unsplash.com/photo-1600607687305-0fef8b1f87a5?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "IoT devices collect soil moisture data to automatically adjust watering schedules.",
  },
  {
    id: 5,
    title: "Waste-to-Bricks Initiative",
    image:
      "https://images.unsplash.com/photo-1565194644521-12a3301d5f1a?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "Recycling waste plastics into affordable, durable bricks for construction.",
  },
  {
    id: 6,
    title: "Urban Green Spaces",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "Developing eco-friendly public parks and green spaces in urban areas to improve air quality and community wellbeing.",
  },
  {
    id: 7,
    title: "Bridge Seismic Retrofit",
    image:
      "https://images.unsplash.com/photo-1533587851505-30c5f34e7e11?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "Upgrading existing bridges to withstand earthquakes using modern engineering techniques and materials.",
  },
  {
    id: 8,
    title: "Renewable Energy Campus",
    image:
      "https://images.unsplash.com/photo-1517817748944-4b0190ef0f64?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "Installing solar panels and wind turbines across campus buildings to create a self-sustaining renewable energy ecosystem.",
  },
  {
    id: 9,
    title: "Smart Traffic Management",
    image:
      "https://images.unsplash.com/photo-1532375810709-6ee0e9e0b87e?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "Intelligent traffic lights and sensors reduce congestion and improve commute times in busy urban areas.",
  },
];

export default function Projects() {
  return (
    <div className="home-container">
      <section className="featured" style={{ paddingTop: "80px" }}>
        <h2>Our Projects</h2>

        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ marginBottom: "30px" }}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
              <Link to={`/project/${project.id}`}>Learn More</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
