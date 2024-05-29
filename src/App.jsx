import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Form from './forms/form';
import Template1 from './components/Template1';
import Template2 from './components/Template2';
import Template3 from './components/Template3'; // Corrected the component name
import './index.css';
import Templates from './components/Templates';
// import { useHistory } from 'react-router-dom';

export default function App() {
  // const history = useHistory();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choosetemplate/:id" element={<Templates />} />
        <Route path="/form" element={<Form />} />
        <Route path="/template1/:id" element={<Template1 />} /> {/* Include id as a URL parameter */}
        <Route path="/template2/:id" element={<Template2 />} /> {/* Include id as a URL parameter */}
        <Route path="/template3/:id" element={<Template3 />} /> {/* Include id as a URL parameter */}

      </Routes>
    </Router>
  );
}
