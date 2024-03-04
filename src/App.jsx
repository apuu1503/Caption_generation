import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
