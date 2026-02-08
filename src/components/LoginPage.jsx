import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage({ userType }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to respective dashboard after login
    if (userType === 'patient') {
      navigate('/patient/dashboard');
    } else if (userType === 'doctor') {
      navigate('/doctor/dashboard');
    }
  };

  const handleBackClick = () => {
    navigate('/');
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

      <div className="login-content">
        <div className="login-illustration">
          <img 
            src={userType === 'patient' 
              ? "/medical-nurse-attaching-oxymeter-senior-woman-patient.jpg"
              : "/african-american-doctor-analyzing-medical-reports-with-her-colleagues-clinic.jpg"
            }
            alt={userType === 'patient' ? 'Patient care' : 'Medical professional'}
            className="login-side-image"
          />
        </div>
        <div className="login-form-wrapper">
          <div className="login-card">
            <button className="back-btn" onClick={handleBackClick}>
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
      </div>
    </div>
  );
}
