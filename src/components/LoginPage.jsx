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
        <div className="logo-container">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h1 className="logo">MediArchive</h1>
        </div>
        <button className="about-btn" onClick={handleAboutClick}>
          <svg className="about-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 11v5M12 8v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
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
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Login as Patient
            </button>
            <button className="action-btn doctor-btn" onClick={() => setUserType('doctor')}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
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
