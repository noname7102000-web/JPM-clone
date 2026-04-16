import React from 'react';
import './WheelsSection.css';

const WheelsSection = () => {
  const wheels = [
    { name: "Advan Wheels", img: "./public/wheels 1.jpg" },
    { name: "Gram Lights Wheels", img: "./public/wheels 2.jpg" },
    { name: "SSR Wheels", img: "./public/wheels 3.jpg" },
    { name: "Work Wheels", img: "/public/wheels 4.jpg" },
    { name: "WedsSport Wheels", img: "./public/wheels 5.jpg" }
  ];

  return (
    <section className="wheels-section">
      <div className="section-header">
        <h2>WHEELS</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="wheels-grid">
        {wheels.map((wheel, index) => (
          <a href="" className="wheel-card" key={index}>
            <div className="wheel-img-wrapper">
              <img src={wheel.img} alt={wheel.name} />
              <div className="wheel-gradient"></div>
            </div>
            <div className="wheel-content">
              <h3>{wheel.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WheelsSection;