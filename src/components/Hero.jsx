import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil (non-interfering) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Fresh Drop: Spring/Summer 2025
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Elevate your everyday with statement essentials
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed">
            Premium fabrics, precision cuts, and colorways you can’t ignore. Designed
            for movement. Made to turn heads.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-lg shadow-black/10 hover:shadow-black/20 transition-shadow"
            >
              Shop collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#new"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium"
            >
              Explore new in
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
            {[
              { label: 'Organic cotton', value: '100%' },
              { label: 'Avg. rating', value: '4.9/5' },
              { label: 'Free returns', value: '30 days' },
            ].map((stat) => (
              <div key={stat.label} className="text-sm">
                <div className="font-semibold">{stat.value}</div>
                <div className="text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
