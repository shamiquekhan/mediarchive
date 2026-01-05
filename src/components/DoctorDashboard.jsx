import React, { useState } from 'react';
import './DoctorDashboard.css';

export default function DoctorDashboard({ onLogout }) {
  const [searchPatient, setSearchPatient] = useState('');
  const [activeFilter, setActiveFilter] = useState('6M');

  const doctorInfo = {
    name: 'Dr. Anjali Rao',
    specialization: 'Cardiologist'
  };

  const patientData = {
    name: 'Aarav Sharma',
    healthId: '12-3456-7890-1234',
    age: '45',
    gender: 'Male'
  };

  const medicalHistory = [
    {
      date: '14 August 2023',
      type: 'Routine Check-up',
      doctor: 'Dr. Priya Singh - General Physician',
      diagnosis: 'Stable, no new concerns.',
      notes: 'Advised to continue current medication and monitor blood pressure weekly'
    },
    {
      date: '22 May 2023',
      type: 'Prescription Refill',
      doctor: 'Dr. Anjali Rao - Cardiologist',
      diagnosis: '',
      notes: ''
    },
    {
      date: '05 January 2023',
      type: 'Lab Report: Lipid Panel',
      doctor: 'Metropolis Labs',
      diagnosis: '',
      notes: ''
    }
  ];

  const vitals = [
    { name: 'Blood Pressure', value: '120/80 mmHg', status: 'normal' },
    { name: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { name: 'SpO2', value: '98%', status: 'normal' }
  ];

  const handleViewReport = (entry) => {
    alert(`View Full Report\n\nDate: ${entry.date}\nType: ${entry.type}\nDoctor: ${entry.doctor}${entry.diagnosis ? '\nDiagnosis: ' + entry.diagnosis : ''}${entry.notes ? '\nNotes: ' + entry.notes : ''}`);
  };

  const handleAddEntry = () => {
    alert('Add New Entry - Feature coming soon!\n\nThis will open a form to add new medical records.');
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    alert(`Showing data for: ${filter === '6M' ? '6 Months' : filter === '1Y' ? '1 Year' : 'All Time'}`);
  };

  const handleSearch = (e) => {
    setSearchPatient(e.target.value);
    if (e.target.value) {
      alert(`Searching for patient: ${e.target.value}`);
    }
  };

  return (
    <div className="doctor-dashboard">
      {/* Header */}
      <div className="doctor-header">
        <div className="header-left">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h1 className="header-logo">MediArchive</h1>
        </div>
        <div className="header-search">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search Patient" 
            value={searchPatient}
            onChange={handleSearch}
          />
        </div>
        <div className="header-right">
          <button className="notification-btn" onClick={() => alert('Notifications\n\n• New lab report available\n• Appointment reminder: 3:00 PM\n• Patient message received')}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="doctor-profile">
            <div className="profile-avatar">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="profile-info">
              <strong>{doctorInfo.name}</strong>
              <span>{doctorInfo.specialization}</span>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-layout">
        {/* Left Column */}
        <div className="left-column">
          {/* Patient Card */}
          <div className="patient-card">
            <div className="patient-photo">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="#E0E7FF"/>
                <circle cx="50" cy="35" r="15" stroke="#3B82F6" strokeWidth="3"/>
                <path d="M25 75c0-13.807 11.193-25 25-25s25 11.193 25 25" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h2>{patientData.name}</h2>
            <p className="health-id">Health ID: {patientData.healthId}</p>
            <p className="patient-details">{patientData.gender}, {patientData.age} years</p>
            <button 
              className="contact-btn"
              onClick={() => alert(`Contact Details\n\n${patientData.name}\nPhone: +91 98765 43210\nEmail: aarav.sharma@email.com\nAddress: Mumbai, Maharashtra`)}
            >
              View Contact Details
            </button>
          </div>

          {/* Key Vitals */}
          <div className="key-vitals">
            <h3>Key Vitals</h3>
            {vitals.map((vital, index) => (
              <div key={index} className="vital-item">
                <span className="vital-label">{vital.name}</span>
                <div className="vital-value-row">
                  <strong className="vital-value">{vital.value}</strong>
                  <span className="vital-status">●</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="links-placeholder">
              {/* Placeholder for additional links */}
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="center-column">
          <div className="section-header">
            <h2>Medical History</h2>
            <button className="add-entry-btn" onClick={handleAddEntry}>+ Add New Entry</button>
          </div>

          <div className="timeline">
            {medicalHistory.map((entry, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{entry.date}</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{entry.type}</h4>
                    <button className="expand-btn" onClick={() => alert('Expand/Collapse - Feature coming soon!')}>∨</button>
                  </div>
                  <p className="timeline-doctor">{entry.doctor}</p>
                  {entry.diagnosis && (
                    <>
                      <p className="timeline-diagnosis"><strong>Diagnosis:</strong> {entry.diagnosis}</p>
                      {entry.notes && (
                        <p className="timeline-notes"><strong>Notes:</strong> {entry.notes}</p>
                      )}
                      <button 
                        className="view-report-link" 
                        onClick={() => handleViewReport(entry)}
                      >
                        View Full Report
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <h2>Analytics & Trends</h2>

          {/* Blood Pressure Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <h3>Blood Pressure</h3>
              <div className="chart-filters">
                <button 
                  className={`filter-btn ${activeFilter === '6M' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('6M')}
                >
                  6M
                </button>
                <button 
                  className={`filter-btn ${activeFilter === '1Y' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('1Y')}
                >
                  1Y
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('All')}
                >
                  All
                </button>
              </div>
            </div>
            <div className="chart-legend">
              <span className="legend-item systolic">Systolic (in mmHg)</span>
              <span className="legend-item diastolic">Diastolic (in mmHg)</span>
            </div>
            <div className="chart-container">
              <svg viewBox="0 0 400 200" className="chart-svg">
                <polyline
                  points="10,120 60,100 110,90 160,95 210,85 260,75 310,80 360,70"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="2"
                />
                <polyline
                  points="10,160 60,150 110,140 160,145 210,135 260,130 310,132 360,125"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Blood Sugar Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <h3>Blood Sugar (HbA1c)</h3>
              <div className="chart-filters">
                <button 
                  className={`filter-btn ${activeFilter === '6M' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('6M')}
                >
                  6M
                </button>
                <button 
                  className={`filter-btn ${activeFilter === '1Y' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('1Y')}
                >
                  1Y
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('All')}
                >
                  All
                </button>
              </div>
            </div>
            <div className="chart-info">
              <span className="chart-label">HbA1c levels in % of target range</span>
            </div>
            <div className="chart-container">
              <svg viewBox="0 0 400 200" className="chart-svg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                <polyline
                  points="10,180 60,165 110,150 160,140 210,125 260,110 310,95 360,80"
                  fill="url(#gradient)"
                  stroke="#DC2626"
                  strokeWidth="2"
                />
              </svg>
              <div className="trend-value">
                <span className="trend-number">5.2</span>
                <span className="trend-label">Current A1C %</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
