import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AdviceComponent from './components/AdviceComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/advice' element={<AdviceComponent />} />
        <Route path='*' element={<Navigate to="/advice" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
