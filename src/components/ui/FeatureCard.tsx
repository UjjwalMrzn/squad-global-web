import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, 
        ease: "easeOut" 
      }}
      className="p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-cyan/20 transition-all duration-300 group relative select-none"
    >
      {/* Icon Housing */}
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan mb-8 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <div className="space-y-4">
        {/* FIXED: Removed the accidental 'italic' class to keep it clean and professional */}
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        {/* FIXED: Using text-base (16px) for universal legibility */}
        <p className="text-gray-400 font-normal leading-relaxed text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;