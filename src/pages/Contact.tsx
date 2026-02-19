import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue min-h-screen relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Balanced, vertically centered grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Info Side */}
          <div className="py-4">
            <SectionHeader 
              align="left"
              title="Stop Guessing. Start" 
              highlight={<><br className="hidden md:block" />Routing Intelligently.</>} 
              subtitle="See how Squad Global can transform your messaging infrastructure."
            />
            
            <div className="space-y-8 mt-10">
              <div className="flex items-start gap-6">
                <div className="p-3.5 bg-brand-cyan/10 rounded-2xl text-brand-cyan border border-brand-cyan/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Let’s Talk</h4>
                  <p className="text-base text-gray-300 font-normal leading-relaxed max-w-sm">
                    Ready to take control of your SMS traffic? Fill out the form below, and one of our solutions architects will reach out to schedule a personalized demo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3.5 bg-white/5 rounded-2xl text-gray-400 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Office Locations</h4>
                  <p className="text-base text-gray-300 font-normal">XYZ, Dubai</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3.5 bg-white/5 rounded-2xl text-gray-400 border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Contact Info</h4>
                  <div className="space-y-1 text-base text-gray-300 font-normal">
                    <p>Email: sales@squadglobal.com</p>
                    <p>Phone: —</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side - Compact, grounded design */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-cyan/5 blur-[100px] rounded-full group-hover:bg-brand-cyan/10 transition-colors duration-700"></div>

            <form className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Name</label>
                  <input type="text" className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-gray-600" placeholder="Full Name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Company</label>
                  <input type="text" className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-gray-600" placeholder="Company Name" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input type="email" className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-gray-600" placeholder="sales@squadglobal.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea rows={4} className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none placeholder:text-gray-600" placeholder="Tell us about your routing needs..."></textarea>
              </div>
              <Button variant="primary" className="w-full py-3.5 text-base font-bold mt-2" icon={<Send className="w-4 h-4" />}>
                Send Request
              </Button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;