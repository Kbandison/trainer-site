"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-brand to-black overflow-hidden"
    >
      {/* Animated Gradient Blur Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-25%] left-[-20%] w-[140vw] h-[120vh] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-brand via-accent to-black" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center mt-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-4 text-center">
          Train. Transform. Triumph.
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl text-center">
          Elevate your fitness with science-based coaching and a site experience
          that *wows*. For modern trainers & their dream clients.
        </p>
        <a
          href="#contact"
          className="px-10 py-4 rounded-xl font-bold text-lg shadow-xl glass-cta backdrop-blur bg-white/10 text-brand hover:bg-brand hover:text-white border border-brand/50 transition-all duration-200"
        >
          Book Your Free Session
        </a>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="animate-bounce text-accent text-2xl">↓</span>
        <span className="text-xs text-white/60 mt-1">Scroll</span>
      </div>
    </section>
  );
}
