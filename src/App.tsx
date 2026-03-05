import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

// 🚀 FIXED: Import Home directly so it renders INSTANTLY (Restores perfect performance)
import Home from './pages/Home';

// Lazy load the rest so they don't block the initial load
const Solutions = lazy(() => import('./pages/Solutions'));
const Platform = lazy(() => import('./pages/Platform'));
const About = lazy(() => import('./pages/About'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div className="min-h-[80vh] flex items-center justify-center bg-brand-deepblue">
    <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-deepblue font-sans text-white overflow-x-hidden flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home is no longer suspended, it will paint immediately */}
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;