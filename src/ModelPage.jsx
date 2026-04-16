import React from 'react';
import './ModelPage.css';

const ModelPage = () => {
  const categories = [
    { name: "Brakes", img: "/car31.jpg" },
    { name: "Cooling", img: "/car32.jpg" },
    { name: "Drivetrain", img: "/car33.jpg" },
    { name: "Engine", img: "/car34.jpg" },
    { name: "Exhaust", img: "/car35.jpg" },
    { name: "Exterior", img: "/car36.jpg" },
    { name: "Intake", img: "/car37.jpg" },
    { name: "Interior", img: "/car38.jpg" }
  ];

  return (
    <div className="model-page-container">
      {/* Thanh Select Model */}
      <div className="select-model-bar">Select Model</div>

      {/* Khu vực chia đôi WRX và STI giống video */}
      <div className="split-models-container">
        <div className="split-card">
          <img src="/car39.jpg" alt="WRX" />
          <div className="split-overlay">
            <h2>WRX</h2>
          </div>
        </div>
        <div className="split-card">
          <img src="/car40.jpg" alt="STI" />
          <div className="split-overlay">
            <h2>STI</h2>
          </div>
        </div>
      </div>

      {/* Khu vực All Products */}
      <div className="all-products-section">
        <h2>All Products</h2>
        <div className="header-line"></div>
        <div className="all-products-grid">
          {categories.map((cat, index) => (
            <div className="product-category-card" key={index}>
              <div className="cat-img-wrapper">
                <img src={cat.img} alt={cat.name} />
              </div>
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelPage;