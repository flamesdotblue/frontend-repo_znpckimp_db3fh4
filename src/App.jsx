import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [dark, setDark] = useState(false);

  // Theme management
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setDark(stored === 'dark');
    } else {
      setDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  // Cart actions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + (i.qty || 1), 0), [cart]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar
        onToggleCart={() => setCartOpen((s) => !s)}
        cartCount={cartCount}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />
      <main className="pt-24">
        <Hero />
        <Catalog onAddToCart={(p) => { addToCart(p); setCartOpen(true); }} />
      </main>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} />
    </div>
  );
}
