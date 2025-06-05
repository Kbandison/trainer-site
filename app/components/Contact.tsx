"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// SVG checkmark with glow
function AnimatedCheck() {
  return (
    <motion.svg
      initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.15 }}
      viewBox="0 0 48 48"
      fill="none"
      className="mx-auto mb-4"
      width={64}
      height={64}
    >
      <circle cx="24" cy="24" r="24" fill="url(#glow)" />
      <motion.path
        d="M14 26l7 7 13-13"
        stroke="#06FFC6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      />
      <defs>
        <radialGradient
          id="glow"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(24 24) scale(24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08FDD8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#18192e" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}

// Mini confetti burst (simple, performant)
function ConfettiBurst() {
  // Use effect to animate after mount
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* 10 random confetti dots (customize as needed) */}
      {[...Array(14)].map((_, i) => {
        const left = Math.random() * 90 + 5;
        const top = Math.random() * 80 + 5;
        const size = Math.random() * 11 + 8;
        const colors = ["#08FDD8", "#7F00FF", "#ffe066", "#F649A3", "#06FFC6"];
        const color = colors[i % colors.length];
        const delay = 0.12 + Math.random() * 0.15;
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0.7, y: 0 }}
            animate={{ scale: 1, opacity: 0, y: -32 - Math.random() * 50 }}
            transition={{ duration: 0.9, delay }}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: "9999px",
              background: color,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </motion.div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // For esc key close
  useEffect(() => {
    if (!modalOpen) return;
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgbneyg";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setModalOpen(true);
        form.reset();
      } else {
        alert("Sorry, something went wrong. Please try again later.");
      }
    } catch (err) {
      alert("Sorry, there was a network error. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <section
      className="w-full py-24 flex flex-col items-center bg-gradient-to-br from-[#0b0b12] via-[#18152b] to-[#222043] px-4"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="glass-aceternity spotlight-aceternity rounded-2xl shadow-2xl p-8 border border-brand/30 w-full max-w-md mx-auto relative"
      >
        <h2 className="text-3xl font-bold text-brand mb-4 text-center drop-shadow">
          Let’s Connect
        </h2>
        <p className="text-white/80 mb-6 text-center">
          Have a question? Ready to start your transformation? Fill out the form
          and I&apos;ll get back to you ASAP!
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <label htmlFor="name" className="text-white/90 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="rounded-lg px-4 py-2 bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-accent border border-accent/30"
            autoComplete="name"
            disabled={loading}
          />

          <label htmlFor="email" className="text-white/90 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="rounded-lg px-4 py-2 bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-accent border border-accent/30"
            autoComplete="email"
            disabled={loading}
          />

          <label htmlFor="phone" className="text-white/90 font-semibold">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="rounded-lg px-4 py-2 bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-accent border border-accent/30"
            autoComplete="tel"
            disabled={loading}
          />

          <label htmlFor="message" className="text-white/90 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            className="rounded-lg px-4 py-2 bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-accent border border-accent/30 resize-none"
            disabled={loading}
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 16px 2px rgba(0,234,255,0.45)",
              transition: { duration: 0.25 },
            }}
            className="mt-4 px-6 py-2 rounded-full bg-accent text-black font-bold text-lg transition-all duration-200 shadow-lg hover:bg-brand hover:text-white disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            tabIndex={-1}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.33, type: "tween" }}
              className="glass-aceternity spotlight-aceternity rounded-2xl shadow-2xl p-8 border border-accent/50 w-full max-w-xs text-center relative overflow-visible"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal
              tabIndex={0}
            >
              <AnimatedCheck />
              <span className="text-2xl font-bold text-brand mb-2 block">
                Thank you!
              </span>
              <p className="text-white/90 mb-4">
                Your message has been received. I’ll be in touch soon!
              </p>
              <motion.button
                whileHover={{ scale: 1.07 }}
                className="px-5 py-2 rounded-full bg-accent text-black font-bold shadow hover:bg-brand hover:text-white transition-all duration-200"
                onClick={() => setModalOpen(false)}
                tabIndex={0}
              >
                Close
              </motion.button>
              {/* Confetti overlay */}
              <ConfettiBurst />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
