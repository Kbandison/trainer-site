"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax effect for image (optional)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-24 md:py-32 bg-gradient-to-br from-black to-brand/40 px-6 gap-12 md:gap-20"
    >
      {/* Parallax/animated Image */}
      <motion.div
        style={{ y }}
        className="w-full md:w-1/2 max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl glass-cta"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80"
          alt="About Kevin"
          width={600}
          height={800}
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-brand mb-4 drop-shadow">
          About Kevin
        </h2>
        <p className="text-lg text-white/90 mb-4 max-w-xl leading-relaxed">
          <span className="font-bold text-accent">Hey, I’m Kevin</span>—your
          code-slinging, fitness-obsessed web architect. I believe in building
          both strong bodies and strong brands. My goal? Empower personal
          trainers and gyms with sites that convert and inspire—because modern
          clients expect more than just a schedule page.
        </p>
        <ul className="text-white/80 text-base mb-6 list-disc list-inside space-y-1">
          <li>Modern, high-converting site designs</li>
          <li>Mobile-first, lightning-fast experience</li>
          <li>Animations & micro-interactions for premium feel</li>
        </ul>
        <a
          href="#services"
          className="mt-2 inline-block px-8 py-3 rounded-xl font-bold bg-brand text-white shadow-lg hover:bg-accent transition"
        >
          See My Services
        </a>
      </motion.div>
    </section>
  );
}
