import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TRIỆU HỒI TẤT CẢ CÁC COMPONENT TỪ THƯ MỤC CỦA BỆ HẠ
import Header from './Components/Header';
import Hero from './Components/Hero';
import ModelHighlightBanner from './Components/ModelHighlightBanner';
import WhatsNew from './Components/WhatsNew';
import PromoBanner from './Components/PromoBanner';
import WheelsSection from './Components/WheelsSection';
import GramLightsBanner from './Components/GramLightsBanner';
import PopularModels from './Components/PopularModels';
import FeaturesAndReviews from './Components/FeaturesAndReviews';
import Footer from './Components/Footer';
import CartPage from './Components/CartPage';

// TRANG RIÊNG BIỆT
import LoginAnim from './Components/LoginAnim';
import ModelPage from './ModelPage'; 

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* Header luôn nằm trên đỉnh */}
        <Header />

        <Routes>
          {/* TRANG CHỦ: Chứa TOÀN BỘ các phần từ trên xuống dưới theo đúng ảnh của ngài */}
          <Route path="/" element={
            <>
              <Hero />
              <ModelHighlightBanner /> {/* Banner Nissan Z */}
              <WhatsNew />             {/* Có gì mới */}
              <PromoBanner />          {/* Banner Cobb Tuning / Hoodie / Catch cans */}
              <WheelsSection />        {/* Bánh xe (Advan, Gram Lights...) */}
              <GramLightsBanner />     {/* Banner Thùng Carton Gram Lights */}
              <PopularModels />        {/* Các mẫu xe phổ biến */}
              <FeaturesAndReviews />   {/* Cam kết & Đánh giá khách hàng */}
            </>
          } />

          {/* TRANG ĐĂNG NHẬP */}
          <Route path="/login" element={<LoginAnim />} />

          {/* TRANG CHI TIẾT XE */}
          <Route path="/model-details" element={<ModelPage />} />

          {/* TRANG GIỎ HÀNG: VI THẦN ĐÃ BỔ SUNG Ở ĐÂY Ạ! */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        {/* Footer luôn nằm dưới đáy */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;