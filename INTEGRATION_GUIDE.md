# Integration Guide - Adding New Components to Dashboards

This guide shows you how to integrate the new features into your existing Patient and Doctor dashboards.

## Patient Dashboard Integration

### Option 1: Add as New Tab Sections (Recommended)

Update `PatientDashboard.jsx`:

```jsx
import ShareRecords from './ShareRecords';
import UploadRecord from './UploadRecord';

// In your PatientDashboard component:
const [activeTab, setActiveTab] = useState('dashboard');

// In the sidebar navigation:
<SidebarItem
  icon={<Upload />}
  label="Upload Records"
  active={activeTab === 'upload'}
  onClick={() => setActiveTab('upload')}
/>
<SidebarItem
  icon={<Share2 />}
  label="Share Records"
  active={activeTab === 'share'}
  onClick={() => setActiveTab('share')}
/>

// In the content area:
{activeTab === 'upload' && <UploadRecord />}
{activeTab === 'share' && <ShareRecords />}
```

### Option 2: Add as Buttons in Dashboard

Add quick action buttons that open components:

```jsx
<button onClick={() => setActiveTab('upload')}>
  Upload New Record
</button>
<button onClick={() => setActiveTab('share')}>
  Share with Doctor
</button>
```

## Doctor Dashboard Integration

### Replace Existing Search

Update `DoctorDashboard.jsx`:

```jsx
import PatientSearch from './PatientSearch';

// Replace your current search section with:
<PatientSearch onPatientSelect={handlePatientSelect} />
```

### Add as Dedicated Search Tab

```jsx
const [activeView, setActiveView] = useState('search');

// Navigation:
<SidebarItem
  icon={<Search />}
  label="Search Patient"
  active={activeView === 'search'}
  onClick={() => setActiveView('search')}
/>

// Content:
{activeView === 'search' && (
  <PatientSearch onPatientSelect={handlePatientSelect} />
)}
```

## Quick Icons Import

Add these imports for icons if needed:

```jsx
import { 
  Upload,      // Upload icon
  Share2,      // Share icon
  Search,      // Search icon
  QrCode,      // QR icon
  FileText,    // File icon
  Activity     // Activity icon
} from 'lucide-react';
```

Or use your existing SVG icons - all components use inline SVGs matching your style!

## Testing the Integration

1. **Start the dev server:**
   ```bash
   npm start
   ```

2. **Test flow:**
   - Home → Login as Patient → Upload Records
   - Home → Login as Patient → Share Records → Generate QR
   - Home → Login as Doctor → Search Patient → Scan QR

## Component Props

### ShareRecords
```jsx
<ShareRecords />
// No props required - fully self-contained
```

### UploadRecord
```jsx
<UploadRecord />
// No props required - fully self-contained
```

### PatientSearch
```jsx
<PatientSearch 
  onPatientSelect={(patient) => {
    // Called when patient is selected or access granted
    console.log('Patient selected:', patient);
    // Navigate to patient details view
  }}
/>
```

## Styling Notes

All components use your existing CSS variables:
- `--primary-color: #2D8A99`
- `--primary-dark: #1F5F6E`
- `--bg-light: #F9FAFB`
- `--border-color: #E5E7EB`

They will automatically match your dashboard's look and feel!

## Backend Integration (When Ready)

Replace alert() calls with actual API calls using the services:

```jsx
import { patientService } from '../services/patientService';

// Example: Upload record
const handleUpload = async (formData) => {
  try {
    const response = await patientService.uploadRecord(formData);
    // Handle success
  } catch (error) {
    // Handle error
  }
};
```

---

**Ready to use! All components work standalone with mock data for demonstration.**
