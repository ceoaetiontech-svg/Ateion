import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay">
        {/* NAVBAR */}
       <div className="navbar-box">
  <div className="navbar">
    {/* Left side logo */}
    <div className="logo">
      <img src={require("../Assets/Ateion-logo.png")} alt="GCO Logo" />
    </div>

    {/* Center nav links */}
    <ul className="nav-links">
      <li><a href="#about" className="nav-item">About us</a></li>
      <li><a href="#workshops" className="nav-item">Workshops ▼</a></li>
      <li><a href="#gco" className="nav-highlight">GCO</a></li>
      <li><a href="#learn" className="nav-item">Learn</a></li>
    </ul>

    {/* Right side button */}
    <button className="btn-primary">Get Connected</button>
  </div>
</div>


        {/* HERO CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">
            Global Capability Olympiad
          </h1>
          <p className="hero-subtitle">
            The Global Capability Olympiad is the world’s first preparation-free,
            syllabus-free, AI-<br />integrated Master Olympiad designed to measure
            thinking, not memory.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-secondary">Contact us</button>
            <button className="btn-black">Explore more</button>
          </div>

          {/* Aligned With Section */}
          <div className="aligned-with">
            <h3 className="aligned-title">Aligned with:</h3>
            <div className="logos">
              <img src={require("../Assets/logo-education.png")} alt="Education Logo" />
              <img src={require("../Assets/logo-eductaion-policy2020.jpg")} alt="Education Policy 2020 Logo" />
              <img src={require("../Assets/logo-education.png")} alt="Partner Logo" />
              <img src={require("../Assets/logo-eductaion-policy2020.jpg")} alt="Education Policy 2020 Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;