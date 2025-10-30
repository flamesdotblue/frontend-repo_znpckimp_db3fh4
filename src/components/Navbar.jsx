import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-zinc-700 hover:text-black transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400" />
            <span className="text-lg font-semibold tracking-tight">VogueFlow</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#new">New</NavLink>
            <NavLink href="#collection">Women</NavLink>
            <NavLink href="#collection">Men</NavLink>
            <NavLink href="#collection">Accessories</NavLink>
            <NavLink href="#collection">Sale</NavLink>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-zinc-100">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-zinc-100">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-zinc-100">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-[10px] grid place-items-center rounded-full bg-black text-white">2</span>
            </button>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-full hover:bg-zinc-100" aria-label="Open Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Promo bar */}
      <div className="hidden md:block border-t border-zinc-200 bg-gradient-to-r from-white via-white to-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-9 flex items-center justify-between text-xs text-zinc-700">
            <span>Free shipping on orders over $100</span>
            <span>Extended returns — 30 days</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-white"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <a href="#" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400" />
                <span className="text-lg font-semibold tracking-tight">VogueFlow</span>
              </a>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-zinc-100" aria-label="Close Menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="px-6 py-6 flex flex-col gap-4"
            >
              <NavLink href="#new">New</NavLink>
              <NavLink href="#collection">Women</NavLink>
              <NavLink href="#collection">Men</NavLink>
              <NavLink href="#collection">Accessories</NavLink>
              <NavLink href="#collection">Sale</NavLink>
              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-2 rounded-full bg-black text-white text-sm">Sign in</button>
                <button className="px-4 py-2 rounded-full border border-zinc-300 text-sm">Cart</button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
