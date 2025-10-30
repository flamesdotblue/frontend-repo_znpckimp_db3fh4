import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar({ onToggleCart, cartCount = 0, dark = false, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/70 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 via-violet-500 to-fuchsia-500" />
            <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">VogueFlow</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#new">New</NavLink>
            <NavLink href="#catalog">Women</NavLink>
            <NavLink href="#catalog">Men</NavLink>
            <NavLink href="#catalog">Accessories</NavLink>
            <NavLink href="#catalog">Sale</NavLink>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Search className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
            </button>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <User className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
            </button>
            <button onClick={onToggleCart} aria-label="Cart" className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <ShoppingBag className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 text-[10px] grid place-items-center rounded-full bg-gradient-to-tr from-cyan-500 to-fuchsia-600 text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
              {dark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-zinc-800" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <button onClick={onToggleCart} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Cart">
              <ShoppingBag className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
            </button>
            <button onClick={() => setOpen(true)} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Open Menu">
              <Menu className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Promo bar */}
      <div className="hidden md:block border-t border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-white via-white to-white/80 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-9 flex items-center justify-between text-xs text-zinc-700 dark:text-zinc-300">
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
            className="md:hidden fixed inset-0 z-50 bg-white dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
              <a href="#" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 via-violet-500 to-fuchsia-500" />
                <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">VogueFlow</span>
              </a>
              <div className="flex items-center gap-2">
                <button onClick={onToggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  {dark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-zinc-200" />}
                </button>
                <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Close Menu">
                  <X className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
                </button>
              </div>
            </div>
            <motion.nav
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="px-6 py-6 flex flex-col gap-4"
            >
              <NavLink href="#new">New</NavLink>
              <NavLink href="#catalog">Women</NavLink>
              <NavLink href="#catalog">Men</NavLink>
              <NavLink href="#catalog">Accessories</NavLink>
              <NavLink href="#catalog">Sale</NavLink>
              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-2 rounded-full bg-zinc-900 text-white text-sm dark:bg-white dark:text-zinc-900">Sign in</button>
                <button onClick={onToggleCart} className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm">Cart ({cartCount})</button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
