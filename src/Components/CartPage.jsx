import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  // Dữ liệu giỏ hàng chuẩn JDM
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mâm Volk Racing TE37 (18x9.5)",
      brand: "RAYS ENGINEERING",
      price: 850.00,
      quantity: 1,
      image: "../public/car10.jpg" // Icon mâm xịn
    },
    {
      id: 2,
      name: "Vô Lăng Nardi Classic 330mm",
      brand: "NARDI TORINO",
      price: 320.00,
      quantity: 1,
      image: "../public/car24.jpg" // Icon vô lăng
    }
  ]);

  // Các nút bấm tăng/giảm/xóa
  const increaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="jdm-cart-bg">
      <div className="jdm-cart-container">
        
        {/* Tiêu đề ngầu lòi */}
        <div className="cart-header-title">
          <h1>JDM <span className="neon-red">GARAGE CART</span></h1>
          <p>Kiểm tra phụ tùng trước khi xuống đường đua</p>
        </div>

        <div className="cart-layout">
          
          {/* CỘT TRÁI: DANH SÁCH MÓN HÀNG */}
          <div className="cart-items-wrapper">
            {cartItems.length === 0 ? (
              <div className="empty-cart-msg">Giỏ hàng trống. Hãy ra gara nhặt thêm đồ!</div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="jdm-cart-item">
                  <div className="item-img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-info">
                    <span className="item-brand">{item.brand}</span>
                    <h3 className="item-name">{item.name}</h3>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>Xóa khỏi xe</button>
                  </div>

                  <div className="item-qty-price">
                    <div className="item-price">${item.price.toFixed(2)}</div>
                    <div className="qty-controls">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                    <div className="item-subtotal-red">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CỘT PHẢI: BILL THANH TOÁN */}
          <div className="cart-summary-wrapper">
            <h2>TÓM TẮT ĐƠN HÀNG</h2>
            <div className="summary-details">
              <div className="summary-line">
                <span>Tạm tính</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Phí vận chuyển</span>
                <span>Tính lúc giao</span>
              </div>
              <div className="summary-total-line">
                <span>TỔNG THIỆT HẠI</span>
                <span className="neon-total">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className={`checkout-btn-vip ${cartTotal > 0 ? 'active' : ''}`}
              onClick={() => cartTotal > 0 ? alert('Đang bơm xăng... Chuyển qua thanh toán!') : alert('Xe trống trơn, mua gì đi sếp!')}
            >
              ĐẠP GA THANH TOÁN
            </button>
            
            <Link to="/" className="back-to-shop-link">❮ Trở lại Showroom</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;