import { Suspense, lazy } from 'react'; // FIXED: Removed unused 'React' import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

// Lazy load pages for maximum performance
const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Platform = lazy(() => import('./pages/Platform'));
const About = lazy(() => import('./pages/About'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact'));

// Simple, on-brand fallback loader
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