import React from 'react';
import { Coffee, ArrowRight, Sparkles, MapPin, Award, Star, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitUs }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20 md:py-24"
    >
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute inset-0 bg-[#120c08] pointer-events-none">
        {/* Radial Warm Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#c58b4e]/12 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#8a5323]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-[#dfa86a]/8 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#dfa86a_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cinematic Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Handcrafted Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#24170f]/90 border border-[#c58b4e]/30 shadow-inner mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#dfa86a]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#dfa86a]">
                Artisanal Micro-Roastery & Cafe
              </span>
            </div>

            {/* Main Required Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fbf6ee] leading-[1.1] mb-6">
              Coffee. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eed5b6] via-[#dfa86a] to-[#c58b4e] italic font-normal">
                Comfort.
              </span> <br />
              Wild Moments.
            </h1>

            {/* Required Subtitle */}
            <p className="text-lg sm:text-xl text-[#d4c3b0] font-normal leading-relaxed max-w-xl mb-9">
              Welcome to <span className="text-[#f5efe6] font-semibold">Wild Coffee</span> — where every cup is crafted to make your moment special.
            </p>

            {/* Required Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
              {/* Explore Menu Button */}
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-[#120c08] bg-gradient-to-r from-[#dfa86a] via-[#c58b4e] to-[#ab6b2d] hover:from-[#ecc292] hover:to-[#be7b37] font-semibold text-base shadow-xl shadow-[#c58b4e]/25 hover:shadow-[#c58b4e]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Visit Us Button */}
              <button
                id="hero-visit-us-btn"
                onClick={onVisitUs}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-[#f3e6d5] bg-[#22160e]/80 hover:bg-[#2e1d13] border border-[#c58b4e]/40 hover:border-[#dfa86a] font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2.5 group backdrop-blur-sm"
              >
                <Compass className="w-4 h-4 text-[#dfa86a] group-hover:rotate-45 transition-transform duration-300" />
                <span>Visit Us</span>
              </button>
            </div>

            {/* Micro Highlights & Social Proof Bar */}
            <div className="pt-6 border-t border-[#c58b4e]/15 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-[#dfa86a] mb-1">
                  <Star className="w-4 h-4 fill-[#dfa86a]" />
                  <span className="font-bold text-[#fbf6ee] text-sm">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-[#a4917b]">Over 2,400+ reviews</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#dfa86a] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-[#fbf6ee] text-sm">100% Arabica</span>
                </div>
                <p className="text-xs text-[#a4917b]">Single-origin grade 1</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#dfa86a] mb-1">
                  <Coffee className="w-4 h-4" />
                  <span className="font-bold text-[#fbf6ee] text-sm">Roasted Weekly</span>
                </div>
                <p className="text-xs text-[#a4917b]">Fresh batch in-house</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero High-Quality Visual Showcase with Depth & Layers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Outer Decorative Ring */}
            <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-[#c58b4e]/20 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#dfa86a]/15 pointer-events-none"></div>

            {/* Main Featured Showcase Image with Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden p-3 bg-gradient-to-b from-[#3a2618]/60 to-[#180f0a]/90 border border-[#c58b4e]/30 shadow-2xl shadow-black/80 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85"
                  alt="Wild Coffee signature pour over coffee and cozy atmosphere"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120c08] via-transparent to-black/20"></div>

                {/* Steam effect placeholder */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-16 pointer-events-none">
                  <div className="w-2 h-10 bg-white/20 rounded-full blur-[4px] animate-steam mx-auto"></div>
                </div>

                {/* Badge Overlay: Barista Pick */}
                <div className="absolute top-4 left-4 bg-[#170e09]/90 backdrop-blur-md border border-[#c58b4e]/40 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-semibold text-[#eed7bd]">Ethiopia Yirgacheffe Pour-Over</span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#19100a]/95 backdrop-blur-md border border-[#c58b4e]/30 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#c58b4e] font-semibold">Today's Roaster Pick</p>
                      <h4 className="font-serif text-base font-bold text-[#fbf6ee]">Wild Reserve Honey Process</h4>
                      <p className="text-xs text-[#a99781]">Notes of Jasmine, Peach & Toasted Almonds</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#a99781] line-through block">$6.50</span>
                      <span className="text-lg font-bold text-[#dfa86a]">$5.25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mini Experience Badge 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-6 sm:-left-10 bg-[#1e130c]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#c58b4e]/35 shadow-xl hidden sm:flex items-center gap-3 z-20 max-w-[210px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#331e11] flex items-center justify-center text-[#dfa86a] shrink-0 border border-[#c58b4e]/30">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#eed4b6] leading-tight">Freshly Extracted</p>
                <p className="text-[10px] text-[#a4917b]">9 Bar Calibrated Pressure</p>
              </div>
            </motion.div>

            {/* Floating Mini Experience Badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#1e130c]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#c58b4e]/35 shadow-xl hidden sm:flex items-center gap-3 z-20 max-w-[210px]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#331e11] flex items-center justify-center text-[#dfa86a] shrink-0 border border-[#c58b4e]/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#eed4b6] leading-tight">Cozy Coffee Sanctuary</p>
                <p className="text-[10px] text-[#a4917b]">Indoor & Sunlit Patio</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
