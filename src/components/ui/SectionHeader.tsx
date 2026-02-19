import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  highlight, 
  subtitle, 
  align = 'center' 
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`max-w-4xl mb-20 ${isCentered ? 'mx-auto text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
      >
        {/* FIXED: Added {' '} to ensure white and cyan words never stick together */}
        {title}{' '}<span className="text-brand-cyan">{highlight}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-2xl ${isCentered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        className={`h-1 bg-brand-cyan mt-8 rounded-full ${isCentered ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionHeader;