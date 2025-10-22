import React from "react";
import "./Department.css";

export default function Department() {
  const hierarchy = [
    {
      title: "Head of Department",
      name: "Associate Prof. Kafodya",
      image: "/images/hod.jpg", // 🖼️ Example image path
      children: [
        {
          title: "ICES President",
          name: "Samson Namanya",
          image: "/images/president.jpg",
          children: [
            { title: "Vice President", name: "Hope Tsonga", image: "/images/vp.jpg" },
            { title: "Secretary", name: "Tadala Banda", image: "/images/secretary.jpg" },
          ],
        },
        {
          title: "Executive Members",
          name: "ICES Executives",
          image: "/images/executive.jpg",
          children: [
            { title: "Treasurer", name: "James Mvula", image: "/images/treasurer.jpg" },
            { title: "Publicity Secretary", name: "Memory Chirwa", image: "/images/publicity.jpg" },
          ],
        },
      ],
    },
  ];

  // Recursive function to render hierarchy
  const renderHierarchy = (node) => {
    return (
      <li>
        <div className="card">
          {node.image && (
            <img
              src={node.image}
              alt={node.name}
              className="profile-img"
            />
          )}
          <h3>{node.title}</h3>
          <p>{node.name}</p>
        </div>
        {node.children && (
          <ul>
            {node.children.map((child, index) => (
              <React.Fragment key={index}>{renderHierarchy(child)}</React.Fragment>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="department-container">
      <h1>Civil Engineering Department Hierarchy</h1>
      <ul className="tree">
        {hierarchy.map((node, index) => (
          <React.Fragment key={index}>{renderHierarchy(node)}</React.Fragment>
        ))}
      </ul>
    </div>
  );
}
