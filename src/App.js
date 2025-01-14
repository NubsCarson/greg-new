import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import Services from './pages/Services';
import OurCrew from './pages/OurCrew';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-crew" element={<OurCrew />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 