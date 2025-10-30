import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const ALL_PRODUCTS = [
  { id: 1, title: 'Aero Ripstop Jacket', price: 168, image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop', tag: 'Bestseller', color: 'Graphite', gender: 'Men', category: 'Outerwear' },
  { id: 2, title: 'Everyday Relaxed Tee', price: 38, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop', tag: 'New', color: 'Bone', gender: 'Women', category: 'Tops' },
  { id: 3, title: 'Nimbus Utility Pants', price: 98, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop', tag: 'Limited', color: 'Olive', gender: 'Men', category: 'Bottoms' },
  { id: 4, title: 'Circuit Running Shoes', price: 140, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop', color: 'Vapor', gender: 'Women', category: 'Footwear' },
  { id: 5, title: 'Halo Nylon Cap', price: 32, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop', color: 'Charcoal', gender: 'Unisex', category: 'Accessories' },
  { id: 6, title: 'Vanta Puffer Vest', price: 126, image: 'https://images.unsplash.com/photo-1638984849715-8984a7f95ee1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvJTIwUmlwc3RvcCUyMEphY2tldHxlbnwwfDB8fHwxNzYxODAzNjc1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', color: 'Vanta', gender: 'Men', category: 'Outerwear' },
];

const TABS = [
  { key: 'All', label: 'All' },
  { key: 'Women', label: 'Women' },
  { key: 'Men', label: 'Men' },
  { key: 'Accessories', label: 'Accessories' },
];

function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.25)] transition-shadow"
    >
      <a href="#" className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.tag && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white px-2 py-1 text-xs font-medium shadow">{product.tag}</span>
          )}
          <button aria-label="Wishlist" className="absolute right-3 top-3 grid place-items-center h-9 w-9 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 shadow hover:bg-white dark:hover:bg-zinc-800">
            <Heart className="h-4 w-4" />
          </button>
          {/* hover glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]" />
          </div>
        </div>
      </a>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight text-zinc-900 dark:text-white">{product.title}</h3>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">${product.price}</div>
        </div>
        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{product.gender} · {product.category}</p>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400" />
          ))}
          <span className="ml-2 text-xs text-zinc-600 dark:text-zinc-400">(128)</span>
        </div>
        <button onClick={() => onAdd(product)} className="mt-4 w-full rounded-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white hover:opacity-95">
          Add to cart
        </button>
      </div>
    </motion.div>
  );
}

export default function Catalog({ onAddToCart }) {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active === 'All') return ALL_PRODUCTS;
    if (active === 'Accessories') return ALL_PRODUCTS.filter(p => p.category === 'Accessories');
    return ALL_PRODUCTS.filter(p => p.gender === active);
  }, [active]);

  return (
    <section id="catalog" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 -left-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Explore Apparel</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Switch categories with animated tabs. Smooth filtering with motion.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-sm font-medium underline underline-offset-4 text-zinc-800 dark:text-zinc-200">View all</a>
        </div>

        {/* Motion Tabs */}
        <div className="relative inline-flex rounded-full bg-zinc-100 dark:bg-zinc-800 p-1 border border-zinc-200 dark:border-zinc-700">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative z-10 px-4 sm:px-5 py-2 text-sm font-medium rounded-full transition-colors ${active === tab.key ? 'text-black dark:text-white' : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'}`}
            >
              {active === tab.key && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 z-[-1] rounded-full bg-white dark:bg-zinc-900 shadow"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
