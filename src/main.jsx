import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StudentDashboard from './StudentDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentDashboard />
  </StrictMode>,
)
