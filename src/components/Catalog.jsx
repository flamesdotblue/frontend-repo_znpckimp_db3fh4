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

function ProductCard({ product }) {
  return (
    <motion.a
      href="#"
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium shadow">{product.tag}</span>
        )}
        <button aria-label="Wishlist" className="absolute right-3 top-3 grid place-items-center h-9 w-9 rounded-full bg-white/90 text-zinc-800 shadow hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight">{product.title}</h3>
          <div className="text-sm font-semibold">${product.price}</div>
        </div>
        <p className="mt-1 text-xs text-zinc-600">{product.gender} · {product.category}</p>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400" />
          ))}
          <span className="ml-2 text-xs text-zinc-600">(128)</span>
        </div>
        <button className="mt-4 w-full rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">Add to cart</button>
      </div>
    </motion.a>
  );
}

export default function Catalog() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    if (active === 'All') return ALL_PRODUCTS;
    if (active === 'Accessories') return ALL_PRODUCTS.filter(p => p.category === 'Accessories');
    return ALL_PRODUCTS.filter(p => p.gender === active);
  }, [active]);

  return (
    <section id="catalog" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-zinc-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute bottom-0 -left-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Explore Catalog</h2>
            <p className="mt-2 text-zinc-600">Switch categories with animated tabs. Smooth filtering with motion.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-sm font-medium underline underline-offset-4">View all</a>
        </div>

        {/* Motion Tabs */}
        <div className="relative inline-flex rounded-full bg-zinc-100 p-1 border border-zinc-200">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative z-10 px-4 sm:px-5 py-2 text-sm font-medium rounded-full transition-colors ${active === tab.key ? 'text-black' : 'text-zinc-600 hover:text-black'}`}
            >
              {active === tab.key && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 z-[-1] rounded-full bg-white shadow"
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
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
