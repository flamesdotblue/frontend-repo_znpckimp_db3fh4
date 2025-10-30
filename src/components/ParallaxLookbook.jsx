import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function LookPanel({ image, title, subtitle, align = 'left' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={ref} className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden rounded-3xl">
      <motion.img
        src={image}
        alt={title}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`relative z-10 h-full flex items-end ${align === 'left' ? 'justify-start' : 'justify-end'}`}
      >
        <div className="m-8 sm:m-12 max-w-lg">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] sm:text-xs text-white/90 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_theme(colors.fuchsia.400)]" />
            Editorial Lookbook
          </div>
          <h3 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{title}</h3>
          <p className="mt-2 text-sm sm:text-base text-white/80">{subtitle}</p>
        </div>
      </motion.div>
    </section>
  );
}

export default function ParallaxLookbook() {
  const panels = [
    {
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop',
      title: 'City Circuit',
      subtitle: 'Technical layers with metallic accents built for the urban rush.',
      align: 'left',
    },
    {
      image:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop',
      title: 'Chromatic Minimal',
      subtitle: 'Monochrome silhouettes with soft gradient pops and precise lines.',
      align: 'right',
    },
    {
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2000&auto=format&fit=crop',
      title: 'Neon Pulse',
      subtitle: 'Dark fabrics lit by fuchsia highlights and reflective trims.',
      align: 'left',
    },
  ];

  return (
    <section id="lookbook" className="relative bg-zinc-950 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/15 blur-3xl" />
        <div className="absolute bottom-[-15%] -left-24 h-[26rem] w-[26rem] rounded-full bg-violet-400/15 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Parallax Lookbook</h2>
            <p className="mt-2 text-zinc-300">Immersive editorial panels with depth and motion.</p>
          </div>
          <a href="#collection" className="hidden sm:inline-block text-sm font-medium text-fuchsia-300 hover:text-white transition-colors">Shop the looks</a>
        </div>
        <div className="space-y-8 sm:space-y-12">
          {panels.map((p, idx) => (
            <LookPanel key={idx} image={p.image} title={p.title} subtitle={p.subtitle} align={p.align} />
          ))}
        </div>
      </div>
    </section>
  );
}
