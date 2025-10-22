import React from "react";
import "./Department.css";

export default function Department() {
  const hierarchy = [
    {
      title: "Head of Department",
      name: "Associate Prof. Kafodya",
      children: [
        {
          title: "ICES President",
          name: "Samson Namanya",
          children: [
            { title: "Vice Presdient ", name: "Hope Tsonga " },
            { title: " 2", name: " 2" },
          ],
        },
        {
          title: "Executive Members",
          name: " ?",
          children: [
            { title: " ?", name: " ?" },
            { title: " ?", name: " ?" },
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
          <h3>{node.title}</h3>
          <p>{node.name}</p>
        </div>
        {node.children && (
          <ul>
            {node.children.map((child, index) => (
              <React.Fragment key={index}>
                {renderHierarchy(child)}
              </React.Fragment>
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
          <React.Fragment key={index}>
            {renderHierarchy(node)}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
