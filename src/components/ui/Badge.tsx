import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ text, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      // Switched to 'rounded-md' (8px) for a sharper, universal look. 
      // Removed the heavy shadows and blur for a flat, premium border style.
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/[0.02] mb-8 select-none"
    >
      {icon && <div className="flex items-center text-brand-cyan">{icon}</div>}
      <span className="text-[11px] font-bold text-white tracking-widest uppercase leading-none">
        {text}
      </span>
    </motion.div>
  );
};

export default Badge;