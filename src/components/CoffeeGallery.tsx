import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/coffeeData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CoffeeGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'cups', label: 'Coffee Cups' },
    { id: 'barista', label: 'Barista Preparation' },
    { id: 'interior', label: 'Coffee Shop Interior' },
    { id: 'pastries', label: 'Fresh Pastries' },
    { id: 'moments', label: 'Friends & Moments' }
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredGallery.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredGallery.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedImage(filteredGallery[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#120c08] border-t border-[#c58b4e]/10">
      {/* Glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-[#c58b4e]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Atmosphere
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6ee] mb-6">
            Coffee Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#d4c3b0] leading-relaxed">
            Glimpses into our daily coffee craft, sun-drenched cafe seating, golden freshly baked pastries, and warm conversations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-cat-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] text-[#120c08] font-bold shadow-md shadow-[#c58b4e]/20'
                  : 'bg-[#1e130c] text-[#c9b8a5] hover:text-[#f8deb8] hover:bg-[#2b1b12] border border-[#c58b4e]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Bento-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`gallery-item-${item.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#1e130c] border border-[#c58b4e]/20 hover:border-[#dfa86a]/70 shadow-xl hover:shadow-2xl hover:shadow-black/80 transition-all duration-300 ${
                idx === 0 || idx === 7 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/95 via-[#120c08]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Hover Floating Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-[#170e09]/90 border border-[#c58b4e]/40 flex items-center justify-center text-[#dfa86a] shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#c58b4e] font-bold px-2.5 py-1 rounded-md bg-[#190f09]/90 border border-[#c58b4e]/30 inline-block mb-2">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#fbf6ee] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#d0beab] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#180f0a] border border-[#c58b4e]/40 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-[#140c07]/80 hover:bg-[#25150c] text-[#fbf6ee] border border-[#c58b4e]/40 flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next controls */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#140c07]/80 hover:bg-[#25150c] text-[#fbf6ee] border border-[#c58b4e]/40 flex items-center justify-center transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#140c07]/80 hover:bg-[#25150c] text-[#fbf6ee] border border-[#c58b4e]/40 flex items-center justify-center transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh]">
                <div className="md:col-span-8 bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full max-h-[75vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="md:col-span-4 p-8 flex flex-col justify-between bg-[#19100a]">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#dfa86a] font-bold px-3 py-1 rounded-full bg-[#271910] border border-[#c58b4e]/30 inline-block mb-4">
                      {selectedImage.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#fbf6ee] mb-3">
                      {selectedImage.title}
                    </h3>
                    <p className="text-sm text-[#d0beab] leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#c58b4e]/20 flex items-center justify-between text-xs text-[#a99781]">
                    <span>Wild Coffee Gallery Archives</span>
                    <span>Portland, OR</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
