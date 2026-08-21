import React, { useState } from 'react';
import { CoffeeItem } from '../types';
import { COFFEE_MENU } from '../data/coffeeData';
import { Compass, Sparkles, Check, RotateCcw, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FlavorFinderQuizProps {
  onSelectMatch: (item: CoffeeItem) => void;
}

export const FlavorFinderQuiz: React.FC<FlavorFinderQuizProps> = ({ onSelectMatch }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    vibe?: 'bold' | 'sweet' | 'refreshing' | 'velvety';
    dairy?: 'black' | 'oat' | 'creamy';
    time?: 'morning' | 'afternoon' | 'evening';
  }>({});

  const handleChoice = (key: 'vibe' | 'dairy' | 'time', value: any) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Result step
    }
  };

  const getRecommendedCoffee = (): CoffeeItem => {
    if (answers.vibe === 'refreshing') {
      return COFFEE_MENU.find((c) => c.id === 'iced-coffee') || COFFEE_MENU[5];
    }
    if (answers.vibe === 'sweet') {
      return COFFEE_MENU.find((c) => c.id === 'mocha') || COFFEE_MENU[4];
    }
    if (answers.vibe === 'velvety') {
      return COFFEE_MENU.find((c) => c.id === 'cappuccino') || COFFEE_MENU[1];
    }
    return COFFEE_MENU.find((c) => c.id === 'espresso') || COFFEE_MENU[0];
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
  };

  const match = getRecommendedCoffee();

  return (
    <section className="py-20 relative bg-[#150e09] border-t border-[#c58b4e]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#24170f] via-[#1c120c] to-[#160d08] border border-[#c58b4e]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#dfa86a]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1009] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] mb-3">
              <Compass className="w-3.5 h-3.5" />
              Interactive Brew Matcher
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf6ee] mb-2">
              Find Your Wild Signature Brew
            </h3>
            <p className="text-xs sm:text-sm text-[#bda996]">
              Answer 3 fast sensory questions to discover the roast that matches your taste palate.
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === i
                    ? 'w-10 bg-[#dfa86a]'
                    : step > i
                    ? 'w-6 bg-[#c58b4e]/60'
                    : 'w-4 bg-[#311f14]'
                }`}
              />
            ))}
          </div>

          {/* Step 1: Taste Profile */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h4 className="text-center font-serif text-lg text-[#fbf6ee] mb-6">
                1. What flavor sensation are you craving today?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: 'bold', label: 'Bold, dark chocolate & intense crema', subtitle: 'Single-origin punch' },
                  { key: 'velvety', label: 'Silky microfoam & toasted hazelnuts', subtitle: 'Smooth classic harmony' },
                  { key: 'sweet', label: 'Decadent cocoa & sweet bourbon vanilla', subtitle: 'Dessert-like luxury' },
                  { key: 'refreshing', label: 'Crisp, chilled citrus & floral brightness', subtitle: 'Chilled energy boost' }
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleChoice('vibe', opt.key)}
                    className="p-4 rounded-2xl bg-[#1b1009] hover:bg-[#2b1b11] border border-[#c58b4e]/20 hover:border-[#dfa86a] text-left transition-all group"
                  >
                    <p className="text-sm font-bold text-[#f5efe6] group-hover:text-[#dfa86a] transition-colors">{opt.label}</p>
                    <p className="text-xs text-[#9c8976] mt-0.5">{opt.subtitle}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Dairy Preference */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h4 className="text-center font-serif text-lg text-[#fbf6ee] mb-6">
                2. How do you prefer your milk texture?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { key: 'black', label: 'Pure Black & Unfiltered', subtitle: 'Full bean terroir clarity' },
                  { key: 'oat', label: 'Creamy Steamed Oat / Botanical', subtitle: 'Naturally sweet & nutty' },
                  { key: 'creamy', label: 'Whole Pasture Milk Foam', subtitle: 'Classic rich microfoam' }
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleChoice('dairy', opt.key)}
                    className="p-4 rounded-2xl bg-[#1b1009] hover:bg-[#2b1b11] border border-[#c58b4e]/20 hover:border-[#dfa86a] text-left transition-all group"
                  >
                    <p className="text-sm font-bold text-[#f5efe6] group-hover:text-[#dfa86a] transition-colors">{opt.label}</p>
                    <p className="text-xs text-[#9c8976] mt-0.5">{opt.subtitle}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Moment of the day */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h4 className="text-center font-serif text-lg text-[#fbf6ee] mb-6">
                3. What kind of moment is this cup for?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { key: 'morning', label: 'Morning Kickstart', subtitle: 'Peak focus & alertness' },
                  { key: 'afternoon', label: 'Afternoon Creative Flow', subtitle: 'Cozy work & reset' },
                  { key: 'evening', label: 'Unwinding with Friends', subtitle: 'Relaxed conversations' }
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleChoice('time', opt.key)}
                    className="p-4 rounded-2xl bg-[#1b1009] hover:bg-[#2b1b11] border border-[#c58b4e]/20 hover:border-[#dfa86a] text-left transition-all group"
                  >
                    <p className="text-sm font-bold text-[#f5efe6] group-hover:text-[#dfa86a] transition-colors">{opt.label}</p>
                    <p className="text-xs text-[#9c8976] mt-0.5">{opt.subtitle}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Result Step */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <span className="text-xs uppercase tracking-widest text-[#dfa86a] font-bold px-3 py-1 rounded-full bg-[#271910] border border-[#c58b4e]/30 inline-block mb-3">
                Your Matched Wild Drink
              </span>
              <h4 className="font-serif text-3xl font-bold text-[#fbf6ee] mb-2">
                {match.name}
              </h4>
              <p className="text-sm text-[#bda996] max-w-md mx-auto mb-6">
                {match.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onSelectMatch(match)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] hover:from-[#ecc292] hover:to-[#b87635] text-[#120c08] font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Order Your Match (${match.price.toFixed(2)})
                </button>
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1b1009] border border-[#c58b4e]/30 text-[#d0beab] hover:text-[#fbf6ee] text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
