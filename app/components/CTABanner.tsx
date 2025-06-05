"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { IconArrowRight, IconPhone, IconHelpCircle } from "@tabler/icons-react";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  // Mouse position state (relative to section)
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Framer Motion values for smooth movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 16 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 16 });

  // Mouse move handler
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    setCoords({ x, y });
  }

  return (
    <section
      ref={ref}
      className="w-full relative overflow-hidden bg-gradient-to-br from-brand/60 via-background/90 to-brand/10 py-24 flex items-center justify-center px-2 select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Animated spotlight blob (follows mouse, pulses) */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="pointer-events-none absolute w-80 h-80 rounded-full bg-brand/30 blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-2xl w-full glass-aceternity spotlight-aceternity px-6 py-12 rounded-3xl shadow-2xl border border-brand/20 backdrop-blur-md">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-brand drop-shadow mb-2">
          Ready to Transform?
        </h2>
        <p className="flex flex-col gap-2 items-center text-lg sm:text-xl text-white/80 mb-6">
          <span className="flex items-center gap-2 justify-center">
            <IconPhone size={22} className="text-accent" />
            Call or message to get started—zero pressure.
          </span>
          <span className="flex items-center gap-2 justify-center">
            <IconHelpCircle size={22} className="text-accent" />
            Questions? Check out our FAQ for details.
          </span>
        </p>
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.07,
            boxShadow:
              "0 0 48px 0 rgba(0,234,255,0.5), 0 2px 10px 0 rgba(127,0,255,0.17)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-black font-bold text-lg sm:text-xl shadow-lg transition-all hover:bg-brand hover:text-white"
        >
          Book Your Session <IconArrowRight size={28} />
        </motion.a>
        {/* Optional secondary link */}
        <a
          href="#faq"
          className="mt-4 text-accent/80 hover:text-brand underline underline-offset-4 text-base sm:text-lg transition flex items-center gap-2 justify-center"
        >
          <IconHelpCircle size={18} /> Have questions? See our FAQ
        </a>
      </div>
    </section>
  );
}
