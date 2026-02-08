import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PatientDashboard.css';

export default function PatientDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  const patientInfo = {
    name: 'Rajesh Kumar',
    abhaId: '12-3456-7890-1234',
    age: '45',
    gender: 'Male',
    bloodGroup: 'O+',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@email.com',
    city: 'Bangalore',
    recordCount: 12,
    activeDoctors: 3,
    lastVisit: '22 Jul 2023'
  };

  const medicalRecords = [
    {
      id: 1,
      date: '22 Jul 2023',
      doctor: 'Dr. Anjali Sharma',
      specialization: 'Cardiologist',
      diagnosis: 'Hypertension',
      prescription: 'Amlodipine 5mg daily',
      type: 'consultation'
    },
    {
      id: 2,
      date: '15 May 2023',
      doctor: 'Dr. Vikram Singh',
      specialization: 'General Physician',
      diagnosis: 'Viral Fever',
      prescription: 'Paracetamol 650mg, Rest',
      type: 'prescription'
    },
    {
      id: 3,
      date: '02 Feb 2023',
      doctor: 'Dr. Priya Desai',
      specialization: 'Dermatologist',
      diagnosis: 'Allergic Dermatitis',
      prescription: 'Topical Steroid Cream',
      type: 'consultation'
    }
  ];

  const stats = [
    { label: 'Total Records', value: '12', icon: 'bi-file-medical-fill', color: '#103713' },
    { label: 'Active Doctors', value: '3', icon: 'bi-person-fill-check', color: '#628B35' },
    { label: 'Last Visit', value: '15 days ago', icon: 'bi-calendar-check-fill', color: '#89A65F' },
    { label: 'Shared Access', value: '2', icon: 'bi-share-fill', color: '#103713' }
  ];

  const recentActivity = [
    { action: 'Lab Report Uploaded', detail: 'Blood test results from Apollo Clinic', time: '2 hours ago', icon: 'bi-file-earmark-medical' },
    { action: 'Dr. Sharma Accessed Records', detail: 'Cardiology consultation', time: '1 day ago', icon: 'bi-person-badge' },
    { action: 'Access Granted', detail: 'Dr. Patel - Valid for 5 days', time: '3 days ago', icon: 'bi-share' }
  ];

  const allergies = ['Penicillin', 'Peanuts'];
  const chronicConditions = ['Type 2 Diabetes', 'Hypertension'];

  return (
    <div className="modern-dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <i className="bi bi-heart-pulse-fill logo-icon"></i>
          <h2>MediArchive</h2>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">
            <i className="bi bi-person-fill"></i>
          </div>
          <div className="profile-info">
            <p className="profile-name">{patientInfo.name}</p>
            <p className="profile-id">ABHA: {patientInfo.abhaId}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="bi bi-person-fill"></i>
            <span>My Profile</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'records' ? 'active' : ''}`}
            onClick={() => setActiveTab('records')}
          >
            <i className="bi bi-file-medical-fill"></i>
            <span>Medical Records</span>
            <span className="badge">{patientInfo.recordCount}</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            <i className="bi bi-upload"></i>
            <span>Upload Records</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'share' ? 'active' : ''}`}
            onClick={() => setActiveTab('share')}
          >
            <i className="bi bi-share-fill"></i>
            <span>Share Records</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="bi bi-gear-fill"></i>
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn-modern" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-left">
            <h1 className="page-title">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'profile' && 'My Profile'}
              {activeTab === 'records' && 'Medical Records'}
              {activeTab === 'upload' && 'Upload Records'}
              {activeTab === 'share' && 'Share Records'}
              {activeTab === 'settings' && 'Settings'}
            </h1>
            <p className="page-subtitle">{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="top-bar-right">
            <button className="icon-btn">
              <i className="bi bi-bell-fill"></i>
              <span className="notification-dot"></span>
            </button>
            <div className="user-menu">
              <div className="user-avatar">
                <i className="bi bi-person-fill"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {activeTab === 'dashboard' && (
            <>
              {/* Health Alert */}
              {(allergies.length > 0 || chronicConditions.length > 0) && (
                <div className="alert-banner">
                  <i className="bi bi-exclamation-triangle-fill alert-icon"></i>
                  <div className="alert-content">
                    <strong>Important Health Information</strong>
                    <p>
                      {chronicConditions.length > 0 && `Chronic: ${chronicConditions.join(', ')}`}
                      {allergies.length > 0 && ` | Allergies: ${allergies.join(', ')}`}
                    </p>
                  </div>
                </div>
              )}

              {/* Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon-wrapper" style={{ background: `${stat.color}15` }}>
                      <i className={stat.icon} style={{ color: stat.color }}></i>
                    </div>
                    <div className="stat-content">
                      <p className="stat-label">{stat.label}</p>
                      <p className="stat-value">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Grid */}
              <div className="dashboard-grid">
                {/* Recent Activity */}
                <div className="dashboard-card recent-activity-card">
                  <div className="card-header">
                    <h3>
                      <i className="bi bi-clock-history"></i>
                      Recent Activity
                    </h3>
                    <button className="text-btn">View All</button>
                  </div>
                  <div className="activity-list">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="activity-item">
                        <div className="activity-icon">
                          <i className={activity.icon}></i>
                        </div>
                        <div className="activity-content">
                          <p className="activity-title">{activity.action}</p>
                          <p className="activity-detail">{activity.detail}</p>
                        </div>
                        <span className="activity-time">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="dashboard-card quick-actions-card">
                  <div className="card-header">
                    <h3>
                      <i className="bi bi-lightning-charge-fill"></i>
                      Quick Actions
                    </h3>
                  </div>
                  <div className="quick-actions">
                    <button className="action-btn" onClick={() => setActiveTab('upload')}>
                      <i className="bi bi-upload"></i>
                      <span>Upload Record</span>
                    </button>
                    <button className="action-btn" onClick={() => setActiveTab('share')}>
                      <i className="bi bi-qr-code"></i>
                      <span>Generate QR Code</span>
                    </button>
                    <button className="action-btn">
                      <i className="bi bi-calendar-plus"></i>
                      <span>Book Appointment</span>
                    </button>
                    <button className="action-btn" onClick={() => setActiveTab('records')}>
                      <i className="bi bi-file-earmark-text"></i>
                      <span>View All Records</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Records */}
              <div className="dashboard-card">
                <div className="card-header">
                  <h3>
                    <i className="bi bi-file-medical-fill"></i>
                    Recent Medical Records
                  </h3>
                  <button className="text-btn" onClick={() => setActiveTab('records')}>View All</button>
                </div>
                <div className="records-table">
                  {medicalRecords.slice(0, 3).map((record) => (
                    <div key={record.id} className="record-row">
                      <div className="record-icon">
                        <i className={`bi ${record.type === 'consultation' ? 'bi-stethoscope' : 'bi-prescription2'}`}></i>
                      </div>
                      <div className="record-info">
                        <p className="record-title">{record.diagnosis}</p>
                        <p className="record-meta">
                          {record.doctor} • {record.specialization}
                        </p>
                      </div>
                      <span className="record-date">{record.date}</span>
                      <button className="record-action-btn">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'profile' && (
            <div className="profile-content">
              <div className="dashboard-card">
                <div className="profile-header-section">
                  <div className="profile-avatar-large">
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <div className="profile-header-info">
                    <h2>{patientInfo.name}</h2>
                    <p className="profile-abha">ABHA ID: {patientInfo.abhaId}</p>
                    <div className="profile-badges">
                      <span className="badge-verified">
                        <i className="bi bi-patch-check-fill"></i>
                        Verified
                      </span>
                      <span className="badge-active">
                        <i className="bi bi-circle-fill"></i>
                        Active
                      </span>
                    </div>
                  </div>
                  <button className="btn-primary">Edit Profile</button>
                </div>
              </div>

              <div className="profile-grid">
                <div className="dashboard-card">
                  <div className="card-header">
                    <h3>
                      <i className="bi bi-person-badge"></i>
                      Personal Information
                    </h3>
                  </div>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Age</span>
                      <span className="info-value">{patientInfo.age}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Gender</span>
                      <span className="info-value">{patientInfo.gender}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Blood Group</span>
                      <span className="info-value">{patientInfo.bloodGroup}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone</span>
                      <span className="info-value">{patientInfo.phone}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email</span>
                      <span className="info-value">{patientInfo.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">City</span>
                      <span className="info-value">{patientInfo.city}</span>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-header">
                    <h3>
                      <i className="bi bi-heart-pulse"></i>
                      Medical Information
                    </h3>
                  </div>
                  <div className="medical-info">
                    <div className="medical-section">
                      <p className="medical-label">Allergies</p>
                      <div className="tags-list">
                        {allergies.map((allergy, idx) => (
                          <span key={idx} className="tag tag-red">{allergy}</span>
                        ))}
                      </div>
                    </div>
                    <div className="medical-section">
                      <p className="medical-label">Chronic Conditions</p>
                      <div className="tags-list">
                        {chronicConditions.map((condition, idx) => (
                          <span key={idx} className="tag tag-blue">{condition}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'records' && (
            <div className="dashboard-card">
              <div className="card-header">
                <h3>
                  <i className="bi bi-file-medical-fill"></i>
                  All Medical Records ({medicalRecords.length})
                </h3>
                <div className="search-box">
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    placeholder="Search records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="records-table">
                {medicalRecords.map((record) => (
                  <div key={record.id} className="record-row">
                    <div className="record-icon">
                      <i className={`bi ${record.type === 'consultation' ? 'bi-stethoscope' : 'bi-prescription2'}`}></i>
                    </div>
                    <div className="record-info">
                      <p className="record-title">{record.diagnosis}</p>
                      <p className="record-meta">
                        {record.doctor} • {record.specialization}
                      </p>
                      <p className="record-prescription">{record.prescription}</p>
                    </div>
                    <span className="record-date">{record.date}</span>
                    <div className="record-actions">
                      <button className="record-action-btn">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button className="record-action-btn">
                        <i className="bi bi-download"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'upload' || activeTab === 'share' || activeTab === 'settings') && (
            <div className="dashboard-card coming-soon">
              <div className="coming-soon-content">
                <i className="bi bi-gear-wide-connected"></i>
                <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Feature</h3>
                <p>This feature is coming soon! Stay tuned for updates.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
