import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Templete1 from './forms/templete1'
import TemplateA from './components/Templets/Template1/templete1';

import './index.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<Templete1 />} />
          <Route path="template1" element={<TemplateA />} />
        </Route>
      </Routes>
    </Router>
  )
}
