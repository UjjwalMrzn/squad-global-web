import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-deepblue">
      
      {/* Ultra-Premium Background: Micro-dot grid with central radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <Badge 
          icon={<Activity className="w-3.5 h-3.5 text-brand-cyan" />} 
          text="Next-Gen Routing Engine" 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
            The Intelligence Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-cyan to-blue-600">
              Global Connectivity.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light tracking-wide"
        >
          Next-generation SMS Routing & Switching Software to maximize deliverability, optimize costs, and simplify your messaging infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
            Start Routing Intelligently
          </Button>
          <Button variant="outline">
            Explore Platform
          </Button>
        </motion.div>

      </div>

      {/* Subtle bottom gradient to blend into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-deepblue to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;