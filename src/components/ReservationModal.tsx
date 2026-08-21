import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, X, Check, Coffee, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-08-21',
    time: '10:30 AM',
    guests: '2 Guests',
    seating: 'Cozy Leather Lounge',
    notes: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '2026-08-21',
        time: '10:30 AM',
        guests: '2 Guests',
        seating: 'Cozy Leather Lounge',
        notes: ''
      });
    }, 2500);
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

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-[#1a110a] border border-[#c58b4e]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#140c07]/80 hover:bg-[#25150c] text-[#fbf6ee] border border-[#c58b4e]/40 flex items-center justify-center transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#dfa86a] font-bold">
              Table Reserved
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#fbf6ee]">
              See You at Wild Coffee!
            </h3>
            <p className="text-xs sm:text-sm text-[#baa897] max-w-sm mx-auto">
              A reservation confirmation has been sent to your email. Your {formData.seating} table for {formData.guests} is scheduled for {formData.date} at {formData.time}.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              Visit & Table Reservation
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf6ee] mb-1">
              Reserve Your Cozy Table
            </h3>
            <p className="text-xs text-[#a99781] mb-6">
              Skip the wait and reserve seating for work sprints, friendly meetups, or quiet reading sessions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="david@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-xs text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-xs text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                  >
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Party Size</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-xs text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                  >
                    <option value="1 Guest (Solo Study)">1 Guest (Solo)</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3–4 Guests</option>
                    <option value="5-8 Guests (Group Table)">5–8 Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">Preferred Atmosphere Seating</label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-xs text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                >
                  <option value="Cozy Leather Lounge">Cozy Leather Lounge (Plush & Relaxed)</option>
                  <option value="Window Bar (Sunlit Street View)">Window Bar (Sunlit Street View)</option>
                  <option value="Outdoor Heated Patio">Outdoor Heated Greenery Patio</option>
                  <option value="Quiet Study & Work Corner">Quiet Study & Work Corner (Power Outlets)</option>
                  <option value="Brew Bar Counter (Watch Baristas)">Brew Bar Counter (Watch Baristas)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfa86a] via-[#c58b4e] to-[#ab682b] text-[#120c08] font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
