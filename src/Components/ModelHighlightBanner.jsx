import React from 'react';
import './ModelHighlightBanner.css';

const ModelHighlightBanner = () => {
  return (
    <section className="model-highlight-section">
      {/* Lớp phủ hơi tối để chữ dễ đọc hơn trên nền ảnh nhiều chi tiết */}
      <div className="highlight-overlay"></div>
      
      <div className="highlight-content">
        <h2>MODEL HIGHLIGHT</h2>
        <p>2023+ NISSAN Z</p>
        <a href="" className="shop-btn">Shop Now</a>
      </div>
    </section>
  );
};

export default ModelHighlightBanner;