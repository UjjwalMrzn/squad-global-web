import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Platform', path: '/platform' },
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-brand-deepblue/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <Globe className="h-7 w-7 text-brand-cyan group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-white font-extrabold text-xl tracking-tight">
              SQUAD<span className="text-brand-cyan">GLOBAL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group/link ${
                    isActive ? 'text-brand-cyan' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-cyan transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                  }`} />
                </Link>
              );
            })}
            <div className="flex items-center pl-4 border-l border-white/10">
              <Link to="/contact">
                <Button variant="primary" className="!px-6 !py-2.5 !text-xs !font-bold tracking-wider uppercase">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white transition-colors">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-deepblue border-b border-white/10 absolute w-full left-0 top-full shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6 flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-xl font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-brand-cyan' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5">
                <Link to="/contact" className="w-full">
                  <Button variant="primary" className="w-full py-4 text-sm font-bold uppercase">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;