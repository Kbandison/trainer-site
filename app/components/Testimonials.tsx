"use client";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  IconStar,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const testimonials = [
  {
    name: "Sarah T.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
    text: "Kevin's program changed my life. The site made booking and tracking easy. Highly recommended!",
    rating: 5,
    badge: "Verified Client",
  },
  {
    name: "Miguel R.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
    text: "Super modern and mobile-friendly. My clients love it, and so do I. Kevin delivered fast and with style!",
    rating: 5,
    badge: "Verified Client",
  },
  {
    name: "Lisa P.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
    text: "Booking online was a breeze and I hit my goals. Love the design and attention to detail!",
    rating: 5,
    badge: "Verified Client",
  },
  {
    name: "Ravi S.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
    text: "The transformation gallery convinced me. Kevin’s approach is on another level.",
    rating: 4,
    badge: "Verified Client",
  },
  {
    name: "Julia V.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
    text: "Never had a site this easy to use. I got more clients and less hassle. 10/10.",
    rating: 5,
    badge: "Verified Client",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Auto-advance every 4 seconds, pause on hover/focus
  useEffect(() => {
    if (!instanceRef.current) return;
    if (pause) return;
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [pause, instanceRef]);

  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-32 lg:py-40 bg-gradient-to-br from-[#0b0b12] via-[#18152b] to-[#222043] flex flex-col items-center gradient-overlay"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand mb-10 sm:mb-16 lg:mb-20 drop-shadow text-readable">
        What Clients Say
      </h2>
      <div className="w-full flex justify-center px-2 sm:px-8">
        <div
          ref={sliderRef}
          className="keen-slider w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
          style={{ overflow: "visible" }}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          onFocus={() => setPause(true)}
          onBlur={() => setPause(false)}
          tabIndex={0}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="keen-slider__slide flex flex-col items-center glass-aceternity spotlight-aceternity rounded-2xl shadow-2xl p-7 sm:p-12 lg:p-24 border border-brand/20 min-h-[260px] sm:min-h-[340px]"
              style={{ minWidth: "360px", maxWidth: "600px", margin: "0 auto" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <div className="mb-3">
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-accent shadow-lg">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-brand mb-1">
                {t.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <IconStar
                    key={i}
                    size={24}
                    className="text-accent drop-shadow"
                    fill="currentColor"
                  />
                ))}
                {t.rating < 5 &&
                  Array.from({ length: 5 - t.rating }).map((_, i) => (
                    <IconStar
                      key={t.rating + i}
                      size={24}
                      className="text-gray-600"
                    />
                  ))}
                <span className="flex items-center gap-1 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full ml-2">
                  <IconCheck size={20} /> {t.badge}
                </span>
              </div>
              <p className="text-white/90 text-center mb-3 text-lg md:text-2xl">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {/* Prev Arrow */}
        <button
          className="rounded-full p-2 bg-brand/30 hover:bg-brand focus:bg-brand text-accent hover:text-white transition"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Previous testimonial"
        >
          <IconChevronLeft size={22} />
        </button>
        {/* Dots */}
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? "bg-accent" : "bg-gray-500/40"
            } transition-all duration-300`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
        {/* Next Arrow */}
        <button
          className="rounded-full p-2 bg-brand/30 hover:bg-brand focus:bg-brand text-accent hover:text-white transition"
          onClick={() => instanceRef.current?.next()}
          aria-label="Next testimonial"
        >
          <IconChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
