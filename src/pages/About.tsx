import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Target, ShieldCheck, Eye, Zap } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';

const valuesData = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-cyan" />,
    title: "Reliability First",
    description: "Your traffic is our priority."
  },
  {
    icon: <Eye className="w-8 h-8 text-brand-cyan" />,
    title: "Radical Transparency",
    description: "Clear data, clear pricing, clear communication."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-cyan" />,
    title: "Continuous Innovation",
    description: "The telecom landscape changes, so do we."
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-deepblue relative min-h-screen overflow-hidden">
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge icon={<Users className="w-3.5 h-3.5 text-brand-cyan" />} text="About Us" />
          <SectionHeader 
            title="We are Squad Global." 
            highlight={<><br className="hidden md:block" />We Speak Fluent Telecom.</>} 
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-24">

          {/* Our Story Card - NOW MATCHES MISSION COLOR/STYLING */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-12 rounded-3xl bg-brand-cyan/[0.03] border border-brand-cyan/20 flex flex-col overflow-hidden"
          >
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full group-hover:bg-brand-cyan/20 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 mb-8 w-fit">
                <Globe className="w-6 h-6 text-brand-cyan" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Our Story</h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
                  Founded by veterans of the telecommunications and software engineering worlds, Squad Global was built on a simple premise: The infrastructure behind the world’s messaging is too important to be left to chance.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
                  We noticed a gap in the market a lack of flexible, intelligent software that could keep pace with the exploding volume of A2P traffic and the complexity of the global carrier ecosystem. We set out to build a switching platform that wasn't just a tool, but a strategic asset for any company serious about messaging.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Mission & Team Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-12 rounded-3xl bg-brand-cyan/[0.03] border border-brand-cyan/20 flex flex-col overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full group-hover:bg-brand-cyan/20 transition-colors duration-700"></div>

            <div className="relative z-10 mb-10">
              <div className="inline-flex p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 mb-8 w-fit">
                <Target className="w-6 h-6 text-brand-cyan" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
                To empower businesses with the software intelligence required to build flawless, profitable, and scalable communication networks.
              </p>
            </div>

            <div className="relative z-10 mt-auto pt-8 border-t border-brand-cyan/10">
              {/* FIXED: Added Team Icon */}
              <div className="inline-flex p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 mb-4 w-fit">
                <Users className="w-5 h-5 text-brand-cyan" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Team</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
                We are a global team of telecom engineers, routing specialists, and software architects. We are obsessed with data, passionate about connectivity, and committed to your success.
              </p>
            </div>
          </motion.div>

        </div>

       {/* Values Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Values</h2>
          <div className="h-1 w-12 bg-brand-cyan rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valuesData.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-charcoal border border-white/10 p-8 md:p-10 rounded-2xl hover:border-brand-cyan/30 transition-all duration-300 group shadow-lg text-center flex flex-col items-center"
            >
              <div className="p-4 bg-brand-deepblue rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.1)] group-hover:scale-110 transition-transform duration-300 mb-8 border border-white/5">
                {val.icon}
              </div>
              
              {/* FIXED: Increased title to text-2xl and weight to font-bold */}
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4">
                {val.title}
              </h3>
              
              {/* FIXED: Increased from text-base to text-lg and color to gray-300 for clarity */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;