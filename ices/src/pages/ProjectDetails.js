// src/pages/ProjectDetails.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Home.css";

const projects = [
  {
    id: 1,
    title: "Smart Drainage System",
    image:
      "https://images.unsplash.com/photo-1613470207337-9d52a3ec0c53?auto=format&fit=crop&w=800&q=80",
    description:
      "A system using sensors to monitor and prevent flooding in urban areas. It integrates technology and civil engineering to create sustainable solutions that reduce damage during heavy rains.",
  },
  {
    id: 2,
    title: "Modular Footbridge",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    description:
      "A low-cost, prefabricated footbridge designed to connect rural communities. Easy to assemble with locally available materials, it improves accessibility and safety for pedestrians.",
  },
  {
    id: 3,
    title: "Green Building Model",
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61c?auto=format&fit=crop&w=800&q=80",
    description:
      "Sustainable building design incorporating renewable energy, rainwater harvesting, and energy-efficient construction techniques. Reduces carbon footprint and promotes eco-friendly urban development.",
  },
  {
    id: 4,
    title: "Smart Irrigation Network",
    image:
      "https://images.unsplash.com/photo-1600607687305-0fef8b1f87a5?auto=format&fit=crop&w=800&q=80",
    description:
      "IoT devices collect soil moisture data to automatically adjust watering schedules. Improves crop yield while conserving water resources.",
  },
  {
    id: 5,
    title: "Waste-to-Bricks Initiative",
    image:
      "https://images.unsplash.com/photo-1565194644521-12a3301d5f1a?auto=format&fit=crop&w=800&q=80",
    description:
      "Recycling waste plastics into affordable, durable bricks for construction. Reduces landfill waste and provides sustainable building materials.",
  },
  {
    id: 6,
    title: "Urban Green Spaces",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
    description:
      "Developing eco-friendly public parks and green spaces in urban areas. Enhances community wellbeing and improves air quality.",
  },
  {
    id: 7,
    title: "Bridge Seismic Retrofit",
    image:
      "https://images.unsplash.com/photo-1533587851505-30c5f34e7e11?auto=format&fit=crop&w=800&q=80",
    description:
      "Upgrading existing bridges to withstand earthquakes using modern engineering techniques and materials. Ensures safety and longevity of critical infrastructure.",
  },
  {
    id: 8,
    title: "Renewable Energy Campus",
    image:
      "https://images.unsplash.com/photo-1517817748944-4b0190ef0f64?auto=format&fit=crop&w=800&q=80",
    description:
      "Installing solar panels and wind turbines across campus buildings to create a self-sustaining renewable energy ecosystem. Reduces energy costs and promotes clean energy education.",
  },
  {
    id: 9,
    title: "Smart Traffic Management",
    image:
      "https://images.unsplash.com/photo-1532375810709-6ee0e9e0b87e?auto=format&fit=crop&w=800&q=80",
    description:
      "Intelligent traffic lights and sensors reduce congestion and improve commute times. Promotes safer and more efficient transportation in urban areas.",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="home-container" style={{ paddingTop: "80px", textAlign: "center" }}>
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  const handlePrev = () => {
    const prevId = projectId === 1 ? projects.length : projectId - 1;
    navigate(`/project/${prevId}`);
  };

  const handleNext = () => {
    const nextId = projectId === projects.length ? 1 : projectId + 1;
    navigate(`/project/${nextId}`);
  };

  return (
    <div className="home-container" style={{ paddingTop: "80px", textAlign: "center" }}>
      <div className="project-card" style={{ flexDirection: "column", maxWidth: "700px", margin: "0 auto" }}>
        <div className="project-image" style={{ width: "100%", maxHeight: "400px", overflow: "hidden" }}>
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-content" style={{ marginTop: "20px" }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-around" }}>
            <button onClick={handlePrev} style={navButtonStyle}>← Previous</button>
            <Link to="/projects" style={navButtonStyle}>Back to Projects</Link>
            <button onClick={handleNext} style={navButtonStyle}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const navButtonStyle = {
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#1b4d3e",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.3s ease",
};

