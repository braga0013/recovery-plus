import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AdminLayout from './admin/AdminLayout.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import AdminPatients from './admin/AdminPatients.jsx'
import AdminSchedule from './admin/AdminSchedule.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gestao" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="pacientes" element={<AdminPatients />} />
          <Route path="agenda" element={<AdminSchedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
