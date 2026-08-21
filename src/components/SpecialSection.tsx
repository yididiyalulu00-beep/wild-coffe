import React, { useState } from 'react';
import { Coffee, Flame, Droplets, Thermometer, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SpecialSectionProps {
  onExploreCraft: () => void;
}

export const SpecialSection: React.FC<SpecialSectionProps> = ({ onExploreCraft }) => {
  const [activeBrewTab, setActiveBrewTab] = useState<'pourover' | 'espresso' | 'colddrip'>('pourover');

  const brewDetails = {
    pourover: {
      name: 'Artisan V60 Pour-Over',
      temp: '93.5°C Precision Mineral Water',
      ratio: '1:16 Specialty Extraction',
      time: '3 mins 15 secs',
      flavor: 'Highlights floral jasmine, delicate stone fruit, and vibrant clean acidity.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85'
    },
    espresso: {
      name: 'High-Pressure Espresso Extraction',
      temp: '92.8°C PID Calibrated Dual Boilers',
      ratio: '1:2 Intense Micro-Extraction',
      time: '28 secs @ 9 Bar Pressure',
      flavor: 'Thick, creamy hazelnut crema with heavy chocolate body and lingering sweet caramel finish.',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=1200&q=85'
    },
    colddrip: {
      name: 'Kyoto-Style Cold Drip',
      temp: '4°C Slow Gravity Filtration',
      ratio: '1:12 Single Drip per Second',
      time: '18 Hours Slow Maceration',
      flavor: 'Smooth liquor-like body with zero astringency, notes of dark cocoa and sweet bourbon vanilla.',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=85'
    }
  };

  return (
    <section id="craft-section" className="py-24 relative overflow-hidden bg-[#120c08]">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#c58b4e]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Special Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Coffee Visual with Story Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-3 bg-gradient-to-br from-[#2f1f14] via-[#1b120c] to-[#120c08] border border-[#c58b4e]/30 shadow-2xl shadow-black/80">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden">
                <img
                  src={brewDetails[activeBrewTab].image}
                  alt="Brewed for Your Best Moments - Wild Coffee craft"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120c08] via-transparent to-black/20"></div>

                {/* Floating Metric Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-[#19100a]/95 backdrop-blur-md border border-[#c58b4e]/30 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2a1b12] flex items-center justify-center text-[#dfa86a] shrink-0 border border-[#c58b4e]/30">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#c58b4e] font-semibold">Calibrated Heat</p>
                      <p className="text-xs font-bold text-[#fbf6ee]">{brewDetails[activeBrewTab].temp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brewing Method Switcher Tabs under the image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <button
                id="brew-tab-pourover"
                onClick={() => setActiveBrewTab('pourover')}
                className={`p-3 rounded-2xl text-xs font-semibold text-center transition-all duration-200 border ${
                  activeBrewTab === 'pourover'
                    ? 'bg-[#281a10] text-[#dfa86a] border-[#dfa86a]/60 shadow-lg'
                    : 'bg-[#180f0a] text-[#a4917b] border-[#c58b4e]/15 hover:border-[#c58b4e]/40'
                }`}
              >
                Pour-Over V60
              </button>
              <button
                id="brew-tab-espresso"
                onClick={() => setActiveBrewTab('espresso')}
                className={`p-3 rounded-2xl text-xs font-semibold text-center transition-all duration-200 border ${
                  activeBrewTab === 'espresso'
                    ? 'bg-[#281a10] text-[#dfa86a] border-[#dfa86a]/60 shadow-lg'
                    : 'bg-[#180f0a] text-[#a4917b] border-[#c58b4e]/15 hover:border-[#c58b4e]/40'
                }`}
              >
                Espresso 9-Bar
              </button>
              <button
                id="brew-tab-colddrip"
                onClick={() => setActiveBrewTab('colddrip')}
                className={`p-3 rounded-2xl text-xs font-semibold text-center transition-all duration-200 border ${
                  activeBrewTab === 'colddrip'
                    ? 'bg-[#281a10] text-[#dfa86a] border-[#dfa86a]/60 shadow-lg'
                    : 'bg-[#180f0a] text-[#a4917b] border-[#c58b4e]/15 hover:border-[#c58b4e]/40'
                }`}
              >
                Kyoto Cold Drip
              </button>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Craft Quality Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              The Art of Exceptional Roasting
            </div>

            {/* Required Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6ee] leading-tight mb-6">
              Brewed for Your <br />
              <span className="italic font-normal text-[#dfa86a]">Best Moments</span>
            </h2>

            {/* Required Description */}
            <p className="text-base sm:text-lg text-[#d4c3b0] leading-relaxed mb-8">
              At Wild Coffee, we believe that extraordinary coffee starts long before the cup reaches your hands. We partner directly with sustainable, regenerative coffee farms to source Grade-1 single-origin beans, roasting each batch with scientific precision to celebrate its unique terroir and origin notes.
            </p>

            {/* Detailed Craft Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#1b120c] border border-[#c58b4e]/15">
                <CheckCircle2 className="w-5 h-5 text-[#dfa86a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5efe6]">100% Hand-Sorted Arabica Micro-Lots</h4>
                  <p className="text-xs text-[#a99781] mt-0.5">Only ripe cherries harvested at optimal Brix sweetness are chosen for our seasonal roasts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#1b120c] border border-[#c58b4e]/15">
                <CheckCircle2 className="w-5 h-5 text-[#dfa86a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5efe6]">Custom Mineral-Tuned Water Chemistry</h4>
                  <p className="text-xs text-[#a99781] mt-0.5">Reverse osmosis water balanced with calcium and magnesium to unlock bright, clean flavor notes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#1b120c] border border-[#c58b4e]/15">
                <CheckCircle2 className="w-5 h-5 text-[#dfa86a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#f5efe6]">Organic Dairy & Fresh Botanical Milks</h4>
                  <p className="text-xs text-[#a99781] mt-0.5">Grass-fed pasture milk, creamy steamed oat milk, and organic almond milk steamed to silky microfoam.</p>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div>
              <button
                id="special-explore-craft-btn"
                onClick={onExploreCraft}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] hover:from-[#ecc292] hover:to-[#b87635] text-[#120c08] font-bold text-sm shadow-lg shadow-[#c58b4e]/20 transition-all hover:scale-[1.02]"
              >
                <span>Discover Our Roasting Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
