import React from "react";
import "./Home.css"; // reuse CSS

export default function Gallery() {
  return (
    <div className="home-container">
      <section className="featured" style={{ paddingTop: "80px" }}>
        <h2>Images</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          <div style={{ height: "200px", backgroundColor: "#c4e3cb", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
            Event Image 1
          </div>
          <div style={{ height: "200px", backgroundColor: "#c4e3cb", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
            Event Image 2
          </div>
          <div style={{ height: "200px", backgroundColor: "#c4e3cb", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
            Project Image 1
          </div>
          <div style={{ height: "200px", backgroundColor: "#c4e3cb", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
            Project Image 2
          </div>
          <div style={{ height: "200px", backgroundColor: "#c4e3cb", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
            Workshop Image
          </div>
          <div style={{ height: "200px", backgroundColor: "#c4e3cb", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
            Seminar Image
          </div>
        </div>
      </section>
    </div>
  );
}
