import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  ...props 
}) => {
  // Balanced architectural base - uniform rounding (rounded-lg) and precise padding
  const baseStyle = "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-200 relative overflow-hidden group select-none active:scale-[0.98]";
  
  const variants = {
    // Primary: Solid, flat cyan. Hover uses a slight darkening for a physical feel.
    primary: "bg-brand-cyan text-black hover:bg-[#00D1E9]",
    
    // Outline: Clean 1px border. No glass, no blur. Just precision.
    outline: "bg-transparent border border-white/20 text-white hover:border-brand-cyan hover:bg-white/[0.05]",
    
    // Ghost: Minimalist text.
    ghost: "bg-transparent text-gray-400 hover:text-white"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
};

export default Button;