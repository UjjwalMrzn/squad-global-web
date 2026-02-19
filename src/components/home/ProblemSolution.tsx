import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Zap } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-brand-deepblue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* PROBLEM BOX */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-12 rounded-3xl bg-red-500/[0.03] border border-red-500/20 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full group-hover:bg-red-500/20 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-xl bg-red-500/10 border border-red-500/20 mb-8">
                <AlertCircle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">The Problem We Solve</h2>
              {/* FIXED: text-base and font-normal for better readability */}
              <p className="text-base text-gray-400 leading-relaxed font-normal">
                Global messaging is complex. Unreliable routes, high costs, and fragmented infrastructure lead to lost revenue and poor customer experiences.
              </p>
            </div>
          </motion.div>

          {/* SOLUTION BOX */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-12 rounded-3xl bg-brand-cyan/[0.03] border border-brand-cyan/20 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full group-hover:bg-brand-cyan/20 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 mb-8">
                <Zap className="w-6 h-6 text-brand-cyan" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">The Squad Global Solution</h2>
              {/* FIXED: text-base and font-normal for better readability */}
              <p className="text-base text-gray-300 leading-relaxed font-normal">
                We provide the intelligent software layer that sits at the core of your operations. We transform messy telecom logistics into a streamlined, profitable, and highly reliable messaging highway.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;