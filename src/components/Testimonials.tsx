import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/coffeeData';
import { Testimonial } from '../types';
import { Star, Quote, Sparkles, Plus, Check, MessageSquare, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    rating: 5,
    comment: '',
    favoriteDrink: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created: Testimonial = {
      id: `custom-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Coffee Enthusiast',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating: newReview.rating,
      comment: newReview.comment,
      favoriteDrink: newReview.favoriteDrink || 'Wild Single-Origin Pour Over',
      date: 'Just now'
    };

    setReviews([created, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowReviewModal(false);
      setNewReview({ name: '', role: '', rating: 5, comment: '', favoriteDrink: '' });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-24 relative bg-[#170e09] border-t border-[#c58b4e]/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#c58b4e]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Guest Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6ee] mb-6">
            Loved by Coffee Lovers
          </h2>
          <p className="text-base sm:text-lg text-[#d4c3b0] leading-relaxed">
            Read stories from daily regulars, digital nomads, and specialty coffee critics who call Wild Coffee their sanctuary.
          </p>

          <div className="mt-6">
            <button
              id="leave-review-btn"
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#23160e] hover:bg-[#2f1e14] border border-[#c58b4e]/40 hover:border-[#dfa86a] text-xs sm:text-sm font-semibold text-[#dfa86a] transition-all shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Share Your Wild Coffee Experience</span>
            </button>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#1d120a] border border-[#c58b4e]/20 hover:border-[#dfa86a]/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#c58b4e]/15 pointer-events-none" />

              <div>
                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#dfa86a] text-[#dfa86a]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#d8c7b5] leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Guest Profile & Drink Badge */}
              <div className="pt-4 border-t border-[#c58b4e]/15">
                <div className="flex items-center gap-3.5 mb-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#c58b4e]/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#fbf6ee]">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-[#a99781]">{rev.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#c58b4e]">
                  <span className="flex items-center gap-1">
                    <Coffee className="w-3 h-3 text-[#dfa86a]" />
                    Fav: {rev.favoriteDrink}
                  </span>
                  <span className="text-[#8d7c6b]">{rev.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {showReviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowReviewModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1c120a] border border-[#c58b4e]/40 p-6 sm:p-8 rounded-3xl max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-2xl font-bold text-[#fbf6ee] mb-2">
                Share Your Wild Coffee Experience
              </h3>
              <p className="text-xs text-[#a99781] mb-6">
                Tell us about your favorite roast, barista moment, or cozy workspace memories.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#fbf6ee]">Thank You!</h4>
                  <p className="text-xs text-[#d0beab] mt-1">Your review is now featured in our community guestbook.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Hayes"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#251810] border border-[#c58b4e]/30 text-sm text-[#f5efe6] placeholder-[#816f5f] focus:outline-none focus:border-[#dfa86a]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Headline or Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Graphic Designer / Coffee Enthusiast"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#251810] border border-[#c58b4e]/30 text-sm text-[#f5efe6] placeholder-[#816f5f] focus:outline-none focus:border-[#dfa86a]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1 text-[#dfa86a]"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating
                                ? 'fill-[#dfa86a] text-[#dfa86a]'
                                : 'text-[#4e3422]'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Favorite Drink Ordered</label>
                    <input
                      type="text"
                      placeholder="e.g. Cappuccino & Almond Croissant"
                      value={newReview.favoriteDrink}
                      onChange={(e) => setNewReview({ ...newReview, favoriteDrink: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#251810] border border-[#c58b4e]/30 text-sm text-[#f5efe6] placeholder-[#816f5f] focus:outline-none focus:border-[#dfa86a]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How was your coffee, the vibe, and the hospitality?"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#251810] border border-[#c58b4e]/30 text-sm text-[#f5efe6] placeholder-[#816f5f] focus:outline-none focus:border-[#dfa86a]"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewModal(false)}
                      className="px-4 py-2 text-xs font-medium text-[#b5a38e] hover:text-[#fbf6ee]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] text-[#120c08] font-bold text-xs shadow-md"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
