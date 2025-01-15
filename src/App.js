import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import BeforeAndAfter from './pages/BeforeAndAfter';
import OurCrew from './pages/OurCrew';
import Contact from './pages/Contact';
import HandTexturing from './pages/HandTexturing';
import FastService from './pages/FastService';
import TextureMatching from './pages/TextureMatching';
import ExteriorPainting from './pages/ExteriorPainting';
import SoundProofing from './pages/SoundProofing';
import Navigation from './components/Navigation';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/before-and-after" element={<BeforeAndAfter />} />
        <Route path="/our-crew" element={<OurCrew />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hand-texturing" element={<HandTexturing />} />
        <Route path="/fast-service" element={<FastService />} />
        <Route path="/texture-matching" element={<TextureMatching />} />
        <Route path="/exterior-painting" element={<ExteriorPainting />} />
        <Route path="/sound-proofing" element={<SoundProofing />} />
      </Routes>
    </Router>
  );
}

export default App; 