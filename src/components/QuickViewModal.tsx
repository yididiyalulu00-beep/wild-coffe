import React, { useState } from 'react';
import { CoffeeItem } from '../types';
import { X, Plus, Check, Clock, Flame, MapPin, Sparkles, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuickViewModalProps {
  item: CoffeeItem | null;
  onClose: () => void;
  onAddToCartCustomized: (item: CoffeeItem, size: any, milk: any, sweetness: any, extraShots: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  item,
  onClose,
  onAddToCartCustomized
}) => {
  if (!item) return null;

  const [selectedSize, setSelectedSize] = useState<'Regular (12oz)' | 'Large (16oz)' | 'Grand (20oz)'>('Regular (12oz)');
  const [selectedMilk, setSelectedMilk] = useState<'Whole Milk' | 'Oat Milk (+ $0.75)' | 'Almond Milk (+ $0.75)' | 'Soy Milk (+ $0.50)' | 'None / Black'>('Whole Milk');
  const [selectedSweetness, setSelectedSweetness] = useState<'100% Standard' | '70% Less Sweet' | '30% Subtle' | 'Unsweetened'>('100% Standard');
  const [extraShots, setExtraShots] = useState<number>(0);
  const [added, setAdded] = useState(false);

  const getCalculatedPrice = () => {
    let price = item.price;
    if (selectedSize === 'Large (16oz)') price += 0.80;
    if (selectedSize === 'Grand (20oz)') price += 1.40;
    if (selectedMilk.includes('+ $0.75')) price += 0.75;
    if (selectedMilk.includes('+ $0.50')) price += 0.50;
    price += extraShots * 0.80;
    return price;
  };

  const handleAdd = () => {
    onAddToCartCustomized(item, selectedSize, selectedMilk, selectedSweetness, extraShots);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-[#1a110a] border border-[#c58b4e]/40 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#140c07]/80 hover:bg-[#28170e] text-[#fbf6ee] border border-[#c58b4e]/40 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Image Side */}
          <div className="md:col-span-5 relative h-56 md:h-full min-h-[220px] bg-[#22150e]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a110a] via-transparent to-transparent"></div>

            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {item.roastLevel && (
                <span className="px-2.5 py-0.5 rounded bg-[#120c08]/90 text-[10px] font-bold text-[#dfa86a] border border-[#c58b4e]/30">
                  {item.roastLevel} Roast
                </span>
              )}
              {item.calories && (
                <span className="px-2.5 py-0.5 rounded bg-[#120c08]/90 text-[10px] font-bold text-[#d0beab] border border-[#c58b4e]/30">
                  {item.calories} kcal
                </span>
              )}
            </div>
          </div>

          {/* Details & Customization Side */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#c58b4e] font-bold px-2.5 py-0.5 rounded bg-[#271910] border border-[#c58b4e]/30 inline-block mb-1.5">
                {item.tagline}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#fbf6ee]">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#baa897] leading-relaxed mt-1 mb-4">
                {item.description}
              </p>

              {/* Origin Terroir */}
              {item.origin && (
                <div className="p-3 rounded-xl bg-[#23160e] border border-[#c58b4e]/20 text-xs mb-4 flex items-center gap-2 text-[#d4c3b0]">
                  <MapPin className="w-4 h-4 text-[#dfa86a] shrink-0" />
                  <span><strong>Single-Origin:</strong> {item.origin}</span>
                </div>
              )}

              {/* Flavor Profile Pills */}
              {item.flavorNotes && (
                <div className="mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#a99781] block mb-1 font-semibold">
                    Tasting Notes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-[#271910] text-[#dfa86a] border border-[#c58b4e]/30"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Select */}
              <div className="mb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#a99781] block mb-1 font-semibold">
                  Cup Size
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(['Regular (12oz)', 'Large (16oz)', 'Grand (20oz)'] as const).map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                        selectedSize === sz
                          ? 'bg-[#c58b4e] text-[#120c08] border-[#dfa86a]'
                          : 'bg-[#22150e] text-[#c2b09c] border-[#c58b4e]/20'
                      }`}
                    >
                      {sz.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Milk Option */}
              <div className="mb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#a99781] block mb-1 font-semibold">
                  Milk Preference
                </span>
                <select
                  value={selectedMilk}
                  onChange={(e: any) => setSelectedMilk(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#22150e] border border-[#c58b4e]/30 text-xs text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                >
                  <option value="Whole Milk">Whole Pasture Milk</option>
                  <option value="Oat Milk (+ $0.75)">Oat Milk (+ $0.75)</option>
                  <option value="Almond Milk (+ $0.75)">Almond Milk (+ $0.75)</option>
                  <option value="Soy Milk (+ $0.50)">Soy Milk (+ $0.50)</option>
                  <option value="None / Black">None / Black</option>
                </select>
              </div>

              {/* Extra Shots */}
              <div className="flex items-center justify-between py-2 border-t border-[#c58b4e]/15">
                <span className="text-xs text-[#d0beab]">Extra Espresso Shots (+ $0.80)</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setExtraShots(Math.max(0, extraShots - 1))}
                    className="w-6 h-6 rounded-md bg-[#24170f] border border-[#c58b4e]/30 text-xs text-[#dfa86a] flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-[#fbf6ee] w-4 text-center">{extraShots}</span>
                  <button
                    type="button"
                    onClick={() => setExtraShots(extraShots + 1)}
                    className="w-6 h-6 rounded-md bg-[#24170f] border border-[#c58b4e]/30 text-xs text-[#dfa86a] flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Action Bar */}
            <div className="pt-3 border-t border-[#c58b4e]/20 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-[#a99781] block">Total Handcrafted Price</span>
                <span className="font-serif text-2xl font-bold text-[#dfa86a]">
                  ${getCalculatedPrice().toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAdd}
                className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-lg ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] hover:from-[#ecc292] hover:to-[#b87635] text-[#120c08]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Bag!
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    Add Customized Drink
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
