# MediArchive Frontend

MediArchive - Digital Health Records Platform

## Installation

```bash
npm install
```

## Run the Application

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

## Features

- **Login Page**: Patient & Doctor role selection with form validation
- **Patient Dashboard**: View medical history, records, and manage profile
- **Doctor Dashboard**: Search patients, view vitals, medical history, and add entries
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean, professional design with teal color scheme

## Project Structure

```
mediarchive/
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── LoginPage.css
│   │   ├── PatientDashboard.jsx
│   │   ├── PatientDashboard.css
│   │   ├── DoctorDashboard.jsx
│   │   └── DoctorDashboard.css
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── public/
│   └── index.html
└── package.json
```

## Technologies

- React 18.2
- React Router DOM
- Axios (for API calls)
- CSS3 with CSS Variables
- Responsive Design
