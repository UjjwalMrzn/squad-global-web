import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlightText, subtitle, align = 'center' }) => {
  return (
    <div className={`max-w-3xl mb-16 ${align === 'center' ? 'mx-auto text-center' : 'text-left z-10 relative'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        {title} {highlightText && <span className="text-brand-cyan">{highlightText}</span>}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`h-1 w-20 bg-brand-cyan rounded-full ${align === 'center' ? 'mx-auto' : ''} mb-6`}
      ></motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;