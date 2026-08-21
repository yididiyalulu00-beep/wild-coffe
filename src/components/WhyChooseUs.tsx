import React from 'react';
import { WHY_CHOOSE_US } from '../data/coffeeData';
import { Sparkles, Flame, Coffee, Zap, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#dfa86a]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#dfa86a]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#dfa86a]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#dfa86a]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#dfa86a]" />;
      default:
        return <Coffee className="w-6 h-6 text-[#dfa86a]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#140d09] border-t border-[#c58b4e]/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#c58b4e]/6 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Wild Coffee Difference
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6ee] mb-6">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[#d4c3b0] leading-relaxed">
            Our unwavering commitment to roasting craftsmanship, artisanal precision, and welcoming hospitality is infused in every single pour.
          </p>
        </div>

        {/* 5 Distinct Requested Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`why-card-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group p-8 rounded-3xl bg-[#1b120c] border border-[#c58b4e]/20 hover:border-[#dfa86a]/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1 relative overflow-hidden ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c58b4e]/5 rounded-full blur-2xl group-hover:bg-[#c58b4e]/15 transition-all duration-500 pointer-events-none"></div>

              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2f1f14] to-[#1e130c] flex items-center justify-center border border-[#c58b4e]/30 shadow-inner group-hover:scale-110 group-hover:border-[#dfa86a] transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#dfa86a] px-3 py-1 rounded-full bg-[#271910] border border-[#c58b4e]/20">
                    {item.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fbf6ee] mb-3 group-hover:text-[#dfa86a] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#bcaaa0] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 border-t border-[#c58b4e]/10 flex items-center justify-between text-xs text-[#a4917b] group-hover:text-[#dfa86a] transition-colors">
                <span className="font-medium">Wild Coffee Standard</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
