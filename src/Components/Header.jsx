import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // Dữ liệu toàn bộ menu được trích xuất từ ảnh của bạn
  const menuData = [
    { title: "CARS FOR SALE", type: "link" },
    { 
      title: "MERCH & EXCLUSIVES", 
      type: "dropdown", 
      items: ["In House Exclusives", "Apparel", "Accessories", "Car Accessories", "JDM Garage Paddock", "ShopJDM Brand Merch", "Tools"] 
    },
    { 
      title: "HONDA / ACURA", 
      type: "dropdown", 
      items: ["K Series", "2017-2021 Civic Type R (FK8)", "2017-2020 Civic Si", "2023-2025 Civic Type R (FL5)", "2021-2024 Civic Si", "2023-2024 Integra (DE4)", "2002-2006 RSX", "2000-2009 S2000"] 
    },
    { 
      title: "MAZDA", 
      type: "dropdown", 
      items: ["1985-1992 RX-7 (FC)", "1993-2002 RX-7 (FD)", "1990-1997 Miata (NA)", "1998-2005 Miata (NB)", "2006-2015 Miata (NC)", "2015-2024 Miata (ND)"] 
    },
    { 
      title: "MITSUBISHI", 
      type: "dropdown", 
      items: ["1990-1994 Eclipse / Talon (1G DSM)", "1995-1999 Eclipse / Talon (2G DSM)", "2003-2007 Evolution (8/9)", "2008-2015 Evolution X", "4G63"] 
    },
    { 
      title: "NISSAN / INFINITI", 
      type: "dropdown-2col", // Nissan có 2 cột
      items: [
        "2023-2024 Nissan Z (RZ34)", "2009-2020 Nissan 370Z (Z34)", 
        "2003-2008 Nissan 350Z (Z33)", "2003-2007 Infiniti G35",
        "2009-2013 Infiniti G37", "2009-2024 Nissan GTR (R35)",
        "1989-1994 Nissan Skyline (R32)", "1989-1994 Nissan 240SX / 180SX / Silvia (S13)",
        "1995-1998 Nissan 240SX / Silvia (S14)", "1999-2001 Nissan Silvia S15",
        "2017-2024 Infiniti Q50", "2017-2022 Infiniti Q60",
        "SR20DET", "RB20/RB25/RB26"
      ] 
    },
    { 
      title: "SUBARU", 
      type: "mega", 
      columns: [
        { header: "2013-2021 BRZ", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] },
        { header: "2022-2024 BRZ", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] },
        { header: "2022-2025 WRX", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] },
        { header: "2015-2021 WRX", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] },
        { header: "2015-2021 STI", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Intake", "Interior", "Suspension", "Exterior"] },
        { header: "2008-2014 WRX", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] }
      ]
    },
    { 
      title: "TOYOTA", 
      type: "mega", 
      columns: [
        { header: "2019-2025 Supra (A90/A91)", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] },
        { header: "2022-2024 GR86 (ZN8)", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] },
        { header: "2013-2021 86 / FR-S (ZN6)", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] },
        { header: "2023-2025 GR Corolla (GZEA14)", links: ["Brakes", "Cooling", "Drivetrain", "Engine", "Exhaust", "Exterior", "Intake", "Interior", "Suspension"] }
      ]
    },
    { 
      title: "UNIVERSAL PARTS / WHEELS", 
      type: "mega", 
      columns: [
        { header: "All Wheel / Tire", links: ["4x100", "4x114.3", "5x100", "5x112", "5x114.3", "5x120", "5x130"] },
        { header: "Interior Tuning", links: ["Gauges, Gauge Pods, and Accessories", "Seat Belts / Harnesses", "Seats", "Steering Wheels", "Steering Wheel Quick Release Adapters"] },
        { header: "Fabrication / DIY", links: ["Exhaust Fabrication", "DIY Intercooler Kits / Fabrication", "DIY Parts"] },
        { header: "Wheels by Brand", links: ["Advan Wheels", "Enkei Wheels", "Gram Lights Wheels", "SSR Wheels", "Volk Racing Wheels", "WedsSport Wheels", "Work Wheels"] }
      ]
    },
    { title: "REWARDS", type: "link" }
  ];

  return (
    <header className="jdm-header">
      <div className="top-bar">
        <div className="top-bar-content">
          <span className="star-icon">☆</span>
          <span>Buy Now, Pay Later! Check out our financing options.</span>
        </div>
      </div>

      <div className="main-header">
        <div className="logo">
          <img src="/3.jpg" alt="ShopJDM" />
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="header-actions">
          
          {/* ĐÂY LÀ CHÌA KHÓA ĐỂ QUA TRANG ĐĂNG NHẬP */}
          <Link to="/login" className="user-icon" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            👤 {/* Nếu ngài xài icon màu tím cũ thì cứ giữ nguyên cái icon ở giữa này nhé */}
          </Link>

          {/* Dưới này là Giỏ hàng của ngài... */}
          {/* Nút Giỏ hàng ĐÃ ĐƯỢC YỂM BÙA CHUYỂN TRANG */}
          <Link to="/cart" className="cart-container" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="cart-icon-wrapper">
              🛒 <span className="cart-count">2</span>
            </div>
            <div className="cart-info">
              <span className="subtotal-label">Subtotal</span>
              <span className="price">$1150.00</span>
            </div>
          </Link>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          {/* Lặp qua mảng menuData để in ra giao diện */}
          {menuData.map((menuItem, index) => (
            <li 
              key={index} 
              className={
                menuItem.type === 'dropdown' || menuItem.type === 'dropdown-2col' ? 'has-dropdown' : 
                menuItem.type === 'mega' ? 'has-mega-menu' : ''
              }
            >
              {menuItem.title} {menuItem.type !== 'link' && <span className="arrow">▼</span>}
              
              {/* Render Dropdown 1 cột */}
              {menuItem.type === 'dropdown' && (
                <div className="dropdown-menu">
                  {menuItem.items.map((link, i) => (
                    <a href="" key={i}>{link}</a>
                  ))}
                </div>
              )}

              {/* Render Dropdown 2 cột (Dành cho Nissan) */}
              {menuItem.type === 'dropdown-2col' && (
                <div className="dropdown-menu dropdown-2col">
                  {menuItem.items.map((link, i) => (
                    <a href="" key={i}>{link}</a>
                  ))}
                </div>
              )}

              {/* Render Mega Menu nhiều cột */}
              {menuItem.type === 'mega' && (
                <div className="mega-menu">
                  <div className="mega-container">
                    {menuItem.columns.map((col, colIndex) => (
                      <div className="mega-column" key={colIndex}>
                        <h4>{col.header}</h4>
                        {col.links.map((link, linkIndex) => (
                          <a href="" key={linkIndex}>{link}</a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;