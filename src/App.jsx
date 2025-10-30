import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxLookbook from './components/ParallaxLookbook';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <ParallaxLookbook />
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}
