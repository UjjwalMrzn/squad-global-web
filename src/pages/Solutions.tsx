import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';

const solutions = [
  {
    id: "01",
    title: "Dynamic SMS Routing Engine",
    desc: "Stop using static routing tables. Our engine analyzes thousands of data points in real-time-cost, delivery rates, latency, and carrier health—to automatically select the optimal path for every single message.",
    benefits: ["Increased revenue", "Improved customer satisfaction", "Reduced manual intervention"]
  },
  {
    id: "02",
    title: "Intelligent Traffic Switching",
    desc: "Maintain business continuity even when carriers fail. Our automatic failover system detects outages in milliseconds and instantly reroutes traffic through pre-defined or algorithmically selected backup routes.",
    benefits: ["Zero downtime", "SLA compliance", "Risk mitigation"]
  },
  {
    id: "03",
    title: "Vendor & Carrier Management",
    desc: "Consolidate your entire vendor ecosystem into one unified interface. Onboard new aggregators, manage contracts, and compare performance side-by-side.",
    benefits: ["Simplified operations", "Better negotiation power", "Holistic supply chain view"]
  },
  {
    id: "04",
    title: "Advanced A2P Monetization",
    desc: "Maximize revenue from Application-to-Person traffic. Our platform helps you filter grey routes, manage firewall rules, and ensure compliant termination of high value A2P messages.",
    benefits: ["Grey route filtering", "Firewall rule management", "Compliant termination"]
  },
  {
    id: "05",
    title: "Messaging Analytics & Reporting",
    desc: "Move beyond basic CDRs. Our visualization tools provide deep insights into traffic patterns, message lifecycle, revenue waterfalls, and carrier quality.",
    benefits: ["Data-driven decisions", "Instant troubleshooting", "Executive reporting"]
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue relative min-h-screen overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <Badge icon={<Zap className="w-3.5 h-3.5 text-brand-cyan" />} text="Our Solutions" />
          <SectionHeader 
            title="Software-Defined Routing" 
            highlight="for a Connected World." 
            subtitle="Our core competency is building robust switching engines that act as the brain of your SMS operations."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-charcoal border border-white/10 p-8 rounded-3xl hover:border-brand-cyan/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-2xl font-mono font-bold text-brand-cyan shrink-0">
                  {item.id}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-base text-gray-300 font-normal leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Key Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {item.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center gap-2 bg-brand-cyan/5 border border-brand-cyan/10 px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                      {/* FIXED: Increased from text-xs to text-sm for significantly better legibility */}
                      <span className="text-sm font-semibold text-brand-cyan/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Solutions;