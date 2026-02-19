import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <SectionHeader 
              align="left"
              title="Stop Guessing. Start" 
              highlightText="Routing Intelligently." 
              subtitle="See how Squad Global can transform your messaging infrastructure."
            />
            
            <div className="space-y-10 mt-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-brand-cyan/10 rounded-2xl text-brand-cyan">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Let’s Talk</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Ready to take control of your SMS traffic? Fill out the form, and our solutions architects will reach out to schedule a personalized demo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl text-gray-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Office Locations</h4>
                  <p className="text-gray-400 font-light">xyz, Dubai</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl text-gray-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Contact Info</h4>
                  <p className="text-gray-400 font-light">sales@squadglobal.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                  <input type="text" className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Company</label>
                  <input type="text" className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="Company Name" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                <input type="email" className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="sales@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={4} className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="Tell us about your routing needs..."></textarea>
              </div>
              <Button variant="primary" className="w-full" icon={<Send className="w-4 h-4" />}>
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