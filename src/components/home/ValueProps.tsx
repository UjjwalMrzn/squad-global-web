import React from 'react';
import { Network, LineChart, Layers, Server, ShieldAlert, Code2, type LucideIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FeatureCard from '../ui/FeatureCard';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const valuePropsData: ValueProp[] = [
  { 
    icon: Network, 
    title: "Intelligent Least-Cost Routing", 
    description: "Maximize margins without sacrificing quality." 
  },
  { 
    icon: LineChart, 
    title: "Real-Time Analytics", 
    description: "See your network performance live, down to the last message." 
  },
  { 
    icon: Layers, 
    title: "Vendor Aggregation", 
    description: "Manage hundreds of aggregators and carriers from a single dashboard." 
  },
  { 
    icon: Server, 
    title: "Scalable Infrastructure", 
    description: "Built to handle billions of messages monthly." 
  },
  { 
    icon: ShieldAlert, 
    title: "Fallback Redundancy", 
    description: "Ensure 100% uptime with smart failover logic." 
  },
  { 
    icon: Code2, 
    title: "API-First Design", 
    description: "Integrate our engine directly into your existing CPaaS stack." 
  }
];

const ValueProps: React.FC = () => {
  return (
    <section className="py-32 bg-brand-deepblue relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <SectionHeader 
          title="Engineered for" 
          highlight="Performance" 
          subtitle="Key Value Propositions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {valuePropsData.map((prop, index) => (
            <FeatureCard 
              key={index}
              index={index}
              icon={<prop.icon className="w-5 h-5 text-brand-cyan" />}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;