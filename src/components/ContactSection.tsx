import React, { useState } from 'react';
import { STORE_INFO } from '../data/coffeeData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Sparkles, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#130b07] border-t border-[#c58b4e]/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#c58b4e]/6 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23170f] border border-[#c58b4e]/30 text-xs font-semibold text-[#dfa86a] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Us
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf6ee] mb-6">
            Get in Touch & Visit
          </h2>
          <p className="text-base sm:text-lg text-[#d4c3b0] leading-relaxed">
            Have questions about our single-origin roasts, event bookings, or private barista workshops? Drop us a note or drop by in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Opening Hours & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Details Card */}
            <div className="p-8 rounded-3xl bg-[#1b110a] border border-[#c58b4e]/20 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#fbf6ee] mb-4">
                Cafe Information
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#2b1b11] border border-[#c58b4e]/30 flex items-center justify-center text-[#dfa86a] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#a99781] font-semibold">Phone Number</p>
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base font-bold text-[#f5efe6] hover:text-[#dfa86a] transition-colors"
                  >
                    {STORE_INFO.phone}
                  </a>
                  <p className="text-xs text-[#8d7c6b]">Barista desk & pickup orders</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#2b1b11] border border-[#c58b4e]/30 flex items-center justify-center text-[#dfa86a] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#a99781] font-semibold">Email Address</p>
                  <a
                    href={`mailto:${STORE_INFO.email}`}
                    className="text-base font-bold text-[#f5efe6] hover:text-[#dfa86a] transition-colors"
                  >
                    {STORE_INFO.email}
                  </a>
                  <p className="text-xs text-[#8d7c6b]">Events & wholesale inquiries</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#2b1b11] border border-[#c58b4e]/30 flex items-center justify-center text-[#dfa86a] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#a99781] font-semibold">Location</p>
                  <p className="text-base font-bold text-[#f5efe6]">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-xs text-[#8d7c6b]">Corner of Timberland & 5th Ave (Outdoor Patio)</p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-8 rounded-3xl bg-[#1b110a] border border-[#c58b4e]/20 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#dfa86a]" />
                  <h3 className="font-serif text-xl font-bold text-[#fbf6ee]">Opening Hours</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open Today
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {STORE_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-2 border-b border-[#c58b4e]/10 text-sm ${
                      h.isCurrentDay ? 'text-[#dfa86a] font-semibold' : 'text-[#c2b09c]'
                    }`}
                  >
                    <span>{h.days}</span>
                    <span className="font-mono text-xs sm:text-sm text-[#f5efe6]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="p-6 rounded-3xl bg-[#1b110a] border border-[#c58b4e]/20 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#a99781] font-semibold">Follow Our Brew Journey</p>
                <p className="text-sm font-bold text-[#fbf6ee]">@wildcoffee.house</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#25170f] border border-[#c58b4e]/30 flex items-center justify-center text-[#dfa86a] hover:bg-[#c58b4e] hover:text-[#120c08] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#25170f] border border-[#c58b4e]/30 flex items-center justify-center text-[#dfa86a] hover:bg-[#c58b4e] hover:text-[#120c08] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#25170f] border border-[#c58b4e]/30 flex items-center justify-center text-[#dfa86a] hover:bg-[#c58b4e] hover:text-[#120c08] transition-all"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1b110a] border border-[#c58b4e]/20 shadow-2xl relative overflow-hidden">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf6ee] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#bda996] mb-8">
                Fill out the form below and our café manager will get back to you within 2 hours.
              </p>

              {isSent && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                  <p className="text-xs sm:text-sm">
                    Thank you! Your message has been sent successfully. We look forward to welcoming you.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#d4c3b0] mb-1.5">
                      Your Name <span className="text-[#dfa86a]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Maya Sterling"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] placeholder-[#816f5f] focus:outline-none focus:border-[#dfa86a] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d4c3b0] mb-1.5">
                      Email Address <span className="text-[#dfa86a]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="maya@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] placeholder-[#816f5f] focus:outline-none focus:border-[#dfa86a] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d4c3b0] mb-1.5">
                    Subject / Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a] transition-colors"
                  >
                    <option value="General Inquiry">General Cafe Question</option>
                    <option value="Table & Group Reservation">Table & Group Reservation</option>
                    <option value="Catering & Events">Catering & Private Roastery Events</option>
                    <option value="Wholesale Beans">Wholesale Coffee Beans</option>
                    <option value="Barista Training">Barista Training & Workshops</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d4c3b0] mb-1.5">
                    Your Message <span className="text-[#dfa86a]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us how we can help make your visit extraordinary..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] placeholder-[#816f5f] focus:outline-none focus:border-[#dfa86a] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfa86a] via-[#c58b4e] to-[#ab682b] hover:from-[#ecc292] hover:to-[#b87635] text-[#120c08] font-bold text-sm shadow-xl shadow-[#c58b4e]/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Baristas</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
