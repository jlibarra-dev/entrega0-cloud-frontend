import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Register from './Register/Register'
import EventPage from './EventsPage/EventPage'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
