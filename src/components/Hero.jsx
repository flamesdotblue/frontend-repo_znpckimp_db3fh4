import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Spline Background - cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + lighting veil (non-interfering) */}
      <div className="pointer-events-none absolute inset-0">
        {/* ambient dark-to-transparent veil for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 dark:from-black/80 dark:via-black/40 dark:to-black/80" />
        {/* cyan / violet / magenta glows to match tech theme */}
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-15%] -left-24 h-[26rem] w-[26rem] rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_theme(colors.cyan.400)]" />
            Interactive 3D — Rotatable & Zoomable
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            Futuristic apparel in immersive 3D
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-200/90 leading-relaxed">
            Explore products on a living mesh‑gradient canvas with soft ambient and rim lighting. Scroll for parallax and motion micro‑interactions.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#catalog"
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 text-zinc-900 px-6 py-3 text-sm font-medium shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:bg-white transition-colors"
            >
              Shop collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 text-white/90 backdrop-blur-xl px-6 py-3 text-sm font-medium hover:bg-white/15"
            >
              View lookbook
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
            {[
              { label: 'Lighting optimized', value: 'True' },
              { label: 'Avg. rating', value: '4.9/5' },
              { label: 'Free returns', value: '30 days' },
            ].map((stat) => (
              <div key={stat.label} className="text-sm">
                <div className="font-semibold text-white">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
