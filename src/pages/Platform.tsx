import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, SlidersHorizontal, Activity, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';

const platformData = [
  {
    category: "Routing Intelligence",
    icon: <BrainCircuit className="w-5 h-5 text-brand-cyan" />,
    features: ["Least Cost Routing (LCR)", "Quality-Based Routing", "Time-Based Routing", "Campaign-Based Routing"]
  },
  {
    category: "Operational Control",
    icon: <SlidersHorizontal className="w-5 h-5 text-brand-cyan" />,
    features: ["Unified Dashboard", "API Access", "Scalable Architecture", "Multi-Tenancy"]
  },
  {
    category: "Network Resilience",
    icon: <Activity className="w-5 h-5 text-brand-cyan" />,
    features: ["Automated Failover", "Load Balancing", "Redundant Infrastructure"]
  },
  {
    category: "Compliance & Security",
    icon: <ShieldCheck className="w-5 h-5 text-brand-cyan" />,
    features: ["SMPP Firewall", "DLT/CTA Compliance Modules", "Data Encryption"]
  }
];

const Platform: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <Badge icon={<Zap className="w-3.5 h-3.5 text-brand-cyan" />} text="Platform" />
          <SectionHeader 
            title="Full Control. Total Visibility." 
            highlightText="Infinite Scale." 
            subtitle="A deep dive into the features that make Squad Global the superior choice for messaging infrastructure."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {platformData.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-charcoal rounded-xl border border-white/10 text-brand-cyan group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{group.category}</h3>
              </div>
              
              <ul className="grid gap-4">
                {group.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan/40" />
                    <span className="text-lg font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;