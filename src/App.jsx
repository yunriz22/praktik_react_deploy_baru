import React, { useState } from 'react';
import './App.css';

function App() {
  const [powerOn, setPowerOn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleTurnOn = () => {
    if (powerOn) return;
    setPowerOn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selamat datang, ${username}! Login Berhasil.`);
  };

  return (
    <div className="workspace-container">
      <div className="header-text">
        <h1 className="main-title">Digital Workspace</h1>
        <p className="main-subtitle">
          {!powerOn ? "Klik layar laptop di bawah untuk menyalakan sistem" : "Sistem aktif. Silakan login."}
        </p>
      </div>

      <div className="workspace-layout">
        
        {/* Sisi Kiri: Ilustrasi Laptop (Flat Design) sebagai Saklar */}
        <div className={`macbook-wrapper ${powerOn ? 'turned-on' : ''}`} onClick={handleTurnOn} title={!powerOn ? "Klik untuk menyalakan" : ""}>
          <div className="macbook-screen">
            <div className="camera-dot"></div>
            <div className="display-area">
              {!powerOn && <div className="screen-off"></div>}
              {powerOn && (
                <div className="screen-on">
                  <div className="screen-logo"></div>
                  <div className="screen-status">System Online</div>
                </div>
              )}
            </div>
          </div>
          <div className="macbook-base">
            <div className="base-top-groove"></div>
            <div className="touchpad-dent"></div>
          </div>
          <div className="macbook-bottom-edge"></div>
        </div>

        {/* Sisi Kanan: Form Login yang BARU MUNCUL setelah laptop diklik */}
        <div className={`login-card-wrapper ${powerOn ? 'active' : ''}`}>
          <div className="login-card">
            <h2>Sign In</h2>
            <p className="card-desc">Masukkan akun akses workspace Anda</p>

            <form onSubmit={handleSubmit} className="main-form">
              <div className="input-group">
                <label>Username / Email</label>
                <input
                  type="text"
                  placeholder="cth: student_cs"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Masuk ke Sistem
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;