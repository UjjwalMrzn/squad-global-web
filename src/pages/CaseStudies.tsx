import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingDown, CheckCircle, Clock, Activity } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge icon={<Activity className="w-3.5 h-3.5 text-brand-cyan" />} text="Success Stories" />
          <SectionHeader 
            title="Real Results for" 
            highlightText="Global Leaders" 
            subtitle="Explore how our routing intelligence transforms telecom operations into high-margin messaging highways."
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Case Study 1: Global Aggregator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="text-6xl font-bold text-brand-cyan/10">01</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Global Aggregator Reduces Costs by 25%</h3>
              <p className="text-brand-cyan font-medium mb-8">Client: Major International SMS Aggregator</p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Challenge</h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Manual routing updates and lack of visibility into carrier performance led to high costs and undelivered messages.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Solution</h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Implementation of Squad Global’s Dynamic Routing Engine with Quality-Based Routing.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-cyan/5 rounded-2xl p-8 border border-brand-cyan/10">
                  <h4 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-6">Key Results</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-5 h-5 text-brand-cyan" />
                      <span className="text-white font-medium">25% reduction in termination costs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-cyan" />
                      <span className="text-white font-medium">99.9% delivery rate achieved</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-brand-cyan" />
                      <span className="text-white font-medium">15 hours/week saved in manual operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;