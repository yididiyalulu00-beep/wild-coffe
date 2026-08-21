import React, { useState, useEffect } from 'react';
import { CoffeeItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { SpecialSection } from './components/SpecialSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoffeeGallery } from './components/CoffeeGallery';
import { FlavorFinderQuiz } from './components/FlavorFinderQuiz';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ReservationModal } from './components/ReservationModal';
import { Sparkles, Check, ShoppingBag, ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState<CoffeeItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'menu', 'about', 'why-us', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: CoffeeItem) => {
    const cartId = `${item.id}-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      item,
      quantity: 1,
      size: 'Regular (12oz)',
      milk: 'Whole Milk',
      sweetness: '100% Standard',
      extraShots: 0,
      unitPrice: item.price
    };

    setCart((prev) => [...prev, newItem]);
    showToast(`Added ${item.name} to your order bag!`);
  };

  const handleAddToCartCustomized = (
    item: CoffeeItem,
    size: any,
    milk: any,
    sweetness: any,
    extraShots: number
  ) => {
    let unitPrice = item.price;
    if (size === 'Large (16oz)') unitPrice += 0.80;
    if (size === 'Grand (20oz)') unitPrice += 1.40;
    if (milk.includes('+ $0.75')) unitPrice += 0.75;
    if (milk.includes('+ $0.50')) unitPrice += 0.50;
    unitPrice += extraShots * 0.80;

    const cartId = `${item.id}-${size}-${milk}-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      item,
      quantity: 1,
      size,
      milk,
      sweetness,
      extraShots,
      unitPrice
    };

    setCart((prev) => [...prev, newItem]);
    showToast(`Added customized ${item.name} ($${unitPrice.toFixed(2)})!`);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.cartId === cartId) {
            const nextQty = ci.quantity + delta;
            return nextQty > 0 ? { ...ci, quantity: nextQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCart((prev) => prev.filter((ci) => ci.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#120c08] text-[#eadfcb] selection:bg-[#c58b4e] selection:text-[#120c08] flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => scrollToElement('menu')}
          onVisitUs={() => setIsReservationOpen(true)}
        />

        {/* Featured Coffee Menu Section */}
        <FeaturedMenu
          onAddToCart={handleAddToCart}
          onQuickView={(item) => setQuickViewItem(item)}
        />

        {/* Special Craft Section: Brewed for Your Best Moments */}
        <SpecialSection
          onExploreCraft={() => scrollToElement('about')}
        />

        {/* About Wild Coffee House & Roastery */}
        <AboutSection />

        {/* Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* Interactive Coffee Matcher Quiz */}
        <FlavorFinderQuiz
          onSelectMatch={(matchedItem) => {
            handleAddToCart(matchedItem);
            setIsCartOpen(true);
          }}
        />

        {/* Coffee & Café Gallery */}
        <CoffeeGallery />

        {/* Customer Testimonials & Reviews */}
        <Testimonials />

        {/* Contact, Opening Hours & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cart Order Slide-Over Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick View Details & Customization Modal */}
      <QuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCartCustomized={handleAddToCartCustomized}
      />

      {/* Visit Us / Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Floating Bottom Quick Order Bar for Mobile */}
      {totalItemCount > 0 && !isCartOpen && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 inset-x-4 sm:hidden z-30"
        >
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#dfa86a] via-[#c58b4e] to-[#ab682b] text-[#120c08] font-bold text-sm shadow-2xl flex items-center justify-between border border-[#eed4b6]/40"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>View Order ({totalItemCount})</span>
            </div>
            <span className="font-mono font-extrabold">
              ${cart.reduce((s, i) => s + i.unitPrice * i.quantity, 0).toFixed(2)}
            </span>
          </button>
        </motion.div>
      )}

      {/* Floating Notification Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#1c120a] border border-[#c58b4e]/50 text-[#fbf6ee] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md"
          >
            <div className="w-7 h-7 rounded-full bg-[#2a1b12] border border-[#dfa86a]/40 text-[#dfa86a] flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
