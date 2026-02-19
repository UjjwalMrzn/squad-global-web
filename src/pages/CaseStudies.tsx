import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, CheckCircle, Clock, Activity } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue min-h-screen relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge icon={<Activity className="w-3.5 h-3.5 text-brand-cyan" />} text="Success Stories" />
          <SectionHeader 
            title="Real Results for" 
            highlight="Global Leaders" 
            subtitle="Explore how our routing intelligence transforms telecom operations into high-margin messaging highways."
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Case Study 1: Global Aggregator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            // FIXED: Boosted bg and border opacity to match About Us card depth
            className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden group"
          >
            {/* Added a subtle white glow in the top-left to remove the 'faded' look */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-colors duration-700"></div>

            {/* Background Number Accent */}
            <div className="absolute top-0 right-0 p-8">
              <span className="text-6xl font-bold text-brand-cyan/10">01</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Global Aggregator Reduces Costs by 25%</h3>
              <p className="text-brand-cyan font-medium mb-10 text-lg">Client: Major International SMS Aggregator</p>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Challenge & Solution Side */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Challenge</h4>
                    {/* FIXED: Standardized to text-base, gray-300, and font-normal */}
                    <p className="text-base text-gray-300 font-normal leading-relaxed">
                      The client was struggling with manual routing updates and had no visibility into actual carrier performance, leading to high costs and undelivered messages.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Solution</h4>
                    {/* FIXED: Standardized to text-base, gray-300, and font-normal */}
                    <p className="text-base text-gray-300 font-normal leading-relaxed">
                      Implementation of Squad Global’s Dynamic Routing Engine with Quality Based Routing.
                    </p>
                  </div>
                </div>

                {/* Key Results Side - Updated to match Mission card style */}
                <div className="bg-brand-cyan/[0.03] rounded-2xl p-6 md:p-8 border border-brand-cyan/20 h-fit relative overflow-hidden">
                   <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-cyan/10 blur-[50px] rounded-full"></div>
                   
                   <div className="relative z-10">
                    <h4 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-6">Key Results</h4>
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <TrendingDown className="w-5 h-5 text-brand-cyan shrink-0" />
                        <span className="text-white font-medium text-base">25% reduction in termination costs</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0" />
                        <span className="text-white font-medium text-base">99.9% delivery rate achieved</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Clock className="w-5 h-5 text-brand-cyan shrink-0" />
                        <span className="text-white font-medium text-base">15 hours per week saved in operations</span>
                      </div>
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