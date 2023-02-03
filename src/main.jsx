import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Register from './Register/Register'
import EventPage from './EventsPage/EventPage'
import './index.css'
import EventDetail from './EventsPage/EventDetail'
import CreateEvent from './EventsPage/CreateEvent'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/eventDetail/:id" element={<EventDetail />} />
        <Route path="/createEvent" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
