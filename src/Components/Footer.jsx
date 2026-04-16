import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="jdm-footer">
      <div className="footer-container">
        
        {/* CỘT 1: LOGO, LIÊN HỆ VÀ NÚT MẠNG XÃ HỘI */}
        <div className="footer-column">
          <div className="footer-logo">
            <h2>SHOP<span className="jdm-red">JDM</span></h2>
          </div>
          <ul className="contact-info">
            <li>🏠 2475 Fairfield Ave, Bridgeport, CT 06605</li>
            <li>📞 <a href="tel:203-666-7835">203-666-7835</a></li>
            <li>✉️ <a href="mailto:Sales@shopjdm.com">Sales@shopjdm.com</a></li>
          </ul>

          {/* Dàn nút mạng xã hội đã được vi thần chèn ngay đây */}
          <div className="social-links" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#ff0000', fontSize: '24px', textDecoration: 'none', transition: 'transform 0.2s' }}>▶️</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#1877f2', fontSize: '24px', textDecoration: 'none', transition: 'transform 0.2s' }}>📘</a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" style={{ color: '#5865F2', fontSize: '24px', textDecoration: 'none', transition: 'transform 0.2s' }}>👾</a>
          </div>
        </div>

        {/* Cột 2: Những điều cần biết */}
        <div className="footer-column">
          <h3>Những điều cần biết</h3>
          <ul className="footer-links">
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Chính sách vận chuyển</a></li>
            <li><a href="#">Chính sách hoàn tiền</a></li>
          </ul>
        </div>

        {/* Cột 3: Liên kết nhanh */}
        <div className="footer-column">
          <h3>Liên kết nhanh</h3>
          <ul className="footer-links">
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Liên hệ với chúng tôi</a></li>
            <li><a href="#">Giảm giá dành cho quân nhân / nhân viên cứu hộ</a></li>
          </ul>
        </div>

        {/* Cột 4: Tuyên ngôn sứ mệnh */}
        <div className="footer-column mission-column">
          <h3>Tuyên ngôn sứ mệnh của ShopJDM</h3>
          <p>Là một công ty, Shop JDM cam kết mang đến cho khách hàng sự kết nối cá nhân. Chúng tôi tự hào chia sẻ niềm đam mê với môn thể thao đua xe, văn hóa xe Nhật Bản, và trên hết, đảm bảo rằng các phụ tùng, phụ kiện chất lượng cao và thông tin hữu ích luôn sẵn có để mang đến trải nghiệm tốt nhất khi mua phụ tùng mới.</p>
          <p>Nếu bạn cần hỗ trợ tìm kiếm bất cứ thứ gì trên trang web của chúng tôi, hoặc thậm chí chỉ cần tư vấn về phụ tùng, vui lòng liên hệ với chúng tôi.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;