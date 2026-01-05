import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userType) => {
    setCurrentUser(userType);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="App">
      {!currentUser ? (
        <LoginPage onLogin={handleLogin} />
      ) : currentUser === 'patient' ? (
        <PatientDashboard onLogout={handleLogout} />
      ) : (
        <DoctorDashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
