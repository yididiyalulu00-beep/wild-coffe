import React, { useState } from 'react';
import { Users, Wifi, Music, Heart, BookOpen, Coffee, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'atmosphere' | 'community' | 'sourcing'>('atmosphere');

  const pillars = {
    atmosphere: {
      title: 'Warm Sanctuary & Modern Workspace',
      desc: 'Designed with warm natural timber, acoustic sound insulation, comfortable seating booths, and dedicated high-speed fiber Wi-Fi. Whether you are focusing on deep creative work, reading your favorite book, or catching up with colleagues, Wild Coffee offers the perfect comforting ambience.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
      badge: 'Work & Relax Hub'
    },
    community: {
      title: 'A Neighborhood Gathering Place',
      desc: 'We created Wild Coffee to be more than a cafe — it is a vibrant community living room. We host weekend acoustic jazz sessions, monthly barista latte-art throwdowns, and coffee cupping workshops that bring neighbors, artists, and coffee lovers together.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
      badge: 'Local Community'
    },
    sourcing: {
      title: 'Direct-Trade & Ethical Stewardship',
      desc: 'We pay 40% above Fair Trade minimums directly to independent smallholder farmers in Ethiopia, Colombia, Guatemala, and Rwanda. Every sip supports transparent regenerative farming, clean water initiatives, and local agricultural education.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80',
      badge: 'Ethical Sourcing'
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[#170e09] border-t border-[#c58b4e]/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#c58b4e]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Our Story & Space
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6ee] mb-6">
            About Wild Coffee
          </h2>
          <p className="text-base sm:text-lg text-[#d4c3b0] leading-relaxed">
            Wild Coffee is a modern coffee house crafted for people who cherish moments of relaxation, creative focus, warm friendships, and unforgettable artisanal coffee in an inviting, cozy atmosphere.
          </p>
        </div>

        {/* 3 Core Experience Pillars (Tabs & Dynamic Display) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#1f130b] rounded-2xl border border-[#c58b4e]/20 gap-1 sm:gap-2">
            <button
              id="about-pillar-atmosphere"
              onClick={() => setActivePillar('atmosphere')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activePillar === 'atmosphere'
                  ? 'bg-[#c58b4e] text-[#120c08] shadow-md shadow-[#c58b4e]/20'
                  : 'text-[#c2b09c] hover:text-[#f8deb8]'
              }`}
            >
              <Coffee className="w-4 h-4" />
              <span>Cozy Atmosphere</span>
            </button>

            <button
              id="about-pillar-community"
              onClick={() => setActivePillar('community')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activePillar === 'community'
                  ? 'bg-[#c58b4e] text-[#120c08] shadow-md shadow-[#c58b4e]/20'
                  : 'text-[#c2b09c] hover:text-[#f8deb8]'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Meet & Connect</span>
            </button>

            <button
              id="about-pillar-sourcing"
              onClick={() => setActivePillar('sourcing')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activePillar === 'sourcing'
                  ? 'bg-[#c58b4e] text-[#120c08] shadow-md shadow-[#c58b4e]/20'
                  : 'text-[#c2b09c] hover:text-[#f8deb8]'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Ethical Craft</span>
            </button>
          </div>
        </div>

        {/* Active Pillar Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1e130c] p-6 sm:p-10 rounded-3xl border border-[#c58b4e]/20 shadow-2xl mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-md bg-[#2d1b11] text-xs font-bold text-[#dfa86a] border border-[#c58b4e]/30">
              {pillars[activePillar].badge}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#fbf6ee]">
              {pillars[activePillar].title}
            </h3>
            <p className="text-sm sm:text-base text-[#d0beab] leading-relaxed">
              {pillars[activePillar].desc}
            </p>
            
            {/* Quick Amenities Checklist */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#c58b4e]/15">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dac7]">
                <Wifi className="w-4 h-4 text-[#dfa86a]" />
                <span>Ultra-Fast Fiber Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dac7]">
                <Music className="w-4 h-4 text-[#dfa86a]" />
                <span>Curated Jazz & Vinyl Sound</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dac7]">
                <BookOpen className="w-4 h-4 text-[#dfa86a]" />
                <span>Reading Nooks & Power Plugs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dac7]">
                <Award className="w-4 h-4 text-[#dfa86a]" />
                <span>Award-Winning Baristas</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#c58b4e]/30 shadow-xl group">
              <img
                src={pillars[activePillar].image}
                alt={pillars[activePillar].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Statistical Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#1c110a] border border-[#c58b4e]/15 text-center">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#dfa86a] block mb-1">100%</span>
            <span className="text-xs text-[#a99781] uppercase tracking-wider font-medium">Arabica Specialty Grade</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#1c110a] border border-[#c58b4e]/15 text-center">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#dfa86a] block mb-1">14+</span>
            <span className="text-xs text-[#a99781] uppercase tracking-wider font-medium">Single-Origin Terroirs</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#1c110a] border border-[#c58b4e]/15 text-center">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#dfa86a] block mb-1">2,400+</span>
            <span className="text-xs text-[#a99781] uppercase tracking-wider font-medium">Happy Coffee Lovers</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#1c110a] border border-[#c58b4e]/15 text-center">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#dfa86a] block mb-1">7 Days</span>
            <span className="text-xs text-[#a99781] uppercase tracking-wider font-medium">Weekly In-House Roasting</span>
          </div>
        </div>

      </div>
    </section>
  );
};
