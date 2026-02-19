import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, SlidersHorizontal, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const featureCategories = [
  {
    category: "Routing Intelligence",
    icon: <BrainCircuit className="w-8 h-8 text-brand-cyan" />,
    features: [
      { title: "Least Cost Routing (LCR)", desc: "Optimize for cost without compromising on quality." },
      { title: "Quality-Based Routing", desc: "Prioritize carriers with the highest delivery success rates." },
      { title: "Time-Based Routing", desc: "Leverage time-of-day pricing differences across the globe." },
      { title: "Campaign-Based Routing", desc: "Assign specific routes for OTPs, Marketing, or Service messages based on priority." }
    ]
  },
  {
    category: "Operational Control",
    icon: <SlidersHorizontal className="w-8 h-8 text-brand-cyan" />,
    features: [
      { title: "Unified Dashboard", desc: "Visualize traffic flow, revenue, and system health at a glance." },
      { title: "API Access", desc: "Full programmatic control over routing logic and configurations." },
      { title: "Scalable Architecture", desc: "Cloud-native microservices that scale horizontally with your traffic volume." },
      { title: "Multi-Tenancy", desc: "Manage multiple clients or brands with isolated data and custom configurations." }
    ]
  },
  {
    category: "Network Resilience",
    icon: <Activity className="w-8 h-8 text-brand-cyan" />,
    features: [
      { title: "Automated Failover", desc: "Detect and switch routes within milliseconds." },
      { title: "Load Balancing", desc: "Distribute traffic evenly to prevent carrier congestion." },
      { title: "Redundant Infrastructure", desc: "Guaranteed uptime with geographically distributed deployment options." }
    ]
  },
  {
    category: "Compliance & Security",
    icon: <ShieldCheck className="w-8 h-8 text-brand-cyan" />,
    features: [
      { title: "SMPP Firewall", desc: "Protect your network from unauthorized access and SSP leakage." },
      { title: "DLT/CTA Compliance Modules", desc: "Pre-built logic to handle regional regulations (e.g., India DLT, UAE TRA)." },
      { title: "Data Encryption", desc: "End-to-end encryption for data in transit and at rest." }
    ]
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-deepblue relative border-t border-white/5">
      {/* Subtle background glow for depth */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          title="Full Control. Total Visibility." 
          highlightText="Infinite Scale." 
          subtitle="A deep dive into the features that make Squad Global the superior choice for messaging infrastructure."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {featureCategories.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-charcoal border border-white/10 p-8 md:p-10 rounded-2xl hover:border-brand-cyan/30 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
                <div className="p-3 bg-brand-deepblue rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-6">
                {group.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;