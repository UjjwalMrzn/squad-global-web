import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Platform', path: '/platform' },
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-deepblue/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <Globe className="h-7 w-7 text-brand-cyan group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-white font-extrabold text-xl tracking-tight">
              SQUAD<span className="text-brand-cyan">GLOBAL</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-brand-cyan' : 'text-gray-400 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <Link to="/contact">
                <Button variant="outline" className="!px-5 !py-2 !text-sm">Contact Sales</Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" className="!px-5 !py-2 !text-sm">Request Demo</Button>
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-deepblue/95 backdrop-blur-2xl border-b border-white/10 absolute w-full left-0 top-full shadow-2xl">
          <div className="px-6 py-8 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 flex flex-col gap-3 border-t border-white/5">
              <Link to="/contact" className="w-full">
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </Link>
              <Link to="/contact" className="w-full">
                <Button variant="primary" className="w-full">Request Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;