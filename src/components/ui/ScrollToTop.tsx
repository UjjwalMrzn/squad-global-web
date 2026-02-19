import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation(); // 2. Get the current route path

  // 3. AUTOMATIC SCROLL FIX: Scroll to top instantly whenever the page route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show floating button when page is scrolled down 500px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top function for the manual button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-brand-cyan text-brand-deepblue shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-white transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;