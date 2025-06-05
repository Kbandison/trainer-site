"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Helper for smooth scroll
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const links = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FaGithub size={22} />,
    href: "https://github.com/your-username",
    label: "GitHub",
    gradient: "from-[#08FDD8] via-[#7F00FF] to-[#F649A3]",
  },
  {
    icon: <FaLinkedin size={22} />,
    href: "https://linkedin.com/in/your-username",
    label: "LinkedIn",
    gradient: "from-[#0077B5] via-[#08FDD8] to-[#7F00FF]",
  },
  {
    icon: <FaEnvelope size={22} />,
    href: "mailto:your@email.com",
    label: "Email",
    gradient: "from-[#ffe066] via-[#F649A3] to-[#7F00FF]",
  },
];

export default function Footer() {
  // For hiding scroll-to-top on mobile until user scrolls
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 160);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-black/70 via-background/40 to-transparent relative">
      {/* Glassy inner footer sticks to bottom */}
      <div
        className="glass-aceternity spotlight-aceternity !rounded-none shadow-xl border border-brand/20
          px-8 py-6 w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4
          min-h-[110px] md:min-h-[80px]"
        style={{
          position: "relative",
          marginTop: "auto",
        }}
      >
        {/* Socials with fancy gradients */}
        <div className="flex gap-4 mb-2 md:mb-0">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{
                scale: 1.25,
                rotate: [0, -10, 10, 0],
                filter:
                  "drop-shadow(0 0 10px #08FDD8) drop-shadow(0 0 24px #7F00FF)",
              }}
              className="text-accent transition-all duration-200"
              style={{
                background: `linear-gradient(90deg, ${s.gradient.replace(
                  /from-|\sto-|\svia-/g,
                  ""
                )})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "flex",
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
        {/* Quick links */}
        <nav className="flex gap-6 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-accent text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Copyright */}
        <div className="text-xs text-white/50 text-center md:text-right font-mono">
          © {new Date().getFullYear()} Kevin. All rights reserved.
        </div>

        {/* Scroll to top button */}
        <motion.button
          initial={false}
          animate={showTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.4, type: "tween" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 bg-brand/80 hover:bg-accent text-white rounded-full shadow-2xl w-12 h-12 flex items-center justify-center border-2 border-accent/40 transition-all
            backdrop-blur focus:outline-none"
          style={{ pointerEvents: showTop ? "auto" : "none" }}
        >
          <motion.svg
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: -15 }}
            transition={{ duration: 0.22 }}
          >
            <motion.path
              d="M12 19V5"
              strokeDasharray="14"
              strokeDashoffset="0"
              initial={{ pathLength: 0.7 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.44 }}
            />
            <polyline points="5 12 12 5 19 12" />
          </motion.svg>
        </motion.button>
      </div>
    </footer>
  );
}
