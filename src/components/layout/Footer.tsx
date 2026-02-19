import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Atmosphere: Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(0,229,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Globe className="h-6 w-6 text-brand-cyan" />
              <span className="text-white font-extrabold text-xl tracking-tight uppercase">
                SQUAD<span className="text-brand-cyan">GLOBAL</span>
              </span>
            </Link>
            {/* FIXED: text-base and font-normal for legibility */}
            <p className="text-gray-400 text-base leading-relaxed font-normal max-w-xs">
              Next-generation software intelligence for global messaging infrastructure and profitable routing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Platform</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/solutions" className="text-gray-400 hover:text-brand-cyan transition-colors">Solutions</Link></li>
              <li><Link to="/platform" className="text-gray-400 hover:text-brand-cyan transition-colors">Infrastructure</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-brand-cyan transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Company</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-cyan transition-colors">Contact Sales</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Global Operations</h4>
            <div className="flex items-start gap-3 text-base text-gray-400 font-normal">
              <MapPin size={20} className="text-brand-cyan shrink-0 mt-0.5" />
              <span>XYZ, Dubai, UAE</span>
            </div>
            <div className="flex items-start gap-3 text-base text-gray-400 font-normal">
              <Mail size={20} className="text-brand-cyan shrink-0 mt-0.5" />
              <span>sales@squadglobal.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* FIXED: text-xs instead of text-[10px] for better clarity */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          <p className="text-center md:text-left">© {currentYear} SQUAD GLOBAL. ALL RIGHTS RESERVED.</p>
          {/* <div className="flex gap-8">
            <span className="hover:text-brand-cyan transition-colors cursor-default">London</span>
            <span className="hover:text-brand-cyan transition-colors cursor-default">Dubai</span>
            <span className="hover:text-brand-cyan transition-colors cursor-default">Singapore</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;