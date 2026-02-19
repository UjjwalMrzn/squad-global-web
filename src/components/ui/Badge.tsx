import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/5 border border-brand-cyan/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.05)] mb-8"
    >
      {icon}
      <span className="text-xs font-bold text-brand-cyan tracking-[0.2em] uppercase">
        {text}
      </span>
    </motion.div>
  );
};

export default Badge;