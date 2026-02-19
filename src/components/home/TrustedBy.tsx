import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe2, Building, Landmark, Network } from 'lucide-react';

const TrustedBy: React.FC = () => {
  // We keep the icons to hold the layout beautifully until real logos arrive
  const placeholders = [
    { icon: <Building2 className="w-8 h-8" /> },
    { icon: <Globe2 className="w-8 h-8" /> },
    { icon: <Network className="w-8 h-8" /> },
    { icon: <Building className="w-8 h-8" /> },
    { icon: <Landmark className="w-8 h-8" /> },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-brand-deepblue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 tracking-widest uppercase mb-8">
          Trusted by Global Leaders in Telecommunications
        </p>
        
        {/* The icons act as a nice abstract wireframe without using fake text */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {placeholders.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-400 hover:text-brand-cyan transition-colors cursor-pointer"
            >
              {partner.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;