// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/ui/ScrollToTop';

// We will build these page components next
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Platform from './pages/Platform';
// import About from './pages/About';
// import CaseStudies from './pages/CaseStudies';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-deepblue font-sans text-white overflow-x-hidden flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/platform" element={<Platform />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;