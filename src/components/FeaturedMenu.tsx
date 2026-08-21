import React, { useState } from 'react';
import { CoffeeItem } from '../types';
import { COFFEE_MENU } from '../data/coffeeData';
import { Plus, Eye, Sparkles, Flame, Clock, Check, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturedMenuProps {
  onAddToCart: (item: CoffeeItem) => void;
  onQuickView: (item: CoffeeItem) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({
  onAddToCart,
  onQuickView
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({});

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'espresso', label: 'Espresso Classics' },
    { id: 'iced', label: 'Iced & Cold Brews' },
    { id: 'specialty', label: 'Specialty Creations' },
    { id: 'bakery', label: 'Bakery & Sweets' }
  ];

  const filteredItems = COFFEE_MENU.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.flavorNotes &&
        item.flavorNotes.some((note) =>
          note.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    return matchesCategory && matchesSearch;
  });

  const handleAddWithFeedback = (item: CoffeeItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1400);
  };

  return (
    <section id="menu" className="py-24 relative bg-[#150e09] border-t border-[#c58b4e]/10">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c58b4e]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#935b2a]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Artisanal Collection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6ee] mb-4">
            Featured Coffee Menu
          </h2>
          <p className="text-base sm:text-lg text-[#ccbaaa] leading-relaxed">
            Every single bean is precision-weighed, fresh-roasted, and brewed to unlock nuanced aromas of single-origin harvests.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`menu-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] text-[#120c08] font-bold shadow-md shadow-[#c58b4e]/20'
                    : 'bg-[#20150e] text-[#c9b7a4] hover:text-[#f8deb8] hover:bg-[#2c1d14] border border-[#c58b4e]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a08d7a]" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee or flavor notes..."
              className="w-full pl-10 pr-4 py-2 bg-[#20150e] border border-[#c58b4e]/25 rounded-full text-xs sm:text-sm text-[#f5efe6] placeholder-[#8e7a68] focus:outline-none focus:border-[#dfa86a] transition-colors"
            />
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1a110a] rounded-3xl border border-[#c58b4e]/15">
            <p className="text-lg text-[#d4c3b0] font-serif mb-2">No drinks found matching your search</p>
            <p className="text-sm text-[#9b8773] mb-4">Try checking for espresso, latte, or chocolate notes</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 text-xs font-semibold rounded-full bg-[#c58b4e] text-[#120c08]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => {
              const isAdded = !!addedItemIds[item.id];

              return (
                <motion.div
                  key={item.id}
                  id={`coffee-card-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-3xl bg-[#1b120c] border border-[#c58b4e]/20 hover:border-[#dfa86a]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
                >
                  {/* Card Image Container */}
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-[#24170f]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b120c] via-transparent to-black/30"></div>

                    {/* Popular / Seasonal Badge */}
                    {item.isPopular && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#c58b4e] text-[#120c08] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        Popular Choice
                      </span>
                    )}
                    {item.isSeasonal && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#ab4e68] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        Seasonal Roast
                      </span>
                    )}

                    {/* Quick View Button */}
                    <button
                      id={`quick-view-btn-${item.id}`}
                      onClick={() => onQuickView(item)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-[#170e09]/80 backdrop-blur-md text-[#f5efe6] hover:text-[#dfa86a] hover:bg-[#25160e] border border-[#c58b4e]/30 transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 duration-200"
                      title="Quick View Details"
                      aria-label={`Quick view for ${item.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* Preparation Time / Roast overlay tag */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      {item.roastLevel && (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120c08]/85 text-[10px] font-medium text-[#dfa86a] border border-[#c58b4e]/30 backdrop-blur-sm">
                          {item.roastLevel} Roast
                        </span>
                      )}
                      {item.preparationTime && (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120c08]/85 text-[10px] font-medium text-[#d0beab] border border-[#c58b4e]/30 backdrop-blur-sm flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#c58b4e]" />
                          {item.preparationTime}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Sub-tagline & Title */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-[#c58b4e] font-semibold">
                            {item.tagline}
                          </p>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fcf8f2] group-hover:text-[#dfa86a] transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        {/* Price Badge */}
                        <div className="text-right">
                          <span className="font-serif text-2xl font-bold text-[#dfa86a]">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#b8a593] line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Flavor Notes Tags */}
                      {item.flavorNotes && item.flavorNotes.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {item.flavorNotes.map((note) => (
                            <span
                              key={note}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-[#24170f] text-[#ddcbba] border border-[#c58b4e]/15 font-normal"
                            >
                              • {note}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#c58b4e]/15 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onQuickView(item)}
                        className="text-xs text-[#d0beab] hover:text-[#dfa86a] font-medium transition-colors underline decoration-[#c58b4e]/30 underline-offset-4"
                      >
                        Details & Origin
                      </button>

                      {/* Add to Order Button */}
                      <button
                        id={`add-to-order-btn-${item.id}`}
                        onClick={() => handleAddWithFeedback(item)}
                        className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                          isAdded
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] hover:from-[#ecc292] hover:to-[#b87635] text-[#120c08] shadow-md shadow-[#c58b4e]/20 hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            Added!
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            Add to Order
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
