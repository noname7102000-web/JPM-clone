import React from 'react';
import './WhatsNew.css';

const WhatsNew = () => {
  // Dữ liệu sản phẩm trích xuất từ hình ảnh của bệ hạ
  const products = [
    {
      id: 1,
      name: "Mishimoto 2022+ Subaru WRX Shift Knob World Rally Blue",
      img: "./public/car25.jpg",
      oldPrice: "$111.00",
      discountAmount: "-$10.05",
      newPrice: "$100.95",
      saveTag: "Save $10.05"
    },
    {
      id: 2,
      name: "Mishimoto 2023+ Honda Civic Type R Oil Cooler Kit - Black",
      img: "./public/car26.jpg",
      oldPrice: "$880.00",
      discountAmount: "-$80.05",
      newPrice: "$799.95",
      saveTag: "Save $80.05"
    },
    {
      id: 3,
      name: "Mishimoto 2025+ Dodge RAM 1500 License Plate Relocation Kit",
      img: "./public/car27.jpg",
      oldPrice: "$110.00",
      discountAmount: "-$10.05",
      newPrice: "$99.95",
      saveTag: "Save $10.05"
    },
    {
      id: 4,
      name: "Mishimoto 2011-2014 Ford F-150 EcoBoost Intercooler - Black",
      img: "./public/car28.jpg",
      oldPrice: "$1,100.00",
      discountAmount: "-$100.05",
      newPrice: "$999.95",
      saveTag: "Save $100.05"
    },
    {
      id: 5,
      name: "Mishimoto 2024+ Toyota Tacoma Silicone Coolant Hose Kit - AT - Red",
      img: "./public/car12.jpg",
      oldPrice: "$370.00",
      discountAmount: "-$34.05",
      newPrice: "$335.95",
      saveTag: "Save $34.05"
    },
    {
      id: 6,
      name: "Mishimoto Universal Silicone Hose",
      img: "./public/car13.jpg",
      oldPrice: "$45.00",
      discountAmount: "-$5.00",
      newPrice: "$40.00",
      saveTag: "Save $5.00"
    }
  ];

  return (
    <section className="whats-new-section">
      {/* Phần Header */}
      <div className="section-header">
        <h2>What's New?</h2>
        <div className="header-line"></div>
        <div className="header-actions-wrapper">
          <button className="view-all-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            View all
          </button>
          
          {/* Nút điều hướng Slider */}
          <div className="slider-nav">
            <button className="nav-btn prev-btn">&minus;</button>
            <button className="nav-btn next-btn">&gt;</button>
          </div>
        </div>
      </div>

      {/* Phần Slider Sản Phẩm */}
      <div className="products-slider">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="save-badge">{product.saveTag}</div>
            
            <div className="product-img-wrapper">
              <img src={product.img} alt={product.name} />
            </div>
            
            <h3 className="product-title">{product.name}</h3>
            
            <div className="product-pricing">
              <div className="price-top">
                <span className="old-price">{product.oldPrice}</span>
                <span className="discount-amount">{product.discountAmount}</span>
              </div>
              <div className="new-price">{product.newPrice}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;