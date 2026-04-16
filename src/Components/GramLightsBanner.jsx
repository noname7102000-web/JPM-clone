import React from 'react';
import './GramLightsBanner.css';

const GramLightsBanner = () => {
  return (
    <section className="gram-lights-section">
      {/* Lớp phủ mờ giúp chữ trắng nổi bật trên nền thùng carton */}
      <div className="gram-overlay"></div>
      
      <div className="gram-content">
        <h2>GRAM LIGHTS - IN STOCK<br />WHEELS</h2>
        <a href="" className="shop-here-btn">SHOP HERE</a>
      </div>
    </section>
  );
};

export default GramLightsBanner;