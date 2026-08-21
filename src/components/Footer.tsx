import React, { useState } from 'react';
import { STORE_INFO } from '../data/coffeeData';
import { Coffee, ArrowUp, Send, Check, Sparkles, Heart, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [discountCode, setDiscountCode] = useState<string | null>(null);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setDiscountCode('WILD15');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="bg-[#0e0805] text-[#bcaaa0] border-t border-[#c58b4e]/20 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#c58b4e]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Newsletter & Promo Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#25170f] via-[#1c120a] to-[#25170f] border border-[#c58b4e]/30 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#dfa86a] font-bold inline-flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Join the Wild Coffee Club
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf6ee]">
              Get 15% Off Your First Visit
            </h3>
            <p className="text-xs sm:text-sm text-[#bcaaa0] mt-1 max-w-md">
              Receive invitations to secret tasting sessions, seasonal micro-lot drops, and exclusive bean roasts.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-3 bg-[#170e08] p-4 rounded-2xl border border-emerald-500/40 text-emerald-300">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Welcome to the Club!</p>
                  <p className="text-xs text-[#dfa86a]">Use code <span className="font-mono font-bold bg-[#291a10] px-2 py-0.5 rounded text-white">{discountCode}</span> for 15% off.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-[#170e08] border border-[#c58b4e]/30 text-sm text-[#fbf6ee] placeholder-[#7e6d5e] focus:outline-none focus:border-[#dfa86a] sm:w-72"
                />
                <button
                  type="submit"
                  id="newsletter-subscribe-btn"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] hover:from-[#ecc292] hover:to-[#b87635] text-[#120c08] font-bold text-xs shadow-md shrink-0 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c58b4e] to-[#7f4f20] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#170e09] rounded-[10px] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#dfa86a]" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#f5efe6]">
                WILD <span className="text-[#c58b4e] font-light italic">COFFEE</span>
              </span>
            </div>
            <p className="text-sm text-[#a4917b] leading-relaxed max-w-sm">
              Artisan coffee house & micro-roastery dedicated to single-origin precision, cozy comfort, and unforgettable moments.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1b110a] border border-[#c58b4e]/20 flex items-center justify-center text-[#dfa86a] hover:bg-[#c58b4e] hover:text-[#120c08] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1b110a] border border-[#c58b4e]/20 flex items-center justify-center text-[#dfa86a] hover:bg-[#c58b4e] hover:text-[#120c08] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1b110a] border border-[#c58b4e]/20 flex items-center justify-center text-[#dfa86a] hover:bg-[#c58b4e] hover:text-[#120c08] transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#fbf6ee] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#dfa86a] transition-colors">Home Sanctuary</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#dfa86a] transition-colors">Artisan Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#dfa86a] transition-colors">About Our Roastery</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#dfa86a] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#dfa86a] transition-colors">Coffee Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#dfa86a] transition-colors">Customer Reviews</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#fbf6ee] mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a99781]">
              <li className="flex flex-col">
                <span className="text-[#dfa86a] font-semibold">Mon – Fri</span>
                <span>6:30 AM – 8:30 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[#dfa86a] font-semibold">Saturday</span>
                <span>7:30 AM – 9:30 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[#dfa86a] font-semibold">Sunday</span>
                <span>8:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#fbf6ee] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a99781]">
              <li>
                <span className="block text-[#d0beab] font-medium">{STORE_INFO.address}</span>
              </li>
              <li>
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-[#dfa86a] transition-colors block">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-[#dfa86a] transition-colors block">
                  {STORE_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#c58b4e]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e7a68]">
          <p>© {new Date().getFullYear()} Wild Coffee House & Roastery. All rights reserved. Handcrafted with passion.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[#dfa86a]">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Organic Fair Trade Certified
            </span>
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="flex items-center gap-1.5 text-[#d0beab] hover:text-[#dfa86a] transition-colors p-2 rounded-lg bg-[#1a1009] border border-[#c58b4e]/20"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
