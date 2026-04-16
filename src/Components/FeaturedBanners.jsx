import React, { useState } from 'react';
import './FeaturesAndReviews.css';

const FeaturesAndReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "Chất lượng tốt và đóng gói đẹp.",
      rating: 5,
      author: "Justin Toleran",
      product: "Bộ tản nhiệt CSF 00-10 cho Honda S2000"
    },
    {
      id: 2,
      text: "Giao hàng siêu nhanh, hàng chuẩn JDM 100%. Rất đáng tiền!",
      rating: 5,
      author: "Nguyen Cuong Thinh",
      product: "Mâm Volk Racing TE37"
    },
    {
      id: 3,
      text: "Nhân viên tư vấn rất nhiệt tình, sẽ ủng hộ Shop dài dài.",
      rating: 5,
      author: "Hoang Nam",
      product: "Vô lăng Nardi Classic"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <div className="features-reviews-container">
      <div className="features-section">
        <div className="feature-box">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
          </div>
          <h3>Vận chuyển</h3>
          <p>Hãy mua sắm với sự tự tin vì sản phẩm của chúng tôi được lựa chọn và vận chuyển cẩn thận. Thời gian vận chuyển có thể dao động từ 14-21 ngày làm việc tùy thuộc vào sản phẩm bạn đã mua.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <h3>Thật</h3>
          <p>Trải nghiệm sự tuyệt vời của ShopJDM. Điểm đến đáng tin cậy của bạn cho các sản phẩm nội địa Nhật Bản chính hãng.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
             <svg viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          </div>
          <h3>Thông tin hữu ích</h3>
          <p>Hãy theo dõi chúng tôi trên mạng xã hội để cập nhật những xu hướng, sự kiện trong ngành và nội dung độc quyền hậu trường.</p>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Khách hàng đang nói rằng</h2>
        <div className="review-summary">
          ★★★★★ 4.90 / 5 (30) <span className="verified">✔ Đã xác minh</span>
        </div>

        <div className="review-slider">
          <div className="quote-icon">❞</div>
          <p className="review-text">{reviews[currentIndex].text}</p>
          <div className="review-stars">★★★★★</div>
          <p className="review-author">{reviews[currentIndex].author} <span>✔</span></p>
          <a href="#" className="review-product">{reviews[currentIndex].product}</a>
        </div>

        {/* ĐÂY LÀ 2 CÁI NÚT LÚC NÃY NGÀI BỎ QUÊN NÀY */}
        <div className="slider-controls">
          <button onClick={prevReview} className="slider-btn">❮</button>
          <button onClick={nextReview} className="slider-btn">❯</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndReviews;