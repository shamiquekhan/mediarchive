import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ onLogin }) {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(userType);
    }
  };

  const handleAboutClick = () => {
    alert('MediArchive - Digital Health Records Platform\n\n' +
          'Theme: Digitalization of Health Records\n\n' +
          'Features:\n' +
          '• Unified Health ID System\n' +
          '• Patient Medical Records Management\n' +
          '• Doctor Dashboard with Analytics\n' +
          '• Real-time Health Monitoring\n' +
          '• Secure Data Storage\n\n' +
          'Linking patients, doctors, and hospitals through a single, secure digital health ID.');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="logo">MediArchive</h1>
        <button className="about-btn" onClick={handleAboutClick}>
          <span className="about-icon">ⓘ</span>
          About Project
        </button>
      </div>

      {!userType ? (
        <div className="login-content">
          <div className="hero-section">
            <h1 className="hero-title">One Digital Health Record for Everyone, Accessible Everywhere</h1>
            <p className="hero-subtitle">
              India's unified health data system. Linking patients, doctors, and hospitals through a single, secure digital health ID.
            </p>
          </div>

          <div className="action-buttons">
            <button className="action-btn patient-btn" onClick={() => setUserType('patient')}>
              <span className="btn-icon">👤</span>
              Login as Patient
            </button>
            <button className="action-btn doctor-btn" onClick={() => setUserType('doctor')}>
              <span className="btn-icon">⚕️</span>
              Login as Doctor
            </button>
          </div>
        </div>
      ) : (
        <div className="login-form-wrapper">
          <div className="login-card">
            <button className="back-btn" onClick={() => setUserType(null)}>
              ← Back
            </button>

            <h2 className="form-title">Login as {userType === 'patient' ? 'Patient' : 'Doctor'}</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>{userType === 'patient' ? 'Health ID / Aadhaar' : 'Doctor ID'}</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder={userType === 'patient' ? 'Enter Health ID or Aadhaar' : 'Enter Doctor ID'}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Sign In
              </button>

              <div className="form-footer">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
