import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className = '', ...props }) => {
  const baseStyle = "flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-cyan text-brand-black hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:-translate-y-0.5",
    outline: "bg-brand-charcoal/50 border border-white/10 text-white hover:border-brand-cyan/50 hover:bg-brand-cyan/5 backdrop-blur-sm",
    ghost: "bg-transparent text-gray-400 hover:text-white px-4 py-2"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {/* Subtle shine effect on primary button */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default Button;