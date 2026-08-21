import React, { useState } from 'react';
import { CartItem, CoffeeItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Check, Sparkles, Coffee, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    pickupTime: 'ASAP (10-15 mins)',
    orderNotes: ''
  });
  const [orderReceipt, setOrderReceipt] = useState<any>(null);

  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const tax = subtotal * 0.085;
  const tip = subtotal * (tipPercent / 100);
  const total = subtotal + tax + tip;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerDetails.name) return;

    const receipt = {
      orderNumber: `#WC-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: customerDetails.name,
      pickupTime: customerDetails.pickupTime,
      items: [...cart],
      total: total,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setOrderReceipt(receipt);
    setCheckoutStep('success');
    onClearCart();
  };

  const resetOrder = () => {
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-[#180f0a] border-l border-[#c58b4e]/30 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#c58b4e]/20 flex items-center justify-between bg-[#150d09]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2b1b11] border border-[#c58b4e]/30 flex items-center justify-center text-[#dfa86a]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#fbf6ee]">
                      Your Coffee Order
                    </h3>
                    <p className="text-xs text-[#a99781]">
                      {cart.length === 0 ? 'Empty bag' : `${cart.reduce((s, i) => s + i.quantity, 0)} items selected`}
                    </p>
                  </div>
                </div>

                <button
                  id="close-order-drawer-btn"
                  onClick={onClose}
                  className="p-2 rounded-xl text-[#a4917b] hover:text-[#fbf6ee] hover:bg-[#25170f] transition-colors"
                  aria-label="Close cart drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* View 1: Cart Items */}
                {checkoutStep === 'cart' && (
                  <>
                    {cart.length === 0 ? (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 rounded-full bg-[#24170f] border border-[#c58b4e]/20 flex items-center justify-center mx-auto mb-4 text-[#c58b4e]">
                          <Coffee className="w-8 h-8" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-[#fbf6ee] mb-1">
                          Your order bag is empty
                        </h4>
                        <p className="text-xs text-[#a99781] max-w-xs mx-auto mb-6">
                          Explore our specialty roasts, iced cold brews, and bakery treats to begin.
                        </p>
                        <button
                          onClick={onClose}
                          className="px-6 py-2.5 rounded-xl bg-[#c58b4e] text-[#120c08] font-bold text-xs shadow-md"
                        >
                          Browse Coffee Menu
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {cart.map((cartItem) => (
                          <div
                            key={cartItem.cartId}
                            className="p-4 rounded-2xl bg-[#1f140d] border border-[#c58b4e]/20 flex gap-3.5"
                          >
                            <img
                              src={cartItem.item.image}
                              alt={cartItem.item.name}
                              className="w-16 h-16 rounded-xl object-cover border border-[#c58b4e]/30 shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-serif text-sm font-bold text-[#fbf6ee] truncate">
                                  {cartItem.item.name}
                                </h4>
                                <span className="text-sm font-bold text-[#dfa86a]">
                                  ${(cartItem.unitPrice * cartItem.quantity).toFixed(2)}
                                </span>
                              </div>

                              <p className="text-[11px] text-[#b8a694] mt-0.5">
                                {cartItem.size} • {cartItem.milk}
                              </p>
                              {cartItem.extraShots > 0 && (
                                <p className="text-[10px] text-[#dfa86a]">
                                  +{cartItem.extraShots} Extra Espresso Shot
                                </p>
                              )}

                              {/* Quantity and Remove */}
                              <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#c58b4e]/10">
                                <div className="flex items-center gap-2 bg-[#170e08] px-2 py-1 rounded-lg border border-[#c58b4e]/20">
                                  <button
                                    onClick={() => onUpdateQuantity(cartItem.cartId, -1)}
                                    className="p-0.5 text-[#a4917b] hover:text-[#dfa86a]"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="text-xs font-bold text-[#fbf6ee] w-4 text-center">
                                    {cartItem.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQuantity(cartItem.cartId, 1)}
                                    className="p-0.5 text-[#a4917b] hover:text-[#dfa86a]"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>

                                <button
                                  onClick={() => onRemoveItem(cartItem.cartId)}
                                  className="text-xs text-red-400/80 hover:text-red-400 p-1 flex items-center gap-1"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* View 2: Checkout Form */}
                {checkoutStep === 'checkout' && (
                  <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#23170f] border border-[#c58b4e]/30">
                      <h4 className="font-serif text-base font-bold text-[#fbf6ee] mb-1">
                        Pickup & Barista Details
                      </h4>
                      <p className="text-xs text-[#a99781]">
                        We will have your fresh drink handcrafted at the express counter.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">
                        Name for Cup / Order <span className="text-[#dfa86a]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel K."
                        value={customerDetails.name}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">
                        Mobile Phone for SMS Alert
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={customerDetails.phone}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">
                        Target Pickup Time
                      </label>
                      <select
                        value={customerDetails.pickupTime}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, pickupTime: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                      >
                        <option value="ASAP (10-15 mins)">ASAP (10–15 mins)</option>
                        <option value="In 30 minutes">In 30 minutes</option>
                        <option value="In 45 minutes">In 45 minutes</option>
                        <option value="In 1 hour">In 1 hour</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d4c3b0] mb-1">
                        Barista Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Extra hot, double cup, napkin please"
                        value={customerDetails.orderNotes}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, orderNotes: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#24170f] border border-[#c58b4e]/30 text-sm text-[#f5efe6] focus:outline-none focus:border-[#dfa86a]"
                      />
                    </div>

                    {/* Tip Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#d4c3b0] mb-1.5">
                        Barista Craft Tip
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[15, 18, 20, 25].map((pct) => (
                          <button
                            key={pct}
                            type="button"
                            onClick={() => setTipPercent(pct)}
                            className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                              tipPercent === pct
                                ? 'bg-[#c58b4e] text-[#120c08] border-[#dfa86a]'
                                : 'bg-[#20140e] text-[#c2b09c] border-[#c58b4e]/20'
                            }`}
                          >
                            {pct}%
                          </button>
                        ))}
                      </div>
                    </div>
                  </form>
                )}

                {/* View 3: Order Confirmation Receipt */}
                {checkoutStep === 'success' && orderReceipt && (
                  <div className="text-center py-4 space-y-5 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#dfa86a] font-bold">
                        Order Received
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-[#fbf6ee] mt-1">
                        We're Grinding & Pulling!
                      </h4>
                      <p className="text-xs text-[#a99781] mt-1">
                        Order <span className="text-white font-mono font-bold">{orderReceipt.orderNumber}</span> for {orderReceipt.customerName}
                      </p>
                    </div>

                    {/* Receipt Card */}
                    <div className="p-5 rounded-2xl bg-[#1f140d] border border-[#c58b4e]/30 text-left space-y-3 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#c58b4e]/15">
                        <span className="text-[#a99781]">Ready by</span>
                        <span className="font-bold text-[#dfa86a] flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {orderReceipt.pickupTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pb-2 border-b border-[#c58b4e]/15">
                        <span className="text-[#a99781]">Pickup Location</span>
                        <span className="text-[#f5efe6] font-medium">428 Timberland Bar</span>
                      </div>

                      <div className="flex items-center justify-between pt-1 text-sm font-bold text-[#fbf6ee]">
                        <span>Total Charged</span>
                        <span className="text-[#dfa86a] font-mono">${orderReceipt.total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={resetOrder}
                      className="w-full py-3 rounded-xl bg-[#c58b4e] text-[#120c08] font-bold text-xs shadow-md"
                    >
                      Done & Close
                    </button>
                  </div>
                )}

              </div>

              {/* Drawer Footer / Subtotal Bar */}
              {cart.length > 0 && checkoutStep === 'cart' && (
                <div className="p-6 border-t border-[#c58b4e]/20 bg-[#150d09] space-y-4">
                  <div className="space-y-1.5 text-xs text-[#a99781]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-[#f5efe6] font-mono">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Tax (8.5%)</span>
                      <span className="text-[#f5efe6] font-mono">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-[#fbf6ee] pt-2 border-t border-[#c58b4e]/15">
                      <span>Total</span>
                      <span className="text-[#dfa86a] font-mono font-bold">${(subtotal + tax).toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    id="drawer-proceed-checkout-btn"
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfa86a] via-[#c58b4e] to-[#ab682b] hover:from-[#ecc292] hover:to-[#b87635] text-[#120c08] font-bold text-sm shadow-xl shadow-[#c58b4e]/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <span>Proceed to Express Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {checkoutStep === 'checkout' && (
                <div className="p-6 border-t border-[#c58b4e]/20 bg-[#150d09] space-y-3">
                  <div className="flex justify-between text-sm font-bold text-[#fbf6ee]">
                    <span>Total Due (incl. Tip)</span>
                    <span className="text-[#dfa86a] font-mono text-base">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="w-1/3 py-3 rounded-xl bg-[#25170f] text-[#d0beab] font-semibold text-xs border border-[#c58b4e]/30"
                    >
                      Back to Bag
                    </button>
                    <button
                      type="submit"
                      form="checkout-form"
                      id="submit-pickup-order-btn"
                      className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-[#dfa86a] to-[#c58b4e] text-[#120c08] font-bold text-xs shadow-lg"
                    >
                      Confirm Order (${total.toFixed(2)})
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
