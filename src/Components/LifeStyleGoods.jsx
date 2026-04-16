import React from 'react';
import './LifeStyleGoods.css';

const LifeStyleGoods = () => {
  const goods = [
    { 
      title: "APPAREL COLLECTION", 
      count: "1208 products", 
      img: "/public/car4.jpg" 
    },
    { 
      title: "BANNERS + STICKERS", 
      count: "73 products", 
      img: "/public/car8.jpg" 
    },
    { 
      title: "EVERYDAY ITEMS", 
      count: "84 products", 
      img: "/public/car7.jpg" 
    },
    { 
      title: "TOOLS", 
      count: "879 products", 
      img: "/public/car6.avif" 
    },
    { 
      title: "DECOR", 
      count: "12 products", 
      img: "/public/car5.jpg" 
    }
  ];

  return (
    <section className="lifestyle-goods-section">
      <div className="lifestyle-header">
        <h2>Life Style Goods</h2>
        <div className="header-line"></div>
        <button className="view-all-btn">
          {/* Icon lưới 4 ô vuông nhỏ */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          View all
        </button>
      </div>
      
      <div className="lifestyle-grid">
        {goods.map((item, index) => (
          <a href="" className="lifestyle-card" key={index}>
            <div className="lifestyle-img-wrapper">
              <img src={item.img} alt={item.title} />
              {/* Lớp phủ gradient đen ở dưới đáy ảnh */}
              <div className="lifestyle-gradient"></div>
            </div>
            <div className="lifestyle-content">
              <h3>{item.title}</h3>
              <p>{item.count}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LifeStyleGoods;