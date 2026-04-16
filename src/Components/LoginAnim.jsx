import React, { useState, useRef, useEffect } from 'react';
import './LoginAnim.css';

const LoginAnim = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Xử lý mắt di chuyển theo chuột
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Tính toán vị trí con ngươi
  const pupilTransform = `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`;

  // Trạng thái của nhân vật
  const getCharacterState = () => {
    if (isFocusedPassword && !showPassword) return "hiding";
    if (isFocusedEmail || showPassword) return "watching";
    return "idle";
  };

  const charState = getCharacterState();

  return (
    <div className="login-anim-container" ref={containerRef}>
      
      {/* KHU VỰC TRÁI: CÁC NHÂN VẬT HOẠT HÌNH */}
      <div className="characters-section">
        <div className="characters-wrapper">
          
          {/* Nhân vật Tím (Hình nón/chữ nhật) */}
          <div className={`char-shape char-purple ${charState}`}>
            <div className="eyes-container">
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
            </div>
            <div className="mouth"></div>
            {charState === 'hiding' && <div className="hands-covering"></div>}
          </div>

          {/* Nhân vật Đen */}
          <div className={`char-shape char-black ${charState}`}>
             <div className="eyes-container">
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
            </div>
            <div className="mouth"></div>
            {charState === 'hiding' && <div className="hands-covering"></div>}
          </div>

          {/* Nhân vật Cam */}
          <div className={`char-shape char-orange ${charState}`}>
             <div className="eyes-container">
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
            </div>
            <div className="mouth"></div>
            {charState === 'hiding' && <div className="hands-covering"></div>}
          </div>

          {/* Nhân vật Vàng */}
          <div className={`char-shape char-yellow ${charState}`}>
             <div className="eyes-container">
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
              <div className="eye">
                {charState !== 'hiding' ? <div className="pupil" style={{ transform: pupilTransform }}></div> : <div className="eye-closed"></div>}
              </div>
            </div>
            <div className="mouth mouth-smile"></div>
            {charState === 'hiding' && <div className="hands-covering"></div>}
          </div>

        </div>
      </div>

      {/* KHU VỰC PHẢI: FORM ĐĂNG NHẬP */}
      <div className="form-section">
        <div className="login-box">
          <h2>Welcome back!</h2>
          <p className="subtitle">Please enter your details.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
              />
            </div>

            <div className="input-group password-group">
              <label>Password</label>
              <div className="password-input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️‍🗨️" : "👁️"} {/* Thay bằng icon SVG nếu có */}
                </button>
              </div>
            </div>

            <div className="form-actions">
              <label className="remember-me">
                <input type="checkbox" /> Remember for 30 days
              </label>
              <a href="#" className="forgot-pass">Forgot password</a>
            </div>

            <button type="submit" className="btn-login">Log in</button>
            
            <button type="button" className="btn-google">
              <img src="./public/GOOGLE.png" alt="Google" />
              Log in with Google
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default LoginAnim;