import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function CartDrawer({ open, onClose, items = [] }) {
  const total = items.reduce((sum, it) => sum + it.price * (it.qty || 1), 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.aside
            className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-md bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Your cart</h3>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Close cart">
                <X className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Your cart is empty.</div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-3"
                  >
                    <img src={item.image} alt={item.title} className="h-16 w-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</div>
                        <div className="text-sm text-zinc-900 dark:text-zinc-100">${item.price}</div>
                      </div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">Qty {item.qty || 1}</div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-700 dark:text-zinc-300">Subtotal</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">${total.toFixed(2)}</span>
              </div>
              <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-medium text-white hover:opacity-95">
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
