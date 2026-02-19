import React from 'react';
import { Cpu, Repeat, Users, Zap, PieChart, Activity } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';
import FeatureCard from '../components/ui/FeatureCard';

const techData = [
  {
    icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
    title: "Dynamic SMS Routing Engine",
    description: "Our engine analyzes thousands of data points in real-time—cost, delivery rates, and carrier health—to automatically select the optimal path."
  },
  {
    icon: <Repeat className="w-5 h-5 text-brand-cyan" />,
    title: "Intelligent Traffic Switching",
    description: "Automatic failover system detects outages in milliseconds and instantly reroutes traffic through algorithmically selected backup routes."
  },
  {
    icon: <Users className="w-5 h-5 text-brand-cyan" />,
    title: "Vendor & Carrier Management",
    description: "Consolidate your entire vendor ecosystem into one unified interface. Onboard new aggregators and compare performance side-by-side."
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-cyan" />,
    title: "Advanced A2P Monetization",
    description: "Maximize revenue from Application-to-Person traffic by filtering grey routes and ensuring compliant termination of high-value messages."
  },
  {
    icon: <PieChart className="w-5 h-5 text-brand-cyan" />,
    title: "Messaging Analytics & Reporting",
    description: "Move beyond basic CDRs. Visualization tools provide deep insights into traffic patterns, message lifecycle, and revenue waterfalls."
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge icon={<Activity className="w-3.5 h-3.5 text-brand-cyan" />} text="Core Technology" />
          <SectionHeader 
            title="Software-Defined Routing for a" 
            highlightText="Connected World" 
            subtitle="Building robust switching engines that act as the brain of your SMS operations."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techData.map((tech, index) => (
            <FeatureCard 
              key={index}
              index={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;