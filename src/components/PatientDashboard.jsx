import React, { useState } from 'react';
import './PatientDashboard.css';

export default function PatientDashboard({ onLogout }) {
  const [searchTerm, setSearchTerm] = useState('');

  const patientInfo = {
    name: 'Rajesh Kumar',
    healthId: 'HLTH001',
    aadhaar: '1234-5678-9012',
    age: '45 years',
    bloodGroup: 'O+',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210'
  };

  const medicalRecords = [
    {
      id: 1,
      date: '22 Jul 2023',
      doctor: 'Dr. Anjali Sharma',
      specialization: 'Cardiologist',
      diagnosis: 'Hypertension',
      prescription: 'Amlodipine 5mg',
      action: 'View'
    },
    {
      id: 2,
      date: '15 May 2023',
      doctor: 'Dr. Vikram Singh',
      specialization: 'General Physician',
      diagnosis: 'Viral Fever',
      prescription: 'Paracetamol 650mg',
      action: 'Download'
    },
    {
      id: 3,
      date: '02 Feb 2023',
      doctor: 'Dr. Priya Desai',
      specialization: 'Dermatologist',
      diagnosis: 'Allergic Dermatitis',
      prescription: 'Topical Steroid Cream',
      action: 'N/A'
    },
    {
      id: 4,
      date: '10 Nov 2022',
      doctor: 'Dr. Rohan Mehta',
      specialization: 'Orthopedic',
      diagnosis: 'Minor Ankle Sprain',
      prescription: 'Painkillers & Rest',
      action: 'View X-Ray'
    }
  ];

  const allergies = ['Penicillin', 'Peanuts'];
  const chronicConditions = ['Type 2 Diabetes', 'Hypertension'];

  // Filter records based on search term
  const filteredRecords = medicalRecords.filter(record => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      record.date.toLowerCase().includes(searchLower) ||
      record.doctor.toLowerCase().includes(searchLower) ||
      record.specialization.toLowerCase().includes(searchLower) ||
      record.diagnosis.toLowerCase().includes(searchLower) ||
      record.prescription.toLowerCase().includes(searchLower)
    );
  });

  const handleActionClick = (action, record) => {
    if (action === 'N/A') return;
    alert(`${action} - ${record.doctor} (${record.date})\nDiagnosis: ${record.diagnosis}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="patient-dashboard">
      {/* Header */}
      <div className="patient-header">
        <div className="header-left">
          <svg className="header-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div>
            <h1>Patient Dashboard</h1>
            <p className="welcome-text">Welcome back, {patientInfo.name}</p>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Logout
        </button>
      </div>

      {/* Health Alert Banner */}
      <div className="health-alert">
        <svg className="alert-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 11v5M12 8v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div className="alert-content">
          <strong>Important Health Information</strong>
          <p>
            Chronic Conditions: {chronicConditions.join(', ')} | Allergies: {allergies.join(', ')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Left Column - Info Cards */}
        <div className="info-cards">
          {/* Profile Information */}
          <div className="info-card">
            <h3>
              <span className="card-icon">👤</span>
              Profile Information
            </h3>
            <div className="info-row">
              <span className="info-label">Health ID</span>
              <span className="info-value">{patientInfo.healthId}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Aadhaar Number</span>
              <span className="info-value">{patientInfo.aadhaar}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Age</span>
              <span className="info-value">{patientInfo.age}</span>
              <span className="info-label">Blood Group</span>
              <span className="info-value">{patientInfo.bloodGroup}</span>
            </div>
            <div className="info-row">
              <span className="info-label">✉ Email</span>
              <span className="info-value">{patientInfo.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">📞 Phone</span>
              <span className="info-value">{patientInfo.phone}</span>
            </div>
          </div>

          {/* Allergies Card */}
          <div className="info-card">
            <h3>
              <span className="card-icon alert-icon-red">⚠</span>
              Allergies
            </h3>
            <div className="tags">
              {allergies.map((allergy, index) => (
                <span key={index} className="allergy-tag">{allergy}</span>
              ))}
            </div>
          </div>

          {/* Chronic Conditions Card */}
          <div className="info-card">
            <h3>
              <span className="card-icon condition-icon">📋</span>
              Chronic Conditions
            </h3>
            <div className="tags">
              {chronicConditions.map((condition, index) => (
                <span key={index} className="condition-tag">{condition}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Medical History */}
        <div class="medical-history">
          <div class="history-header">
            <h2>Medical History</h2>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search records..." 
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="history-table-wrapper">
            <table className="history-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>DOCTOR</th>
                  <th>DIAGNOSIS</th>
                  <th>PRESCRIPTION</th>
                  <th>REPORT</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record) => (
                    <tr key={record.id}>
                      <td>{record.date}</td>
                      <td>
                        <div className="doctor-info">
                          <strong>{record.doctor}</strong>
                          <span className="specialization">{record.specialization}</span>
                        </div>
                      </td>
                      <td>{record.diagnosis}</td>
                      <td>{record.prescription}</td>
                      <td>
                        {record.action === 'N/A' ? (
                          <button className="action-btn disabled" disabled>N/A</button>
                        ) : (
                          <button 
                            className="action-btn active" 
                            onClick={() => handleActionClick(record.action, record)}
                          >
                            👁 {record.action}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                      No records found matching "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span>Showing {filteredRecords.length} of {medicalRecords.length} records</span>
            <div className="pagination-buttons">
              <button className="page-btn" onClick={() => alert('Previous page')}>Previous</button>
              <button className="page-btn" onClick={() => alert('Next page')}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
