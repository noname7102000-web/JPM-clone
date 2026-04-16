import React from 'react';
import './Hero.css';
// Nếu bạn có video tải về máy, hãy bỏ nó vào thư mục assets và import như sau:
// import bgVideo from './assets/your-car-video.mp4';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* 1. Phần Video Background */}
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        {/* Thay src bằng link video của bạn hoặc biến {bgVideo} nếu dùng file nội bộ */}
        <source src="./Drink A Yak - Jidanofu  JDM Edit  Singularity  Phonk 2023 - Singularity (1080p, h264).mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>

      {/* 2. Lớp phủ màu đen mờ để làm nổi bật chữ màu trắng */}
      <div className="hero-overlay"></div>

      {/* 3. Nội dung chữ và nút bấm nổi lên trên */}
      <div className="hero-content">
        <h2 className="hero-title">
          MODEL HIGHLIGHT - 2022+ SUBARU BRZ / TOYOTA GR86
        </h2>
        <a href="" className="shop-now-btn">Shop Now</a>
      </div>
    </div>
  );
};

export default Hero;