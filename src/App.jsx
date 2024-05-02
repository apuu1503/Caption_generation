import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Template1 from './components/Templets/templete1';
import Template2 from './components/Templets/template2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/template1" element={<Template1 />} />
          <Route path="/template2" element={<Template2 />} />
        </Route>
      </Routes>
    </Router>
  )
}
