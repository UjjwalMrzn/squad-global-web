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
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      // Added 'group' here so children can respond to hover
      className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/40 hover:bg-brand-cyan/[0.02] transition-all duration-500 group cursor-default"
    >
      <div className="w-10 h-10 rounded-lg bg-brand-charcoal border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-cyan/20 transition-all duration-500 shadow-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed font-light text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;