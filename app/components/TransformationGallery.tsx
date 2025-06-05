"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const transformations = [
  {
    name: "Ava",
    before:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80",
    after:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
    desc: "Ava lost 20 lbs and gained confidence with 1-on-1 coaching.",
  },
  {
    name: "James",
    before:
      "https://images.unsplash.com/photo-1519864600265-abb224a7b5b4?auto=format&fit=crop&w=400&q=80",
    after:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    desc: "James doubled his strength in 6 months. Online coaching, real results.",
  },
  {
    name: "Morgan",
    before:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    after:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    desc: "Morgan went from couch to 5k in 8 weeks—group training made it fun.",
  },
  {
    name: "Adrian",
    before:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    after:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    desc: "Morgan went from couch to 5k in 8 weeks—group training made it fun.",
  },
];

export default function TransformationGallery() {
  return (
    <section
      className="w-full py-24 bg-gradient-to-br from-black via-background to-brand/30 flex flex-col items-center"
      id="gallery"
    >
      <h2 className="text-5xl font-extrabold text-brand mb-16 drop-shadow text-center">
        Transformation Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full px-12">
        {transformations.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.12,
              type: "tween",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -14,
              boxShadow:
                "0 12px 64px 0 rgba(0,234,255,0.25), 0 6px 16px 0 rgba(127,0,255,0.22)",
              scale: 1.04,
              transition: { duration: 0.4, type: "tween" },
            }}
            className="glass-aceternity spotlight-aceternity shadow-2xl p-10 border border-brand/20 flex flex-col items-center cursor-pointer transition-all duration-300 h-[480px] min-h-[420px]"
          >
            <div className="flex w-full gap-4 mb-6">
              <div className="relative w-1/2 aspect-[3/4] rounded-xl overflow-hidden border-4 border-red-500">
                <Image
                  src={t.before}
                  alt={`Before: ${t.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 220px"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                  Before
                </span>
              </div>
              <div className="relative w-1/2 aspect-[3/4] rounded-xl overflow-hidden border-4 border-green-500">
                <Image
                  src={t.after}
                  alt={`After: ${t.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 220px"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                  After
                </span>
              </div>
            </div>
            <span className="font-bold text-brand text-2xl mb-2">{t.name}</span>
            <p className="text-white/90 text-lg text-center">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
