import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Clock, Calendar, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro bar with live status */}
      <div id="top-announcement-bar" className="bg-[#1a110a] border-b border-[#c58b4e]/15 text-xs text-[#d6c7b2] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#e5a968]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open Today: 6:30 AM – 8:30 PM
            </span>
            <span className="flex items-center gap-1 text-[#b5a38e]">
              <MapPin className="w-3.5 h-3.5 text-[#c58b4e]" />
              428 Timberland Way, Arts District
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#e2d5c3] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#dfa86a]" />
              Free artisan cookie with any two specialty brews
            </span>
            <button
              id="top-bar-reserve-btn"
              onClick={onOpenReservation}
              className="text-[#dfa86a] hover:text-[#f3cca0] font-medium transition-colors underline decoration-[#c58b4e]/40"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#140d09]/95 backdrop-blur-md py-3.5 border-b border-[#c58b4e]/20 shadow-2xl shadow-black/60'
            : 'bg-[#140d09]/80 backdrop-blur-sm py-5 border-b border-[#c58b4e]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c58b4e] to-[#7f4f20] p-0.5 shadow-lg shadow-[#c58b4e]/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-[#170e09] rounded-[10px] flex items-center justify-center relative">
                <Coffee className="w-5 h-5 text-[#dfa86a] group-hover:text-[#f8deb8] transition-colors" />
                <span className="absolute -top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#dfa86a] animate-ping opacity-60"></span>
              </div>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#f5efe6] group-hover:text-[#dfa86a] transition-colors flex items-center gap-1.5">
                WILD <span className="text-[#c58b4e] font-light italic">COFFEE</span>
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#a99781] font-medium">
                Artisan Roasters & Café
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1d130c]/70 px-4 py-1.5 rounded-full border border-[#c58b4e]/15">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#c58b4e] text-[#120c08] font-semibold shadow-md shadow-[#c58b4e]/20'
                      : 'text-[#d8c8b4] hover:text-[#f8deb8] hover:bg-[#2a1b12]/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Reserve Table Button */}
            <button
              id="nav-reserve-table-btn"
              onClick={onOpenReservation}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg text-[#dfa86a] bg-[#22160e] hover:bg-[#2e1e14] border border-[#c58b4e]/30 hover:border-[#c58b4e]/60 transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              Visit Us
            </button>

            {/* Cart Trigger */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="relative p-2.5 rounded-xl bg-[#22160e] text-[#f2e6d6] hover:text-[#dfa86a] hover:bg-[#2d1e14] border border-[#c58b4e]/25 transition-all duration-200"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#c58b4e] text-[#120c08] font-bold text-xs flex items-center justify-center shadow-lg shadow-[#c58b4e]/40 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Now CTA Button */}
            <a
              id="nav-order-now-btn"
              href="#menu"
              onClick={(e) => scrollToSection(e, '#menu')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm text-[#120c08] bg-gradient-to-r from-[#dfa86a] via-[#c58b4e] to-[#a8682b] hover:from-[#e7b882] hover:to-[#b87635] shadow-lg shadow-[#c58b4e]/25 hover:shadow-[#c58b4e]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold"
            >
              Order Now
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#22160e] text-[#f2e6d6] border border-[#c58b4e]/25 hover:bg-[#2d1e14]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-30 bg-[#170e09]/98 border-b border-[#c58b4e]/30 backdrop-blur-xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2.5 rounded-lg text-base font-medium text-[#e8dac7] hover:text-[#dfa86a] hover:bg-[#281a10] transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <span className="text-xs text-[#c58b4e]/50">→</span>
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-[#c58b4e]/20 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 rounded-xl bg-[#251810] text-[#dfa86a] border border-[#c58b4e]/30 font-medium flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Visit Us / Reserve Table
                </button>
                <a
                  href="#menu"
                  onClick={(e) => scrollToSection(e, '#menu')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] text-[#120c08] font-bold text-center text-sm shadow-md"
                >
                  Order Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
