import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Repeat, Users, Zap, PieChart, Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const technologies = [
  {
    icon: <Cpu className="w-6 h-6 text-brand-cyan" />,
    title: "1. Dynamic SMS Routing Engine",
    description: "Stop using static routing tables. Our engine analyzes thousands of data points in real-time—cost, delivery rates, latency, and carrier health—to automatically select the optimal path for every single message.",
    benefits: "Increased revenue, improved customer satisfaction, reduced manual intervention."
  },
  {
    icon: <Repeat className="w-6 h-6 text-brand-cyan" />,
    title: "2. Intelligent Traffic Switching",
    description: "Maintain business continuity even when carriers fail. Our automatic failover system detects outages in milliseconds and instantly reroutes traffic through pre-defined or algorithmically selected backup routes.",
    benefits: "Zero downtime, SLA compliance, risk mitigation."
  },
  {
    icon: <Users className="w-6 h-6 text-brand-cyan" />,
    title: "3. Vendor & Carrier Management",
    description: "Consolidate your entire vendor ecosystem into one unified interface. Onboard new aggregators, manage contracts, and compare performance side-by-side.",
    benefits: "Simplified operations, better negotiation power, holistic view of supply chain."
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-cyan" />,
    title: "4. Advanced A2P Monetization",
    description: "Maximize revenue from Application-to-Person traffic. Our platform helps you filter grey routes, manage firewall rules, and ensure compliant termination of high-value A2P messages.",
    benefits: "Revenue assurance, fraud prevention, compliance."
  },
  {
    icon: <PieChart className="w-6 h-6 text-brand-cyan" />,
    title: "5. Messaging Analytics & Reporting",
    description: "Move beyond basic CDRs. Our visualization tools provide deep insights into traffic patterns, message lifecycle, revenue waterfalls, and carrier quality.",
    benefits: "Data-driven decisions, instant troubleshooting, executive-level reporting."
  }
];

const CoreTech: React.FC = () => {
  return (
    <section id="platform" className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          title="Software-Defined Routing for a" 
          highlightText="Connected World" 
          subtitle="Our core competency is building robust switching engines that act as the brain of your SMS operations."
        />

        <div className="mt-16 max-w-5xl mx-auto space-y-8">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-brand-deepblue/40 border border-white/5 p-8 rounded-xl hover:border-brand-cyan/20 transition-all duration-300"
            >
              {/* Glowing vertical line effect on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan opacity-0 group-hover:opacity-100 rounded-l-xl transition-opacity duration-300 shadow-[0_0_10px_#00E5FF]"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 shrink-0 bg-brand-charcoal border border-white/10 rounded-lg flex items-center justify-center">
                  {tech.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{tech.description}</p>
                  
                  <div className="flex items-start gap-2 bg-brand-cyan/5 px-4 py-3 rounded-lg border border-brand-cyan/10">
                    <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-gray-300">
                      <span className="text-brand-cyan mr-2">Benefits:</span>
                      {tech.benefits}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreTech;