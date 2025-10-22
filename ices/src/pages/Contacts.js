import React, { useState } from "react";
import "./Home.css"; // reuse CSS

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="home-container">
      <section className="hero" style={{ padding: "100px 20px" }}>
        <div className="hero-text" style={{ width: "100%" }}>
          <h1>Contact Us</h1>
          <p>
            Have questions or want to get involved? Fill out the form below and
            we’ll get back to you as soon as possible.
          </p>

          <form 
            onSubmit={handleSubmit} 
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              maxWidth: "600px"
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "6px",
                border: "1px solid #1b4d3e"
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "6px",
                border: "1px solid #1b4d3e"
              }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "6px",
                border: "1px solid #1b4d3e"
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#1b4d3e",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
